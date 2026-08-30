/**
 * Aplica un fichero de db/migrations/ contra Neon.
 *
 *   node db/migrate.mjs db/migrations/001-aeo-citability.sql
 *
 * Las migraciones se escriben idempotentes (add column if not exists, drop
 * constraint if exists antes de add), así que volver a lanzarlas es seguro.
 * Por eso no hay tabla de versiones: el coste de mantenerla no compensa para
 * un blog de una tabla.
 */
import { readFileSync } from 'node:fs';
import { neon } from '@neondatabase/serverless';

function readEnv(file = '.env') {
  // Este script corre fuera de Vite, así que el .env se lee a mano.
  return Object.fromEntries(
    readFileSync(file, 'utf8')
      .split('\n')
      .filter((line) => line.trim() && !line.trim().startsWith('#'))
      .map((line) => {
        const i = line.indexOf('=');
        return [line.slice(0, i).trim(), line.slice(i + 1).trim().replace(/^["']|["']$/g, '')];
      }),
  );
}

/**
 * Trocea el fichero en sentencias.
 *
 * El driver http de Neon no acepta varias sentencias por llamada. Cortar por
 * ';' a secas partiría por la mitad el cuerpo $$ ... $$ de una función
 * plpgsql, así que se lleva la cuenta de si estamos dentro de uno.
 */
function splitStatements(sql) {
  const chunks = [];
  let buffer = '';
  let insideDollarQuote = false;

  for (const line of sql.split('\n')) {
    const dollars = line.split('$$').length - 1;
    if (dollars % 2 === 1) insideDollarQuote = !insideDollarQuote;
    buffer += line + '\n';
    if (!insideDollarQuote && line.trimEnd().endsWith(';')) {
      chunks.push(buffer);
      buffer = '';
    }
  }
  if (buffer.trim()) chunks.push(buffer);

  return chunks
    .map((chunk) =>
      chunk
        .split('\n')
        .filter((line) => !line.trim().startsWith('--'))
        .join('\n')
        .trim(),
    )
    .filter((chunk) => chunk.length > 1);
}

const file = process.argv[2];
if (!file) {
  console.error('Uso: node db/migrate.mjs db/migrations/<fichero>.sql');
  process.exit(1);
}

const { DATABASE_URL } = { ...readEnv(), ...process.env };
if (!DATABASE_URL) {
  console.error('Falta DATABASE_URL en .env o en el entorno.');
  process.exit(1);
}

const sql = neon(DATABASE_URL);
const statements = splitStatements(readFileSync(file, 'utf8'));

console.log(`${statements.length} sentencias en ${file}\n`);

let failed = 0;
for (const [index, statement] of statements.entries()) {
  const label = statement.replace(/\s+/g, ' ').slice(0, 74);
  try {
    await sql.query(statement);
    console.log(`  ${String(index + 1).padStart(2)}. OK    ${label}`);
  } catch (error) {
    failed += 1;
    console.log(`  ${String(index + 1).padStart(2)}. FALLA ${label}`);
    console.log(`      -> ${error.message}`);
  }
}

console.log(failed === 0 ? '\nMigración aplicada.' : `\n${failed} sentencia(s) fallaron.`);
process.exit(failed === 0 ? 0 : 1);
