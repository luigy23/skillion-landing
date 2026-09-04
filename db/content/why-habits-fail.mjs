import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Por qué se abandonan los hábitos" (SCRUM-450, uno de los 4 temas mínimos).
 *
 * Casi sin producto a propósito. Es la pregunta con más intención de las
 * cuatro, y un artículo que la responda y solo mencione Skillion al final se
 * cita; uno que la use de excusa para vender, no.
 *
 * Acortado en septiembre de 2026: mismos cinco motivos, mitad de palabras.
 */
export const whyHabitsFail = {
  translationKey: 'why-habits-fail',
  category: 'science',
  icon: 'brain',
  readingMinutes: 4,
  xp: 20,
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
      'No es falta de disciplina. Cinco motivos, con estudios detrás, por los que un hábito nuevo se muere en la tercera semana, y qué hacer con cada uno.',
    tldr:
      'No es falta de fuerza de voluntad. La gente lo deja antes de que el hábito llegue a hacerse solo, y eso tarda unos 66 días de media. Los cuatro motivos: empezar con demasiados, no decidir cuándo ni dónde, tirar de motivación, y tratar un fallo suelto como el final.',
    faq: [
      {
        q: '¿Cuánto se tarda de verdad en crear un hábito?',
        a: 'Lo de los 21 días es un bulo. Hay un estudio que siguió a gente montando hábitos de verdad durante doce semanas: a la mitad le costó unos 66 días, y hubo quien lo tuvo en 18 y quien pasó de 250. Depende de la persona y de lo grande que sea el hábito.',
      },
      {
        q: '¿Fallar un día rompe el hábito?',
        a: 'No. En ese mismo estudio, saltarse un día suelto no movió nada a la larga. Lo que sí hace daño es lo que haces después: rendirte del todo por un día.',
      },
      {
        q: '¿Por qué siempre fallo en la tercera semana?',
        a: 'Porque la novedad ya se te ha pasado y todavía no te sale solo. Las primeras semanas te empuja lo nuevo; al cabo de un mes te empuja la costumbre. En medio queda un tramo en el que tiras solo a pulso, y ahí se cae casi todo el mundo.',
      },
      {
        q: '¿Es mejor confiar en la motivación o en la rutina?',
        a: 'En la rutina, y esto no es opinión mía. Lo que dispara un hábito ya asentado suele ser el contexto: la hora, el sitio, lo que acabas de hacer. Casi nunca una decisión heroica en el momento. La motivación sirve para arrancar, no para aguantar.',
      },
    ],
    body: `Skillion está diseñada alrededor de los motivos por los que la gente abandona: empiezas con tres habilidades, cada tarea tiene su hora en el día, y fallar no te quita nada salvo que tú lo pidas. Abajo está la ciencia de por qué son justo esos.

Yo me creí lo de los 21 días durante años. No sale de ningún estudio sobre hábitos. Sale de un cirujano plástico de los años sesenta que miraba cuánto tardaban sus pacientes en acostumbrarse a su cara nueva.

El dato de verdad explica mucho mejor por qué la gente lo deja: **abandona antes de que el hábito llegue a hacerse solo.** No es falta de disciplina. Es que calculaste mal cuánto iba a durar la parte difícil.

## 1 · ¿Cuánto tarda de verdad?

Un grupo de investigadores siguió a gente durante doce semanas mientras montaba un hábito de comer, beber o moverse. A la mitad le costó unos 66 días llegar al punto en que ya no pesa. Hubo quien lo tuvo en 18 días y quien pasó de 250.

Ese margen es lo que importa. Si te apuntaste al gimnasio contando con que a las tres semanas dejara de costarte, no fallaste tú. Fallaron tus cuentas.

## 2 · ¿Por qué justo la tercera semana?

Los primeros días te empuja la novedad. Al cabo de unos meses te empuja la costumbre.

Entre una cosa y la otra hay de dos a seis semanas en las que lo único que te empuja eres tú, decidiéndolo cada día. **Ahí se cae casi todo el mundo.** El hábito te cobra el precio entero cada día y todavía no te devuelve nada.

## 3 · Los cuatro motivos que más pesan

### Empezaste con demasiados

Quince hábitos nuevos el primer día. Si uno solo te va a pedir dos meses, quince son quince esfuerzos aguantando meses. Se caen todos.

Tres. Cuando esos tres dejen de doler, añades otro.

### No dijiste cuándo ni dónde

"Voy a leer más" es un deseo. "Después de cenar leo veinte minutos en el sofá" es un plan.

Alguien juntó decenas de estudios y salió lo mismo en casi todos: quien deja escrito de antemano a qué hora y en qué sitio va a hacer algo, lo hace mucho más. Suena tonto. Funciona igual.

### Tiraste de motivación

La motivación es un estado de ánimo, y va y viene. Lo que dispara un hábito asentado es el contexto: una hora, un sitio, algo que siempre haces justo antes.

No diseñes para el día que te apetece. Diseña para el martes que llegas agotado.

### Trataste un fallo como el final

En ese estudio, saltarse un día no movió la aguja. Lo que rompe es lo que haces después: fallas el martes, decides que ya la liaste y no vuelves el miércoles.

> La racha mide el hábito, pero no es el hábito. Confundir las dos cosas convierte un fallo suelto en un abandono.

:::tip
Vas a fallar. Decide de antemano tu versión mínima. Cinco minutos de lectura siguen siendo leer.
:::

## 4 · El motivo que casi nadie mira: la app te castigaba

Hay un quinto motivo, y no está en ti sino en la herramienta.

Está estudiado, y es incómodo para media industria de apps de hábitos, la mía incluida: si el sistema te aplaude demasiado por cumplir o te riñe demasiado por fallar, acabas haciéndolo por el sistema y no por lo que te trajo.

La señal es concreta: **empiezas a evitar abrir la app.** Porque abrirla es sentarte delante de una lista de reproches.

## 5 · Qué hacer con todo esto

1. Recalcula el plazo. Dos meses, no tres semanas. Así el día 20 deja de parecerte un fracaso.
2. Bájate a tres hábitos. Los que sobran no los estabas haciendo igualmente.
3. Escribe el cuándo y el dónde, no solo el qué.
4. Decide tu versión mínima antes de necesitarla.

Skillion hace estos cuatro pasos más baratos: empiezas con tres habilidades, cada tarea tiene su hueco en el día, y si se te pasa una, al volver puedes marcarla como hecha ayer o saltarla sin penalización.

Pero el orden importa: **primero el plan, luego la herramienta.** Nada de esto necesita una app; una buena app hace que cueste menos.`,
  },

  en: {
    slug: 'why-people-abandon-habits',
    title: 'Why people abandon habits (and what the research says)',
    excerpt:
      'It is not a discipline problem. Five evidence-backed reasons a new habit dies in its third week, and what to do about each one.',
    tldr:
      'It is not a willpower problem. People quit before the habit ever starts happening by itself, and that takes about 66 days on average. The four reasons: starting with too many, never deciding when and where, running on motivation, and treating one missed day as the end.',
    faq: [
      {
        q: 'How long does it really take to build a habit?',
        a: 'The 21-day figure is a myth. One study followed people building real habits for twelve weeks: half of them took around 66 days, some got there in 18 and others went past 250. It depends on the person and on how big the habit is.',
      },
      {
        q: 'Does missing one day break the habit?',
        a: 'No. In that same study, skipping one day moved nothing in the long run. What does the damage is what you do next: giving up entirely over one day.',
      },
      {
        q: 'Why do I always fail in my third week?',
        a: 'Because the novelty has worn off and it does not run by itself yet. The first weeks the new thing carries you; after a month the routine does. In between there is a stretch where you are pulling by hand, and that is where almost everybody falls off.',
      },
      {
        q: 'Should I rely on motivation or on routine?',
        a: 'Routine, and that is not just my opinion. What fires a settled habit is usually the context: the time, the place, what you have just done. Hardly ever a heroic decision in the moment. Motivation is for starting, not for lasting.',
      },
    ],
    body: `Skillion is designed around the reasons people quit: you start with three skills, every task has its hour in the day, and missing costs you nothing unless you ask for it. Below is the science of why those are the reasons.

I believed the 21-day thing for years. It comes from no habit study at all. It comes from a plastic surgeon in the 1960s who watched how long his patients took to get used to their new face.

The real figure explains far better why people give up: **they quit before the habit ever starts happening by itself.** It is not a discipline problem. You got the length of the hard part wrong.

## 1 · How long does it actually take?

A team followed people for twelve weeks while they built a habit around eating, drinking or moving. Half of them took about 66 days to reach the point where it stopped being heavy. Some got there in 18 days. Others went past 250.

That spread is the part that matters. If you joined a gym expecting it to stop costing you after three weeks, you did not fail. Your maths did.

## 2 · Why the third week, specifically?

For the first few days, novelty pushes you. Months later, routine pushes you.

In between there are two to six weeks where the only thing pushing you is you, deciding it again every day. **That is where almost everybody falls off.** The habit still charges you full price every day and gives nothing back yet.

## 3 · The four reasons that weigh most

### You started with too many

Fifteen new habits on day one. If one alone is going to ask two months, fifteen means fifteen efforts running for months. They all collapse.

Three. When those three stop hurting, add another.

### You never said when or where

"I'll read more" is a wish. "After dinner I read twenty minutes on the sofa" is a plan.

Someone pulled together dozens of studies and got the same answer nearly every time: people who write down in advance what time and what place they will do something end up doing it far more. It sounds daft. It works anyway.

### You ran on motivation

Motivation is a mood, and it comes and goes. What fires a settled habit is the context: a time, a place, something you always do right before.

Do not design for the day you feel like it. Design for the Tuesday you get home exhausted.

### You treated one miss as the end

In that study, skipping a single day moved nothing. What breaks things is what you do next: you miss Tuesday, decide you have blown it, and skip Wednesday too.

> The streak measures the habit, but it is not the habit. Mixing those up turns one missed day into quitting.

:::tip
You are going to miss. Decide your minimum version in advance. Five minutes of reading is still reading.
:::

## 4 · The reason almost nobody looks at: the app was punishing you

There is a fifth reason, and it lives in the tool rather than in you.

It has been studied, and it is uncomfortable for half the habit-app industry, mine included: if the system claps too hard when you comply or scolds too hard when you slip, you end up doing it for the system instead of for what brought you here.

The sign is specific: **you start avoiding the app.** Because opening it means sitting down in front of a list of reproaches.

## 5 · What to do with all this

1. Recalculate the timeline. Two months, not three weeks. Then day 20 stops looking like failure.
2. Cut down to three habits. You were not doing the extra ones anyway.
3. Write the when and the where, not just the what.
4. Decide your minimum version before you need it.

Skillion makes these four steps cheaper: you start with three skills, every task has its slot in the day, and if you miss one, when you come back you can mark it as done yesterday or skip it with no penalty.

But the order matters: **plan first, tool second.** None of this needs an app; a good app makes it cheaper.`,
  },
};
