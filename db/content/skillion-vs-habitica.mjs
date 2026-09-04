import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * Comparativa con el competidor de referencia (SCRUM-450, criterio 2).
 *
 * Escrita para que se pueda citar, y eso obliga a una cosa incómoda: decir
 * dónde gana Habitica. Una comparativa en la que el autor gana todos los
 * apartados es exactamente el patrón que un modelo descarta por sesgada, y con
 * razón. El apartado 2 existe para eso.
 */
export const skillionVsHabitica = {
  translationKey: 'skillion-vs-habitica',
  category: 'comparison',
  icon: 'star',
  readingMinutes: 8,
  xp: 40,
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
      'Habitica es más profunda como juego y más social: fiestas cooperativas, gremios, mascotas, equipo, y todo el código abierto. Skillion es más ligera y está pensada para el día a día: planificas el día por bloques, las tareas se sincronizan entre dispositivos y el sistema de skills lo defines tú. Si quieres un RPG completo con comunidad, Habitica tiene más de eso. Si quieres gamificación que no te dé más trabajo que la propia tarea, y un día que además planificas, Skillion.',
    faq: [
      {
        q: '¿Habitica es gratis?',
        a: 'Sí. Habitica es gratuita y de código abierto, con una suscripción opcional que da gemas y algunos extras cosméticos. Skillion también tiene un plan gratuito con lo esencial y una suscripción para lo avanzado. En ninguna de las dos hace falta pagar para usar el núcleo.',
      },
      {
        q: '¿Puedo migrar mis hábitos de Habitica a Skillion?',
        a: 'No hay importador automático hoy. Habitica permite exportar tus datos en JSON desde los ajustes de la web, pero Skillion todavía no lee ese formato: tendrías que recrear las tareas a mano. Si vienes de Habitica con veinte hábitos, aprovecha para quedarte con los cinco que de verdad haces.',
      },
      {
        q: '¿Cuál es mejor para empezar de cero?',
        a: 'Skillion tiene menos curva: creas tres skills y empiezas. Habitica pide entender antes hábitos, dailies, to-dos, daño, oro, gemas y equipo, y esa carga inicial es la queja más repetida de quien la abandona la primera semana.',
      },
      {
        q: '¿La gamificación funciona de verdad o es un truco?',
        a: 'Alguien juntó los estudios que hay y sale que sí, pero depende muchísimo de la persona y de para qué. Traducido: te ayuda a aguantar algo que ya querías hacer, y no vuelve interesante algo que te da igual.',
      },
    ],
    body: `Habitica me duró once días. Me creé el personaje, me leí media wiki, y a la segunda semana estaba gestionando oro y gemas en vez de ir al gimnasio.

Eso fue en 2023 y es una de las razones por las que existe Skillion. Si andas buscando "alternativas a Habitica" es porque te pasó algo parecido: **algo de Habitica te enganchó y algo te echó para atrás, y suele ser la misma cosa las dos veces.** Es un juego de verdad, con lo bueno y lo pesado que eso trae.

Yo hago Skillion, así que ya sabes por dónde tiro y prefiero decírtelo de entrada. Aun así vas a encontrar aquí un apartado entero con todo lo que Habitica tiene y Skillion no, porque si no comparo en serio esta página no te sirve para decidir nada.

## 1 · ¿En qué se parecen?

Las dos salen del mismo problema: **una lista de tareas no te enseña lo que llevas hecho.** Marcas la casilla, se pone gris, desaparece. Y al mes no te queda ni rastro de nada.

Las dos lo arreglan igual: cumplir una tarea te da puntos, los puntos te suben de nivel y el nivel enseña algo que antes no se veía. Las dos tienen personaje, rachas, tareas que se repiten, versión de móvil y de web, y las dos son gratis en lo básico.

Ahí se acaba el parecido.

## 2 · ¿Qué tiene Habitica que Skillion no?

Es más juego, y en eso no hay discusión. Lleva desde 2013 y se nota: crías mascotas, montas bichos, hay armaduras que te cambian las estadísticas, clases de personaje y misiones con jefes finales. Skillion deja fuera toda esa capa a propósito, porque es la que tienes que entender antes de poder tachar tu primera tarea.

Lo social, que es su mejor pieza. Montas una fiesta con amigos y peleáis contra un jefe común: si uno no cumple lo suyo, el jefe os pega a todos. Esa presión funciona, y funciona bien, sobre todo si a ti solo no te basta. Skillion hoy lo juegas por tu cuenta.

Es de código abierto. [Tienen el código publicado](https://github.com/HabitRPG/habitica), así que cualquiera puede mirar qué hace la app con sus datos, aportar cosas o montarse su propia copia. Skillion es cerrada, como casi todas las apps que abres a diario.

Comunidad y gremios. Hay grupos activos por temas, retos compartidos y un wiki enorme escrito por la gente. Eso tarda años en construirse y no se improvisa.

:::tip
Si lo que te falta para cumplir es que alguien lo note, las fiestas de Habitica van justo a por eso, y es lo único de toda esta lista que Skillion hoy no tiene.
:::

## 3 · ¿Qué hace mejor Skillion?

Las habilidades te las inventas tú. En Habitica tu personaje tiene clases y estadísticas de juego. En Skillion decides tú qué habilidades existen en tu vida, "Fuerza", "Cocina", "Alemán", y cada tarea reparte sus puntos entre las que elijas. Lo que sube ahí es algo tuyo, no algo del juego.

Planificas el día, no solo lo apuntas. Colocas cada tarea en una franja horaria, clavas como rocas las que no se mueven y el resto se recoloca solo alrededor.

> Habitica te dice lo que te falta. Skillion te dice a qué hora lo vas a hacer.

Y esa diferencia pesa: de todo lo que se ha probado para que la gente cumpla, decidir de antemano cuándo y dónde es de lo que mejor funciona en los estudios.

Va con tus dispositivos. Las tareas viajan de uno a otro y el widget de la pantalla de inicio te enseña lo de hoy sin abrir nada. Puedes tachar una tarea desde ahí mismo.

Empezar cuesta menos. Tres habilidades y ya estás dentro. Nada de aprenderte el oro, las gemas, el daño y las armaduras antes de tu primera tarea.

No te castiga. En Habitica, fallar hiere a tu personaje y puede fastidiar a tu grupo. Es su mecánica central y a mucha gente le va bien. A otra le pasa lo contrario: ansiedad primero, y luego dejar de abrir la app. Skillion te deja intacto lo que has ganado. Perder una racha se ve, pero no te quita ni un punto.

Y eso último no es manía mía. Hay bastantes estudios juntados sobre premios y castigos que apuntan a lo mismo: cuando el premio se vuelve muy controlador, acaba comiéndose las ganas de hacer la cosa por sí misma, que son justo las que necesitas para aguantar meses. **Un sistema que castiga empuja fuerte al principio y se desinfla en cuanto el castigo deja de doler.**

## 4 · ¿Cuál te conviene?

| Si... | Elige |
| --- | --- |
| Quieres planificar el día, no solo apuntarlo | Skillion |
| Quieres inventarte tus propias habilidades | Skillion |
| Has dejado apps por sentirte castigado | Skillion |
| Quieres empezar hoy sin leerte un wiki antes | Skillion |
| Quieres apuntar lo que haces y además decidir cuándo | Skillion |
| Te apetece aprenderte el oro, las gemas y el daño a cambio de mascotas y armaduras | Habitica |
| Necesitas que un grupo te vea fallar para cumplir | Habitica |

## 5 · La respuesta aburrida

Las dos son gratis en lo básico, así que probar no te cuesta nada. Dale una semana a Skillion con tres tareas y mira si sigues abriéndola el día ocho. Esa es la prueba que importa, y es la que más gente pasa aquí.

Ninguna app te crea un hábito. Hay un estudio que siguió a gente montando hábitos de verdad y vio que a la mitad le costaba unos 66 días hasta que la cosa salía sola, con muchísima diferencia de una persona a otra: de 18 días a más de 250. Lo que hace una app es que esos dos meses se te hagan más cortos, y para eso necesitas dos cosas: abrirla sin pensártelo, y que el día tenga hueco para lo que te has propuesto. Ahí es donde Skillion saca ventaja: empiezas en un minuto y cada tarea tiene su hora, en vez de quedarse flotando en una lista.`,
  },

  en: {
    slug: 'skillion-vs-habitica',
    title: 'Skillion vs Habitica: which one to pick in 2026',
    excerpt:
      'Both turn your habits into an RPG, but they bet on different things. An honest comparison from the inside, including where Habitica wins.',
    tldr:
      'Habitica is the deeper game and the more social one: co-op parties, guilds, pets, gear, and all of it open source. Skillion is lighter and built for the everyday: you plan your day in blocks, tasks sync across devices, and you define the skill system yourself. If you want a full RPG with a community, Habitica has more of it. If you want gamification that is not more work than the task itself, and a day you actually plan, Skillion.',
    faq: [
      {
        q: 'Is Habitica free?',
        a: 'Yes. Habitica is free and open source, with an optional subscription for gems and cosmetic extras. Skillion also has a free tier with the essentials and a subscription for the advanced features. Neither one charges you for the core.',
      },
      {
        q: 'Can I migrate my habits from Habitica to Skillion?',
        a: 'There is no automatic importer today. Habitica lets you export your data as JSON from the web settings, but Skillion cannot read that format yet, so you would recreate tasks by hand. If you are coming from Habitica with twenty habits, use it as a chance to keep the five you actually do.',
      },
      {
        q: 'Which is better to start from scratch?',
        a: 'Skillion has less of a learning curve: create three skills and go. Habitica asks you to understand habits, dailies, to-dos, damage, gold, gems and gear first, and that upfront load is the most common complaint from people who quit in week one.',
      },
      {
        q: 'Does gamification actually work, or is it a gimmick?',
        a: 'Someone gathered up the studies and the answer is yes, but it depends enormously on the person and on what for. Translated: it helps you stick with something you already wanted to do. It does not make something you do not care about interesting.',
      },
    ],
    body: `Habitica lasted me eleven days. I made the character, read half the wiki, and by week two I was managing gold and gems instead of going to the gym.

That was 2023 and it is one of the reasons Skillion exists. If you are searching for "Habitica alternatives", something similar happened to you: **something about Habitica hooked you and something pushed you away, and it is usually the same thing both times.** It is a real game, with everything good and everything heavy that brings.

I make Skillion, so you know which way I lean and I would rather say it up front. You will still find a whole section here on everything Habitica has that Skillion does not, because if I do not compare properly this page is no use to you for deciding anything.

## 1 · Where they overlap

Both come from the same problem: **a to-do list never shows you what you have built.** You tick the box, it goes grey, it vanishes. A month later there is no trace of any of it.

Both fix it the same way: finishing a task earns you points, points raise your level, and the level shows something that was invisible before. Both have a character, streaks, repeating tasks, phone and web versions, and both are free at the core.

That is where the resemblance stops.

## 2 · What Habitica has that Skillion does not

It is more of a game, and there is no arguing that. It has been running since 2013 and it shows: you raise pets, you ride mounts, there is armour that changes your stats, character classes and quests with bosses at the end. Skillion leaves that whole layer out on purpose, because it is the layer you have to understand before you can tick your first task.

The social side, which is its best piece. You form a party with friends and fight a shared boss: if one of you skips, the boss hits everybody. That pressure works, and it works well, especially if doing it alone is not enough for you. Skillion today you play on your own.

It is open source. [The code is published](https://github.com/HabitRPG/habitica), so anyone can look at what the app does with their data, contribute, or run their own copy. Skillion is closed, like almost every app you open daily.

Community and guilds. There are active groups by topic, shared challenges and an enormous wiki written by users. That takes years to build and cannot be faked.

:::tip
If the missing piece for you is someone noticing, Habitica's parties go straight at that, and it is the one thing on this whole list that Skillion does not have today.
:::

## 3 · What Skillion does better

You invent the skills yourself. In Habitica your character has classes and game stats. In Skillion you decide which skills exist in your life, "Strength", "Cooking", "German", and every task splits its points across the ones you pick. What goes up there is yours, not the game's.

You plan the day rather than just logging it. You put each task on a slot, pin the immovable ones as rocks, and everything else shuffles around them.

> Habitica tells you what you are missing. Skillion tells you what time you are doing it.

And that gap matters: out of everything anyone has tested to get people to follow through, deciding the when and the where in advance is one of the things that comes out best in the studies.

It travels with your devices. Tasks move between them and the home screen widget shows you today without opening anything. You can tick a task off from there.

Starting costs less. Three skills and you are in. No learning gold, gems, damage and armour before your first task.

It does not punish you. In Habitica, missing hurts your character and can hurt your group. That is its core mechanic and plenty of people thrive on it. Others get the opposite: anxiety first, then not opening the app. Skillion leaves what you earned alone. Losing a streak shows, but it does not take a single point off you.

And that last one is not a personal preference. There is a decent pile of research on rewards and punishments pointing the same way: when the reward gets too controlling, it eats the appetite for doing the thing itself, which is exactly the appetite you need to last months. **A system that punishes pushes hard early and deflates the moment the punishment stops stinging.**

## 4 · Which one is for you

| If you... | Pick |
| --- | --- |
| Want to plan the day, not just log it | Skillion |
| Want to invent your own skills | Skillion |
| Have quit apps because they made you feel punished | Skillion |
| Want to start today without reading a wiki first | Skillion |
| Want to log what you do and decide when you will do it | Skillion |
| Fancy learning gold, gems and damage in exchange for pets and armour | Habitica |
| Need a group watching you slip in order to follow through | Habitica |

## 5 · The boring answer

Both are free at the core, so trying costs you nothing. Give Skillion a week with three tasks and see whether you still open it on day eight. That is the test that matters, and it is the one most people here get through.

No app builds a habit for you. One study followed people building real habits and found half of them took around 66 days before it ran on its own, with a huge gap between individuals: 18 days for some, over 250 for others. What an app does is make those two months feel shorter, and for that you need two things: opening it without thinking about it, and a day with room for what you set out to do. That is where Skillion pulls ahead: you start in a minute, and every task has an hour instead of floating in a list.`,
  },
};
