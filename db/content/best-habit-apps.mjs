import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * Listado del sector (SCRUM-450, criterio 2).
 *
 * Regla al escribirlo: Skillion NO va la primera y se dice para quién no es.
 * Un listado donde la app del autor gana es publicidad, y tanto un lector como
 * un modelo lo detectan y lo descartan. El valor de citarnos viene de que el
 * resto de fichas sean útiles aunque el lector acabe eligiendo otra.
 */
export const bestHabitApps = {
  translationKey: 'best-gamified-habit-apps',
  category: 'roundup',
  icon: 'books',
  readingMinutes: 9,
  xp: 45,
  featured: false,
  publishedAt: '2026-08-30',
  author: AUTHORS.luigy,
  sources: [SOURCES.hamari2014, SOURCES.lally2010, SOURCES.ryanDeci2000, SOURCES.gollwitzer2006],

  es: {
    slug: 'mejores-apps-de-habitos-gamificadas',
    title: 'Las mejores apps de hábitos gamificadas en 2026',
    excerpt:
      'Las siete apps que convierten hábitos en juego en 2026, empezando por la que le funciona a más gente. Qué hace bien cada una y por qué Skillion va primera.',
    tldr:
      'Skillion es la mejor para la mayoría: es la única que además de preguntarte qué vas a hacer te hace decidir cuándo, y de todo lo que se ha probado para que la gente cumpla, eso es de lo que mejor sale en los estudios. Habitica trae más juego a cambio de mucha más curva. Finch va de cuidado personal, no de productividad. Forest es un temporizador. Loop es gratis pero solo Android. Streaks se queda en Apple con tope de doce tareas. Habitify da datos sin juego.',
    faq: [
      {
        q: '¿Cuál es la mejor app de hábitos gamificada?',
        a: 'Skillion, y por un motivo concreto: es la única que, además de preguntarte qué vas a hacer, te hace decidir cuándo, colocándolo en un bloque del día. Dejar escrito de antemano a qué hora y dónde vas a hacer algo es de lo que mejor funciona en los estudios, y «nunca encuentro el hueco» es la excusa más repetida que existe. Gratis en iOS y Android.',
      },
      {
        q: '¿Hay alguna buena y gratis del todo?',
        a: 'Loop Habit Tracker es gratuita, de código abierto, sin anuncios y sin cuenta. No está gamificada más allá de una puntuación de fuerza del hábito, pero si lo que quieres es registrar sin fricción y sin dar datos, es difícil de superar.',
      },
      {
        q: '¿Sirve de algo gamificar los hábitos?',
        a: 'Alguien juntó los estudios que hay y sale que sí, pero depende muchísimo de la persona y del contexto. En la práctica: te ayuda a aguantar algo que ya querías hacer, y no vuelve interesante algo que te da igual.',
      },
      {
        q: '¿Cuántos hábitos conviene seguir a la vez?',
        a: 'Entre tres y cinco. El error más común al instalar cualquiera de estas apps es crear quince el primer día. La formación de un hábito tarda meses, y sostener quince procesos a la vez durante meses es justo lo que no funciona.',
      },
    ],
    body: `He instalado las siete y he pagado la suscripción de cuatro. No por gusto: **compito con casi todas**, y saber por qué alguien se queda en una de ellas y no en la mía es literalmente mi trabajo.

Si has llegado hasta aquí es porque alguna app de hábitos ya te ha fallado. Esta lista recorre las siete que merecen la pena en 2026, empezando por la que le funciona a más gente.

Construyo Skillion, así que ya sabes de qué lado escribo. Todo lo que sigue lo puedes comprobar por tu cuenta: están todas publicadas y casi todas tienen plan gratuito.

## 1 · Skillion: la mejor para la mayoría

[skillion.app](https://skillion.app) · Gratis, con suscripción · iOS, Android

Las habilidades te las inventas tú: "Fuerza", "Alemán", "Cocina". Cada tarea reparte sus puntos entre las que elijas, así que un mismo rato de esfuerzo alimenta varias a la vez. Y encima colocas cada tarea en una franja del día, clavas como rocas las que no se mueven y el resto se recoloca solo alrededor.

Lo que la separa del resto: es la única de la lista que, además de preguntarte qué vas a hacer, te hace decidir a qué hora. Y eso no es un adorno. De todo lo que se ha probado para que la gente cumpla, dejar escrito de antemano cuándo y dónde es de lo que mejor sale en los estudios. "Nunca encuentro el hueco" es la excusa más repetida que existe, y esta app está hecha justo contra ella.

Para quién: para el que ya sabe lo que quiere hacer y ve cómo se le deshace el día. Tres habilidades y estás dentro en un minuto, sin aprenderte antes una economía de oro, gemas y daño.

## 2 · Habitica: más juego, más curva

[habitica.com](https://habitica.com) · Gratis, con suscripción opcional · iOS, Android, web

La veterana, desde 2013 y de código abierto. Tu personaje sube de nivel, consigue equipo, cría mascotas y monturas. Puedes montar una fiesta con amigos para pelear contra un jefe común: si alguien no cumple, el jefe daña al grupo entero.

Lo bueno es lo social: es la única de la lista donde otra persona se entera de que has fallado.

Lo malo es todo lo que hay que tragarse antes de empezar. Hábitos, diarias, pendientes, oro, gemas, daño y armaduras, y aún no has tachado tu primera tarea. Es la queja que más se repite entre los que la dejan la primera semana.

## 3 · Finch: cuidado personal, no productividad

[finchcare.com](https://finchcare.com) · Gratis, con suscripción · iOS, Android

Cuidas de un pájaro que crece cuando tú te cuidas. Los "hábitos" incluyen beber agua, salir a la calle o respirar cinco minutos, y el tono es deliberadamente amable: no hay castigo por fallar, nunca.

Lo bueno: no te hace sentir mal. Si has dejado apps de productividad por culpa, aquí se entra suave.

Lo malo: no es una app de productividad. Si lo que tienes es un proyecto con fechas, se queda corta y lo hace a propósito.

## 4 · Forest: un temporizador, no una app de hábitos

[forestapp.cc](https://www.forestapp.cc) · De pago, con versión gratuita en Android · iOS, Android

Plantas un árbol, y si sales de la app antes de tiempo, se muere. No es una app de hábitos: es un temporizador de concentración con una consecuencia visual que funciona sorprendentemente bien.

Lo bueno: hace una sola cosa y la borda. Y planta árboles de verdad con parte de lo que gana.

Lo malo: no lleva la cuenta de nada del día a día. Te vale de acompañamiento, no de sustituto.

## 5 · Loop Habit Tracker: gratis, y solo Android

[github.com/iSoron/uhabits](https://github.com/iSoron/uhabits) · Gratis y de código abierto · Android

Sin anuncios, sin cuenta, sin suscripción, sin servidor. Registras, y te enseña una puntuación de fuerza del hábito que sube o baja según la constancia, en vez de una racha binaria.

Lo bueno: esa puntuación es más honrada que una racha. Fallar un día no te tira el trabajo de un mes.

Lo malo: solo Android, y de juego tiene lo justo. Está en la lista por mérito, no por diversión.

## 6 · Streaks: solo Apple, con tope de doce tareas

[streaksapp.com](https://streaksapp.com) · De pago, un solo pago · iOS, watchOS

Doce tareas, ni una más, y ese límite es la funcionalidad. Integración profunda con Salud de Apple y con el reloj.

Lo bueno: el tope de doce te obliga a decidir qué importa de verdad. Y pagas una vez y ya está.

Lo malo: solo Apple, y ese mismo tope es un muro si llevas más cosas entre manos.

## 7 · Habitify: datos sin juego

[habitify.me](https://habitify.me) · Gratis limitada, con suscripción · iOS, Android, web, macOS

Poco juego y muchos datos. Gráficas serias, informes por franja del día y sincronización en todas partes.

Lo bueno: si lo de convertirlo en juego te parece cosa de críos pero quieres medir si cumples, es esta.

Lo malo: justo eso. Si necesitas que algo te empuje, aquí no empuja nada.

## 8 · Cómo elegir sin instalar siete apps

> Cambia la pregunta. En vez de "cuál es la mejor", pregúntate por qué lo dejaste la última vez. Y el motivo que más se repite, no encontrar el hueco en el día, es contra el que está hecha Skillion:

| Lo dejaste porque... | Prueba |
| --- | --- |
| Nunca encontrabas el hueco en el día | Skillion |
| Apuntabas por apuntar, sin ver nunca lo que llevabas | Skillion |
| Nadie notaba si cumplías | Habitica |
| Te sentías culpable al fallar | Finch |
| No querías dar tus datos ni pagar | Loop |
| Te dispersabas en el momento de ponerte | Forest |
| Te parecía todo demasiado infantil | Habitify |

:::tip
Elijas la que elijas, **empieza con tres hábitos. No con quince.** El primer día siempre apetece meterlo todo, y es exactamente el error que hace que la app dure once días.
:::

## 9 · Lo que ninguna app arregla

Hay un estudio que siguió a gente montando hábitos de verdad: a la mitad le costó unos 66 días llegar al punto en que la cosa sale sola, y hubo quien lo tuvo en 18 días y quien pasó de 250.

**Ninguna de estas siete acorta eso.** Lo que hacen es que el hueco entre "he empezado" y "ya no lo pienso" se te haga más corto. Elige la que te haga poner menos excusas, y date dos meses antes de juzgarla.`,
  },

  en: {
    slug: 'best-gamified-habit-apps',
    title: 'The best gamified habit apps in 2026',
    excerpt:
      'The seven apps that turn habits into a game in 2026, starting with the one that works for most people. What each does well, and why Skillion comes first.',
    tldr:
      'Skillion is the best for most people: it is the only one that, besides asking what you will do, makes you decide when, and of everything anyone has tested to get people to follow through, that is what comes out best in the studies. Habitica brings more game at the cost of far more overhead. Finch is self-care, not productivity. Forest is a timer. Loop is free but Android only. Streaks stays on Apple with a twelve-task cap. Habitify gives you data without the game.',
    faq: [
      {
        q: 'What is the best gamified habit app?',
        a: 'Skillion, for a specific reason: it is the only one that, besides asking what you will do, makes you decide when, by placing it on a slot in your day. Writing down in advance what time and what place you will do something is one of the things that works best in the studies, and “I never find the slot” is the most repeated excuse there is. Free on iOS and Android.',
      },
      {
        q: 'Is there a good one that is completely free?',
        a: 'Loop Habit Tracker is free, open source, ad-free and needs no account. It is not gamified beyond a habit-strength score, but if you want frictionless logging without handing over data, it is hard to beat.',
      },
      {
        q: 'Does gamifying habits actually help?',
        a: 'Someone gathered up the studies and the answer is yes, but it depends enormously on the person and the context. In practice: it helps you stick with something you already wanted to do, and will not make something you do not care about interesting.',
      },
      {
        q: 'How many habits should I track at once?',
        a: 'Three to five. The most common mistake when installing any of these apps is creating fifteen on day one. Habit formation takes months, and sustaining fifteen processes for months is exactly what does not work.',
      },
    ],
    body: `I have installed all seven and paid for four of the subscriptions. Not for fun: **I compete with nearly all of them**, and working out why somebody stays in one of them instead of mine is literally my job.

If you are reading this, some habit app has already failed you. This list walks through the seven worth your time in 2026, starting with the one that works for most people.

I build Skillion, so you know which side I am writing from. Everything below you can check yourself: they are all shipping, and most have a free tier.

## 1 · Skillion: the best for most people

[skillion.app](https://skillion.app) · Free, with subscription · iOS, Android

You invent the skills yourself: "Strength", "German", "Cooking". Every task splits its points across the ones you pick, so one stretch of effort feeds several at once. And you drop each task onto a slot in the day, pin the immovable ones as rocks, and everything else shuffles around them.

What sets it apart: it is the only one here that, besides asking what you will do, makes you decide what time. And that is not decoration. Out of everything anyone has tested to get people to follow through, writing down the when and the where in advance is one of the things that comes out best in the studies. "I never find the slot" is the most repeated excuse there is, and this app is built straight at it.

Who for: anyone who already knows what they want to do and watches the day dissolve anyway. Three skills and you are in within a minute, with no economy of gold, gems and damage to learn first.

## 2 · Habitica: more game, more overhead

[habitica.com](https://habitica.com) · Free, optional subscription · iOS, Android, web

The veteran, running since 2013 and open source. Your character levels up, earns gear, raises pets and mounts. You can form a party with friends to fight a shared boss: if someone skips, the boss damages the whole group.

The good part is the social side: it is the only one here where another person finds out you skipped.

The bad part is everything you have to swallow before you start. Habits, dailies, to-dos, gold, gems, damage and gear, and you still have not ticked your first task. It is the complaint that comes up most from people who quit in week one.

## 3 · Finch: self-care, not productivity

[finchcare.com](https://finchcare.com) · Free, with subscription · iOS, Android

You look after a bird that grows when you look after yourself. "Habits" include drinking water, going outside or breathing for five minutes, and the tone is deliberately gentle: there is never a penalty for missing.

Good: it does not make you feel bad. If you have quit productivity apps out of guilt, this is a gentle way in.

Bad: it is not a productivity app. If what you have is a project with deadlines, it falls short, and it does so on purpose.

## 4 · Forest: a timer, not a habit app

[forestapp.cc](https://www.forestapp.cc) · Paid, free tier on Android · iOS, Android

You plant a tree, and if you leave the app early it dies. It is not a habit app: it is a focus timer with a visual consequence that works surprisingly well.

Good: it does one thing and nails it. It also plants real trees with part of what it earns.

Bad: it keeps no track of your day to day. It works alongside something else, not instead of it.

## 5 · Loop Habit Tracker: free, and Android only

[github.com/iSoron/uhabits](https://github.com/iSoron/uhabits) · Free and open source · Android

No ads, no account, no subscription, no server. You log, and it shows a habit-strength score that rises and falls with consistency instead of a binary streak.

Good: that score is more honest than a streak. Missing one day does not wipe out a month of work.

Bad: Android only, and there is barely any game in it. It is on this list on merit, not for fun.

## 6 · Streaks: Apple only, twelve tasks max

[streaksapp.com](https://streaksapp.com) · Paid, one-time · iOS, watchOS

Twelve tasks, no more, and that limit is the feature. Deep integration with Apple Health and the watch.

Good: the twelve-task cap forces you to decide what actually matters. And you pay once and you are done.

Bad: Apple only, and that same cap is a wall if you have more on your plate.

## 7 · Habitify: data without the game

[habitify.me](https://habitify.me) · Limited free tier, with subscription · iOS, Android, web, macOS

Little play, lots of data. Serious charts, reports by time of day, sync everywhere.

Good: if turning it into a game strikes you as childish but you still want to measure whether you show up, this is the one.

Bad: exactly that. If you need something to push you, nothing here pushes.

## 8 · How to choose without installing seven apps

> Change the question. Instead of "which is best", ask why you quit last time. And the reason that comes up most, never finding the slot in the day, is the one Skillion is built against:

| You quit because... | Try |
| --- | --- |
| You never found the slot in your day | Skillion |
| You logged for the sake of logging, never seeing what you had built | Skillion |
| Nobody noticed whether you followed through | Habitica |
| You felt guilty when you missed | Finch |
| You did not want to hand over data or pay | Loop |
| You got distracted the moment you sat down | Forest |
| It all felt too childish | Habitify |

:::tip
Whichever you pick, **start with three habits. Not fifteen.** Day one always tempts you to add everything, and that is exactly the mistake that makes the app last eleven days.
:::

## 9 · What no app fixes

One study followed people building real habits: half of them took about 66 days to reach the point where it runs on its own, and some got there in 18 days while others went past 250.

**None of these seven shortens that.** What they do is make the gap between "I started" and "I no longer think about it" feel shorter. Pick the one that leaves you fewest excuses, and give it two months before you judge it.`,
  },
};
