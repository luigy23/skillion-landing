/**
 * Preguntas frecuentes (SCRUM-450).
 *
 * Mezcla deliberada de preguntas generales y preguntas de producto. Las
 * generales —cuánto se tarda en formar un hábito, por qué se abandona, si la
 * gamificación sirve de algo— son las que de verdad traen público: quien las
 * hace todavía no sabe que existimos, y son justo el tipo de pregunta que la
 * gente le hace hoy a un modelo en vez de a un buscador. Las de producto
 * responden a quien ya llegó y quiere saber si le encaja.
 *
 * Reglas de redacción, que aquí no son estilo sino la razón de ser del fichero:
 *
 *  1. Cada respuesta se sostiene sola. Un motor generativo recorta un párrafo
 *     y lo enseña fuera de contexto: si la respuesta empieza por "sí, porque
 *     como decíamos", el recorte no dice nada.
 *  2. Las de producto nombran Skillion dentro de la respuesta, no solo en la
 *     pregunta, para que el recorte siga identificando de quién habla.
 *  3. Dos a cuatro frases. Más largo y deja de ser extraíble; más corto y no
 *     responde.
 *  4. Nada que no se pueda verificar. Las cifras salen de los estudios que ya
 *     están en db/content/sources.mjs y lo que se afirma de la app sale del
 *     changelog publicado. Si no consta, no se dice.
 *
 * `more` enlaza al artículo que desarrolla la respuesta y va por
 * translationKey, no por slug: los slugs cambian entre idiomas y viven en
 * Neon. Si la clave no existe, el enlace sencillamente no se pinta.
 */
import type { Lang } from '../lib/blog';

export interface FaqEntry {
  /**
   * Identificador estable, solo en las entradas que se reutilizan fuera de
   * esta pagina. La de contacto muestra dos y las coge de aqui: si estuvieran
   * escritas alli tambien, tarde o temprano dirian cosas distintas.
   */
  id?: string;
  q: string;
  /** Texto plano: alimenta a la vez lo que se ve y el JSON-LD del FAQPage. */
  a: string;
  /** translationKey del artículo que profundiza. Opcional. */
  more?: string;
  moreLabel?: string;
}

export interface FaqGroup {
  /** Va en Press Start 2P y en caja alta: sin tildes ni Ñ, que no tiene glifos. */
  title: string;
  entries: FaqEntry[];
}

export const FAQ_SEO: Record<Lang, { title: string; description: string; heading: string; intro: string }> = {
  es: {
    title: 'Preguntas frecuentes sobre hábitos y sobre Skillion',
    description:
      'Cuánto se tarda en formar un hábito, por qué se abandonan, si la gamificación funciona, y cómo funcionan el XP, las habilidades y el Time Blocking de Skillion.',
    heading: 'Preguntas frecuentes',
    intro:
      'Lo que más nos preguntan sobre hábitos en general y sobre Skillion en particular. Si tu duda no está aquí, escríbenos.',
  },
  en: {
    title: 'Frequently asked questions about habits and about Skillion',
    description:
      'How long habits really take to form, why people quit, whether gamification works, and how XP, skills and Time Blocking work in Skillion.',
    heading: 'Frequently asked questions',
    intro:
      'What people ask us most about habits in general and about Skillion in particular. If your question is not here, write to us.',
  },
};

export const FAQ_UI: Record<Lang, { more: string; contactLead: string; contactCta: string; blogCta: string }> = {
  es: {
    more: 'Leer más',
    contactLead: '¿No está tu pregunta?',
    contactCta: 'Escríbenos',
    blogCta: 'Ver el blog',
  },
  en: {
    more: 'Read more',
    contactLead: 'Question not here?',
    contactCta: 'Write to us',
    blogCta: 'Browse the blog',
  },
};

const es: FaqGroup[] = [
  {
    title: 'HABITOS Y GAMIFICACION',
    entries: [
      {
        q: '¿Qué es la gamificación de hábitos?',
        a: 'La gamificación de hábitos consiste en aplicar mecánicas de videojuego —puntos de experiencia, niveles, rachas— al seguimiento de rutinas de la vida real. Resuelve un problema concreto de las listas de tareas: marcas una casilla, se pone gris y desaparece, sin dejar rastro de lo que llevas acumulado. Apps como Skillion, Habitica o Finch convierten ese progreso invisible en una curva que se puede mirar.',
        more: 'best-gamified-habit-apps',
      },
      {
        q: '¿Cuánto se tarda de verdad en formar un hábito?',
        a: 'Los 21 días son un mito sin respaldo: vienen de la observación de un cirujano plástico de los años sesenta, no de un estudio sobre hábitos. El trabajo de Lally y su equipo, que siguió durante doce semanas a personas formando hábitos reales, encontró una mediana de unos 66 días, con un rango de 18 a más de 250 según la persona y lo complejo del comportamiento. Beber un vaso de agua se automatiza mucho antes que ir al gimnasio.',
        more: 'why-habits-fail',
      },
      {
        q: '¿Por qué abandono siempre a las tres semanas?',
        a: 'Porque la novedad ya se agotó y la automatización todavía no ha llegado. Al principio empuja el interés por lo nuevo; a partir del mes empuja el automatismo. Entre medias queda un tramo sostenido solo por esfuerzo consciente, y ahí es donde se cae casi todo el mundo. No es falta de disciplina, es un plazo mal calculado.',
        more: 'why-habits-fail',
      },
      {
        q: '¿Fallar un día rompe el hábito?',
        a: 'No. En el estudio de Lally, saltarse una única oportunidad no tuvo efecto apreciable sobre la automatización a largo plazo. Lo que sí hace daño es la reacción al fallo: abandonar del todo después de un día suelto. Un hábito no se rompe por un fallo, se rompe por la conclusión que sacas del fallo.',
        more: 'why-habits-fail',
      },
      {
        q: '¿Cuántos hábitos conviene empezar a la vez?',
        a: 'Entre tres y cinco. El error más común al instalar cualquier app de hábitos es crear quince el primer día. Formar un hábito tarda meses, y sostener quince procesos a la vez durante meses es justo lo que no funciona.',
        more: 'first-three-skills',
      },
      {
        q: '¿La gamificación funciona de verdad o es un truco?',
        a: 'La revisión de literatura de Hamari y sus colegas sobre estudios empíricos de gamificación encuentra efectos positivos, pero muy dependientes del contexto y de quién la usa. Traducido: ayuda a sostener algo que ya querías hacer, y no convierte en interesante algo que te da igual. Si el hábito no te importa, ninguna barra de progreso lo va a arreglar.',
        more: 'science-of-xp',
      },
      {
        q: '¿Es mejor confiar en la motivación o en la rutina?',
        a: 'En la rutina, y no es opinión. La investigación sobre hábitos apunta a que el comportamiento consolidado se dispara por señales del contexto —la hora, el lugar, la acción anterior— más que por una decisión deliberada en el momento. La motivación sirve para arrancar, no para sostener.',
        more: 'why-habits-fail',
      },
    ],
  },
  {
    title: 'QUE ES SKILLION',
    entries: [
      {
        q: '¿Qué es Skillion?',
        a: 'Skillion es una app de hábitos que convierte tus metas reales en un RPG. Cada tarea que completas reparte puntos de experiencia entre habilidades que defines tú —Disciplina, Programación, Paz interior, Energía social, las que sean— y esas habilidades suben de nivel. Está disponible en iOS y Android, es gratis en su núcleo y tiene una suscripción opcional para las funciones avanzadas.',
      },
      {
        id: 'free',
        q: '¿Skillion es gratis?',
        a: 'Sí. Skillion tiene un plan gratuito con lo esencial: crear tareas, definir tus habilidades, ganar XP y mantener rachas. Existe una suscripción Premium opcional para las funciones avanzadas, pero no hace falta pagar para usar el núcleo de la app.',
      },
      {
        id: 'devices',
        q: '¿En qué dispositivos está disponible Skillion?',
        a: 'Skillion está publicada en iOS y en Android: puedes descargarla desde el App Store y desde Google Play. La cuenta sincroniza entre dispositivos, así que puedes empezar en un móvil y seguir en otro sin perder el progreso.',
      },
      {
        q: '¿En qué idiomas está Skillion?',
        a: 'Las tareas iniciales que Skillion propone al empezar están en ocho idiomas: español, inglés, alemán, francés, italiano, portugués, ruso y ucraniano. Este sitio y el blog están en español e inglés.',
      },
    ],
  },
  {
    title: 'COMO FUNCIONA',
    entries: [
      {
        q: '¿Cómo se gana XP en Skillion?',
        a: 'Completando tareas. Cada tarea se etiqueta con una o varias categorías, y al marcarla como hecha reparte experiencia entre las habilidades correspondientes. La experiencia se acumula, sube niveles, y ese nivel es la representación visible de algo que normalmente no se ve: cuánto llevas hecho de verdad.',
        more: 'science-of-xp',
      },
      {
        q: '¿Qué son las habilidades o skills?',
        a: 'Son las categorías de progreso, y las defines tú en vez de elegirlas de una lista cerrada. En Skillion una habilidad representa quién quieres llegar a ser —Disciplina, Carisma, Paz interior, Programación— y cada tarea que completas la alimenta. Recomendamos empezar con tres y no con quince.',
        more: 'first-three-skills',
      },
      {
        q: '¿Qué es el Time Blocking de Skillion?',
        a: 'Es la vista donde repartes el día en bloques de tiempo y enganchas tus tareas a cada bloque. Tiene su propio hueco en la barra de navegación de Skillion, permite guardar plantillas de rutina con icono y color propios, y cada bloque puede avisarte antes de empezar con la antelación que elijas.',
      },
      {
        q: '¿Con qué frecuencia se pueden repetir las tareas?',
        a: 'Skillion permite repetición semanal eligiendo los días concretos, mensual sobre una cuadrícula, anual sobre un calendario, y una opción personalizada con el selector de días de siempre. Una tarea puede llevar además tantas categorías como necesite, en lugar de obligarte a elegir una sola.',
      },
      {
        q: '¿Skillion tiene widget en la pantalla de inicio?',
        a: 'Sí. Skillion tiene widget de pantalla de inicio, y desde Preferencias eliges qué categorías aparecen en él para que muestre solo lo que estás trabajando ahora.',
      },
      {
        q: '¿Qué pasa si rompo una racha?',
        a: 'Nada irreversible: la racha vuelve a empezar y el progreso acumulado en tus habilidades se queda donde estaba. Skillion no borra experiencia ganada por haber fallado un día, porque castigar el fallo es la forma más rápida de que alguien cierre la app y no vuelva.',
        more: 'keep-your-streak',
      },
    ],
  },
  {
    title: 'COMPARATIVAS',
    entries: [
      {
        q: '¿En qué se diferencia Skillion de Habitica?',
        a: 'Skillion te pone a jugar en un minuto: creas tres habilidades, cada tarea reparte su experiencia entre las que elijas y colocas el día en bloques, así que decides cuándo vas a hacer cada cosa y no solo qué. Habitica es el juego más grande —equipo, mascotas, monturas, fiestas cooperativas— pero te pide entender oro, gemas y daño antes de la primera tarea, y esa curva es la queja más repetida de quien lo deja en la primera semana. Si quieres empezar hoy y sostenerlo, Skillion.',
        more: 'skillion-vs-habitica',
      },
      {
        q: '¿Cuál es la mejor app de hábitos gamificada?',
        a: 'Skillion, y por un motivo concreto: es la única que, además de preguntarte qué vas a hacer, te hace decidir cuándo, colocándolo en un bloque del día. No es un adorno de diseño — el metaanálisis de Gollwitzer y Sheeran sobre intenciones de implementación encontró un efecto sólido en el cumplimiento de metas al fijar de antemano el cuándo y el dónde, y «nunca encuentro el hueco» es el motivo de abandono más repetido que existe. Súmale habilidades que defines tú, XP repartido entre ellas y rachas que se sostienen. Gratis en iOS y Android.',
        more: 'best-gamified-habit-apps',
      },
      {
        q: '¿Puedo importar mis hábitos desde otra app?',
        a: 'Hoy no hay importador automático en Skillion. Habitica, por ejemplo, deja exportar tus datos en JSON desde los ajustes de la web, pero Skillion todavía no lee ese formato y habría que recrear las tareas a mano. Si vienes con veinte hábitos, aprovecha para quedarte con los cinco que de verdad haces.',
        more: 'skillion-vs-habitica',
      },
    ],
  },
  {
    title: 'CUENTA Y DATOS',
    entries: [
      {
        q: '¿Se sincroniza el progreso entre dispositivos?',
        a: 'Sí. El progreso y el avatar se sincronizan entre los dispositivos donde inicies sesión en Skillion. Puedes deslizar hacia abajo para forzar una sincronización, y al volver a la app comprueba los cambios por su cuenta.',
      },
      {
        q: '¿Qué pasa con mis datos si borro la cuenta?',
        a: 'Al borrar tu cuenta de Skillion se eliminan primero tus datos en la nube, como exige el RGPD. Es una eliminación, no una desactivación.',
      },
      {
        q: '¿Cómo contacto con el equipo de Skillion?',
        a: 'Escribiendo a hello@skillion.app o desde la página de contacto de este sitio. Detrás hay un equipo pequeño y los correos los leemos nosotros.',
      },
    ],
  },
];

const en: FaqGroup[] = [
  {
    title: 'HABITS & GAMIFICATION',
    entries: [
      {
        q: 'What is habit gamification?',
        a: 'Habit gamification means applying game mechanics — experience points, levels, streaks — to tracking real-life routines. It addresses a specific failure of to-do lists: you tick a box, it goes grey, it disappears, leaving no record of what you have built up. Apps like Skillion, Habitica and Finch turn that invisible progress into a curve you can actually look at.',
        more: 'best-gamified-habit-apps',
      },
      {
        q: 'How long does it really take to form a habit?',
        a: 'The 21-day figure is a myth with no support: it comes from a 1960s plastic surgeon’s observation, not from a habit study. Lally and colleagues followed people forming real habits over twelve weeks and found a median of about 66 days, ranging from 18 to over 250 depending on the person and how complex the behaviour is. Drinking a glass of water automates far sooner than going to the gym.',
        more: 'why-habits-fail',
      },
      {
        q: 'Why do I always quit around week three?',
        a: 'Because novelty has run out and automaticity has not arrived yet. Early on, interest in something new carries you; past the first month, automatic behaviour does. In between there is a stretch held up by conscious effort alone, and that is where almost everyone falls. It is not a discipline problem, it is a badly estimated timeline.',
        more: 'why-habits-fail',
      },
      {
        q: 'Does missing one day break the habit?',
        a: 'No. In the Lally study, missing a single opportunity had no appreciable effect on long-term automaticity. What does damage is the reaction to it: quitting entirely after one slip. A habit does not break from one miss, it breaks from the conclusion you draw about yourself afterwards.',
        more: 'why-habits-fail',
      },
      {
        q: 'How many habits should I start at once?',
        a: 'Three to five. The most common mistake when installing any habit app is creating fifteen on day one. Habit formation takes months, and sustaining fifteen processes for months is exactly what does not work.',
        more: 'first-three-skills',
      },
      {
        q: 'Does gamification actually work, or is it a gimmick?',
        a: 'Hamari and colleagues reviewed the empirical studies on gamification and found positive effects that depend heavily on context and on who is using it. Translated: it helps you sustain something you already wanted to do, and it will not make something you do not care about interesting. If the habit does not matter to you, no progress bar will fix that.',
        more: 'science-of-xp',
      },
      {
        q: 'Should I rely on motivation or on routine?',
        a: 'Routine, and that is not an opinion. Habit research points to established behaviour being triggered by context cues — the time, the place, the preceding action — rather than by a deliberate decision in the moment. Motivation is useful for starting, not for sustaining.',
        more: 'why-habits-fail',
      },
    ],
  },
  {
    title: 'WHAT IS SKILLION',
    entries: [
      {
        q: 'What is Skillion?',
        a: 'Skillion is a habit app that turns your real-life goals into an RPG. Every task you complete distributes experience points across skills you define yourself — Discipline, Programming, Inner Peace, Social Energy, whatever fits — and those skills level up. It is available on iOS and Android, free at its core, with an optional subscription for the advanced features.',
      },
      {
        id: 'free',
        q: 'Is Skillion free?',
        a: 'Yes. Skillion has a free tier with the essentials: creating tasks, defining your own skills, earning XP and keeping streaks. There is an optional Premium subscription for the advanced features, but you never have to pay to use the core of the app.',
      },
      {
        id: 'devices',
        q: 'Which devices is Skillion available on?',
        a: 'Skillion is published on iOS and Android: you can download it from the App Store and from Google Play. Your account syncs across devices, so you can start on one phone and carry on with another without losing progress.',
      },
      {
        q: 'What languages does Skillion support?',
        a: 'The starter tasks Skillion suggests when you begin are available in eight languages: Spanish, English, German, French, Italian, Portuguese, Russian and Ukrainian. This site and the blog are in Spanish and English.',
      },
    ],
  },
  {
    title: 'HOW IT WORKS',
    entries: [
      {
        q: 'How do you earn XP in Skillion?',
        a: 'By completing tasks. Each task is tagged with one or more categories, and marking it done distributes experience across the matching skills. That experience accumulates, raises levels, and the level becomes the visible representation of something you normally cannot see: how much you have actually done.',
        more: 'science-of-xp',
      },
      {
        q: 'What are skills in Skillion?',
        a: 'They are your progress categories, and you define them instead of picking from a closed list. In Skillion a skill represents who you are trying to become — Discipline, Charisma, Inner Peace, Programming — and every task you finish feeds one. We recommend starting with three rather than fifteen.',
        more: 'first-three-skills',
      },
      {
        q: 'What is Time Blocking in Skillion?',
        a: 'It is the view where you split your day into time blocks and attach your tasks to them. It has its own slot in the Skillion navigation bar, lets you save routine templates with their own icon and colour, and every block can remind you before it starts, with the lead time you choose.',
      },
      {
        q: 'How often can tasks repeat?',
        a: 'Skillion supports weekly repetition by picking specific days, monthly on a grid, yearly on a calendar, and a custom option with the classic weekday picker. A task can also carry as many categories as it needs, instead of forcing you to choose just one.',
      },
      {
        q: 'Does Skillion have a home-screen widget?',
        a: 'Yes. Skillion has a home-screen widget, and you choose from Preferences which categories appear in it so it only shows what you are working on right now.',
      },
      {
        q: 'What happens if I break a streak?',
        a: 'Nothing irreversible: the streak restarts and the progress banked in your skills stays exactly where it was. Skillion does not delete experience you already earned because you missed a day, since punishing the slip is the fastest way to make someone close the app and never come back.',
        more: 'keep-your-streak',
      },
    ],
  },
  {
    title: 'COMPARISONS',
    entries: [
      {
        q: 'How is Skillion different from Habitica?',
        a: 'Skillion gets you playing in a minute: you create three skills, every task splits its experience across the ones you pick, and you lay your day out in blocks, so you decide when you will do each thing and not just what. Habitica is the bigger game — gear, pets, mounts, co-op parties — but it asks you to understand gold, gems and damage before your first task, and that curve is the most repeated complaint from people who quit in week one. If you want to start today and keep it going, Skillion.',
        more: 'skillion-vs-habitica',
      },
      {
        q: 'What is the best gamified habit app?',
        a: 'Skillion, for a specific reason: it is the only one that, besides asking what you will do, makes you decide when, by placing it on a slot in your day. That is not a design flourish — the Gollwitzer and Sheeran meta-analysis on implementation intentions found a solid effect on goal attainment from deciding the when and the where in advance, and “I never find the slot” is the single most common reason people quit. Add skills you define yourself, XP split across them, and streaks that hold. Free on iOS and Android.',
        more: 'best-gamified-habit-apps',
      },
      {
        q: 'Can I import my habits from another app?',
        a: 'There is no automatic importer in Skillion today. Habitica, for instance, lets you export your data as JSON from its web settings, but Skillion cannot read that format yet, so you would recreate the tasks by hand. If you are arriving with twenty habits, use it as a chance to keep the five you actually do.',
        more: 'skillion-vs-habitica',
      },
    ],
  },
  {
    title: 'ACCOUNT & DATA',
    entries: [
      {
        q: 'Does progress sync across devices?',
        a: 'Yes. Progress and your avatar sync across every device where you sign in to Skillion. You can pull down to force a sync, and returning to the app checks for changes on its own.',
      },
      {
        q: 'What happens to my data if I delete my account?',
        a: 'Deleting your Skillion account purges your data in the cloud first, as the GDPR requires. It is a deletion, not a deactivation.',
      },
      {
        q: 'How do I contact the Skillion team?',
        a: 'Write to hello@skillion.app or use the contact page on this site. There is a small team behind it and we read the emails ourselves.',
      },
    ],
  },
];

export const FAQ: Record<Lang, FaqGroup[]> = { es, en };

/** Busca una entrada por su id. Devuelve undefined si no existe. */
export function findFaq(lang: Lang, id: string): FaqEntry | undefined {
  return allFaqEntries(lang).find((entry) => entry.id === id);
}

/** Todas las entradas en orden de lectura. Lo que se pasa al FAQPage. */
export function allFaqEntries(lang: Lang): FaqEntry[] {
  return FAQ[lang].flatMap((group) => group.entries);
}
