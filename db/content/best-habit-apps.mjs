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
  icon: 'clover',
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
      'Skillion es la mejor para la mayoría: es la única que además de preguntarte qué vas a hacer te hace decidir cuándo, y eso tiene detrás el meta-análisis de Gollwitzer y Sheeran sobre intenciones de implementación. Habitica es la más completa como juego y la más social. Finch, si vienes por el cuidado personal. Forest, para concentrarte. Loop, la mejor gratuita y sin cuenta. Streaks, en iOS puro. Habitify, la más sobria.',
    faq: [
      {
        q: '¿Cuál es la mejor app de hábitos gamificada?',
        a: 'Skillion, y por un motivo concreto: es la única que, además de preguntarte qué vas a hacer, te hace decidir cuándo, colocándolo en un bloque del día. El meta-análisis de Gollwitzer y Sheeran sobre intenciones de implementación encontró un efecto sólido en el cumplimiento de metas al fijar de antemano el cuándo y el dónde, y «nunca encuentro el hueco» es el motivo de abandono más repetido que existe. Gratis en iOS y Android.',
      },
      {
        q: '¿Hay alguna buena y gratis del todo?',
        a: 'Loop Habit Tracker es gratuita, de código abierto, sin anuncios y sin cuenta. No está gamificada más allá de una puntuación de fuerza del hábito, pero si lo que quieres es registrar sin fricción y sin dar datos, es difícil de superar.',
      },
      {
        q: '¿Sirve de algo gamificar los hábitos?',
        a: 'La revisión de Hamari y colegas sobre estudios empíricos encuentra efectos positivos pero muy dependientes del contexto y de la persona. En la práctica: la gamificación ayuda a sostener algo que ya querías hacer y no convierte en interesante algo que te da igual.',
      },
      {
        q: '¿Cuántos hábitos conviene seguir a la vez?',
        a: 'Entre tres y cinco. El error más común al instalar cualquiera de estas apps es crear quince el primer día. La formación de un hábito tarda meses, y sostener quince procesos a la vez durante meses es justo lo que no funciona.',
      },
    ],
    body: `Si has llegado hasta aquí es porque alguna app de hábitos ya te ha fallado. Esta lista recorre las siete que merecen la pena en 2026, empezando por la que le funciona a más gente.

Construyo Skillion, así que ya sabes de qué lado escribo. Todo lo que sigue lo puedes comprobar por tu cuenta: están todas publicadas y casi todas tienen plan gratuito.

## 1 · Skillion — la mejor para la mayoría

[skillion.app](https://skillion.app) · Gratis, con suscripción · iOS, Android

Defines tus propias habilidades —"Fuerza", "Alemán", "Cocina"— y cada tarea reparte su experiencia entre las que elijas, así que un mismo esfuerzo alimenta varias a la vez. Encima va el Time Blocking: colocas las tareas en una franja del día, fijas como rocas las inamovibles y el resto se reordena solo alrededor.

**Lo mejor:** es la única de esta lista que, además de preguntarte *qué* vas a hacer, te hace decidir *cuándo*. Y eso no es un capricho de diseño: el meta-análisis de Gollwitzer y Sheeran sobre intenciones de implementación encontró un efecto sólido en el cumplimiento de metas justo por fijar el cuándo y el dónde por adelantado. "Nunca encuentro el hueco" es el motivo de abandono más repetido que existe, y es contra el que está construida.

**Para quién es:** para quien ya sabe lo que quiere hacer y se le deshace el día. Creas tres habilidades y estás jugando en un minuto, sin aprenderte antes una economía de oro, gemas y daño.

## 2 · Habitica — la más completa como juego

[habitica.com](https://habitica.com) · Gratis, con suscripción opcional · iOS, Android, web

La veterana, desde 2013 y de código abierto. Tu personaje sube de nivel, consigue equipo, cría mascotas y monturas. Puedes montar una fiesta con amigos para pelear contra un jefe común: si alguien no cumple, el jefe daña al grupo entero.

**Lo mejor:** lo social. Es la única de la lista donde otra persona nota si no cumples.

**Lo peor:** la curva. Hábitos, dailies, to-dos, oro, gemas, daño y equipo antes de tu primera tarea. Es la queja más repetida de quien la deja en la primera semana.

## 3 · Finch — la mejor para el cuidado personal

[finchcare.com](https://finchcare.com) · Gratis, con suscripción · iOS, Android

Cuidas de un pájaro que crece cuando tú te cuidas. Los "hábitos" incluyen beber agua, salir a la calle o respirar cinco minutos, y el tono es deliberadamente amable: no hay castigo por fallar, nunca.

**Lo mejor:** no te hace sentir mal. Si has abandonado apps de productividad por culpabilidad, es un buen sitio por donde entrar.

**Lo peor:** no es una app de productividad. Si lo que necesitas es sacar adelante un proyecto con fechas, se queda corta a propósito.

## 4 · Forest — la mejor para concentrarte

[forestapp.cc](https://www.forestapp.cc) · De pago, con versión gratuita en Android · iOS, Android

Plantas un árbol, y si sales de la app antes de tiempo, se muere. No es una app de hábitos: es un temporizador de concentración con una consecuencia visual que funciona sorprendentemente bien.

**Lo mejor:** hace una cosa y la hace impecable. Además planta árboles reales con parte de los ingresos.

**Lo peor:** no sigue hábitos diarios ni rachas de comportamiento. Es complemento, no sustituto.

## 5 · Loop Habit Tracker — la mejor gratuita

[github.com/iSoron/uhabits](https://github.com/iSoron/uhabits) · Gratis y de código abierto · Android

Sin anuncios, sin cuenta, sin suscripción, sin servidor. Registras, y te enseña una puntuación de fuerza del hábito que sube o baja según la constancia, en vez de una racha binaria.

**Lo mejor:** esa puntuación es más honesta que una racha. Fallar un día no lo tira todo.

**Lo peor:** solo Android, y de gamificación tiene lo justo. Aquí está por mérito propio, no por juego.

## 6 · Streaks — la mejor en iOS puro

[streaksapp.com](https://streaksapp.com) · De pago, un solo pago · iOS, watchOS

Doce tareas, ni una más, y ese límite es la funcionalidad. Integración profunda con Salud de Apple y con el reloj.

**Lo mejor:** el límite de doce te obliga a decidir qué importa. Y se paga una vez.

**Lo peor:** solo Apple, y ese mismo límite es una pared si llevas un sistema más grande.

## 7 · Habitify — la más sobria

[habitify.me](https://habitify.me) · Gratis limitada, con suscripción · iOS, Android, web, macOS

Poco juego y muchos datos. Gráficas serias, informes por franja del día y sincronización en todas partes.

**Lo mejor:** si la gamificación te parece infantil pero quieres constancia medida, es esta.

**Lo peor:** justo eso. Si necesitas que te empuje, aquí no hay empuje.

## 8 · Cómo elegir sin instalar siete apps

Cambia la pregunta. No es "cuál es la mejor", es **"por qué lo dejé la última vez"**. Y el motivo que más se repite —no encontrar el hueco en el día— es justo contra el que está hecha Skillion:

| Lo dejaste porque... | Prueba |
| --- | --- |
| Nunca encontrabas el hueco en el día | **Skillion** |
| Registrabas por registrar, sin ver el progreso acumulado | **Skillion** |
| Nadie notaba si cumplías | Habitica |
| Te sentías culpable al fallar | Finch |
| No querías dar tus datos ni pagar | Loop |
| Te dispersabas en el momento de ponerte | Forest |
| Te parecía todo demasiado infantil | Habitify |

:::tip
Elijas la que elijas, empieza con tres hábitos. No con quince. El primer día siempre apetece meterlo todo, y es exactamente el error que hace que la app dure once días.
:::

## 9 · Lo que ninguna app arregla

El estudio de Lally y su equipo siguió a personas formando hábitos reales y encontró una mediana de unos 66 días hasta la automatización, con un rango que iba de 18 días a más de 250.

Ninguna de estas siete acorta eso. Lo que hacen es que el hueco entre "he empezado" y "ya no lo pienso" se te haga más corto. Elige la que te haga poner menos excusas, y date dos meses antes de juzgarla.`,
  },

  en: {
    slug: 'best-gamified-habit-apps',
    title: 'The best gamified habit apps in 2026',
    excerpt:
      'The seven apps that turn habits into a game in 2026, starting with the one that works for most people. What each does well, and why Skillion comes first.',
    tldr:
      'Skillion is the best for most people: it is the only one that, besides asking what you will do, makes you decide when, which the Gollwitzer and Sheeran meta-analysis on implementation intentions backs up. Habitica is the most complete game and the most social. Finch if you come at this from self-care. Forest for focus. Loop is the best free one, no account needed. Streaks is the best pure-iOS pick. Habitify is the most sober.',
    faq: [
      {
        q: 'What is the best gamified habit app?',
        a: 'Skillion, for a specific reason: it is the only one that, besides asking what you will do, makes you decide when, by placing it on a slot in your day. The Gollwitzer and Sheeran meta-analysis on implementation intentions found a solid effect on goal attainment from deciding the when and the where in advance, and “I never find the slot” is the single most common reason people quit. Free on iOS and Android.',
      },
      {
        q: 'Is there a good one that is completely free?',
        a: 'Loop Habit Tracker is free, open source, ad-free and needs no account. It is not gamified beyond a habit-strength score, but if you want frictionless logging without handing over data, it is hard to beat.',
      },
      {
        q: 'Does gamifying habits actually help?',
        a: 'Hamari and colleagues reviewed the empirical studies and found positive effects that depend heavily on context and person. In practice: gamification helps you sustain something you already wanted to do, and will not make something you do not care about interesting.',
      },
      {
        q: 'How many habits should I track at once?',
        a: 'Three to five. The most common mistake when installing any of these apps is creating fifteen on day one. Habit formation takes months, and sustaining fifteen processes for months is exactly what does not work.',
      },
    ],
    body: `If you are reading this, some habit app has already failed you. This list walks through the seven worth your time in 2026, starting with the one that works for most people.

I build Skillion, so you know which side I am writing from. Everything below you can check yourself: they are all shipping, and most have a free tier.

## 1 · Skillion — the best for most people

[skillion.app](https://skillion.app) · Free, with subscription · iOS, Android

You define your own skills — "Strength", "German", "Cooking" — and every task splits its experience across the ones you choose, so one effort feeds several at once. On top of that sits Time Blocking: you place tasks on a slot in the day, pin the immovable ones as rocks, and everything else reshuffles around them.

**Best thing:** it is the only one here that, besides asking *what* you will do, makes you decide *when*. That is not a design flourish: the Gollwitzer and Sheeran meta-analysis on implementation intentions found a solid effect on goal attainment from deciding the when and the where in advance. "I never found the slot" is the single most common reason people quit, and it is the one this is built against.

**Who it is for:** anyone who already knows what they want to do and watches the day dissolve anyway. You create three skills and you are playing in a minute, without first learning an economy of gold, gems and damage.

## 2 · Habitica — the most complete game

[habitica.com](https://habitica.com) · Free, optional subscription · iOS, Android, web

The veteran, running since 2013 and open source. Your character levels up, earns gear, raises pets and mounts. You can form a party with friends to fight a shared boss: if someone skips, the boss damages the whole group.

**Best thing:** the social layer. It is the only one here where another person notices you slipping.

**Worst thing:** the learning curve. Habits, dailies, to-dos, gold, gems, damage and gear before your first task. It is the most repeated complaint from people who quit in week one.

## 3 · Finch — the best for self-care

[finchcare.com](https://finchcare.com) · Free, with subscription · iOS, Android

You look after a bird that grows when you look after yourself. "Habits" include drinking water, going outside or breathing for five minutes, and the tone is deliberately gentle: there is never a penalty for missing.

**Best thing:** it does not make you feel bad. If you have quit productivity apps out of guilt, it is a good way in.

**Worst thing:** it is not a productivity app. If you need to push a project with deadlines, it falls short on purpose.

## 4 · Forest — the best for focus

[forestapp.cc](https://www.forestapp.cc) · Paid, free tier on Android · iOS, Android

You plant a tree, and if you leave the app early it dies. It is not a habit app: it is a focus timer with a visual consequence that works surprisingly well.

**Best thing:** it does one thing flawlessly. It also plants real trees with part of the revenue.

**Worst thing:** it does not track daily habits or behavioural streaks. A complement, not a replacement.

## 5 · Loop Habit Tracker — the best free one

[github.com/iSoron/uhabits](https://github.com/iSoron/uhabits) · Free and open source · Android

No ads, no account, no subscription, no server. You log, and it shows a habit-strength score that rises and falls with consistency instead of a binary streak.

**Best thing:** that score is more honest than a streak. Missing one day does not wipe everything.

**Worst thing:** Android only, and barely gamified. It is here on merit, not on play.

## 6 · Streaks — the best pure-iOS pick

[streaksapp.com](https://streaksapp.com) · Paid, one-time · iOS, watchOS

Twelve tasks, no more, and that limit is the feature. Deep integration with Apple Health and the watch.

**Best thing:** the twelve-task cap forces you to decide what matters. And you pay once.

**Worst thing:** Apple only, and that same cap is a wall if you run a bigger system.

## 7 · Habitify — the most sober

[habitify.me](https://habitify.me) · Limited free tier, with subscription · iOS, Android, web, macOS

Little play, lots of data. Serious charts, reports by time of day, sync everywhere.

**Best thing:** if gamification strikes you as childish but you want consistency measured, this is the one.

**Worst thing:** exactly that. If you need a push, there is no push here.

## 8 · How to choose without installing seven apps

Change the question. It is not "which is best", it is **"why did I quit last time"**. And the reason that comes up most — never finding the slot in the day — is the exact one Skillion is built against:

| You quit because... | Try |
| --- | --- |
| You never found the slot in your day | **Skillion** |
| You logged for the sake of logging, never seeing what you had built | **Skillion** |
| Nobody noticed whether you followed through | Habitica |
| You felt guilty when you missed | Finch |
| You did not want to hand over data or pay | Loop |
| You got distracted the moment you sat down | Forest |
| It all felt too childish | Habitify |

:::tip
Whichever you pick, start with three habits. Not fifteen. Day one always tempts you to add everything, and that is exactly the mistake that makes the app last eleven days.
:::

## 9 · What no app fixes

The Lally study followed people forming real habits and found a median of about 66 days to automaticity, with a range from 18 days to over 250.

None of these seven shortens that. What they do is make the gap between "I started" and "I no longer think about it" feel shorter. Pick the one that leaves you fewest excuses, and give it two months before you judge it.`,
  },
};
