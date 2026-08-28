/**
 * Semilla del blog: los 5 artículos del artboard 1c, en español e inglés.
 *
 * Idempotente — se puede volver a lanzar sin duplicar:
 *   node db/seed.mjs
 *
 * Convenciones del cuerpo (markdown), pensadas para escribirse desde el
 * Neon Console:
 *   ## 1 · Título      -> H2 numerado, alimenta el TOC "EN ESTE ARTICULO"
 *   :::tip ... :::     -> callout "CONSEJO DEL MAGO"
 *   > cita             -> blockquote en menta
 */
import { neon } from '@neondatabase/serverless';
import fs from 'node:fs';

const url =
  process.env.DATABASE_URL ??
  fs.readFileSync(new URL('../.env', import.meta.url), 'utf8').match(/DATABASE_URL="([^"]+)"/)?.[1];

if (!url) throw new Error('Falta DATABASE_URL');
const sql = neon(url);

const AUTHOR = {
  es: { name: 'EQUIPO SKILLION', bio: 'Diseñamos sistemas de progreso para humanos reales.' },
  en: { name: 'SKILLION TEAM', bio: 'We design progress systems for real humans.' },
};

const posts = [
  // ─────────────────────────────────────────────────────────── 1 · destacado
  {
    translationKey: 'science-of-xp',
    category: 'science',
    icon: 'brain',
    readingMinutes: 9,
    xp: 45,
    featured: true,
    publishedAt: '2026-08-14',
    es: {
      slug: 'la-ciencia-detras-del-xp',
      title: 'La ciencia detrás del XP: por qué recompensar tu cerebro sí funciona',
      excerpt:
        'Dopamina, refuerzo variable y bucles de hábito. Qué dice la investigación sobre gamificar tareas reales, y dónde falla la mayoría de las apps.',
      body: `Cuando completas una misión en un juego, tu cerebro no celebra la barra que sube: celebra la **señal de que estás avanzando**. Esa señal es la misma que aparece cuando terminas de entrenar, cierras un pull request o lees veinte páginas. La diferencia es que los juegos la hacen visible y la vida real casi nunca.

Las listas de tareas fallan justo ahí. Un check gris no comunica progreso acumulado: comunica que había algo pendiente y ahora hay menos. No hay memoria, no hay curva, no hay historia. Por eso a las dos semanas la motivación se cae aunque la persona siga siendo la misma.

## 1 · El bucle: señal, acción, recompensa

Todo hábito funciona como un bucle. Lo que la gamificación bien hecha aporta no es "puntos": es una recompensa inmediata y legible para una acción cuyo beneficio real tarda meses en notarse. Correr hoy no te pone en forma hoy. Pero ver la barra de Fitness moverse hoy sí cierra el bucle.

:::tip
Asigna XP alto a lo que te cuesta empezar, no a lo que ya te sale fácil. El XP es tu presupuesto de motivación: gástalo donde hay fricción.
:::

## 2 · Por qué el progreso visible cambia la decisión

Hay un efecto bien documentado: cuando alguien ve que ya avanzó una parte del camino, la probabilidad de continuar sube. No es magia, es contexto. Una barra al 78% convierte "no tengo ganas" en "me falta poquísimo". Skillion usa esto en cada skill, cada racha y cada resumen semanal.

> "No necesitas más disciplina. Necesitas ver lo que ya estás construyendo."

## 3 · Dónde falla la gamificación mal hecha

Cuando los puntos no significan nada, dejan de funcionar en días. La regla que seguimos: cada punto debe mapear a algo que la persona quiere de verdad. Si tu XP no describe tu vida, es decoración. Si la describe, se convierte en un espejo — y los espejos motivan mucho más que las medallas.

Empieza por tres skills, ponles misiones diarias pequeñas y revisa tu resumen el domingo. En cuatro semanas vas a tener algo que ninguna lista de tareas te da: un historial de quién estás siendo.`,
    },
    en: {
      slug: 'the-science-behind-xp',
      title: 'The science behind XP: why rewarding your brain actually works',
      excerpt:
        'Dopamine, variable reinforcement and habit loops. What the research says about gamifying real tasks — and where most apps get it wrong.',
      body: `When you finish a quest in a game, your brain is not celebrating the bar going up: it is celebrating the **signal that you are making progress**. That signal is the same one that shows up when you finish a workout, merge a pull request or read twenty pages. The difference is that games make it visible and real life almost never does.

That is exactly where to-do lists fall apart. A grey checkmark does not communicate accumulated progress: it communicates that something was pending and now there is less of it. No memory, no curve, no story. That is why motivation collapses after two weeks even though the person has not changed.

## 1 · The loop: cue, action, reward

Every habit runs as a loop. What good gamification adds is not "points": it is an immediate, legible reward for an action whose real payoff takes months to show up. Running today does not make you fit today. But watching your Fitness bar move today does close the loop.

:::tip
Assign high XP to what is hard to start, not to what already comes easy. XP is your motivation budget: spend it where the friction is.
:::

## 2 · Why visible progress changes the decision

There is a well documented effect: once someone can see they are already part of the way there, the odds of continuing go up. It is not magic, it is context. A bar at 78% turns "I don't feel like it" into "I'm almost done". Skillion leans on this in every skill, every streak and every weekly recap.

> "You don't need more discipline. You need to see what you are already building."

## 3 · Where bad gamification breaks

When points mean nothing, they stop working within days. The rule we follow: every point has to map to something the person actually wants. If your XP does not describe your life, it is decoration. If it does, it becomes a mirror — and mirrors motivate far more than medals.

Start with three skills, give them small daily quests, and review your recap on Sunday. In four weeks you will have something no to-do list gives you: a record of who you are becoming.`,
    },
  },

  // ────────────────────────────────────────────────────────── 2 · cómo usar
  {
    translationKey: 'first-three-skills',
    category: 'how-to',
    icon: 'checklist',
    readingMinutes: 6,
    xp: 30,
    featured: false,
    publishedAt: '2026-08-07',
    es: {
      slug: 'tus-primeras-tres-skills',
      title: 'Crea tus primeras 3 skills sin abrumarte',
      excerpt:
        'El error más común al empezar: crear 12 skills el primer día. Aquí va el setup mínimo que aguanta un mes.',
      body: `El primer día en Skillion casi todo el mundo hace lo mismo: crear una skill por cada cosa que le gustaría mejorar. Salud, Lectura, Idiomas, Finanzas, Cocina, Sueño, Meditación… doce barras a cero. Y doce barras a cero no son doce motivaciones: son doce recordatorios de todo lo que aún no has hecho.

## 1 · Tres, y ninguna más

Tres skills es el número que aguanta una mala semana. Con tres puedes fallar una y seguir viendo movimiento en las otras dos. Con doce, fallar tres se siente como haber abandonado.

Elige una de cada tipo:

- **Una que ya haces.** Sirve de suelo: garantiza XP incluso en semanas malas.
- **Una que quieres sostener.** Ya la empezaste alguna vez y se cayó.
- **Una que te da pereza empezar.** Esta es la que justifica todo el sistema.

## 2 · Nombra la skill por la identidad, no por la tarea

"Ir al gimnasio" es una tarea. "Fuerza" es una identidad. La diferencia importa cuando llevas tres semanas: las tareas se terminan, las identidades se acumulan. Una barra que dice Fuerza al nivel 7 cuenta una historia que "ir al gimnasio, 21 veces" no cuenta.

:::tip
Si dudas entre dos nombres, quédate con el que podrías poner en una camiseta. Ese es el que vas a querer subir de nivel.
:::

## 3 · Misiones pequeñas de verdad

La misión diaria tiene que caber en tu peor día, no en tu mejor día. "Leer 30 páginas" es una misión de domingo por la mañana. "Leer 10 minutos" es una misión de martes a las 23:40, que es cuando de verdad se decide si mantienes la racha.

Empieza pequeño y sube cuando te aburra el tamaño. Es mucho más fácil subir una misión que resucitar una racha rota.

## 4 · Revisa a los siete días, no antes

Dale una semana entera antes de tocar nada. Al séptimo día abre tu resumen y mira qué skill se quedó parada: o la misión era demasiado grande, o esa skill no te importaba tanto como creías. Las dos respuestas son útiles.

> Un sistema que sobrevive un mes vale más que uno perfecto que abandonas el jueves.`,
    },
    en: {
      slug: 'your-first-three-skills',
      title: 'Create your first 3 skills without overwhelming yourself',
      excerpt:
        'The most common mistake when starting out: creating 12 skills on day one. Here is the minimum setup that survives a month.',
      body: `On day one in Skillion almost everyone does the same thing: create one skill for every part of life they would like to improve. Health, Reading, Languages, Finance, Cooking, Sleep, Meditation… twelve bars at zero. And twelve bars at zero are not twelve motivations: they are twelve reminders of everything you have not done yet.

## 1 · Three, and no more

Three skills is the number that survives a bad week. With three you can drop one and still see movement in the other two. With twelve, dropping three feels like quitting.

Pick one of each kind:

- **One you already do.** It is your floor: it guarantees XP even in bad weeks.
- **One you want to sustain.** You started it once and it fell off.
- **One you keep putting off.** This is the one that justifies the whole system.

## 2 · Name the skill after the identity, not the task

"Go to the gym" is a task. "Strength" is an identity. The difference shows up around week three: tasks end, identities accumulate. A bar that reads Strength at level 7 tells a story that "went to the gym, 21 times" does not.

:::tip
If you are torn between two names, keep the one you could put on a t-shirt. That is the one you will want to level up.
:::

## 3 · Quests that are genuinely small

Your daily quest has to fit your worst day, not your best one. "Read 30 pages" is a Sunday-morning quest. "Read 10 minutes" is a Tuesday-at-11:40pm quest — and Tuesday at 11:40pm is where streaks are actually decided.

Start small and raise it when the size bores you. Raising a quest is far easier than resurrecting a broken streak.

## 4 · Review on day seven, not before

Give it a full week before changing anything. On the seventh day open your recap and look at which skill stalled: either the quest was too big, or that skill mattered less than you thought. Both answers are useful.

> A system that survives a month beats a perfect one you abandon on Thursday.`,
    },
  },

  // ───────────────────────────────────────────────────────────── 3 · trucos
  {
    translationKey: 'keep-your-streak',
    category: 'tricks',
    icon: 'clock',
    readingMinutes: 5,
    xp: 25,
    featured: false,
    publishedAt: '2026-07-24',
    es: {
      slug: 'trucos-para-no-romper-tu-racha',
      title: '5 trucos para no romper tu racha en semanas caóticas',
      excerpt:
        'Misiones de emergencia, XP mínimo viable y cómo usar el modo viaje sin sentirte culpable.',
      body: `Las rachas no se rompen los días malos. Se rompen los días raros: el viaje, la mudanza, la gripe, la semana de entregas. Días en los que el sistema que montaste para tu vida normal no encaja, y en vez de adaptarlo, lo abandonas.

## 1 · Ten una misión de emergencia por skill

Para cada skill, define de antemano la versión mínima absoluta. Fuerza: veinte flexiones en el salón. Lectura: una página. Idiomas: cinco minutos. No es hacer trampa: es la diferencia entre una racha de 40 días con tres días flojos y dos rachas de 12 días separadas por un cero.

## 2 · Define tu XP mínimo viable del día

Decide cuál es tu suelo diario — pongamos 30 XP — y trátalo como innegociable. En una semana normal lo pasas sin pensar. En una semana caótica es lo único que persigues, y sabes exactamente cuándo has terminado.

:::tip
Escribe tu misión de emergencia el día que estás motivado. Tu yo de las 23:40 no está en condiciones de negociar consigo mismo.
:::

## 3 · Usa el modo viaje antes de necesitarlo

El modo viaje existe para que un contexto distinto no cuente como un fallo. Actívalo el día antes de salir, no el día después de haber roto la racha. Planificar una pausa no es lo mismo que abandonar, y tu historial debería reflejar esa diferencia.

## 4 · Mueve la misión a primera hora

En semanas caóticas lo que se pospone no se hace. Si tu misión mínima vive a las 8:00, la caos del día no puede alcanzarla. Las misiones de la noche son las primeras en morir.

## 5 · Rompe la racha a propósito una vez

Suena raro, pero funciona: la gente que más rachas largas mantiene es la que ya sabe que una racha rota no borra el progreso. Míralo una vez, comprueba que tu nivel sigue ahí, y deja de tenerle miedo. El miedo a romperla es lo que hace que la gente cierre la app en vez de abrirla.

> La racha es un indicador, no el objetivo. El objetivo es la curva de los últimos seis meses.`,
    },
    en: {
      slug: 'tricks-to-keep-your-streak',
      title: '5 tricks to protect your streak on chaotic weeks',
      excerpt:
        'Emergency quests, minimum viable XP, and how to use travel mode without feeling guilty.',
      body: `Streaks do not break on bad days. They break on strange days: the trip, the move, the flu, the deadline week. Days when the system you built for your normal life does not fit — and instead of adapting it, you drop it.

## 1 · Keep one emergency quest per skill

For each skill, decide the absolute minimum version in advance. Strength: twenty push-ups in the living room. Reading: one page. Languages: five minutes. This is not cheating: it is the difference between a 40-day streak with three weak days and two 12-day streaks separated by a zero.

## 2 · Define your minimum viable XP

Pick your daily floor — say 30 XP — and treat it as non-negotiable. In a normal week you clear it without thinking. In a chaotic week it is the only thing you chase, and you know exactly when you are done.

:::tip
Write your emergency quest on a day you feel motivated. Your 11:40pm self is in no condition to negotiate with itself.
:::

## 3 · Use travel mode before you need it

Travel mode exists so that a different context does not count as a failure. Turn it on the day before you leave, not the day after the streak broke. Planning a pause is not the same as quitting, and your history should show that difference.

## 4 · Move the quest to first thing

In chaotic weeks, whatever gets postponed does not happen. If your minimum quest lives at 8:00, the day's chaos cannot reach it. Evening quests are always the first to die.

## 5 · Break the streak on purpose, once

It sounds odd, but it works: the people who sustain the longest streaks are the ones who already know a broken streak does not erase progress. Watch it happen once, confirm your level is still there, and stop fearing it. Fear of breaking the streak is what makes people close the app instead of opening it.

> The streak is an indicator, not the goal. The goal is the curve over the last six months.`,
    },
  },

  // ─────────────────────────────────────────────────────────── 4 · consejos
  {
    translationKey: 'goals-vs-quests',
    category: 'tips',
    icon: 'lightbulb',
    readingMinutes: 7,
    xp: 35,
    featured: false,
    publishedAt: '2026-07-10',
    es: {
      slug: 'metas-grandes-misiones-diarias',
      title: 'Metas grandes vs. misiones diarias: cómo dividirlas',
      excerpt:
        'De "aprender inglés" a una misión de 15 minutos que puedes completar hoy mismo.',
      body: `"Aprender inglés" no es una meta: es una dirección. No tiene final claro, no se puede completar un martes y no te dice qué hacer en los próximos quince minutos. Por eso lleva cuatro años en tu lista.

## 1 · Baja un peldaño hasta que puedas empezar hoy

El truco es descender por niveles hasta llegar a algo accionable:

1. **Dirección:** aprender inglés.
2. **Meta con final:** mantener una conversación de 20 minutos sin bloquearme.
3. **Proyecto trimestral:** 12 clases de conversación.
4. **Misión diaria:** 15 minutos de práctica hablando.

Solo el último nivel se puede completar hoy. Los otros tres existen para que ese cuarto tenga sentido.

## 2 · La meta va en la skill; la misión, en el día

En Skillion la skill guarda la dirección — Idiomas — y las misiones diarias son lo que de verdad marcas. La barra sube por las misiones, pero significa algo por la meta. Si separas las dos cosas, dejas de sentir que hacer quince minutos es "poco": es exactamente 1/48 de tu trimestre.

:::tip
Si una misión no cabe en una frase con verbo y duración, todavía es un proyecto. "Estudiar inglés" no vale. "Hablar 15 minutos" sí.
:::

## 3 · Elige el tamaño por frecuencia, no por ambición

Una misión diaria de 15 minutos suma 7,5 horas al mes. Una misión de dos horas los sábados, si la cumples todos los sábados, suma 8. Casi lo mismo — salvo que la primera sobrevive a un sábado malo y la segunda no. Cuando dudes, reparte.

## 4 · Revisa la meta cada trimestre, no cada semana

Las misiones se ajustan a menudo; las metas, no. Cambiar de meta cada dos semanas es la forma más rápida de no avanzar en ninguna. Ponle fecha de revisión a tres meses vista y hasta entonces solo toca las misiones.

> No falta disciplina: falta un peldaño lo bastante bajo como para subirlo hoy.`,
    },
    en: {
      slug: 'big-goals-daily-quests',
      title: 'Big goals vs. daily quests: how to split them',
      excerpt:
        'From "learn Spanish" to a 15-minute quest you can actually finish today.',
      body: `"Learn Spanish" is not a goal: it is a direction. It has no clear end, it cannot be completed on a Tuesday, and it does not tell you what to do in the next fifteen minutes. That is why it has been on your list for four years.

## 1 · Step down until you can start today

The trick is walking down the levels until you reach something actionable:

1. **Direction:** learn Spanish.
2. **Goal with an end:** hold a 20-minute conversation without freezing.
3. **Quarterly project:** 12 conversation classes.
4. **Daily quest:** 15 minutes of speaking practice.

Only the last level can be completed today. The other three exist to give that fourth one meaning.

## 2 · The goal lives in the skill; the quest lives in the day

In Skillion the skill holds the direction — Languages — and the daily quests are what you actually check off. The bar rises because of the quests, but it means something because of the goal. Separate the two and fifteen minutes stops feeling like "not much": it is exactly 1/48 of your quarter.

:::tip
If a quest does not fit in one sentence with a verb and a duration, it is still a project. "Study Spanish" does not count. "Speak for 15 minutes" does.
:::

## 3 · Pick the size by frequency, not by ambition

A daily 15-minute quest adds up to 7.5 hours a month. A two-hour Saturday session, if you hit every Saturday, adds up to 8. Nearly identical — except the first survives one bad Saturday and the second does not. When in doubt, spread it out.

## 4 · Review the goal quarterly, not weekly

Quests get adjusted often; goals do not. Changing your goal every two weeks is the fastest way to make progress on none of them. Set a review date three months out and until then only touch the quests.

> It is not discipline you are missing: it is a step low enough to climb today.`,
    },
  },

  // ───────────────────────────────────────────────────────── 5 · cómo usar
  {
    translationKey: 'weekly-recap',
    category: 'how-to',
    icon: 'calendar',
    readingMinutes: 4,
    xp: 20,
    featured: false,
    publishedAt: '2026-06-26',
    es: {
      slug: 'configura-tu-resumen-semanal',
      title: 'Configura tu Resumen Semanal para compartirlo',
      excerpt:
        'Qué métricas elegir, cómo se ve en stories y por qué revisarlo el domingo cambia tu semana.',
      body: `El Resumen Semanal es la única pantalla de Skillion que no sirve para registrar nada. Sirve para mirar hacia atrás — y resulta que mirar hacia atrás es lo que hace que la semana siguiente vaya mejor.

## 1 · Elige tres métricas, no todas

Se pueden mostrar muchas, pero un resumen con nueve números no se lee: se ojea. La combinación que mejor funciona es una de cada tipo:

- **Volumen:** XP total de la semana. Responde "¿cuánto?".
- **Constancia:** días activos o racha. Responde "¿seguido?".
- **Foco:** la skill que más subió. Responde "¿en qué?".

## 2 · Formato vertical para stories

El resumen se exporta en 1080×1920, que es exactamente el lienzo de una story. Si vas a compartirlo, revisa antes qué skills aparecen: es tu semana, pero también es información sobre ti. Puedes ocultar las que no quieras enseñar sin que dejen de contar para tu XP.

:::tip
Comparte el resumen de una semana normal, no el de tu mejor semana. Las semanas normales son las que hacen que alguien piense "esto yo también puedo".
:::

## 3 · Revísalo el domingo, no el lunes

El domingo el resumen es información: todavía puedes decidir cómo quieres que sea la semana siguiente. El lunes ya es un boletín de notas de algo que no puedes cambiar. Es la misma pantalla y produce sensaciones opuestas.

## 4 · Hazte una sola pregunta

No hace falta un ritual de media hora. Abre el resumen y pregúntate: **¿qué skill se quedó parada y por qué?** Si la respuesta es "la misión era demasiado grande", bájala antes de cerrar la app. Ese ajuste de treinta segundos es el que sostiene los meses.

> Registrar te dice lo que hiciste. Revisar es lo que cambia lo que harás.`,
    },
    en: {
      slug: 'set-up-your-weekly-recap',
      title: 'Set up your Weekly Recap so it is worth sharing',
      excerpt:
        'Which metrics to pick, how it looks in stories, and why reviewing it on Sunday changes your week.',
      body: `The Weekly Recap is the only screen in Skillion that does not record anything. It exists so you can look back — and looking back turns out to be what makes the following week go better.

## 1 · Pick three metrics, not all of them

You can show many, but a recap with nine numbers does not get read: it gets glanced at. The combination that works best is one of each kind:

- **Volume:** total XP for the week. Answers "how much?".
- **Consistency:** active days or streak. Answers "how steadily?".
- **Focus:** the skill that grew the most. Answers "on what?".

## 2 · Vertical format for stories

The recap exports at 1080×1920, which is exactly a story canvas. If you are going to share it, check which skills show up first: it is your week, but it is also information about you. You can hide the ones you would rather not display without them losing XP.

:::tip
Share a normal week, not your best week. Normal weeks are the ones that make someone else think "I could do that too".
:::

## 3 · Review it on Sunday, not Monday

On Sunday the recap is information: you can still decide what the coming week looks like. On Monday it is a report card for something you can no longer change. Same screen, opposite feelings.

## 4 · Ask yourself one question

You do not need a half-hour ritual. Open the recap and ask: **which skill stalled, and why?** If the answer is "the quest was too big", shrink it before closing the app. That thirty-second adjustment is what carries the months.

> Tracking tells you what you did. Reviewing is what changes what you will do.`,
    },
  },
];

const rows = [];
for (const post of posts) {
  for (const lang of ['es', 'en']) {
    const t = post[lang];
    rows.push({
      translation_key: post.translationKey,
      lang,
      slug: t.slug,
      title: t.title,
      excerpt: t.excerpt,
      body: t.body,
      category: post.category,
      icon: post.icon,
      cover_image: null,
      reading_minutes: post.readingMinutes,
      xp: post.xp,
      featured: post.featured,
      author_name: AUTHOR[lang].name,
      author_bio: AUTHOR[lang].bio,
      published_at: post.publishedAt,
      published: true,
    });
  }
}

for (const r of rows) {
  await sql`
    INSERT INTO blog_posts (
      translation_key, lang, slug, title, excerpt, body, category, icon,
      cover_image, reading_minutes, xp, featured, author_name, author_bio,
      published_at, published, updated_at
    ) VALUES (
      ${r.translation_key}, ${r.lang}, ${r.slug}, ${r.title}, ${r.excerpt}, ${r.body},
      ${r.category}, ${r.icon}, ${r.cover_image}, ${r.reading_minutes}, ${r.xp},
      ${r.featured}, ${r.author_name}, ${r.author_bio}, ${r.published_at}, ${r.published}, now()
    )
    ON CONFLICT (lang, translation_key) DO UPDATE SET
      slug = EXCLUDED.slug,
      title = EXCLUDED.title,
      excerpt = EXCLUDED.excerpt,
      body = EXCLUDED.body,
      category = EXCLUDED.category,
      icon = EXCLUDED.icon,
      cover_image = EXCLUDED.cover_image,
      reading_minutes = EXCLUDED.reading_minutes,
      xp = EXCLUDED.xp,
      featured = EXCLUDED.featured,
      author_name = EXCLUDED.author_name,
      author_bio = EXCLUDED.author_bio,
      published_at = EXCLUDED.published_at,
      published = EXCLUDED.published,
      updated_at = now()
  `;
  console.log(`  ${r.lang}  ${r.slug}`);
}

const [{ count }] = await sql`SELECT count(*)::int AS count FROM blog_posts`;
console.log(`\n${rows.length} filas escritas · ${count} posts en la tabla`);
