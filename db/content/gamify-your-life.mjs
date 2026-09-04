import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Cómo gamificar tu vida" — el artículo pilar del concepto.
 *
 * Existe porque los demás atacan comparativa, ciencia, datos y cómo usar la
 * app, y ninguno atacaba la consulta raíz. En inglés el hueco era todavía más
 * claro: "gamify your life" no aparecía en ninguna página del sitio.
 *
 * Arranca con el origen real de Skillion: Luigy vio el sistema de habilidades
 * de Los Sims (una barra por habilidad que sube al practicarla) y quiso eso
 * para la vida real. Se nombra el juego como inspiración, sin usarlo de
 * reclamo.
 *
 * Vocabulario alineado con la app: "tarea" (no "misión"), "habilidad" (no
 * "categoría", que en la app es otra cosa). Acortado en septiembre de 2026 a
 * petición del jefe: los posts largos no se leen.
 */
export const gamifyYourLife = {
  translationKey: 'gamify-your-life',
  category: 'how-to',
  icon: 'map',
  readingMinutes: 4,
  xp: 20,
  featured: false,
  publishedAt: '2026-09-03',
  author: AUTHORS.luigy,
  sources: [SOURCES.hamari2014, SOURCES.deci1999, SOURCES.gollwitzer2006, SOURCES.lally2010],

  es: {
    slug: 'como-gamificar-tu-vida',
    title: 'Cómo gamificar tu vida sin dejarlo a la tercera semana',
    excerpt:
      'Qué es de verdad gamificar tu vida, las cuatro piezas que necesita cualquier sistema para aguantar, y por qué la mayoría se cae al mes.',
    tldr:
      'Gamificar tu vida es ponerle un marcador a lo que ya haces. Necesita cuatro piezas: puntos que signifiquen algo, habilidades que digan quién quieres ser, tareas que quepan en tu peor día y una vista del avance. Se cae por dos cosas: castigarte, y empezar con quince.',
    faq: [
      {
        q: '¿Qué significa gamificar tu vida?',
        a: 'Ponerle a lo que ya haces las piezas que hacen que un videojuego enganche: puntos por cumplir, habilidades que suben de nivel y una vista de lo que llevas acumulado. No convierte tu vida en un juego. Le pone al esfuerzo un marcador, que es lo que le falta a una lista de tareas.',
      },
      {
        q: '¿Puedo gamificar mi vida sin una app?',
        a: 'Sí, y es la mejor forma de empezar. Un cuaderno con tres habilidades, unos puntos por tarea y una hoja al mes te da la mayor parte del efecto. La app te ahorra la contabilidad y te enseña la curva, pero si el sistema no funciona en papel, tampoco va a funcionar en el móvil.',
      },
      {
        q: '¿Cuánto tardo en notar algo?',
        a: 'Lo de dentro se nota el primer día, porque ver el marcador moverse es inmediato. Lo de fuera tarda: a la mitad de la gente le cuesta unos dos meses que un hábito le salga sin pensar. La gracia de gamificarlo es que esos dos meses se te hagan más cortos.',
      },
      {
        q: '¿Esto funciona o es un truco de marketing?',
        a: 'Alguien juntó los estudios que hay y sale que sí, pero depende muchísimo de la persona y de para qué. Te ayuda a aguantar algo que ya querías hacer. No vuelve interesante algo que te da igual.',
      },
    ],
    body: `Skillion nació viendo Los Sims. Un personaje tenía habilidades, Cocina, Carisma, Lógica, y cada una con su barra. Practicaba y la barra subía. Yo llevaba años cocinando y no tenía barra.

Skillion es esa barra para la vida real: te inventas tus habilidades y cada tarea que cumples las sube. Eso es gamificar tu vida: **ponerle un marcador a lo que ya haces.** No es ponerse a jugar. Es dejar de esforzarte a ciegas.

## 1 · Qué es y qué no es

Lo que sí es: coger las piezas que hacen que un juego enganche y ponérselas a tu vida. Puntos cuando cumples, habilidades que suben de nivel, una vista de lo que llevas.

Lo que no es: hacer que fregar los platos sea divertido. No lo va a ser. Lo que cambia es que fregar cuenta para algo que puedes ver.

> Un juego te enseña tu progreso. Una lista de tareas te enseña tu deuda.

Marcas la casilla, se pone gris y desaparece. Solo queda a la vista lo que falta. Por eso una lista se abandona a las dos semanas aunque tú sigas siendo la misma persona.

## 2 · Las cuatro piezas

Da igual si lo montas en papel o en una app. Si falta una de estas cuatro, se cae.

### Puntos que signifiquen algo

Casi todos los sistemas caseros reparten puntos por igual: diez por los platos, diez por el gimnasio. A la semana sabes que no valen lo mismo y dejas de fiarte del marcador.

**Los puntos son tu presupuesto de motivación.** Gástalos en lo que te cuesta empezar. Lo que ya haces sin pensar vale poco.

### Habilidades que digan quién quieres ser

"Ir al gimnasio" es una tarea. "Fuerza" es una habilidad. Las tareas se terminan. Las habilidades se acumulan. Una barra que dice Fuerza nivel 7 cuenta algo que "he ido 21 veces" no cuenta.

Elige tres. Una que ya haces, una que empezaste y se cayó, y una que llevas tiempo evitando.

**Tres, no doce.** Doce barras a cero son doce recordatorios de lo que no estás haciendo.

### Tareas que quepan en tu peor día

La tarea diaria tiene que caber en el martes que llegas agotado, no en el domingo que te sobra tiempo.

"Leer 30 páginas" es de domingo. "Leer 10 minutos" es de martes a las 23:40. Y a esa hora es donde se decide si esto te dura.

Empieza pequeño y sube cuando te aburra. Subir es fácil. Resucitar algo que dejaste hace tres semanas, no.

### Una foto del avance

Si no te enseña una curva, es una lista con puntos. Una vez a la semana tienes que poder mirar atrás.

Con tres números basta: cuánto sumaste, cuántos días seguidos, qué habilidad se movió más.

## 3 · Montarlo en una tarde

Sin app, para empezar hoy:

1. Escribe tres habilidades. Con nombre de identidad, no de tarea.
2. A cada una ponle una tarea diaria que quepa en tu peor día.
3. Reparte puntos a ojo, más a lo que te cuesta.
4. Escribe ahora la versión mínima de cada tarea, con la cabeza fría.
5. Ponte una cita contigo el domingo, diez minutos, para mirar la semana.

Si el quinto paso no lo cumples, lo demás da igual. Sin mirar atrás no hay marcador.

:::tip
Escribe la versión mínima el día que estás motivado. Tu yo de las 23:40 no está para negociar, y es justo el que decide.
:::

## 4 · Por qué se cae la mayoría

Dos motivos, y los dos se ven venir.

**Empezar con quince.** A la mitad de la gente le cuesta unos dos meses que un hábito se haga sin pensar. Quince a la vez son quince esfuerzos caros durante meses. Se caen todos.

**Que el sistema te castigue.** Hay bastante investigación sobre premios y castigos, y es incómoda para media industria de apps, la mía incluida. Cuando el premio se vuelve muy controlador, sustituye tu motivo original por el suyo.

La señal es concreta: empiezas a evitar abrir la app. No por falta de tiempo. Porque abrirla es sentarte delante de una lista de reproches.

## 5 · Vivir la vida como un videojuego: la moda

Desde 2025, cuando un anime sobre subir de nivel se hizo muy popular, han salido decenas de apps que te dan un "sistema", un rango de la E a la S y misiones diarias. La estética es magnífica.

Lo que aciertan: el rango mide en quién te estás convirtiendo, y eso engancha más que un número de tareas.

Lo que fallan: **las tareas las pone el sistema, no tú.** Funciona tres semanas y se rompe el primer día que tu vida no encaja en la plantilla. Y el rango te baja justo el día que peor lo llevas.

Quédate la estética. Pero las tareas las pones tú, y nada puede bajarte por un martes malo.

## 6 · Con app o sin ella

En papel funciona. Lo que una app te ahorra es la contabilidad, que es lo primero que se abandona, y te dibuja la curva.

Si eliges una, mira dos cosas. Que las habilidades las definas tú, no una lista cerrada. Y que fallar no te quite lo ganado.

Yo hago Skillion, así que ya sabes de qué lado escribo. Va de esto: te inventas tus habilidades, cada tarea reparte puntos entre las que elijas, y colocas cada tarea en su hora del día. Yo el mío se lo dicto por la mañana a la Planificación mágica y me lo deja en bloques.

Dejar escrito de antemano el cuándo y el dónde es de lo que mejor sale en los estudios. Y "nunca encuentro el hueco" es la excusa más repetida que existe.

Pero si te lo montas en un cuaderno y te funciona, has ganado igual. Primero el sistema, después la herramienta.`,
  },

  en: {
    slug: 'how-to-gamify-your-life',
    title: 'How to gamify your life without quitting in your third week',
    excerpt:
      'What gamifying your life actually means, the four pieces any system needs to survive, and why most of them collapse within a month.',
    tldr:
      'Gamifying your life means putting a scoreboard on what you already do. It needs four pieces: points that mean something, skills that say who you want to be, tasks that fit your worst day, and a view of your progress. It fails for two reasons: punishing you, and starting fifteen things at once.',
    faq: [
      {
        q: 'What does it mean to gamify your life?',
        a: 'It means giving what you already do the pieces that make a video game stick: points for following through, skills that level up, and a view of what you have built up. It does not turn your life into a game. It puts a scoreboard on your effort, which is exactly what a to-do list is missing.',
      },
      {
        q: 'Can I gamify my life without an app?',
        a: 'Yes, and it is the best way to start. A notebook with three skills, some points per task and one page a month gets you most of the effect. An app saves you the bookkeeping and draws the curve for you, but if the system does not work on paper it will not work on your phone either.',
      },
      {
        q: 'How long before I notice anything?',
        a: 'The inside part lands on day one, because watching the scoreboard move is immediate. The outside part takes longer: half of people need around two months before a habit runs without thinking. The point of gamifying it is to make those two months feel shorter.',
      },
      {
        q: 'Does this actually work, or is it a marketing trick?',
        a: 'Someone gathered up the studies and the answer is yes, but it depends enormously on the person and on what for. It helps you stick with something you already wanted to do. It will not make something you do not care about interesting.',
      },
    ],
    body: `Skillion was born watching The Sims. A character had skills, Cooking, Charisma, Logic, each with its own bar. Practise and the bar went up. I had been cooking for years and had no bar.

Skillion is that bar for real life: you invent your skills and every task you finish raises them. That is gamifying your life: **putting a scoreboard on what you already do.** It is not about playing. It is about not working blind.

## 1 · What it is, and what it is not

What it is: taking the pieces that make a game stick and bolting them onto your life. Points when you follow through, skills that level up, a view of what you have built.

What it is not: making the washing up fun. It will not be. What changes is that the washing up now counts towards something you can see.

> A game shows you your progress. A to-do list shows you your debt.

You tick the box, it goes grey, it vanishes. The only thing left on screen is what is missing. That is why a list gets dropped after two weeks even though you are still the same person.

## 2 · The four pieces

It does not matter whether you build it on paper or in an app. Miss one of these four and it collapses.

### Points that mean something

Nearly every homemade system hands out points evenly: ten for the washing up, ten for the gym. Within a week you know they are not worth the same, and you stop trusting the scoreboard.

**Points are your motivation budget.** Spend them on what is hard to start. What you already do without thinking is worth little.

### Skills that say who you want to be

"Go to the gym" is a task. "Strength" is a skill. Tasks end. Skills pile up. A bar reading Strength level 7 tells you something that "went 21 times" does not.

Pick three. One you already do, one you started and dropped, and one you have been avoiding for ages.

**Three, not twelve.** Twelve bars at zero are twelve reminders of what you are not doing.

### Tasks that fit your worst day

The daily task has to fit the Tuesday you get home wrecked, not the Sunday you have time to spare.

"Read 30 pages" is a Sunday task. "Read 10 minutes" is a Tuesday-at-11:40pm task. And that hour is where it gets decided whether this lasts.

Start small and raise it when it bores you. Raising is easy. Resurrecting something you dropped three weeks ago is not.

### A picture of your progress

If it never shows you a curve, it is a list with points. Once a week you have to be able to look back.

Three numbers is enough: how much you added, how many days in a row, which skill moved most.

## 3 · Building it in an afternoon

No app, so you can start today:

1. Write three skills. Named after identities, not tasks.
2. Give each one a daily task that fits your worst day.
3. Assign points by feel, more to what costs you more.
4. Write the minimum version of each task now, while you are calm.
5. Book ten minutes with yourself on Sunday to look at the week.

If you skip the fifth step the rest does not matter. With no look back there is no scoreboard.

:::tip
Write the minimum version on a day you feel motivated. Your 11:40pm self is in no state to negotiate, and it is exactly the one who decides.
:::

## 4 · Why most of them collapse

Two reasons, and you can see both coming.

**Starting with fifteen.** Half of people need around two months before a habit happens without thinking. Fifteen at once means fifteen expensive efforts for months. They all collapse.

**The system punishing you.** There is a decent pile of research on rewards and punishments, and it is uncomfortable for half the app industry, mine included. When the reward gets too controlling, it replaces your original reason with its own.

The sign is specific: you start avoiding the app. Not for lack of time. Because opening it means sitting down in front of a list of reproaches.

## 5 · Living life like a video game: the trend

Since 2025, when an anime about levelling up became very popular, dozens of apps have appeared that hand you a "system", a rank from E to S, and daily quests. The look is fantastic.

What they get right: the rank measures who you are turning into, and that pulls harder than a task count.

What they get wrong: **the system sets the tasks, not you.** It works for three weeks and breaks the first day your life does not fit the template. And the rank drops you on exactly the day you are struggling most.

Keep the look. But you set the tasks, and nothing gets to demote you over one bad Tuesday.

## 6 · With an app or without

Paper works. What an app saves you is the bookkeeping, which is the first thing anyone drops, and it draws the curve for you.

If you pick one, check two things. That you define the skills yourself, not from a fixed list. And that missing does not take away what you earned.

I make Skillion, so you know which way I lean. It is built around this: you invent your skills, every task splits its points across the ones you pick, and you give each task its hour in the day.

I dictate mine to Magic planning in the morning and it lays the day out in blocks.

Writing the when and the where down in advance is one of the things that comes out best in the studies. And "I never find the slot" is the most repeated excuse there is.

But if you build it in a notebook and it works, you have won anyway. System first, tool second.`,
  },
};
