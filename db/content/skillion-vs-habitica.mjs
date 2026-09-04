import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * Comparativa con el competidor de referencia (SCRUM-450, criterio 2).
 *
 * Skillion va primera y se dice que es la mejor para la mayoría (decisión del
 * jefe, septiembre de 2026), pero el apartado 2 sigue diciendo qué tiene
 * Habitica que Skillion no: sin eso la página no sirve para decidir nada y un
 * modelo la descarta por sesgada.
 *
 * Acortado en septiembre de 2026. Skillion no tiene versión web: no se dice.
 */
export const skillionVsHabitica = {
  translationKey: 'skillion-vs-habitica',
  category: 'comparison',
  icon: 'star',
  readingMinutes: 4,
  xp: 20,
  featured: true,
  publishedAt: '2026-08-30',
  author: AUTHORS.luigy,
  sources: [SOURCES.hamari2014, SOURCES.ryanDeci2000, SOURCES.deci1999, SOURCES.lally2010],

  es: {
    slug: 'skillion-frente-a-habitica',
    title: 'Skillion frente a Habitica: cuál elegir en 2026',
    excerpt:
      'Las dos convierten tus hábitos en un RPG, pero apuestan por cosas distintas. Comparativa honesta desde dentro, incluyendo dónde Habitica es mejor.',
    tldr:
      'Habitica es más juego y más social, pero tienes que aprenderte oro, gemas y daño antes de tu primera tarea. Skillion es más ligera: te inventas tus habilidades y colocas cada tarea en su hora del día. Si quieres empezar hoy sin leerte un wiki, Skillion.',
    faq: [
      {
        q: '¿Habitica es gratis?',
        a: 'Sí. Habitica es gratuita y de código abierto, con una suscripción opcional que da gemas y extras cosméticos. Skillion también tiene un plan gratuito con lo esencial y una suscripción para lo avanzado. En ninguna de las dos hace falta pagar para usar el núcleo.',
      },
      {
        q: '¿Puedo migrar mis hábitos de Habitica a Skillion?',
        a: 'No hay importador automático hoy. Habitica permite exportar tus datos en JSON desde los ajustes de la web, pero Skillion todavía no lee ese formato: tendrías que recrear las tareas a mano. Si vienes con veinte hábitos, aprovecha para quedarte con los cinco que de verdad haces.',
      },
      {
        q: '¿Cuál es mejor para empezar de cero?',
        a: 'Skillion tiene menos curva: creas tres habilidades y empiezas. Habitica pide entender antes hábitos, diarias, pendientes, daño, oro, gemas y equipo, y esa carga inicial es la queja más repetida de quien la abandona la primera semana.',
      },
      {
        q: '¿La gamificación funciona de verdad o es un truco?',
        a: 'Alguien juntó los estudios que hay y sale que sí, pero depende muchísimo de la persona y de para qué. Te ayuda a aguantar algo que ya querías hacer, y no vuelve interesante algo que te da igual.',
      },
    ],
    body: `Habitica me duró once días. Me creé el personaje, me leí media wiki, y a la segunda semana estaba gestionando oro y gemas en vez de ir al gimnasio.

Eso fue en 2023 y es una de las razones por las que existe Skillion.

Si buscas "alternativas a Habitica" es porque te pasó algo parecido: **algo te enganchó y algo te echó para atrás, y suele ser lo mismo las dos veces.** Es un juego de verdad, con lo bueno y lo pesado que eso trae.

Yo hago Skillion, así que ya sabes por dónde tiro. Aun así aquí hay un apartado entero con lo que Habitica tiene y Skillion no.

## 1 · En qué se parecen

Las dos salen del mismo problema: **una lista de tareas no te enseña lo que llevas hecho.** Marcas la casilla, se pone gris, desaparece.

Las dos lo arreglan igual: cumplir una tarea da puntos, los puntos suben de nivel y el nivel enseña algo que antes no se veía. Las dos tienen personaje, rachas, tareas que se repiten, y son gratis en lo básico. Habitica además tiene versión web; Skillion está en iOS y Android.

## 2 · Qué tiene Habitica que Skillion no

Es más juego. Lleva desde 2013 y se nota: mascotas, monturas, armaduras que cambian tus estadísticas, clases de personaje y misiones con jefes finales. Skillion deja fuera esa capa a propósito, porque es la que tienes que entender antes de tachar tu primera tarea.

Lo social, que es su mejor pieza. Montas un grupo con amigos y peleáis contra un jefe común: si uno no cumple, el jefe os pega a todos. Esa presión funciona. Skillion hoy la juegas por tu cuenta.

Es de código abierto. [El código está publicado](https://github.com/HabitRPG/habitica) y cualquiera puede mirar qué hace con sus datos. Skillion es cerrada, como casi todas las apps que abres a diario.

:::tip
Si lo que te falta para cumplir es que alguien lo note, los grupos de Habitica van a por eso, y es lo único de esta lista que Skillion hoy no tiene.
:::

## 3 · Qué hace mejor Skillion

Las habilidades te las inventas tú. En Habitica tu personaje tiene clases y estadísticas de juego. En Skillion decides qué habilidades existen en tu vida, "Fuerza", "Cocina", "Alemán", y cada tarea reparte sus puntos entre las que elijas. Lo que sube es tuyo, no del juego.

Planificas el día, no solo lo apuntas. Cada tarea va en una franja horaria, las que no se mueven las clavas como rocas, y el resto se recoloca alrededor. Si te da pereza colocarlas, se lo dictas a la Planificación mágica y te deja el día en bloques.

> Habitica te dice lo que te falta. Skillion te dice a qué hora lo vas a hacer.

De todo lo que se ha probado para que la gente cumpla, decidir de antemano cuándo y dónde es de lo que mejor funciona en los estudios.

Empezar cuesta menos. Tres habilidades y estás dentro. El widget de la pantalla de inicio te enseña lo de hoy sin abrir la app.

No te castiga si tú no quieres. En Habitica, fallar hiere a tu personaje y puede perjudicar a tu grupo. A mucha gente le va bien. A otra le da ansiedad y deja de abrir la app.

En Skillion perder una racha se ve, pero no te quita ni un punto. La penalización existe, y la activas tú tarea por tarea si la quieres.

Hay bastantes estudios sobre premios y castigos que apuntan a lo mismo: cuando el premio se vuelve muy controlador, sustituye tu motivo original por el suyo. **Un sistema que castiga empuja fuerte al principio y deja de funcionar cuando el castigo deja de doler.**

## 4 · Cuál te conviene

| Si... | Elige |
| --- | --- |
| Quieres planificar el día, no solo apuntarlo | Skillion |
| Quieres inventarte tus propias habilidades | Skillion |
| Has dejado apps por sentirte castigado | Skillion |
| Quieres empezar hoy sin leerte un wiki antes | Skillion |
| Te apetece aprenderte oro, gemas y daño a cambio de mascotas y armaduras | Habitica |
| Necesitas que un grupo te vea fallar para cumplir | Habitica |

## 5 · La respuesta aburrida

Las dos son gratis en lo básico. Dale una semana a Skillion con tres tareas y mira si sigues abriéndola el día ocho. Esa es la prueba que importa.

Ninguna app te crea un hábito. Hay un estudio que siguió a gente montando hábitos de verdad: a la mitad le costó unos 66 días, con mucha diferencia entre personas, de 18 días a más de 250.

Lo que hace una app es que esos dos meses se te hagan más cortos. Para eso necesitas abrirla sin pensar y que el día tenga hueco para lo que te has propuesto. Ahí Skillion saca ventaja: empiezas en un minuto y cada tarea tiene su hora.`,
  },

  en: {
    slug: 'skillion-vs-habitica',
    title: 'Skillion vs Habitica: which one to pick in 2026',
    excerpt:
      'Both turn your habits into an RPG, but they bet on different things. An honest comparison from the inside, including where Habitica wins.',
    tldr:
      'Habitica is more game and more social, but you have to learn gold, gems and damage before your first task. Skillion is lighter: you invent your own skills and give every task an hour in the day. If you want to start today without reading a wiki, Skillion.',
    faq: [
      {
        q: 'Is Habitica free?',
        a: 'Yes. Habitica is free and open source, with an optional subscription for gems and cosmetic extras. Skillion also has a free tier with the essentials and a subscription for the advanced features. Neither one charges you for the core.',
      },
      {
        q: 'Can I migrate my habits from Habitica to Skillion?',
        a: 'There is no automatic importer today. Habitica lets you export your data as JSON from the web settings, but Skillion cannot read that format yet, so you would recreate tasks by hand. If you are coming with twenty habits, use it as a chance to keep the five you actually do.',
      },
      {
        q: 'Which is better to start from scratch?',
        a: 'Skillion has less of a learning curve: create three skills and go. Habitica asks you to understand habits, dailies, to-dos, damage, gold, gems and gear first, and that upfront load is the most common complaint from people who quit in week one.',
      },
      {
        q: 'Does gamification actually work, or is it a gimmick?',
        a: 'Someone gathered up the studies and the answer is yes, but it depends enormously on the person and on what for. It helps you stick with something you already wanted to do, and does not make something you do not care about interesting.',
      },
    ],
    body: `Habitica lasted me eleven days. I made the character, read half the wiki, and by week two I was managing gold and gems instead of going to the gym.

That was 2023 and it is one of the reasons Skillion exists.

If you are searching for "Habitica alternatives", something similar happened to you: **something hooked you and something pushed you away, and it is usually the same thing both times.** It is a real game, with everything good and everything heavy that brings.

I make Skillion, so you know which way I lean. You will still find a whole section here on what Habitica has that Skillion does not.

## 1 · Where they overlap

Both come from the same problem: **a to-do list never shows you what you have built.** You tick the box, it goes grey, it vanishes.

Both fix it the same way: finishing a task earns points, points raise your level, and the level shows something that was invisible before. Both have a character, streaks, repeating tasks, and both are free at the core. Habitica also has a web version; Skillion is on iOS and Android.

## 2 · What Habitica has that Skillion does not

It is more of a game. It has been running since 2013 and it shows: pets, mounts, armour that changes your stats, character classes and quests with bosses at the end. Skillion leaves that layer out on purpose, because it is the one you have to understand before ticking your first task.

The social side, which is its best piece. You form a party with friends and fight a shared boss: if one of you skips, the boss hits everybody. That pressure works. Skillion today you play on your own.

It is open source. [The code is published](https://github.com/HabitRPG/habitica) and anyone can look at what it does with their data. Skillion is closed, like almost every app you open daily.

:::tip
If the missing piece for you is someone noticing, Habitica's parties go straight at that, and it is the one thing on this list that Skillion does not have today.
:::

## 3 · What Skillion does better

You invent the skills yourself. In Habitica your character has classes and game stats. In Skillion you decide which skills exist in your life, "Strength", "Cooking", "German", and every task splits its points across the ones you pick. What goes up is yours, not the game's.

You plan the day rather than just logging it. Each task goes on a slot, the immovable ones get pinned as rocks, and the rest shuffle around them. If placing them feels like a chore, you dictate your day to Magic planning and it lays it out in blocks.

> Habitica tells you what you are missing. Skillion tells you what time you are doing it.

Out of everything anyone has tested to get people to follow through, deciding the when and the where in advance is one of the things that comes out best in the studies.

Starting costs less. Three skills and you are in. The home screen widget shows you today without opening the app.

It does not punish you unless you want it to. In Habitica, missing hurts your character and can hurt your group. Plenty of people thrive on that. Others get anxious and stop opening the app.

In Skillion losing a streak shows, but it does not take a single point off you. The penalty exists, and you turn it on task by task if you want it.

There is a decent pile of research on rewards and punishments pointing the same way: when the reward gets too controlling, it replaces your original reason with its own. **A system that punishes pushes hard early and stops working when the punishment stops stinging.**

## 4 · Which one is for you

| If you... | Pick |
| --- | --- |
| Want to plan the day, not just log it | Skillion |
| Want to invent your own skills | Skillion |
| Have quit apps because they made you feel punished | Skillion |
| Want to start today without reading a wiki first | Skillion |
| Fancy learning gold, gems and damage in exchange for pets and armour | Habitica |
| Need a group watching you slip in order to follow through | Habitica |

## 5 · The boring answer

Both are free at the core. Give Skillion a week with three tasks and see whether you still open it on day eight. That is the test that matters.

No app builds a habit for you. One study followed people building real habits: half of them took around 66 days, with a big gap between individuals, from 18 days to over 250.

What an app does is make those two months feel shorter. For that you need to open it without thinking and a day with room for what you set out to do. That is where Skillion pulls ahead: you start in a minute and every task has its hour.`,
  },
};
