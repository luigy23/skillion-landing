import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * Los cinco artículos originales del artboard 1c.
 *
 * Firma el equipo: son contenido de producto, escrito antes de que SCRUM-450
 * pidiera autoría con nombre real. Los artículos nuevos de esa tarea sí van
 * firmados por una persona, que es la señal que miran los modelos.
 *
 * Convenciones del cuerpo (markdown):
 *   ## 1 · Título      -> H2 numerado, alimenta el TOC "EN ESTE ARTICULO"
 *   :::tip ... :::     -> callout "CONSEJO DEL MAGO"
 *   > cita             -> blockquote en menta
 */

export const legacyPosts = [
  // ─────────────────────────────────────────────────────────── 1 · destacado
  {
    translationKey: 'science-of-xp',
    category: 'science',
    icon: 'brain',
    readingMinutes: 3,
    xp: 15,
    featured: false,
    // Deja de ser el destacado: lo es la comparativa con Habitica, que es la
    // pieza que SCRUM-450 quiere que se encuentre primero.
    publishedAt: '2026-08-14',
    author: AUTHORS.jesus,
    sources: [SOURCES.schultz1997, SOURCES.hamari2014, SOURCES.ryanDeci2000, SOURCES.deci1999],
    es: {
      slug: 'la-ciencia-detras-del-xp',
      title: 'La ciencia detrás del XP: por qué recompensar tu cerebro sí funciona',
      excerpt:
        'Dopamina, refuerzo variable y bucles de hábito. Qué dice la investigación sobre gamificar tareas reales, y dónde falla la mayoría de las apps.',
      tldr:
        'Funciona cuando el sistema te enseña lo que llevas acumulado, no cuando reparte puntos por cualquier cosa. Tu cerebro responde a la señal de avance, y una casilla gris no da ninguna señal. Ahí falla la mayoría de apps.',
      faq: [
        {
          q: '¿La gamificación funciona a largo plazo?',
          a: 'Depende de cómo esté montada. Alguien juntó los estudios que hay y sale que sí funciona, pero depende muchísimo de la persona y del contexto. Los sistemas que te enseñan tu propio avance aguantan mejor que los que solo reparten puntos.',
        },
        {
          q: '¿Por qué el XP motiva más que una lista de tareas?',
          a: 'Porque acumula. Una lista borra lo hecho y solo enseña lo que falta; el XP mantiene la memoria de lo que llevas. La señal que el cerebro procesa no es el premio, es la evidencia de avance.',
        },
        {
          q: '¿Puede la gamificación volverse contra ti?',
          a: 'Sí. Hay bastante investigación juntada sobre premios y castigos que apunta a lo mismo: cuando el premio se vuelve muy controlador, acaba comiéndose las ganas de hacer la cosa por sí misma. Si terminas haciendo la tarea por los puntos y no por lo que buscabas, el sistema te ha cambiado el motivo.',
        },
      ],
      body: `Cada vez que marcas una tarea en Skillion, una barra sube. Esa barra es lo que una lista de tareas no te da nunca: la prueba de que avanzas.

Yo escribo el código que reparte el XP, así que me paso el día decidiendo cuántos puntos vale una cosa. Y hay una pregunta que no me quitaba el sueño hasta que la miré de cerca: ¿por qué demonios funciona un número que me acabo de inventar?

Porque cuando completas una tarea en un juego, tu cerebro no celebra la barra que sube. Celebra la señal de que estás avanzando.

Es la misma señal que notas cuando sales del gimnasio, cuando terminas un informe que llevabas días evitando, o cuando cierras el libro por la noche. La diferencia es que los juegos la hacen visible y la vida real casi nunca.

Las listas de tareas fallan justo ahí. Un check gris no comunica progreso acumulado: comunica que había algo pendiente y ahora hay menos. No hay memoria, no hay curva, no hay historia. Por eso a las dos semanas la motivación se cae aunque la persona siga siendo la misma.

## 1 · El círculo que hay detrás de cualquier hábito

Todo hábito funciona en círculo: algo te lo recuerda, lo haces, y algo te dice que lo has hecho.

Lo que aporta un juego bien montado no son "puntos". Es darte hoy algo que se ve, por una acción cuyo beneficio real no vas a notar hasta dentro de meses.

Salir a correr hoy no te pone en forma hoy. Pero ver la barra de Fitness moverse esta misma tarde sí cierra el círculo.

:::tip
Asigna XP alto a lo que te cuesta empezar, no a lo que ya te sale fácil. El XP es tu presupuesto de motivación: gástalo donde hay fricción.
:::

## 2 · Por qué el progreso visible cambia la decisión

Hay un efecto bien documentado: cuando alguien ve que ya avanzó una parte del camino, la probabilidad de continuar sube. No es magia, es contexto. Una barra al 78% convierte "no tengo ganas" en "me falta poquísimo". Skillion usa esto en cada skill, cada racha y en la gráfica de la semana.

> "No necesitas más disciplina. Necesitas ver lo que ya estás construyendo."

## 3 · Dónde falla esto cuando está mal hecho

Cuando los puntos no significan nada, dejan de funcionar en días. La regla que seguimos: cada punto tiene que corresponder a algo que tú quieres de verdad. Si tu XP no describe tu vida, es decoración. Si la describe, se convierte en un espejo, y los espejos motivan mucho más que las medallas.

Empieza por tres skills, ponles tareas diarias pequeñas y mira tus estadísticas el domingo. En cuatro semanas vas a tener algo que ninguna lista de tareas te da: un historial de quién estás siendo.`,
    },
    en: {
      slug: 'the-science-behind-xp',
      title: 'The science behind XP: why rewarding your brain actually works',
      excerpt:
        'Why your brain reacts to a bar going up, what the research says about turning real tasks into a game, and where most apps get it wrong.',
      tldr:
        'It works when the system shows you what you have built up, not when it hands out points for anything. Your brain responds to the signal of progress, and a grey checkbox gives no signal. That is where most apps fail.',
      faq: [
        {
          q: 'Does gamification work long term?',
          a: 'It depends how it is built. Someone gathered up the studies and it does work, but it depends enormously on the person and the context. Systems that show you your own progress hold up better than ones that just hand out points.',
        },
        {
          q: 'Why does XP motivate more than a to-do list?',
          a: 'Because it accumulates. A list erases what you did and only shows what is left; XP keeps the memory of what you have done. The signal the brain processes is not the reward, it is the evidence of progress.',
        },
        {
          q: 'Can gamification backfire?',
          a: 'Yes. There is a decent pile of research on rewards and punishments pointing the same way: when the reward gets too controlling, it eats the appetite for doing the thing itself. If you end up doing the task for the points rather than for what you were after, the system has swapped your reason out.',
        },
      ],
      body: `Every time you tick a task in Skillion, a bar goes up. That bar is the one thing a to-do list never gives you: proof that you are moving.

I write the code that hands out the XP, so I spend my days deciding how many points a thing is worth. And there is one question I never lost sleep over until I looked at it properly: why on earth does a number I just made up work at all?

Because when you finish a task in a game, your brain is not celebrating the bar going up. It is celebrating the signal that you are making progress.

It is the same signal you get walking out of the gym, finishing a report you had been dodging for days, or closing the book at night. The difference is that games make it visible and real life almost never does.

That is exactly where to-do lists fall apart. A grey checkmark does not communicate accumulated progress: it communicates that something was pending and now there is less of it. No memory, no curve, no story. That is why motivation collapses after two weeks even though the person has not changed.

## 1 · The circle behind any habit

Every habit runs in a circle: something reminds you, you do it, something tells you it counted.

What a well-built game adds is not "points". It gives you something visible today for an action whose real payoff will not show up for months.

Going for a run today does not make you fit today. But watching your Fitness bar move this same afternoon does close the circle.

:::tip
Assign high XP to what is hard to start, not to what already comes easy. XP is your motivation budget: spend it where the friction is.
:::

## 2 · Why visible progress changes the decision

There is a well documented effect: once someone can see they are already part of the way there, the odds of continuing go up. It is not magic, it is context.

A bar at 78% turns "I don't feel like it" into "I'm almost done". Skillion leans on this in every skill, every streak and the week's chart.

> "You don't need more discipline. You need to see what you are already building."

## 3 · Where this falls apart when it is done badly

When points mean nothing, they stop working within days. The rule we follow: every point has to line up with something you actually want. If your XP does not describe your life, it is decoration. If it does, it becomes a mirror, and mirrors motivate far more than medals.

Start with three skills, give them small daily tasks, and look at your stats on Sunday. In four weeks you will have something no to-do list gives you: a record of who you are becoming.`,
    },
  },

  // ────────────────────────────────────────────────────────── 2 · cómo usar
  {
    translationKey: 'first-three-skills',
    category: 'how-to',
    icon: 'checklist',
    readingMinutes: 2,
    xp: 10,
    featured: false,
    publishedAt: '2026-08-07',
    author: AUTHORS.luigy,
    sources: [SOURCES.lally2010, SOURCES.gardner2012],
    es: {
      slug: 'tus-primeras-tres-skills',
      title: 'Crea tus primeras 3 skills sin abrumarte',
      excerpt:
        'El error más común al empezar: crear 12 skills el primer día. Aquí va el setup mínimo que aguanta un mes.',
      tldr:
        'Empieza con tres habilidades, no con doce. A la mitad de la gente le cuesta unos 66 días que un hábito le salga solo, así que doce a la vez son doce cosas caras aguantando meses. Tres skills amplias cubren casi cualquier vida y se pueden dividir después, cuando ya sabes cuáles usas de verdad.',
      faq: [
        {
          q: '¿Cuántas skills debería crear al principio?',
          a: 'Tres. Es el número que sobrevive al primer mes. Puedes dividirlas más adelante, cuando tengas datos reales de cuáles usas y cuáles no has tocado.',
        },
        {
          q: '¿Qué pasa si me equivoco al elegirlas?',
          a: 'Poco. Una skill se renombra y las tareas se reasignan sin perder el XP acumulado. Equivocarse eligiendo es barato; equivocarse creando quince, no.',
        },
        {
          q: '¿Cuándo conviene añadir la cuarta?',
          a: 'Cuando las tres primeras hayan dejado de costarte esfuerzo consciente. Si todavía tienes que acordarte de abrir la app, añadir una cuarta solo reparte la atención.',
        },
      ],
      body: `Cuando montamos el arranque de Skillion discutimos cuántas habilidades sembrar. Yo quería seis. Pusimos tres, y de todas las decisiones que he tomado en esta app es la que más veces me han agradecido.

Las habilidades vienen de Los Sims: allí cada personaje tiene una barra por habilidad que sube cuando la practica. Quise eso para la vida real.

Porque el primer día casi todo el mundo hace lo mismo: crear una skill por cada cosa que le gustaría mejorar. Salud, Lectura, Idiomas, Finanzas, Cocina, Sueño, Meditación… doce barras a cero. Y **doce barras a cero no son doce motivaciones: son doce recordatorios de todo lo que aún no has hecho.**

## 1 · Tres, y ninguna más

Tres skills es el número que aguanta una mala semana. Con tres puedes fallar una y seguir viendo movimiento en las otras dos. Con doce, fallar tres se siente como haber abandonado.

Por eso el plan gratis se queda en tres habilidades activas. Cuando esas tres ya no te duelen y quieres abrir la cuarta, Premium quita el límite.

Elige una de cada tipo:

- Una que ya haces. Sirve de suelo: garantiza XP incluso en semanas malas.
- Una que quieres sostener. Ya la empezaste alguna vez y se cayó.
- Una que te da pereza empezar. Esta es la que justifica todo el sistema.

## 2 · Nombra la skill por la identidad, no por la tarea

"Ir al gimnasio" es una tarea. "Fuerza" es una identidad. La diferencia importa cuando llevas tres semanas: las tareas se terminan, las identidades se acumulan. Una barra que dice Fuerza al nivel 7 cuenta una historia que "ir al gimnasio, 21 veces" no cuenta.

:::tip
Si dudas entre dos nombres, quédate con el que podrías poner en una camiseta. Ese es el que vas a querer subir de nivel.
:::

## 3 · Tareas pequeñas de verdad

La tarea diaria tiene que caber en tu peor día, no en tu mejor día. "Leer 30 páginas" es una tarea de domingo por la mañana. "Leer 10 minutos" es una tarea de martes a las 23:40, que es cuando de verdad se decide si mantienes la racha.

Empieza pequeño y sube cuando te aburra el tamaño. Es mucho más fácil subir una tarea que resucitar una racha rota.

## 4 · Revisa a los siete días, no antes

Dale una semana entera antes de tocar nada. Al séptimo día abre tu resumen y mira qué skill se quedó parada: o la tarea era demasiado grande, o esa skill no te importaba tanto como creías. Las dos respuestas son útiles.

> Un sistema que sobrevive un mes vale más que uno perfecto que abandonas el jueves.`,
    },
    en: {
      slug: 'your-first-three-skills',
      title: 'Create your first 3 skills without overwhelming yourself',
      excerpt:
        'The most common mistake when starting out: creating 12 skills on day one. Here is the minimum setup that survives a month.',
      tldr:
        'Start with three skills, not twelve. Half of people take around 66 days before a habit runs on its own, so twelve at once means twelve expensive things running for months. Three broad skills cover almost any life and can be split later, once you know which ones you actually use.',
      faq: [
        {
          q: 'How many skills should I create at first?',
          a: 'Three. That is the number that survives the first month. You can split them later, once you have real data on which you use and which you have never touched.',
        },
        {
          q: 'What if I pick the wrong ones?',
          a: 'Not much happens. A skill can be renamed and its tasks reassigned without losing accumulated XP. Choosing wrong is cheap; creating fifteen is not.',
        },
        {
          q: 'When should I add a fourth?',
          a: 'When the first three have stopped costing you conscious effort. If you still have to remember to open the app, a fourth only splits your attention.',
        },
      ],
      body: `When we built the first run of Skillion we argued about how many skills to plant. I wanted six. We shipped three, and of every decision I have made in this app it is the one people thank me for most.

The skills come from The Sims: every character there has a bar per skill that goes up when they practise it. I wanted that for real life.

Because on day one almost everyone does the same thing: create one skill for every part of life they would like to improve. Health, Reading, Languages, Finance, Cooking, Sleep, Meditation… twelve bars at zero. And **twelve bars at zero are not twelve motivations: they are twelve reminders of everything you have not done yet.**

## 1 · Three, and no more

Three skills is the number that survives a bad week. With three you can drop one and still see movement in the other two. With twelve, dropping three feels like quitting.

That is why the free plan stops at three active skills. When those three no longer hurt and you want to open a fourth, Premium lifts the limit.

Pick one of each kind:

- One you already do. It is your floor: it guarantees XP even in bad weeks.
- One you want to sustain. You started it once and it fell off.
- One you keep putting off. This is the one that justifies the whole system.

## 2 · Name the skill after the identity, not the task

"Go to the gym" is a task. "Strength" is an identity. The difference shows up around week three: tasks end, identities accumulate. A bar that reads Strength at level 7 tells a story that "went to the gym, 21 times" does not.

:::tip
If you are torn between two names, keep the one you could put on a t-shirt. That is the one you will want to level up.
:::

## 3 · Tasks that are genuinely small

Your daily task has to fit your worst day, not your best one. "Read 30 pages" is a Sunday-morning task. "Read 10 minutes" is a Tuesday-at-11:40pm task, and Tuesday at 11:40pm is where streaks are actually decided.

Start small and raise it when the size bores you. Raising a task is far easier than resurrecting a broken streak.

## 4 · Review on day seven, not before

Give it a full week before changing anything. On the seventh day open your recap and look at which skill stalled: either the task was too big, or that skill mattered less than you thought. Both answers are useful.

> A system that survives a month beats a perfect one you abandon on Thursday.`,
    },
  },

  // ───────────────────────────────────────────────────────────── 3 · trucos
  {
    translationKey: 'keep-your-streak',
    category: 'tricks',
    icon: 'clock',
    readingMinutes: 3,
    xp: 15,
    featured: false,
    publishedAt: '2026-07-24',
    author: AUTHORS.luigy,
    sources: [SOURCES.lally2010, SOURCES.woodRunger2016],
    es: {
      slug: 'trucos-para-no-romper-tu-racha',
      title: '5 trucos para no romper tu racha en semanas caóticas',
      excerpt:
        'Tareas de emergencia, XP mínimo viable y qué hacer en Skillion cuando un viaje te rompe la rutina.',
      tldr:
        'La racha es el termómetro, no la fiebre. En los estudios, saltarse un día suelto no movió nada a la larga: lo que hace daño es rendirse justo después de ese día. Ten decidida tu versión mínima antes de necesitarla.',
      faq: [
        {
          q: '¿Perder la racha arruina el progreso?',
          a: 'No. El XP y el nivel que llevas ganados no se pierden. La racha vuelve a cero, pero es solo el contador de días seguidos, no una medida de lo que has construido.',
        },
        {
          q: '¿Qué es una versión mínima de un hábito?',
          a: 'La dosis más pequeña que sigue contando: cinco minutos de lectura, una serie en el gimnasio, tres frases escritas. Lo que sostiene el hábito es la continuidad de la señal, no el tamaño de la sesión.',
        },
        {
          q: '¿Puedo pausar la racha si me voy de viaje?',
          a: 'No hace falta: una racha rota no te quita ni un punto de XP. Y si una tarea vence mientras no estabas, al volver puedes marcarla como hecha ayer o saltarla sin penalización.',
        },
      ],
      body: `En Skillion una racha rota no te quita ni un punto de XP. Aun así, nadie quiere perderla. Estos cinco trucos son para las semanas en las que se pierden.

Rompí una racha de 61 días por una mudanza. No por vaguería: estuve dos días sin encontrar el cargador.

Y ahí aprendí lo que llevo repitiendo desde entonces. **Las rachas no se rompen los días malos. Se rompen los días raros:** el viaje, la mudanza, la gripe, la semana de entregas. Días en los que el sistema que montaste para tu vida normal no encaja, y en vez de adaptarlo, lo abandonas.

## 1 · Ten una tarea de emergencia por skill

Para cada skill, define de antemano la versión mínima absoluta. Fuerza: veinte flexiones en el salón. Lectura: una página. Idiomas: cinco minutos. No es hacer trampa: es la diferencia entre una racha de 40 días con tres días flojos y dos rachas de 12 días separadas por un cero.

## 2 · Ponte un suelo diario y no lo negocies

Decide cuál es tu suelo diario, pongamos 30 XP, y trátalo como innegociable. En una semana normal lo pasas sin pensar. En una semana caótica es lo único que persigues, y sabes exactamente cuándo has terminado.

:::tip
Escribe tu tarea de emergencia el día que estás motivado. Tu yo de las 23:40 no está en condiciones de negociar consigo mismo.
:::

## 3 · Asume que el viaje rompe la racha, y prepara lo demás

En Skillion no hace falta congelar la racha antes de un viaje. Si un día no completas la tarea, el contador vuelve a cero, y eso es todo lo que pasa.

Lo que sí cambia es lo que pierdes con ello: nada más. El XP y el nivel se quedan. Y si activaste la penalización en alguna tarea, quítala antes de salir. Así el viaje no te resta puntos.

Cuando vuelvas, la app te enseña la lista de tareas vencidas. Ahí puedes marcar como hecha ayer la que sí hiciste, o saltar las demás sin penalización.

## 4 · Mueve la tarea a primera hora

En semanas caóticas lo que se pospone no se hace. Si tu tarea mínima vive a las 8:00, la caos del día no puede alcanzarla. Las tareas de la noche son las primeras en morir.

## 5 · Rompe la racha a propósito una vez

Suena raro, pero funciona: la gente que más rachas largas mantiene es la que ya sabe que una racha rota no borra el progreso.

Míralo una vez, comprueba que tu nivel sigue ahí, y deja de tenerle miedo. El miedo a romperla es lo que hace que la gente cierre la app en vez de abrirla.

> La racha es un indicador, no el objetivo. El objetivo es la curva de los últimos seis meses.`,
    },
    en: {
      slug: 'tricks-to-keep-your-streak',
      title: '5 tricks to protect your streak on chaotic weeks',
      excerpt:
        'Emergency tasks, minimum viable XP, and what to do in Skillion when a trip breaks your routine.',
      tldr:
        'The streak is the thermometer, not the fever. In the research, skipping one day moved nothing in the long run: what hurts is giving up right after that day. Decide your minimum version before you need it.',
      faq: [
        {
          q: 'Does losing a streak ruin my progress?',
          a: 'No. The XP and level you earned stay. The streak resets, but it is only the consecutive-day counter, not a measure of what you built.',
        },
        {
          q: 'What is a minimum version of a habit?',
          a: 'The smallest dose that still counts: five minutes of reading, one set at the gym, three sentences written. What sustains a habit is the continuity of the cue, not the size of the session.',
        },
        {
          q: 'Can I pause my streak while I travel?',
          a: 'No need: a broken streak never takes a single XP point from you. And if a task expires while you were away, when you come back you can mark it as done yesterday or skip it with no penalty.',
        },
      ],
      body: `In Skillion a broken streak does not cost you a single XP point. Even so, nobody wants to lose one. These five tricks are for the weeks when streaks get lost.

I broke a 61-day streak because I moved house. Not through laziness: I could not find the charger for two days.

And that is where I learned the thing I have been repeating ever since. **Streaks do not break on bad days. They break on strange days:** the trip, the move, the flu, the deadline week.

Those are the days when the system you built for your normal life does not fit. And instead of adapting it, you drop it.

## 1 · Keep one emergency task per skill

For each skill, decide the absolute minimum version in advance. Strength: twenty push-ups in the living room. Reading: one page. Languages: five minutes. This is not cheating: it is the difference between a 40-day streak with three weak days and two 12-day streaks separated by a zero.

## 2 · Set a daily floor and stop negotiating it

Pick your daily floor, say 30 XP, and treat it as non-negotiable. In a normal week you clear it without thinking. In a chaotic week it is the only thing you chase, and you know exactly when you are done.

:::tip
Write your emergency task on a day you feel motivated. Your 11:40pm self is in no condition to negotiate with itself.
:::

## 3 · Assume the trip breaks the streak, and prepare the rest

In Skillion you do not need to freeze a streak before a trip. If you do not complete the task one day, the counter goes back to zero, and that is all that happens.

What does change is what you lose with it: nothing else. XP and level stay. And if you turned on the penalty for any task, turn it off before you leave. That way the trip does not cost you points.

When you come back, the app shows you the list of expired tasks. There you can mark as done yesterday the one you did do, or skip the rest with no penalty.

## 4 · Move the task to first thing

In chaotic weeks, whatever gets postponed does not happen. If your minimum task lives at 8:00, the day's chaos cannot reach it. Evening tasks are always the first to die.

## 5 · Break the streak on purpose, once

It sounds odd, but it works: the people who sustain the longest streaks are the ones who already know a broken streak does not erase progress.

Watch it happen once, confirm your level is still there, and stop fearing it. Fear of breaking the streak is what makes people close the app instead of opening it.

> The streak is an indicator, not the goal. The goal is the curve over the last six months.`,
    },
  },

  // ─────────────────────────────────────────────────────────── 4 · consejos
  {
    translationKey: 'goals-vs-quests',
    category: 'tips',
    icon: 'lightbulb',
    readingMinutes: 2,
    xp: 10,
    featured: false,
    publishedAt: '2026-07-10',
    author: AUTHORS.luigy,
    sources: [SOURCES.gollwitzer1999, SOURCES.gollwitzer2006, SOURCES.lally2010],
    es: {
      slug: 'metas-grandes-misiones-diarias',
      title: 'Metas grandes vs. tareas diarias: cómo dividirlas',
      excerpt:
        'De "aprender inglés" a una tarea de 15 minutos que puedes completar hoy mismo.',
      tldr:
        'Una meta grande no se puede hacer; solo se puede hacer la tarea de hoy. Convertir \\"aprender alemán\\" en \\"después de comer, 15 minutos de Anki en el escritorio\\" es la diferencia entre un deseo y un plan, y concretar de antemano la hora y el sitio es de lo que mejor funciona en los estudios.',
      faq: [
        {
          q: '¿Cómo divido una meta grande en tareas diarias?',
          a: 'Busca la unidad más pequeña que se pueda terminar hoy y que no dependa de nadie más. Si la tarea necesita que otro responda o dure más de una sesión, todavía no es una tarea diaria.',
        },
        {
          q: '¿Cuánto debería durar una tarea?',
          a: 'Lo que quepa en un hueco que ya exista en tu día. Si tienes que reorganizar la tarde para encajarla, es demasiado grande para empezar.',
        },
        {
          q: '¿Por qué concretar el cuándo funciona tanto?',
          a: 'Porque quita la decisión del momento. Dejarlo escrito como \\"si pasa X, entonces hago Y\\", traslada el esfuerzo del momento de actuar al momento de planificar, que sale mucho más barato.',
        },
      ],
      body: `En Skillion la meta vive en la habilidad y lo que marcas cada día son tareas. Partir la una en las otras es lo que hace que la barra suba. Así lo hago yo.

Tuve "aprender alemán" en una lista durante cuatro años. Cuatro. Y no es que no lo intentara: es que **no era una meta, era una dirección.**

Una dirección no tiene final claro, no se puede completar un martes y no te dice qué hacer en los próximos quince minutos. Por eso se queda ahí, mirándote, año tras año.

## 1 · Baja un peldaño hasta que puedas empezar hoy

El truco es bajar peldaños hasta llegar a algo que puedas hacer hoy mismo:

1. Dirección: aprender inglés.
2. Meta con final: mantener una conversación de 20 minutos sin bloquearme.
3. Proyecto trimestral: 12 clases de conversación.
4. Tarea diaria: 15 minutos de práctica hablando.

Solo el último nivel se puede completar hoy. Los otros tres existen para que ese cuarto tenga sentido.

## 2 · La meta va en la skill; la tarea, en el día

En Skillion la skill guarda la dirección, Idiomas, y las tareas diarias son lo que de verdad marcas. La barra sube por las tareas, pero significa algo por la meta. Si separas las dos cosas, dejas de sentir que hacer quince minutos es "poco": es exactamente 1/48 de tu trimestre.

:::tip
Si una tarea no cabe en una frase con verbo y duración, todavía es un proyecto. "Estudiar inglés" no vale. "Hablar 15 minutos" sí.
:::

## 3 · Elige el tamaño por frecuencia, no por ambición

Una tarea diaria de 15 minutos suma 7,5 horas al mes. Una tarea de dos horas los sábados, si la cumples todos los sábados, suma 8. Casi lo mismo, salvo que la primera sobrevive a un sábado malo y la segunda no. Cuando dudes, reparte.

## 4 · Revisa la meta cada trimestre, no cada semana

Las tareas se ajustan a menudo; las metas, no. Cambiar de meta cada dos semanas es la forma más rápida de no avanzar en ninguna. Ponle fecha de revisión a tres meses vista y hasta entonces solo toca las tareas.

> No falta disciplina: falta un peldaño lo bastante bajo como para subirlo hoy.`,
    },
    en: {
      slug: 'big-goals-daily-quests',
      title: 'Big goals vs. daily tasks: how to split them',
      excerpt:
        'From "learn Spanish" to a 15-minute task you can actually finish today.',
      tldr:
        'You cannot do a big goal; you can only do today\'s task. Turning \\"learn German\\" into \\"after lunch, 15 minutes of Anki at my desk\\" is the difference between a wish and a plan, and pinning down the hour and the place in advance is one of the things that works best in the studies.',
      faq: [
        {
          q: 'How do I split a big goal into daily tasks?',
          a: 'Find the smallest unit that can be finished today and does not depend on anyone else. If the task needs someone to reply, or spans more than one session, it is not a daily task yet.',
        },
        {
          q: 'How long should a task be?',
          a: 'As long as a slot that already exists in your day. If you have to rearrange your afternoon to fit it, it is too big to start with.',
        },
        {
          q: 'Why does pinning down the when work so well?',
          a: 'Because it removes the decision from the moment. Writing it down as \\"if X happens, then I do Y\\", moves the effort from the moment of acting to the moment of planning, which is far cheaper.',
        },
      ],
      body: `In Skillion the goal lives in the skill and what you tick every day are tasks. Splitting the one into the others is what makes the bar go up. This is how I do it.

I had "learn German" on a list for four years. Four. And it is not that I never tried: it is that **it was not a goal, it was a direction.**

A direction has no clear end, it cannot be completed on a Tuesday, and it does not tell you what to do in the next fifteen minutes. So it sits there, staring at you, year after year.

## 1 · Step down until you can start today

The trick is walking down the steps until you reach something you can do today:

1. Direction: learn Spanish.
2. Goal with an end: hold a 20-minute conversation without freezing.
3. Quarterly project: 12 conversation classes.
4. Daily task: 15 minutes of speaking practice.

Only the last level can be completed today. The other three exist to give that fourth one meaning.

## 2 · The goal lives in the skill; the task lives in the day

In Skillion the skill holds the direction, Languages, and the daily tasks are what you actually check off. The bar rises because of the tasks, but it means something because of the goal. Separate the two and fifteen minutes stops feeling like "not much": it is exactly 1/48 of your quarter.

:::tip
If a task does not fit in one sentence with a verb and a duration, it is still a project. "Study Spanish" does not count. "Speak for 15 minutes" does.
:::

## 3 · Pick the size by frequency, not by ambition

A daily 15-minute task adds up to 7.5 hours a month. A two-hour Saturday session, if you hit every Saturday, adds up to 8. Nearly identical, except the first survives one bad Saturday and the second does not. When in doubt, spread it out.

## 4 · Review the goal quarterly, not weekly

Tasks get adjusted often; goals do not. Changing your goal every two weeks is the fastest way to make progress on none of them. Set a review date three months out and until then only touch the tasks.

> It is not discipline you are missing: it is a step low enough to climb today.`,
    },
  },

  // ───────────────────────────────────────────────────────── 5 · cómo usar
  {
    translationKey: 'weekly-recap',
    category: 'how-to',
    icon: 'calendar',
    readingMinutes: 3,
    xp: 15,
    featured: false,
    publishedAt: '2026-06-26',
    author: AUTHORS.luigy,
    sources: [SOURCES.woodNeal2007, SOURCES.woodRunger2016],
    es: {
      slug: 'configura-tu-resumen-semanal',
      title: 'Cómo revisar tu semana en Skillion y compartirla',
      excerpt:
        'Qué mirar en Estadísticas el domingo, qué números ignorar y cómo compartir la semana sin enseñar más de lo que quieres.',
      tldr:
        'Estadísticas con el periodo en Semana es tu resumen semanal en Skillion: el XP de la semana, la gráfica contra la semana anterior y un radar si tienes tres skills o más. Mírala siempre el mismo día y hazte una sola pregunta: qué skill se quedó parada y por qué.',
      faq: [
        {
          q: '¿Qué número conviene mirar?',
          a: 'El XP de la semana. Es el único de los cuatro que cambia de verdad con lo que hagas la semana que viene. La tasa de éxito solo sirve si activas penalizaciones en tus tareas; si no las usas, marca siempre 100.',
        },
        {
          q: '¿Qué día es mejor para revisarlo?',
          a: 'El que puedas repetir siempre. Lo que importa no es el día, sino que sea el mismo: una revisión errática deja de ser una señal y pasa a ser una tarea más.',
        },
        {
          q: '¿Comparto la imagen o me la guardo?',
          a: 'Antes de compartir, mira qué skills tienes seleccionadas. Estadísticas solo dibuja las que marques, así que puedes dejar fuera las que no quieras enseñar sin que dejen de contar para tu XP.',
        },
      ],
      body: `**Estadísticas** es la pantalla de Skillion donde ves tu semana en treinta segundos: el XP que sumaste, la gráfica contra la semana anterior y el radar de tus habilidades. Con ella y con la Bitácora, que corta el historial por semanas, se hace la revisión del domingo. Así la hago yo.

## 1 · Pon el periodo en Semana

Arriba de Estadísticas eliges el periodo: Semana, Mes o Todo. Con Premium, también un rango a medida. Elige Semana. Todo lo que ves debajo se calcula solo sobre esos siete días.

Debajo salen cuatro números: XP en el periodo, nivel promedio de tus skills, XP total histórico y tasa de éxito. La tasa de éxito solo cuenta las tareas que tienen la penalización activada. Si no usas penalizaciones, marcará siempre 100 y puedes ignorarla.

## 2 · Mira un número, no cuatro

El XP total histórico y el nivel promedio casi no se mueven de una semana a otra. No informan de nada que puedas cambiar el lunes.

El que importa es el XP de la semana. Responde "¿cuánto?". Si usas penalizaciones, la tasa de éxito responde "¿cumplí lo que planeé?". Si no las usas, sáltala.

## 3 · La gráfica ya compara con la semana anterior

Más abajo está "Evolución de XP". Al lado del total sale un porcentaje contra el periodo anterior: verde si subiste, rojo si bajaste, "Nuevo" si la semana pasada no hiciste nada.

Ese porcentaje es la única comparación que hace la app. No hay "mejor día" ni ranking de semanas. Si quieres saber qué día flojeaste, la Bitácora con el filtro en Semana te enseña el día a día.

:::tip
Si tienes tres skills o más, encima de los números aparece un radar. La punta más corta es la skill que se quedó parada. Es la respuesta a la pregunta del punto 5 sin tener que buscarla.
:::

## 4 · Compartir: elige antes qué skills entran

El botón de compartir saca una imagen de la pantalla y abre el menú de compartir del móvil. Sale lo que se ve en ese momento, ni más ni menos.

Antes de pulsarlo, revisa qué skills tienes seleccionadas. Estadísticas solo dibuja las que marques. Las que dejes fuera siguen contando; solo no salen en la foto.

Comparte una semana normal, no tu mejor semana. Las semanas normales son las que hacen que otra persona piense "esto yo también puedo".

## 5 · Revísalo el domingo y hazte una sola pregunta

El domingo los números son información: todavía puedes decidir cómo será la semana que viene. El lunes ya son un boletín de notas de algo que no puedes cambiar.

La pregunta es: ¿qué skill se quedó parada y por qué? Si la respuesta es "la tarea era demasiado grande", bájala antes de cerrar la app. Ese ajuste de treinta segundos es el que sostiene los meses.

> Registrar te dice lo que hiciste. Revisar es lo que cambia lo que harás.`,
    },
    en: {
      slug: 'set-up-your-weekly-recap',
      title: 'How to review your week in Skillion and share it',
      excerpt:
        'What to look at in Stats on Sunday, which numbers to ignore, and how to share the week without showing more than you want.',
      tldr:
        'Stats with the period set to Week is your weekly recap in Skillion: XP for the week, the chart against the previous week and a radar if you have three skills or more. Look at it on the same day every time and ask one question: which skill stalled, and why.',
      faq: [
        {
          q: 'Which number should I look at?',
          a: 'XP for the week. It is the only one of the four that really changes with what you do next week. The success rate is only useful if you turn on penalties for your tasks; if you do not, it always reads 100.',
        },
        {
          q: 'Which day is best to review it?',
          a: 'Whichever one you can repeat. What matters is not the day but that it is the same one: an erratic review stops being a cue and becomes just another task.',
        },
        {
          q: 'Should I share the image or keep it?',
          a: 'Before sharing, check which skills you have selected. Stats only draws the ones you tick, so you can leave out the ones you would rather not show without them losing XP.',
        },
      ],
      body: `**Stats** is the Skillion screen where you see your week in thirty seconds: the XP you added, the chart against last week and the radar of your skills. With it and the Logbook, which splits your history by week, you do the Sunday review. This is how I do mine.

## 1 · Set the period to Week

At the top of Stats you pick the period: Week, Month or All. With Premium, a custom range too. Pick Week. Everything below is computed on those seven days only.

Four numbers appear: XP this period, average skill level, all-time XP and success rate. The success rate only counts tasks that have the penalty turned on. If you do not use penalties it will always read 100, and you can ignore it.

## 2 · Look at one number, not four

All-time XP and average level barely move from one week to the next. They tell you nothing you can change on Monday.

The one that matters is XP this week. It answers "how much?". If you use penalties, the success rate answers "did I do what I planned?". If you do not, skip it.

## 3 · The chart already compares with last week

Further down is "XP over time". Next to the total there is a percentage against the previous period: green if you went up, red if you went down, "New" if you did nothing last week.

That percentage is the only comparison the app makes. There is no "best day" and no ranking of weeks. If you want to know which day you slipped, the Logbook with the filter on Week shows you day by day.

:::tip
If you have three skills or more, a radar chart appears above the numbers. The shortest point is the skill that stalled. That is the answer to the question in section 5 without having to look for it.
:::

## 4 · Sharing: choose which skills go in first

The share button takes an image of the screen and opens the phone's share menu. What you see at that moment is what goes out, nothing more.

Before pressing it, check which skills you have selected. Stats only draws the ones you tick. The ones you leave out keep counting; they just do not appear in the picture.

Share a normal week, not your best week. Normal weeks are the ones that make someone else think "I could do that too".

## 5 · Review it on Sunday and ask one question

On Sunday the numbers are information: you can still decide what the coming week looks like. On Monday they are a report card for something you can no longer change.

The question is: which skill stalled, and why? If the answer is "the task was too big", shrink it before closing the app. That thirty-second adjustment is what carries the months.

> Tracking tells you what you did. Reviewing is what changes what you will do.`,
    },
  },
];
