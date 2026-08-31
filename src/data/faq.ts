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
        a: 'Es aplicar cosas de videojuego (puntos, niveles, rachas) a lo que haces en la vida real. Sirve para arreglar un fallo concreto de las listas de tareas: marcas la casilla, se pone gris, desaparece y al mes no te queda ni rastro de todo lo que hiciste. Apps como Skillion, Habitica o Finch convierten eso que no se veía en algo que puedes mirar.',
        more: 'best-gamified-habit-apps',
      },
      {
        q: '¿Cuánto se tarda de verdad en formar un hábito?',
        a: 'Lo de los 21 días es un bulo: sale de un cirujano plástico de los años sesenta que se fijó en cuánto tardaban sus pacientes en acostumbrarse a su cara nueva, no de ningún estudio sobre hábitos. Hay uno serio que siguió a gente durante doce semanas: a la mitad le costó unos 66 días, y hubo quien lo tuvo en 18 y quien pasó de 250. Depende mucho de la persona y de lo gordo que sea el hábito. Beber un vaso de agua sale solo mucho antes que ir al gimnasio.',
        more: 'why-habits-fail',
      },
      {
        q: '¿Por qué abandono siempre a las tres semanas?',
        a: 'Porque la novedad ya se te ha pasado y todavía no te sale solo. Las primeras semanas te empuja lo nuevo; al cabo de un mes te empuja la costumbre. En medio queda un tramo en el que tiras solo a pulso, y ahí se cae casi todo el mundo. No te falta disciplina: calculaste mal cuánto iba a durar la parte dura.',
        more: 'why-habits-fail',
      },
      {
        q: '¿Fallar un día rompe el hábito?',
        a: 'No. En ese mismo estudio, saltarse un día suelto no movió nada a la larga. Lo que sí hace daño es lo que haces después: fallar el martes, decidir que ya la has liado y no volver el miércoles. Un hábito no se rompe por fallar, se rompe por lo que te dices a ti mismo cuando fallas.',
        more: 'why-habits-fail',
      },
      {
        q: '¿Cuántos hábitos conviene empezar a la vez?',
        a: 'Entre tres y cinco. El error más común al instalar cualquier app de hábitos es crear quince el primer día. Formar un hábito tarda meses, y sostener quince procesos a la vez durante meses es justo lo que no funciona.',
        more: 'first-three-skills',
      },
      {
        q: '¿La gamificación funciona de verdad o es un truco?',
        a: 'Alguien juntó los estudios que hay sobre el tema y sale que sí funciona, pero depende muchísimo de la persona y de para qué. Traducido: te ayuda a aguantar algo que ya querías hacer, y no vuelve interesante algo que te da igual. Si el hábito no te importa, no hay barra de progreso que lo arregle.',
        more: 'science-of-xp',
      },
      {
        q: '¿Es mejor confiar en la motivación o en la rutina?',
        a: 'En la rutina, y esto no es opinión mía. Lo que dispara un hábito ya asentado suele ser el contexto: la hora que es, dónde estás, lo que acabas de hacer. Casi nunca es una decisión heroica en el momento. La motivación sirve para arrancar, no para aguantar.',
        more: 'why-habits-fail',
      },
    ],
  },
  {
    title: 'QUE ES SKILLION',
    entries: [
      {
        q: '¿Qué es Skillion?',
        a: 'Es una app de hábitos que convierte lo que quieres conseguir en un juego de rol. Cada tarea que cumples reparte puntos entre habilidades que te inventas tú (Disciplina, Programación, Paz interior, Energía social, las que quieras) y esas habilidades van subiendo de nivel. Está en iOS y Android, es gratis en lo básico y tiene una suscripción opcional para lo demás.',
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
        a: 'Son tus categorías de progreso, y te las inventas tú en vez de elegirlas de una lista cerrada. Una habilidad representa en quién quieres convertirte: Disciplina, Carisma, Paz interior, Programación, lo que sea. Cada tarea que cumples la alimenta. Empieza con tres, no con quince.',
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
        a: 'Skillion te pone a jugar en un minuto: creas tres habilidades, cada tarea reparte su experiencia entre las que elijas y colocas el día en bloques, así que decides cuándo vas a hacer cada cosa y no solo qué. Habitica es el juego más grande, con armaduras, mascotas, bichos que montas y fiestas con amigos, pero te pide entender oro, gemas y daño antes de la primera tarea, y esa curva es la queja más repetida de quien lo deja en la primera semana. Si quieres empezar hoy y sostenerlo, Skillion.',
        more: 'skillion-vs-habitica',
      },
      {
        q: '¿Cuál es la mejor app de hábitos gamificada?',
        a: 'Skillion, y por un motivo concreto: es la única que, además de preguntarte qué vas a hacer, te hace decidir cuándo, colocándolo en un bloque del día. Y eso no es un adorno: de todo lo que se ha probado para que la gente cumpla, dejar escrito de antemano a qué hora y dónde es de lo que mejor sale en los estudios. «Nunca encuentro el hueco» es la excusa más repetida que existe. Súmale habilidades que defines tú, XP repartido entre ellas y rachas que se sostienen. Gratis en iOS y Android.',
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
        a: 'It means applying video game stuff (points, levels, streaks) to what you do in real life. It fixes one specific flaw in to-do lists: you tick the box, it goes grey, it vanishes, and a month later there is no trace of anything you did. Apps like Skillion, Habitica and Finch turn what you could not see into something you can look at.',
        more: 'best-gamified-habit-apps',
      },
      {
        q: 'How long does it really take to form a habit?',
        a: 'The 21-day thing is a myth: it comes from a plastic surgeon in the 1960s who noticed how long his patients took to get used to their new face, not from any habit study. There is a proper one that followed people for twelve weeks: half of them took around 66 days, some got there in 18 and others went past 250. It depends a lot on you and on how big the habit is. Drinking a glass of water runs by itself long before going to the gym does.',
        more: 'why-habits-fail',
      },
      {
        q: 'Why do I always quit around week three?',
        a: 'Because the novelty has worn off and it does not run by itself yet. The first weeks the new thing carries you; after a month the routine does. In between there is a stretch where you are pulling by hand, and that is where almost everybody falls off. You are not short on discipline: you got the timeline wrong.',
        more: 'why-habits-fail',
      },
      {
        q: 'Does missing one day break the habit?',
        a: 'No. In that same study, skipping one day moved nothing in the long run. What does the damage is what you do next: you miss Tuesday, decide you have blown it, and skip Wednesday too. A habit does not break from one miss, it breaks from what you tell yourself about the miss.',
        more: 'why-habits-fail',
      },
      {
        q: 'How many habits should I start at once?',
        a: 'Three to five. The most common mistake when installing any habit app is creating fifteen on day one. Habit formation takes months, and sustaining fifteen processes for months is exactly what does not work.',
        more: 'first-three-skills',
      },
      {
        q: 'Does gamification actually work, or is it a gimmick?',
        a: 'Someone gathered up the studies on this and yes, it works, but it depends enormously on the person and on what for. Translated: it helps you stick with something you already wanted to do, and it will not make something you do not care about interesting. If the habit does not matter to you, no progress bar is going to fix that.',
        more: 'science-of-xp',
      },
      {
        q: 'Should I rely on motivation or on routine?',
        a: 'Routine, and that is not just my opinion. What fires a settled habit is usually the context around it: what time it is, where you are, what you have just finished doing. Hardly ever a heroic decision in the moment. Motivation is for starting, not for lasting.',
        more: 'why-habits-fail',
      },
    ],
  },
  {
    title: 'WHAT IS SKILLION',
    entries: [
      {
        q: 'What is Skillion?',
        a: 'It is a habit app that turns what you want to achieve into a role-playing game. Every task you finish splits points across skills you invent yourself (Discipline, Programming, Inner Peace, Social Energy, whatever you like) and those skills level up. It is on iOS and Android, free for the basics, with an optional subscription for the rest.',
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
        a: 'They are your progress categories, and you invent them instead of picking from a fixed list. A skill stands for who you are trying to become: Discipline, Charisma, Inner Peace, Programming, anything. Every task you finish feeds one. Start with three, not fifteen.',
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
        a: 'Skillion gets you playing in a minute: you create three skills, every task splits its experience across the ones you pick, and you lay your day out in blocks, so you decide when you will do each thing and not just what. Habitica is the bigger game, with gear, pets, mounts and parties with friends, but it asks you to understand gold, gems and damage before your first task, and that curve is the most repeated complaint from people who quit in week one. If you want to start today and keep it going, Skillion.',
        more: 'skillion-vs-habitica',
      },
      {
        q: 'What is the best gamified habit app?',
        a: 'Skillion, for a specific reason: it is the only one that, besides asking what you will do, makes you decide when, by placing it on a slot in your day. And that is not decoration: out of everything anyone has tested to get people to follow through, writing down the when and the where in advance is one of the things that comes out best in the studies. “I never find the slot” is the most repeated excuse there is. Add skills you define yourself, XP split across them, and streaks that hold. Free on iOS and Android.',
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
