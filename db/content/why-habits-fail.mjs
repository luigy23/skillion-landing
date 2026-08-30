import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Por qué se abandonan los hábitos" (SCRUM-450, uno de los 4 temas mínimos).
 *
 * Casi sin producto a propósito. Es la pregunta con más intención de las
 * cuatro, y un artículo que la responda y solo mencione Skillion al final se
 * cita; uno que la use de excusa para vender, no.
 */
export const whyHabitsFail = {
  translationKey: 'why-habits-fail',
  category: 'science',
  icon: 'brain',
  readingMinutes: 8,
  xp: 40,
  featured: false,
  publishedAt: '2026-08-30',
  author: AUTHORS.jesus,
  sources: [
    SOURCES.lally2010,
    SOURCES.woodNeal2007,
    SOURCES.woodRunger2016,
    SOURCES.gardner2012,
    SOURCES.gollwitzer2006,
    SOURCES.deci1999,
  ],

  es: {
    slug: 'por-que-se-abandonan-los-habitos',
    title: 'Por qué se abandonan los hábitos (y qué dice la investigación)',
    excerpt:
      'No es falta de disciplina. Cinco motivos con respaldo empírico por los que un hábito nuevo muere sobre la semana tres, y qué se puede hacer con cada uno.',
    tldr:
      'Los hábitos no se abandonan por falta de fuerza de voluntad, sino porque se abandonan antes de automatizarse. La investigación de Lally encontró una mediana de unos 66 días hasta que un comportamiento se vuelve automático, con casos de más de 250: casi todo el mundo lo deja dentro de esa ventana, cuando todavía cuesta esfuerzo consciente. Los cuatro factores que más pesan son empezar con demasiados a la vez, no decidir cuándo ni dónde, depender de la motivación en lugar del contexto, y tratar un fallo aislado como el final.',
    faq: [
      {
        q: '¿Cuánto se tarda de verdad en crear un hábito?',
        a: 'Los 21 días son un mito sin respaldo. El estudio de Lally y su equipo, que siguió a personas formando hábitos reales durante 12 semanas, encontró una mediana de unos 66 días, con un rango de 18 a más de 250 según la persona y la complejidad del comportamiento. Beber un vaso de agua se automatiza mucho antes que ir al gimnasio.',
      },
      {
        q: '¿Fallar un día rompe el hábito?',
        a: 'No. En ese mismo estudio, saltarse una única oportunidad no tuvo un efecto apreciable sobre el proceso de automatización a largo plazo. Lo que sí hace daño es la reacción al fallo: abandonar por completo después de un día suelto.',
      },
      {
        q: '¿Por qué siempre fallo en la semana tres?',
        a: 'Porque la novedad se ha agotado y la automatización todavía no ha llegado. Al principio empuja el interés por lo nuevo; a partir del mes empuja el automatismo. Entre medias hay un tramo sostenido solo por esfuerzo consciente, y ahí es donde se cae casi todo el mundo.',
      },
      {
        q: '¿Es mejor confiar en la motivación o en la rutina?',
        a: 'En la rutina, y no es opinión. La investigación sobre hábitos apunta a que el comportamiento consolidado se dispara por señales del contexto —hora, lugar, acción previa— más que por una decisión deliberada en el momento. La motivación es útil para arrancar, no para sostener.',
      },
    ],
    body: `Cuando alguien abandona un hábito, la explicación que se da a sí mismo casi siempre es la misma: *me falta disciplina*. Es una explicación cómoda porque no se puede comprobar, y es casi siempre falsa.

La investigación sobre formación de hábitos apunta a algo más aburrido y más útil: la gente abandona **antes de que el comportamiento llegue a ser automático**. No es un fallo de carácter, es un problema de plazos mal calculados.

## 1 · ¿Cuánto tarda de verdad?

La cifra de los 21 días circula desde hace décadas y no viene de un estudio sobre hábitos: viene de una observación de un cirujano plástico de los años sesenta sobre cuánto tardaban sus pacientes en acostumbrarse a su nueva cara.

El dato serio está en el trabajo de Lally y su equipo, que siguió durante doce semanas a personas formando un hábito real de comida, bebida o ejercicio: la mediana hasta alcanzar la meseta de automatización rondó los **66 días**, con un rango que iba de 18 a más de 250 según la persona y lo complejo del comportamiento.

Ese rango es lo importante. Si te has propuesto ir al gimnasio y esperabas que dejara de costarte a las tres semanas, no fallaste: calculaste mal.

## 2 · ¿Por qué la semana tres?

Al principio el comportamiento lo sostiene la novedad. Al final lo sostiene el automatismo. Entre uno y otro hay un tramo, de dos a seis semanas, en el que **solo lo sostiene el esfuerzo consciente**, que es el recurso más caro y menos fiable que tienes.

Casi todos los abandonos caen ahí. No porque la persona se haya vuelto más débil, sino porque en esa franja el hábito todavía cobra el precio completo cada día.

## 3 · Los cuatro motivos que más pesan

### Empezaste con demasiados

El error clásico del día uno: quince hábitos nuevos. Si uno solo tarda dos meses de esfuerzo consciente, quince a la vez es sostener quince procesos caros durante meses. Se cae la torre entera.

Tres. Cuando esos tres dejen de doler, añades.

### No decidiste cuándo ni dónde

"Voy a leer más" no es un plan, es una intención. "Después de cenar, leo veinte minutos en el sofá" sí lo es.

Esto tiene uno de los respaldos empíricos más sólidos del área: el meta-análisis de Gollwitzer y Sheeran sobre intenciones de implementación —formular el plan como *si pasa X, entonces hago Y*— encontró un efecto claro sobre el cumplimiento de metas. Concretar el cuándo y el dónde por adelantado es de lo más barato que puedes hacer y de lo que más rinde.

### Dependiste de la motivación

La motivación es un estado, y los estados fluctúan. La literatura sobre hábitos, incluida la revisión de Wood y Rünger, apunta a que el comportamiento consolidado se dispara sobre todo por **señales del contexto** —una hora, un sitio, una acción que siempre va antes— y no por una decisión deliberada en el momento.

Traducido: no diseñes para el día que te apetece. Diseña para el martes que llueve y estás cansado. Si el hábito depende de que te apetezca, no es un hábito, es un plan.

### Trataste un fallo como el final

En el estudio de Lally, saltarse **una** oportunidad no tuvo un efecto apreciable sobre el proceso de automatización. Un día suelto no rompe nada.

Lo que rompe es la reacción: fallar el martes, decidir que "ya está roto" y no volver el miércoles. La racha es un instrumento de medida, no el hábito. Confundirlos convierte un tropiezo en un abandono.

:::tip
Si vas a fallar —y vas a fallar— decide de antemano cuál es tu versión mínima. Cinco minutos de lectura sigue siendo leer. Lo que sostiene el hábito es la continuidad de la señal, no el tamaño de la sesión.
:::

## 4 · El motivo que casi nadie mira: el sistema te castigaba

Hay un quinto motivo que no está en la persona sino en la herramienta.

El meta-análisis de Deci, Koestner y Ryan sobre recompensas externas encontró que las recompensas contingentes y controladoras tienden a **erosionar la motivación intrínseca**. Es un resultado incómodo para media industria de apps de hábitos, la mía incluida: un sistema que te premia demasiado por hacerlo o te castiga demasiado por fallar puede acabar sustituyendo el motivo por el que empezaste.

La señal de que esto te está pasando es concreta: **empiezas a evitar abrir la app**. No porque no tengas tiempo, sino porque abrirla se ha convertido en enfrentarte a una lista de reproches. Cuando eso pasa, la app dejó de ayudar hace semanas.

## 5 · Qué hacer con todo esto

Cuatro cosas, en orden:

1. **Recalcula el plazo.** Dos meses, no tres semanas. Si esperas que cueste hasta el día 60, el día 20 deja de ser una señal de fracaso.
2. **Baja a tres hábitos.** Los que sobran no los estás haciendo igualmente.
3. **Escribe el cuándo y el dónde**, no solo el qué. Con esa frase concreta.
4. **Define tu versión mínima** antes de necesitarla, no el día que fallas.

Nada de esto necesita una app. Una app buena hace que estos cuatro pasos cuesten menos —y en Skillion la planificación por bloques existe justo por el punto 3— pero el orden importa: el sistema primero, la herramienta después. Al revés es como se acumulan apps de hábitos sin hábitos.`,
  },

  en: {
    slug: 'why-people-abandon-habits',
    title: 'Why people abandon habits (and what the research says)',
    excerpt:
      'It is not a discipline problem. Five evidence-backed reasons a new habit dies around week three, and what to do about each one.',
    tldr:
      'Habits are not abandoned for lack of willpower, but because people quit before the behaviour becomes automatic. Lally\'s research found a median of about 66 days to automaticity, with cases past 250: almost everyone quits inside that window, while it still takes conscious effort. The four factors that weigh most are starting with too many at once, never deciding when and where, relying on motivation instead of context, and treating one missed day as the end.',
    faq: [
      {
        q: 'How long does it really take to build a habit?',
        a: 'The 21-day figure is a myth with no support. The Lally study, which followed people forming real habits for 12 weeks, found a median of about 66 days, ranging from 18 to over 250 depending on the person and how complex the behaviour is. Drinking a glass of water automates far sooner than going to the gym.',
      },
      {
        q: 'Does missing one day break the habit?',
        a: 'No. In that same study, missing a single opportunity had no appreciable effect on long-term automaticity. What does damage is the reaction to it: abandoning entirely after one slip.',
      },
      {
        q: 'Why do I always fail in week three?',
        a: 'Because novelty has run out and automaticity has not arrived. Early on, interest in something new carries you; past the first month, automatic behaviour does. In between there is a stretch held up by conscious effort alone, and that is where almost everyone falls.',
      },
      {
        q: 'Should I rely on motivation or on routine?',
        a: 'Routine, and that is not an opinion. Habit research points to established behaviour being triggered by context cues — time, place, preceding action — rather than by a deliberate decision in the moment. Motivation is useful for starting, not for sustaining.',
      },
    ],
    body: `When someone abandons a habit, the explanation they give themselves is almost always the same: *I lack discipline*. It is a comfortable explanation because it cannot be checked, and it is almost always wrong.

Habit research points at something more boring and more useful: people quit **before the behaviour ever becomes automatic**. It is not a character flaw, it is a badly estimated timeline.

## 1 · How long does it actually take?

The 21-day number has circulated for decades and does not come from a habit study: it comes from a 1960s plastic surgeon's observation about how long his patients took to get used to their new face.

The serious figure comes from Lally and colleagues, who followed people forming a real eating, drinking or exercise habit over twelve weeks: the median time to reach the automaticity plateau was around **66 days**, ranging from 18 to over 250 depending on the person and the complexity of the behaviour.

That range is the point. If you set out to go to the gym and expected it to stop costing you after three weeks, you did not fail. You estimated wrong.

## 2 · Why week three?

At the start, novelty carries the behaviour. At the end, automaticity does. Between the two there is a stretch, roughly two to six weeks, held up by **conscious effort alone** — the most expensive and least reliable resource you have.

Almost every abandonment lands there. Not because the person got weaker, but because in that window the habit still charges full price every single day.

## 3 · The four reasons that weigh most

### You started with too many

The classic day-one mistake: fifteen new habits. If one alone takes two months of conscious effort, fifteen at once means sustaining fifteen expensive processes for months. The whole tower comes down.

Three. When those three stop hurting, add more.

### You never decided when or where

"I'll read more" is not a plan, it is an intention. "After dinner, I read twenty minutes on the sofa" is one.

This has some of the strongest empirical backing in the field: the Gollwitzer and Sheeran meta-analysis on implementation intentions — framing the plan as *if X happens, then I do Y* — found a clear effect on goal attainment. Nailing down the when and the where in advance is among the cheapest things you can do and the highest-returning.

### You relied on motivation

Motivation is a state, and states fluctuate. The habit literature, including the Wood and Rünger review, points to established behaviour being triggered mainly by **context cues** — a time, a place, an action that always comes before — rather than by a deliberate decision in the moment.

Translated: do not design for the day you feel like it. Design for the rainy Tuesday when you are tired. If the habit depends on wanting to, it is not a habit, it is a plan.

### You treated one miss as the end

In the Lally study, missing **one** opportunity had no appreciable effect on the automaticity process. A single day breaks nothing.

What breaks things is the reaction: missing Tuesday, deciding it is "already ruined", and not coming back Wednesday. The streak is a measuring instrument, not the habit. Confusing the two turns a stumble into an abandonment.

:::tip
Since you are going to miss — and you are — decide your minimum version in advance. Five minutes of reading is still reading. What sustains a habit is the continuity of the cue, not the size of the session.
:::

## 4 · The reason almost nobody looks at: the system was punishing you

There is a fifth reason that lives in the tool, not the person.

The Deci, Koestner and Ryan meta-analysis on extrinsic rewards found that contingent, controlling rewards tend to **erode intrinsic motivation**. That is an uncomfortable result for half the habit-app industry, mine included: a system that rewards you too hard for doing it, or punishes you too hard for missing, can end up replacing the reason you started.

The sign that this is happening to you is concrete: **you start avoiding opening the app**. Not for lack of time, but because opening it has become a confrontation with a list of reproaches. By the time that happens, the app stopped helping weeks ago.

## 5 · What to do with all this

Four things, in order:

1. **Recalculate the timeline.** Two months, not three weeks. If you expect it to cost until day 60, day 20 stops being a failure signal.
2. **Cut down to three habits.** You are not doing the extra ones anyway.
3. **Write down the when and the where**, not just the what. In that concrete sentence.
4. **Define your minimum version** before you need it, not on the day you miss.

None of this needs an app. A good app makes those four steps cheaper — and in Skillion, time blocking exists precisely for point 3 — but the order matters: system first, tool second. The other way round is how people accumulate habit apps without habits.`,
  },
};
