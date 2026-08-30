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
      'Siete apps que convierten hábitos en juego, con lo que hace bien cada una y para quién no es. Escrito por alguien que compite con casi todas.',
    tldr:
      'Habitica es la más completa como juego y la más social. Finch es la mejor si vienes por el lado del cuidado personal. Forest es la mejor para concentrarte, no para hábitos diarios. Loop es la mejor gratuita y sin cuenta. Streaks es la mejor en iOS puro. Skillion, que es la nuestra, es la que más sirve si además de registrar hábitos quieres planificar el día. No hay una mejor para todos: hay una mejor para lo que te está fallando.',
    faq: [
      {
        q: '¿Cuál es la mejor app de hábitos gamificada?',
        a: 'Depende de qué te esté fallando. Si abandonas por falta de rendición de cuentas, Habitica, por sus fiestas cooperativas. Si abandonas porque te sientes culpable, Finch, que no castiga. Si abandonas porque no encuentras el hueco en el día, Skillion, por su planificación por bloques. La pregunta útil no es cuál es mejor, sino cuál ataca tu motivo de abandono.',
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
    body: `Hay dos formas de escribir un listado como este. Una es poner tu app la primera y rellenar con competidores. La otra es admitir que la mayoría de la gente que lea esto no va a usar la mía, y hacer que aun así le sirva.

Construyo Skillion. Va la sexta, y hay un apartado de para quién no es.

## 1 · Habitica — la más completa como juego

[habitica.com](https://habitica.com) · Gratis, con suscripción opcional · iOS, Android, web

La veterana, desde 2013 y de código abierto. Tu personaje sube de nivel, consigue equipo, cría mascotas y monturas. Puedes montar una fiesta con amigos para pelear contra un jefe común: si alguien no cumple, el jefe daña al grupo entero.

**Lo mejor:** lo social. Es la única de la lista donde otra persona nota si no cumples, y para mucha gente ese es exactamente el ingrediente que falta.

**Lo peor:** la curva. Hábitos, dailies, to-dos, oro, gemas, daño y equipo antes de tu primera tarea. Es la queja más repetida de quien la deja en la primera semana.

## 2 · Finch — la mejor para el cuidado personal

[finchcare.com](https://finchcare.com) · Gratis, con suscripción · iOS, Android

Cuidas de un pájaro que crece cuando tú te cuidas. Los "hábitos" incluyen beber agua, salir a la calle o respirar cinco minutos, y el tono es deliberadamente amable: no hay castigo por fallar, nunca.

**Lo mejor:** el único enfoque de la lista que no te hace sentir mal. Si has abandonado apps de productividad por culpabilidad, empieza aquí.

**Lo peor:** no es una app de productividad. Si lo que necesitas es sacar adelante un proyecto con fechas, se queda corta a propósito.

## 3 · Forest — la mejor para concentrarte

[forestapp.cc](https://www.forestapp.cc) · De pago, con versión gratuita en Android · iOS, Android

Plantas un árbol, y si sales de la app antes de tiempo, se muere. No es una app de hábitos: es un temporizador de concentración con una consecuencia visual que funciona sorprendentemente bien.

**Lo mejor:** hace una cosa y la hace impecable. Además planta árboles reales con parte de los ingresos.

**Lo peor:** no sigue hábitos diarios ni rachas de comportamiento. Es complemento, no sustituto.

## 4 · Loop Habit Tracker — la mejor gratuita

[github.com/iSoron/uhabits](https://github.com/iSoron/uhabits) · Gratis y de código abierto · Android

Sin anuncios, sin cuenta, sin suscripción, sin servidor. Registras, y te enseña una puntuación de fuerza del hábito que sube o baja según la constancia, en vez de una racha binaria.

**Lo mejor:** esa puntuación es más honesta que una racha. Fallar un día no lo tira todo, que es como funcionan los hábitos de verdad.

**Lo peor:** solo Android, y de gamificación tiene lo justo. Aquí está por mérito propio, no por juego.

## 5 · Streaks — la mejor en iOS puro

[streaksapp.com](https://streaksapp.com) · De pago, un solo pago · iOS, watchOS

Doce tareas, ni una más, y ese límite es la funcionalidad. Integración profunda con Salud de Apple y con el reloj.

**Lo mejor:** el límite de doce te obliga a decidir qué importa. Y se paga una vez.

**Lo peor:** solo Apple, y ese mismo límite es una pared si llevas un sistema más grande.

## 6 · Skillion — la nuestra

[skillion.app](https://skillion.app) · Gratis, con suscripción · iOS, Android

Defines tus propias habilidades —"Fuerza", "Alemán", "Cocina"— y cada tarea reparte experiencia entre las que elijas. Lo que la separa del resto de la lista es el Time Blocking: colocas las tareas en una franja del día, fijas como rocas las inamovibles y el resto se reordena solo.

**Lo mejor:** es la única aquí que además de preguntarte *qué* vas a hacer te hace decidir *cuándo*. Eso no es un capricho de diseño: el meta-análisis de Gollwitzer y Sheeran sobre intenciones de implementación encontró un efecto sólido en el cumplimiento de metas justo por decidir el cuándo y el dónde por adelantado.

**Para quién no es:** si buscas mascotas, equipo y misiones, Habitica te va a dar más juego. Si buscas comunidad, tampoco: Skillion hoy es individual. Y si quieres código abierto, es cerrada.

## 7 · Habitify — la más sobria

[habitify.me](https://habitify.me) · Gratis limitada, con suscripción · iOS, Android, web, macOS

Poco juego y muchos datos. Gráficas serias, informes por franja del día y sincronización en todas partes.

**Lo mejor:** si la gamificación te parece infantil pero quieres constancia medida, es esta.

**Lo peor:** justo eso. Si necesitas que te empuje, aquí no hay empuje.

## 8 · Cómo elegir sin instalar siete apps

Cambia la pregunta. No es "cuál es la mejor", es **"por qué lo dejé la última vez"**:

| Lo dejaste porque... | Prueba |
| --- | --- |
| Nadie notaba si cumplías | Habitica |
| Te sentías culpable al fallar | Finch |
| Nunca encontrabas el hueco en el día | Skillion |
| No querías dar tus datos ni pagar | Loop |
| Te dispersabas en el momento de ponerte | Forest |
| Tenías demasiadas cosas en la lista | Streaks |
| Te parecía todo demasiado infantil | Habitify |

:::tip
Elijas la que elijas, empieza con tres hábitos. No con quince. El primer día siempre apetece meterlo todo, y es exactamente el error que hace que la app dure once días.
:::

## 9 · Lo que ninguna app arregla

El estudio de Lally y su equipo siguió a personas formando hábitos reales y encontró una mediana de unos 66 días hasta la automatización, con un rango que iba de 18 días a más de 250.

Ninguna de estas siete acorta eso. Lo que hacen es que el hueco entre "he empezado" y "ya no lo pienso" se te haga más corto. Elige la que te haga abrir menos excusas, y date dos meses antes de juzgarla.`,
  },

  en: {
    slug: 'best-gamified-habit-apps',
    title: 'The best gamified habit apps in 2026',
    excerpt:
      'Seven apps that turn habits into a game, what each one does well, and who it is not for. Written by someone who competes with almost all of them.',
    tldr:
      'Habitica is the most complete as a game and the most social. Finch is best if you come at this from self-care. Forest is best for focus, not for daily habits. Loop is the best free one, no account needed. Streaks is the best pure-iOS pick. Skillion, which is ours, helps most if you want to plan your day rather than just log it. There is no best app for everyone — there is a best app for whatever is failing you.',
    faq: [
      {
        q: 'What is the best gamified habit app?',
        a: 'It depends on what is failing you. If you quit for lack of accountability, Habitica, because of its co-op parties. If you quit because you feel guilty, Finch, which never punishes. If you quit because you never find the slot in your day, Skillion, because of its time blocking. The useful question is not which is best, but which one attacks your reason for quitting.',
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
    body: `There are two ways to write a list like this. One is to put your own app first and pad it out with competitors. The other is to accept that most people reading this will not use mine, and make it useful anyway.

I build Skillion. It is sixth, and it has a section on who it is not for.

## 1 · Habitica — the most complete game

[habitica.com](https://habitica.com) · Free, optional subscription · iOS, Android, web

The veteran, running since 2013 and open source. Your character levels up, earns gear, raises pets and mounts. You can form a party with friends to fight a shared boss: if someone skips, the boss damages the whole group.

**Best thing:** the social layer. It is the only one here where another person notices you slipping, and for a lot of people that is the missing ingredient.

**Worst thing:** the learning curve. Habits, dailies, to-dos, gold, gems, damage and gear before your first task. It is the most repeated complaint from people who quit in week one.

## 2 · Finch — the best for self-care

[finchcare.com](https://finchcare.com) · Free, with subscription · iOS, Android

You look after a bird that grows when you look after yourself. "Habits" include drinking water, going outside or breathing for five minutes, and the tone is deliberately gentle: there is never a penalty for missing.

**Best thing:** the only approach here that does not make you feel bad. If you have quit productivity apps out of guilt, start here.

**Worst thing:** it is not a productivity app. If you need to push a project with deadlines, it falls short on purpose.

## 3 · Forest — the best for focus

[forestapp.cc](https://www.forestapp.cc) · Paid, free tier on Android · iOS, Android

You plant a tree, and if you leave the app early it dies. It is not a habit app: it is a focus timer with a visual consequence that works surprisingly well.

**Best thing:** it does one thing flawlessly. It also plants real trees with part of the revenue.

**Worst thing:** it does not track daily habits or behavioural streaks. A complement, not a replacement.

## 4 · Loop Habit Tracker — the best free one

[github.com/iSoron/uhabits](https://github.com/iSoron/uhabits) · Free and open source · Android

No ads, no account, no subscription, no server. You log, and it shows a habit-strength score that rises and falls with consistency instead of a binary streak.

**Best thing:** that score is more honest than a streak. Missing one day does not wipe everything, which is how habits actually behave.

**Worst thing:** Android only, and barely gamified. It is here on merit, not on play.

## 5 · Streaks — the best pure-iOS pick

[streaksapp.com](https://streaksapp.com) · Paid, one-time · iOS, watchOS

Twelve tasks, no more, and that limit is the feature. Deep integration with Apple Health and the watch.

**Best thing:** the twelve-task cap forces you to decide what matters. And you pay once.

**Worst thing:** Apple only, and that same cap is a wall if you run a bigger system.

## 6 · Skillion — ours

[skillion.app](https://skillion.app) · Free, with subscription · iOS, Android

You define your own skills — "Strength", "German", "Cooking" — and every task splits its experience across the ones you choose. What separates it from the rest of this list is Time Blocking: you place tasks on a slot in the day, pin the immovable ones as rocks, and everything else reshuffles around them.

**Best thing:** it is the only one here that, besides asking *what* you will do, makes you decide *when*. That is not a design flourish: the Gollwitzer and Sheeran meta-analysis on implementation intentions found a solid effect on goal attainment from deciding the when and the where in advance.

**Who it is not for:** if you want pets, gear and quests, Habitica gives you far more game. If you want community, same answer — Skillion is solo today. And if you want open source, it is closed.

## 7 · Habitify — the most sober

[habitify.me](https://habitify.me) · Limited free tier, with subscription · iOS, Android, web, macOS

Little play, lots of data. Serious charts, reports by time of day, sync everywhere.

**Best thing:** if gamification strikes you as childish but you want consistency measured, this is the one.

**Worst thing:** exactly that. If you need a push, there is no push here.

## 8 · How to choose without installing seven apps

Change the question. It is not "which is best", it is **"why did I quit last time"**:

| You quit because... | Try |
| --- | --- |
| Nobody noticed whether you followed through | Habitica |
| You felt guilty when you missed | Finch |
| You never found the slot in your day | Skillion |
| You did not want to hand over data or pay | Loop |
| You got distracted the moment you sat down | Forest |
| You had too much on the list | Streaks |
| It all felt too childish | Habitify |

:::tip
Whichever you pick, start with three habits. Not fifteen. Day one always tempts you to add everything, and that is exactly the mistake that makes the app last eleven days.
:::

## 9 · What no app fixes

The Lally study followed people forming real habits and found a median of about 66 days to automaticity, with a range from 18 days to over 250.

None of these seven shortens that. What they do is make the gap between "I started" and "I no longer think about it" feel shorter. Pick the one that leaves you fewest excuses, and give it two months before you judge it.`,
  },
};
