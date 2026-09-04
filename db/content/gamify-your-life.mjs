import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Cómo gamificar tu vida" — el artículo pilar del concepto.
 *
 * Existe porque los otros nueve atacan comparativa, ciencia, datos y cómo usar
 * la app, y ninguno atacaba la consulta raíz. En inglés el hueco era todavía
 * más claro: "gamify your life" no aparecía en NINGUNA página del sitio,
 * porque la portada dice "gamify your real life" y ese "real" rompe la frase.
 *
 * El apartado del anime no es relleno ni oportunismo: desde 2025 esa ola se ha
 * comido la categoría entera, y quien busca "vivir la vida como un videojuego"
 * llega casi siempre por ahí. Se habla del fenómeno y de por qué esos sistemas
 * se caen, sin usar marcas registradas ajenas como reclamo.
 */
export const gamifyYourLife = {
  translationKey: 'gamify-your-life',
  category: 'how-to',
  icon: 'map',
  readingMinutes: 9,
  xp: 45,
  featured: false,
  publishedAt: '2026-09-03',
  author: AUTHORS.luigy,
  sources: [SOURCES.hamari2014, SOURCES.deci1999, SOURCES.gollwitzer2006, SOURCES.lally2010],

  es: {
    slug: 'como-gamificar-tu-vida',
    title: 'Cómo gamificar tu vida y no dejarlo en semana 3',
    excerpt:
      'Qué es de verdad gamificar tu vida, las cuatro piezas que necesita cualquier sistema para aguantar, y por qué la mayoría se cae al mes.',
    tldr:
      'Gamificar tu vida es ponerle a tus rutinas lo que hace que un juego enganche: que se vea lo que llevas hecho, que cada cosa sume a algo tuyo y que un mal día no lo borre. Necesita cuatro piezas: puntos que signifiquen algo, categorías que digan quién quieres ser, misiones que quepan en tu peor día y una foto del avance. Y falla siempre por lo mismo: sistemas que castigan, y montar quince cosas el primer día.',
    faq: [
      {
        q: '¿Qué significa gamificar tu vida?',
        a: 'Ponerle a lo que ya haces las piezas que hacen que un videojuego enganche: puntos por cumplir, categorías que suben de nivel y una vista de lo que llevas acumulado. No convierte tu vida en un juego. Le pone al esfuerzo un marcador, que es lo que le falta a una lista de tareas.',
      },
      {
        q: '¿Puedo gamificar mi vida sin una app?',
        a: 'Sí, y es la mejor forma de empezar. Un cuaderno con tres categorías, unos puntos por tarea y una hoja al mes te da el 80% del efecto. La app te ahorra la contabilidad y te enseña la curva, pero si el sistema no funciona en papel, tampoco va a funcionar en el móvil.',
      },
      {
        q: '¿Cuánto tardo en notar algo?',
        a: 'Lo de dentro se nota el primer día, porque ver el marcador moverse es inmediato. Lo de fuera tarda: a la mitad de la gente le cuesta unos dos meses que un hábito le salga solo. La gracia de gamificarlo es que esos dos meses se te hagan más cortos.',
      },
      {
        q: '¿Esto funciona o es un truco de marketing?',
        a: 'Alguien juntó los estudios que hay y sale que sí, pero depende muchísimo de la persona y de para qué. Te ayuda a aguantar algo que ya querías hacer. No vuelve interesante algo que te da igual.',
      },
    ],
    body: `Hay una cosa que un videojuego malísimo hace mejor que tu lista de tareas: enseñarte lo que llevas hecho. Juegas dos horas a algo mediocre y sabes exactamente cuánto has avanzado. Cumples tus tareas dos semanas seguidas y no te queda ni rastro.

Gamificar tu vida es tapar ese agujero. No es ponerse a jugar. Es ponerle un marcador al esfuerzo.

## 1 · Qué es y qué no es

Lo que sí es: coger las piezas que hacen que un juego enganche y ponérselas a lo que ya haces. Puntos cuando cumples, categorías que suben de nivel, una vista donde se ve el acumulado.

Lo que no es: hacer que fregar los platos sea divertido. No lo va a ser. Lo que cambia no es la tarea, es que dejas de hacerla a ciegas.

Y hay una diferencia que decide si el sistema te dura o no. Un juego te enseña tu progreso. Una lista de tareas te enseña tu deuda. Marcas la casilla, se pone gris, desaparece, y lo único que queda a la vista es lo que aún no has hecho. Por eso a las dos semanas se te cae, aunque tú seas exactamente la misma persona.

## 2 · Las cuatro piezas

Da igual si lo montas en papel, en una hoja de cálculo o en una app. Si falta una de estas cuatro, se cae.

### Puntos que signifiquen algo

El error de casi todos los sistemas caseros es repartir puntos por igual. Diez por lavar los platos, diez por ir al gimnasio. A la semana ya sabes que los platos no valen lo mismo y dejas de fiarte del marcador.

Los puntos son tu presupuesto de motivación. Gástalos donde hay resistencia, no donde ya te sale solo. Lo que te cuesta empezar vale mucho; lo que ya haces sin pensar vale poco y está ahí solo para que las semanas malas no salgan a cero.

### Categorías que digan quién quieres ser

Aquí está la diferencia entre un sistema que aguanta un mes y uno que aguanta un año.

"Ir al gimnasio" es una tarea. "Fuerza" es una identidad. Las tareas se terminan y desaparecen. Las identidades se acumulan. Una barra que pone Fuerza nivel 7 te cuenta algo que "he ido al gimnasio 21 veces" no te cuenta.

Elige tres. Una que ya haces, para tener suelo. Una que empezaste alguna vez y se cayó. Y una que llevas tiempo evitando, que es la que justifica montar todo esto.

Tres, no doce. Doce barras a cero no son doce motivaciones: son doce recordatorios de todo lo que no estás haciendo.

### Misiones que quepan en tu peor día

Tu misión diaria tiene que caber en el martes de lluvia en el que llegas reventado, no en el domingo por la mañana en el que te sobra tiempo.

"Leer 30 páginas" es una misión de domingo. "Leer 10 minutos" es una misión de martes a las 23:40, y el martes a las 23:40 es donde se decide de verdad si esto te dura.

Empieza pequeño y sube cuando el tamaño te aburra. Subir una misión es facilísimo. Resucitar algo que abandonaste hace tres semanas, no.

### Una foto del avance

Si el sistema no te enseña una curva, es una lista de tareas con puntos. Una vez a la semana tienes que poder mirar atrás y ver la forma de lo que llevas.

Con tres números basta: cuánto has sumado, cuántos días seguidos, y qué categoría se ha movido más. Nueve números no se leen, se ojean.

## 3 · Montarlo en una tarde

Sin app, para empezar hoy:

1. Escribe tus tres categorías. Nómbralas por identidad, no por tarea.
2. A cada una ponle una misión diaria que quepa en tu peor día.
3. Asigna puntos a ojo, más a lo que te cuesta.
4. Escribe tu versión mínima de cada misión ahora, con la cabeza fría, y no el día que falles.
5. Ponte una cita contigo el domingo, diez minutos, para mirar la semana.

Eso es todo. Si el quinto paso no lo cumples, lo demás da igual: sin la mirada atrás no hay marcador, y sin marcador esto es una lista de tareas con puntos de colores.

:::tip
Escribe la versión mínima el día que estás motivado. Tu yo de las 23:40 no está en condiciones de negociar consigo mismo, y es justo el que va a decidir.
:::

## 4 · Por qué se cae la mayoría

Dos motivos, y los dos se ven venir.

El primero es empezar con quince. A la mitad de la gente le cuesta unos dos meses que un hábito le salga solo, así que quince a la vez son quince cosas caras aguantando meses. Se cae la torre entera y encima te llevas la sensación de haber fallado en quince frentes a la vez.

El segundo es más traicionero: el sistema te castiga. Hay bastante investigación sobre premios y castigos que apunta a lo mismo, y es incómoda para media industria de apps de hábitos, la mía incluida. Cuando el premio se vuelve muy controlador, acaba comiéndose las ganas de hacer la cosa por sí misma, que son justo las que necesitas para aguantar meses.

La señal de que te está pasando es muy concreta: empiezas a evitar abrir la app. No por falta de tiempo, sino porque abrirla es sentarte delante de una lista de reproches. Cuando llegas ahí, ese sistema dejó de ayudarte hace semanas.

Un sistema que castiga empuja fuerte al principio y se desinfla en cuanto el castigo deja de doler.

## 5 · Vivir la vida como un videojuego: qué acierta la moda y qué no

Desde que el anime de turno puso de moda lo de subir de nivel en la vida real, han salido decenas de apps que te dan un "sistema", te ponen un rango de E a S y te mandan misiones diarias. La estética es magnífica y el enganche del primer día es real.

Lo que aciertan: la identidad. Ese rango no mide lo que has hecho, mide en quién te estás convirtiendo, y eso engancha muchísimo más que un número de tareas.

Lo que fallan, casi todas: las misiones las pone el sistema, no tú. Cien flexiones, diez kilómetros, lo que sea. Funciona tres semanas y se rompe el primer día que tu vida real no encaja en la plantilla, que es pronto. Y como el rango baja cuando fallas, el castigo llega justo el día que peor lo llevas.

Si te va la estética, quédatela. Pero las misiones te las pones tú, y el rango no puede bajarte por un martes malo.

## 6 · ¿Con app o sin ella?

En papel funciona, de verdad. Lo que te ahorra una app es la contabilidad, que es aburridísima y es lo primero que se abandona, y te enseña la curva sin que tengas que dibujarla.

Si te vas a una, mira dos cosas. Que las categorías las definas tú y no las elijas de una lista cerrada, porque si no el progreso mide algo del producto y no algo tuyo. Y que fallar no te quite lo ganado.

Yo hago Skillion, así que ya sabes de qué lado escribo. Va de esto: te inventas tus habilidades, cada tarea reparte puntos entre las que elijas, y además de preguntarte qué vas a hacer te hace decidir a qué hora, colocándolo en una franja del día. De todo lo que se ha probado para que la gente cumpla, dejar escrito de antemano el cuándo y el dónde es de lo que mejor sale en los estudios, y "nunca encuentro el hueco" es la excusa más repetida que existe.

Pero si te montas lo tuyo en un cuaderno y te funciona, has ganado igual. El orden importa: primero el sistema, después la herramienta. Al revés es como se acaba con el móvil lleno de apps y ningún hábito.`,
  },

  en: {
    slug: 'how-to-gamify-your-life',
    title: 'How to gamify your life without quitting in week 3',
    excerpt:
      'What gamifying your life actually means, the four pieces any system needs to survive, and why most of them collapse within a month.',
    tldr:
      'Gamifying your life means giving your routines the things that make a game stick: you can see what you have built, everything you do feeds something of yours, and one bad day does not wipe it. It needs four pieces: points that mean something, categories that say who you want to be, quests that fit your worst day, and a picture of your progress. It always fails the same two ways: systems that punish, and starting fifteen things on day one.',
    faq: [
      {
        q: 'What does it mean to gamify your life?',
        a: 'It means giving what you already do the pieces that make a video game stick: points for following through, categories that level up, and a view of what you have built up. It does not turn your life into a game. It puts a scoreboard on your effort, which is exactly what a to-do list is missing.',
      },
      {
        q: 'Can I gamify my life without an app?',
        a: 'Yes, and it is the best way to start. A notebook with three categories, some points per task and one page a month gets you 80% of the effect. An app saves you the bookkeeping and draws the curve for you, but if the system does not work on paper it will not work on your phone either.',
      },
      {
        q: 'How long before I notice anything?',
        a: 'The inside part lands on day one, because watching the scoreboard move is immediate. The outside part takes longer: half of people need around two months before a habit runs on its own. The point of gamifying it is to make those two months feel shorter.',
      },
      {
        q: 'Does this actually work, or is it a marketing trick?',
        a: 'Someone gathered up the studies and the answer is yes, but it depends enormously on the person and on what for. It helps you stick with something you already wanted to do. It will not make something you do not care about interesting.',
      },
    ],
    body: `There is one thing a terrible video game does better than your to-do list: it shows you what you have built. Play something mediocre for two hours and you know exactly how far you got. Follow through on your tasks for two weeks and there is no trace of any of it.

Gamifying your life is plugging that hole. It is not about playing games. It is about putting a scoreboard on your effort.

## 1 · What it is, and what it is not

What it is: taking the pieces that make a game stick and bolting them onto what you already do. Points when you follow through, categories that level up, a view where you can see the total.

What it is not: making the washing up fun. It will not be. What changes is not the task. What changes is that you stop doing it blind.

And there is one difference that decides whether your system lasts. A game shows you your progress. A to-do list shows you your debt. You tick the box, it goes grey, it vanishes, and the only thing left on screen is what you have not done yet. That is why it falls apart after two weeks even though you are exactly the same person.

## 2 · The four pieces

It does not matter whether you build it on paper, in a spreadsheet or in an app. Miss one of these four and it collapses.

### Points that mean something

The mistake in nearly every homemade system is handing out points evenly. Ten for the washing up, ten for the gym. Within a week you know the washing up is not worth the same, and you stop trusting the scoreboard.

Points are your motivation budget. Spend them where the resistance is, not where it already comes easy. What is hard to start is worth a lot. What you already do without thinking is worth little, and it is only there so your bad weeks do not come out at zero.

### Categories that say who you want to be

This is the difference between a system that lasts a month and one that lasts a year.

"Go to the gym" is a task. "Strength" is an identity. Tasks end and disappear. Identities pile up. A bar reading Strength level 7 tells you something that "went to the gym 21 times" does not.

Pick three. One you already do, so you have a floor. One you started once and dropped. And one you have been avoiding for ages, which is the one that justifies building any of this.

Three, not twelve. Twelve bars at zero are not twelve motivations. They are twelve reminders of everything you are not doing.

### Quests that fit your worst day

Your daily quest has to fit the rainy Tuesday when you get home wrecked, not the Sunday morning when you have time to spare.

"Read 30 pages" is a Sunday quest. "Read 10 minutes" is a Tuesday-at-11:40pm quest, and Tuesday at 11:40pm is where this actually gets decided.

Start small and raise it when the size bores you. Raising a quest is easy. Resurrecting something you dropped three weeks ago is not.

### A picture of your progress

If the system never shows you a curve, it is a to-do list with points on it. Once a week you have to be able to look back and see the shape of what you have done.

Three numbers is enough: how much you added up, how many days in a row, and which category moved most. Nine numbers do not get read, they get skimmed.

## 3 · Building it in an afternoon

No app, so you can start today:

1. Write your three categories. Name them after identities, not tasks.
2. Give each one a daily quest that fits your worst day.
3. Assign points by feel, more to what costs you more.
4. Write the minimum version of each quest now, while you are calm, not on the day you miss.
5. Book ten minutes with yourself on Sunday to look at the week.

That is the whole thing. If you skip the fifth step the rest does not matter: with no look back there is no scoreboard, and with no scoreboard this is a to-do list with coloured points.

:::tip
Write the minimum version on a day you feel motivated. Your 11:40pm self is in no condition to negotiate with itself, and that is exactly the one who gets to decide.
:::

## 4 · Why most of them collapse

Two reasons, and you can see both coming.

The first is starting with fifteen. Half of people need around two months before a habit runs on its own, so fifteen at once means fifteen expensive things running for months. The whole tower comes down and you walk away feeling like you failed on fifteen fronts at the same time.

The second is sneakier: the system punishes you. There is a decent pile of research on rewards and punishments pointing the same way, and it is uncomfortable for half the habit-app industry, mine included. When the reward gets too controlling, it eats the appetite for doing the thing itself, which is exactly the appetite you need to last months.

The sign that this is happening is very specific: you start avoiding the app. Not for lack of time, but because opening it means sitting down in front of a list of reproaches. By the time you get there, that system stopped helping weeks ago.

A system that punishes pushes hard early and deflates the moment the punishment stops stinging.

## 5 · Living life like a video game: what the trend gets right and wrong

Ever since a certain anime made levelling up in real life mainstream, dozens of apps have appeared that hand you a "system", give you a rank from E to S and send you daily quests. The look is fantastic and the day-one hook is real.

What they get right: identity. That rank does not measure what you have done, it measures who you are turning into, and that pulls far harder than a task count.

What nearly all of them get wrong: the system sets the quests, not you. A hundred push-ups, ten kilometres, whatever it is. It works for three weeks and breaks the first day your real life does not fit the template, which comes soon. And because your rank drops when you miss, the punishment arrives on exactly the day you are struggling most.

If you love the look, keep it. But you set the quests, and the rank does not get to demote you over one bad Tuesday.

## 6 · With an app or without?

Paper genuinely works. What an app saves you is the bookkeeping, which is deathly dull and is the first thing anyone drops, and it draws the curve without you having to.

If you do go for one, check two things. That you define the categories yourself rather than picking from a fixed list, because otherwise your progress measures something belonging to the product instead of something belonging to you. And that missing does not take away what you earned.

I make Skillion, so you know which way I lean. It is built around this: you invent your own skills, every task splits its points across the ones you pick, and besides asking what you will do it makes you decide what time, by dropping it onto a slot in the day. Out of everything anyone has tested to get people to follow through, writing the when and the where down in advance is one of the things that comes out best in the studies, and "I never find the slot" is the most repeated excuse there is.

But if you build your own in a notebook and it works, you have won anyway. The order matters: system first, tool second. The other way round is how people end up with a phone full of apps and no habits.`,
  },
};
