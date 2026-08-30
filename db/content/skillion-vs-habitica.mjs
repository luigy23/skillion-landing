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
      'Habitica es más profunda como juego y más social: fiestas cooperativas, gremios, mascotas, equipo, y todo el código abierto. Skillion es más ligera y está pensada para el día a día: planificas el día por bloques, las tareas se sincronizan entre dispositivos y el sistema de skills lo defines tú. Si quieres un RPG completo con comunidad, Habitica. Si quieres gamificación que no te dé más trabajo que la propia tarea, Skillion.',
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
        a: 'La revisión de literatura de Hamari y sus colegas sobre estudios empíricos de gamificación encuentra efectos positivos, pero muy dependientes del contexto y de quién la usa. Traducido: ayuda a sostener algo que ya querías hacer, no convierte en interesante algo que te da igual.',
      },
    ],
    body: `Si buscas "alternativas a Habitica" es porque algo de Habitica te atrajo y algo te echó atrás. Suele ser lo mismo en los dos casos: **es un juego de verdad**, con su profundidad y con su carga.

Construyo Skillion, así que tengo un sesgo evidente. Por eso este artículo dedica un apartado entero a lo que Habitica hace mejor, y no es cortesía: si eres de las personas que describo ahí, Habitica te va a servir más y no tiene sentido que pierdas dos semanas descubriéndolo.

## 1 · ¿En qué se parecen?

Las dos parten de la misma idea: una lista de tareas no comunica progreso. Marcas una casilla, se pone gris y desaparece. No hay memoria de lo que llevas hecho ni curva que mirar.

Las dos lo resuelven igual: completar una tarea da experiencia, la experiencia sube niveles, y los niveles hacen visible algo que antes no se veía. Las dos tienen avatar, rachas, tareas recurrentes, versión de móvil y web o widget, y las dos son gratis en su núcleo.

Ahí se acaba el parecido.

## 2 · ¿Qué hace mejor Habitica?

**Es un juego más completo, sin discusión.** Lleva desde 2013 y se nota: mascotas que crías, monturas, equipo que cambia tus estadísticas, clases de personaje, misiones con jefes. Skillion no tiene nada de eso y no lo va a tener a corto plazo.

**Lo social, que es su mejor pieza.** Puedes montar una fiesta con amigos y pelear contra un jefe común: si alguien no cumple sus tareas del día, el jefe hace daño a todo el grupo. Esa presión social funciona y funciona bien, sobre todo si te cuesta rendir cuentas ante ti mismo. Skillion hoy es una experiencia individual.

**Es código abierto.** [El repositorio está publicado](https://github.com/HabitRPG/habitica) y cualquiera puede auditar qué hace la app con sus datos, contribuir o levantar su propia instancia. Skillion es cerrada. Si eso te importa, es un punto que no puedo rebatir.

**Comunidad y gremios.** Hay gremios activos por temas, retos compartidos y un wiki enorme escrito por usuarios. Ese ecosistema tarda años en construirse.

:::tip
Si lo que te falta para cumplir es que alguien lo note, Habitica te va a servir más que Skillion. Su sistema de fiestas resuelve justo eso.
:::

## 3 · ¿Qué hace mejor Skillion?

**Las skills las defines tú.** En Habitica tu personaje tiene clases y estadísticas del juego. En Skillion decides qué habilidades existen en tu vida —"Fuerza", "Cocina", "Alemán"— y cada tarea reparte experiencia entre las que tú elijas. El progreso mide algo tuyo, no algo del juego.

**Planificas el día, no solo lo registras.** Skillion trae Time Blocking: colocas las tareas en una franja horaria, fijas como "rocas" las que no se mueven y el resto se reorganiza sola alrededor. Habitica te dice qué te falta; Skillion te dice cuándo lo vas a hacer. Esa diferencia importa porque la intención de implementación —decidir *cuándo y dónde* antes de que llegue el momento— es de las intervenciones con más respaldo empírico en formación de hábitos.

**Se sincroniza sin fricción.** Las tareas viajan entre tus dispositivos y el widget de la pantalla de inicio enseña lo de hoy sin abrir la app. Puedes marcar hecha una tarea desde el widget.

**Cuesta menos empezar.** Tres skills y ya estás dentro. No hay que entender oro, gemas, daño ni equipo antes de tu primera tarea.

**No te castiga.** En Habitica, no cumplir hace daño a tu personaje y puede afectar a tu fiesta. Es su mecánica central y a mucha gente le funciona. A otra le genera lo contrario: ansiedad, y luego evitación de la app. Skillion no tiene penalización por daño. Perder una racha se nota, pero no te quita nada de lo ganado.

Ese último punto no es una preferencia estética. El meta-análisis de Deci, Koestner y Ryan sobre recompensas externas encontró que las recompensas contingentes y controladoras tienden a **erosionar la motivación intrínseca**, justo la que hace falta para sostener algo durante meses. Un sistema que castiga empuja fuerte al principio y se desinfla cuando el castigo deja de doler.

## 4 · ¿Cuál te conviene?

| Si... | Elige |
| --- | --- |
| Quieres un RPG de verdad, con mascotas, equipo y misiones | Habitica |
| Necesitas que otros vean si cumples | Habitica |
| Te importa el código abierto y auditar tus datos | Habitica |
| Quieres planificar el día por bloques, no solo apuntarlo | Skillion |
| Quieres definir tus propias habilidades | Skillion |
| Has abandonado apps por sentirte castigado | Skillion |
| Quieres empezar hoy sin leer un wiki | Skillion |

## 5 · La respuesta aburrida

Las dos son gratis en su núcleo. Instala las dos, dedica una semana a cada una con **las mismas tres tareas** y quédate con la que sigas abriendo el día ocho.

Ninguna app crea un hábito. El estudio de Lally y su equipo, que siguió a personas formando hábitos reales, encontró una mediana de unos 66 días hasta que el comportamiento se automatiza, con una variación enorme entre personas: de 18 días a más de 250. Lo que hace una app es que esos dos meses se te hagan más cortos. La que consiga eso contigo es la buena, la firme yo o no.`,
  },

  en: {
    slug: 'skillion-vs-habitica',
    title: 'Skillion vs Habitica: which one to pick in 2026',
    excerpt:
      'Both turn your habits into an RPG, but they bet on different things. An honest comparison from the inside, including where Habitica wins.',
    tldr:
      'Habitica is the deeper game and the more social one: co-op parties, guilds, pets, gear, and all of it open source. Skillion is lighter and built for the everyday: you plan your day in blocks, tasks sync across devices, and you define the skill system yourself. Want a full RPG with a community, pick Habitica. Want gamification that is not more work than the task itself, pick Skillion.',
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
        a: 'Hamari and colleagues reviewed the empirical studies on gamification and found positive effects that depend heavily on context and on who is using it. Translated: it helps you sustain something you already wanted to do. It does not make something you do not care about interesting.',
      },
    ],
    body: `If you are searching for "Habitica alternatives", something about Habitica pulled you in and something pushed you away. It is usually the same thing both times: **it is a real game**, with the depth and the overhead that implies.

I build Skillion, so my bias is obvious. That is why there is a whole section here on what Habitica does better, and it is not politeness: if you are the person I describe there, Habitica will serve you better and there is no point spending two weeks finding that out.

## 1 · Where they overlap

Both start from the same observation: a to-do list does not communicate progress. You tick a box, it goes grey, it disappears. No memory of what you have done, no curve to look at.

Both solve it the same way: finishing a task grants experience, experience raises levels, and levels make visible something that was invisible before. Both have an avatar, streaks, recurring tasks, mobile plus web or widget, and both are free at the core.

That is where the overlap ends.

## 2 · What Habitica does better

**It is the more complete game, no argument.** It has been running since 2013 and it shows: pets you raise, mounts, gear that changes your stats, character classes, boss quests. Skillion has none of that and will not have it any time soon.

**The social layer, which is its best piece.** You can form a party with friends and fight a shared boss: if someone skips their dailies, the boss damages the whole group. That social pressure works, especially if holding yourself accountable is the part you struggle with. Skillion today is a solo experience.

**It is open source.** [The repository is public](https://github.com/HabitRPG/habitica), so anyone can audit what the app does with their data, contribute, or self-host. Skillion is closed. If that matters to you, it is a point I cannot argue with.

**Community and guilds.** There are active topic guilds, shared challenges and a huge user-written wiki. That ecosystem takes years to build.

:::tip
If the missing ingredient for you is someone noticing whether you follow through, Habitica will serve you better than Skillion. Its party system solves exactly that.
:::

## 3 · What Skillion does better

**You define the skills.** In Habitica your character has classes and game stats. In Skillion you decide which abilities exist in your life — "Strength", "Cooking", "German" — and every task splits its experience across the ones you pick. Progress measures something of yours, not something of the game's.

**You plan the day, not just log it.** Skillion has Time Blocking: you place tasks on a time slot, pin the immovable ones as "rocks", and the rest reshuffle around them. Habitica tells you what is outstanding; Skillion tells you when you are doing it. That difference matters because implementation intentions — deciding *when and where* before the moment arrives — are among the best-supported interventions in habit research.

**It syncs without friction.** Tasks travel across your devices, and the home-screen widget shows today without opening the app. You can complete a task straight from the widget.

**It costs less to start.** Three skills and you are in. No gold, gems, damage or gear to understand before your first task.

**It does not punish you.** In Habitica, missing a daily damages your character and can hurt your party. That is its central mechanic and it works for plenty of people. For others it produces the opposite: anxiety, then avoidance of the app itself. Skillion has no damage penalty. Losing a streak is visible, but it does not take away what you earned.

That last point is not an aesthetic preference. The Deci, Koestner and Ryan meta-analysis on extrinsic rewards found that contingent, controlling rewards tend to **erode intrinsic motivation** — the exact kind you need to sustain something for months. A system that punishes pushes hard early and deflates once the punishment stops stinging.

## 4 · Which one is for you

| If you... | Pick |
| --- | --- |
| Want a real RPG with pets, gear and quests | Habitica |
| Need other people to see whether you follow through | Habitica |
| Care about open source and auditing your data | Habitica |
| Want to plan the day in blocks, not just log it | Skillion |
| Want to define your own skills | Skillion |
| Have quit apps because they made you feel punished | Skillion |
| Want to start today without reading a wiki | Skillion |

## 5 · The boring answer

Both are free at the core. Install both, spend a week on each with **the same three tasks**, and keep the one you still open on day eight.

No app creates a habit. The Lally study, which followed people forming real habits, found a median of about 66 days before a behaviour becomes automatic, with enormous variation between people: from 18 days to over 250. What an app does is make those two months feel shorter. Whichever one does that for you is the right one, whether I built it or not.`,
  },
};
