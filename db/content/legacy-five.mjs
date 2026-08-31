import { SOURCES } from './sources.mjs';

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

export const TEAM = {
  es: { name: 'EQUIPO SKILLION', bio: 'Diseñamos sistemas de progreso para humanos reales.' },
  en: { name: 'SKILLION TEAM', bio: 'We design progress systems for real humans.' },
};

export const legacyPosts = [
  // ─────────────────────────────────────────────────────────── 1 · destacado
  {
    translationKey: 'science-of-xp',
    category: 'science',
    icon: 'brain',
    readingMinutes: 9,
    xp: 45,
    featured: false,
    // Deja de ser el destacado: lo es la comparativa con Habitica, que es la
    // pieza que SCRUM-450 quiere que se encuentre primero.
    publishedAt: '2026-08-14',
    sources: [SOURCES.schultz1997, SOURCES.hamari2014, SOURCES.ryanDeci2000, SOURCES.deci1999],
    es: {
      slug: 'la-ciencia-detras-del-xp',
      title: 'La ciencia detrás del XP: por qué recompensar tu cerebro sí funciona',
      excerpt:
        'Dopamina, refuerzo variable y bucles de hábito. Qué dice la investigación sobre gamificar tareas reales, y dónde falla la mayoría de las apps.',
      tldr:
        'Gamificar hábitos funciona cuando el sistema hace visible el progreso acumulado, no cuando reparte puntos por cualquier cosa. El cerebro responde a la señal de que algo va mejor de lo esperado, no al premio en sí, y una casilla gris no transmite ninguna señal. Ahí falla la mayoría de apps: premian la acción en lugar de enseñar la curva.',
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
      body: `Cuando completas una misión en un juego, tu cerebro no celebra la barra que sube: celebra la señal de que estás avanzando. Es la misma señal que notas cuando sales del gimnasio, cuando terminas un informe que llevabas días evitando o cuando cierras el libro por la noche. La diferencia es que los juegos la hacen visible y la vida real casi nunca.

Las listas de tareas fallan justo ahí. Un check gris no comunica progreso acumulado: comunica que había algo pendiente y ahora hay menos. No hay memoria, no hay curva, no hay historia. Por eso a las dos semanas la motivación se cae aunque la persona siga siendo la misma.

## 1 · El círculo que hay detrás de cualquier hábito

Todo hábito funciona en círculo: algo te lo recuerda, lo haces, y algo te dice que lo has hecho. Lo que aporta un juego bien montado no son "puntos". Es darte hoy algo que se ve, por una acción cuyo beneficio de verdad no vas a notar hasta dentro de meses. Salir a correr hoy no te pone en forma hoy. Pero ver la barra de Fitness moverse esta misma tarde sí cierra el círculo.

:::tip
Asigna XP alto a lo que te cuesta empezar, no a lo que ya te sale fácil. El XP es tu presupuesto de motivación: gástalo donde hay fricción.
:::

## 2 · Por qué el progreso visible cambia la decisión

Hay un efecto bien documentado: cuando alguien ve que ya avanzó una parte del camino, la probabilidad de continuar sube. No es magia, es contexto. Una barra al 78% convierte "no tengo ganas" en "me falta poquísimo". Skillion usa esto en cada skill, cada racha y cada resumen semanal.

> "No necesitas más disciplina. Necesitas ver lo que ya estás construyendo."

## 3 · Dónde falla esto cuando está mal hecho

Cuando los puntos no significan nada, dejan de funcionar en días. La regla que seguimos: cada punto tiene que corresponder a algo que tú quieres de verdad. Si tu XP no describe tu vida, es decoración. Si la describe, se convierte en un espejo, y los espejos motivan mucho más que las medallas.

Empieza por tres skills, ponles misiones diarias pequeñas y revisa tu resumen el domingo. En cuatro semanas vas a tener algo que ninguna lista de tareas te da: un historial de quién estás siendo.`,
    },
    en: {
      slug: 'the-science-behind-xp',
      title: 'The science behind XP: why rewarding your brain actually works',
      excerpt:
        'Why your brain reacts to a bar going up, what the research says about turning real tasks into a game, and where most apps get it wrong.',
      tldr:
        'Gamifying habits works when the system makes accumulated progress visible, not when it hands out points for anything. The brain responds to the signal that something went better than expected, not to the reward itself, and a grey checkbox carries no signal at all. That is where most apps fail: they reward the action instead of showing the curve.',
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
      body: `When you finish a quest in a game, your brain is not celebrating the bar going up: it is celebrating the signal that you are making progress. It is the same signal you get walking out of the gym, finishing a report you had been dodging for days, or closing the book at night. The difference is that games make it visible and real life almost never does.

That is exactly where to-do lists fall apart. A grey checkmark does not communicate accumulated progress: it communicates that something was pending and now there is less of it. No memory, no curve, no story. That is why motivation collapses after two weeks even though the person has not changed.

## 1 · The circle behind any habit

Every habit runs in a circle: something reminds you, you do it, something tells you it counted. What a well-built game adds is not "points". It gives you something visible today for an action whose real payoff will not show up for months. Going for a run today does not make you fit today. But watching your Fitness bar move this same afternoon does close the circle.

:::tip
Assign high XP to what is hard to start, not to what already comes easy. XP is your motivation budget: spend it where the friction is.
:::

## 2 · Why visible progress changes the decision

There is a well documented effect: once someone can see they are already part of the way there, the odds of continuing go up. It is not magic, it is context. A bar at 78% turns "I don't feel like it" into "I'm almost done". Skillion leans on this in every skill, every streak and every weekly recap.

> "You don't need more discipline. You need to see what you are already building."

## 3 · Where this falls apart when it is done badly

When points mean nothing, they stop working within days. The rule we follow: every point has to line up with something you actually want. If your XP does not describe your life, it is decoration. If it does, it becomes a mirror, and mirrors motivate far more than medals.

Start with three skills, give them small daily quests, and review your recap on Sunday. In four weeks you will have something no to-do list gives you: a record of who you are becoming.`,
    },
  },

  // ────────────────────────────────────────────────────────── 2 · cómo usar
  {
    translationKey: 'first-three-skills',
    category: 'how-to',
    icon: 'checklist',
    readingMinutes: 6,
    xp: 30,
    featured: false,
    publishedAt: '2026-08-07',
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
      body: `El primer día en Skillion casi todo el mundo hace lo mismo: crear una skill por cada cosa que le gustaría mejorar. Salud, Lectura, Idiomas, Finanzas, Cocina, Sueño, Meditación… doce barras a cero. Y doce barras a cero no son doce motivaciones: son doce recordatorios de todo lo que aún no has hecho.

## 1 · Tres, y ninguna más

Tres skills es el número que aguanta una mala semana. Con tres puedes fallar una y seguir viendo movimiento en las otras dos. Con doce, fallar tres se siente como haber abandonado.

Elige una de cada tipo:

- Una que ya haces. Sirve de suelo: garantiza XP incluso en semanas malas.
- Una que quieres sostener. Ya la empezaste alguna vez y se cayó.
- Una que te da pereza empezar. Esta es la que justifica todo el sistema.

## 2 · Nombra la skill por la identidad, no por la tarea

"Ir al gimnasio" es una tarea. "Fuerza" es una identidad. La diferencia importa cuando llevas tres semanas: las tareas se terminan, las identidades se acumulan. Una barra que dice Fuerza al nivel 7 cuenta una historia que "ir al gimnasio, 21 veces" no cuenta.

:::tip
Si dudas entre dos nombres, quédate con el que podrías poner en una camiseta. Ese es el que vas a querer subir de nivel.
:::

## 3 · Misiones pequeñas de verdad

La misión diaria tiene que caber en tu peor día, no en tu mejor día. "Leer 30 páginas" es una misión de domingo por la mañana. "Leer 10 minutos" es una misión de martes a las 23:40, que es cuando de verdad se decide si mantienes la racha.

Empieza pequeño y sube cuando te aburra el tamaño. Es mucho más fácil subir una misión que resucitar una racha rota.

## 4 · Revisa a los siete días, no antes

Dale una semana entera antes de tocar nada. Al séptimo día abre tu resumen y mira qué skill se quedó parada: o la misión era demasiado grande, o esa skill no te importaba tanto como creías. Las dos respuestas son útiles.

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
      body: `On day one in Skillion almost everyone does the same thing: create one skill for every part of life they would like to improve. Health, Reading, Languages, Finance, Cooking, Sleep, Meditation… twelve bars at zero. And twelve bars at zero are not twelve motivations: they are twelve reminders of everything you have not done yet.

## 1 · Three, and no more

Three skills is the number that survives a bad week. With three you can drop one and still see movement in the other two. With twelve, dropping three feels like quitting.

Pick one of each kind:

- One you already do. It is your floor: it guarantees XP even in bad weeks.
- One you want to sustain. You started it once and it fell off.
- One you keep putting off. This is the one that justifies the whole system.

## 2 · Name the skill after the identity, not the task

"Go to the gym" is a task. "Strength" is an identity. The difference shows up around week three: tasks end, identities accumulate. A bar that reads Strength at level 7 tells a story that "went to the gym, 21 times" does not.

:::tip
If you are torn between two names, keep the one you could put on a t-shirt. That is the one you will want to level up.
:::

## 3 · Quests that are genuinely small

Your daily quest has to fit your worst day, not your best one. "Read 30 pages" is a Sunday-morning quest. "Read 10 minutes" is a Tuesday-at-11:40pm quest, and Tuesday at 11:40pm is where streaks are actually decided.

Start small and raise it when the size bores you. Raising a quest is far easier than resurrecting a broken streak.

## 4 · Review on day seven, not before

Give it a full week before changing anything. On the seventh day open your recap and look at which skill stalled: either the quest was too big, or that skill mattered less than you thought. Both answers are useful.

> A system that survives a month beats a perfect one you abandon on Thursday.`,
    },
  },

  // ───────────────────────────────────────────────────────────── 3 · trucos
  {
    translationKey: 'keep-your-streak',
    category: 'tricks',
    icon: 'clock',
    readingMinutes: 5,
    xp: 25,
    featured: false,
    publishedAt: '2026-07-24',
    sources: [SOURCES.lally2010, SOURCES.woodRunger2016],
    es: {
      slug: 'trucos-para-no-romper-tu-racha',
      title: '5 trucos para no romper tu racha en semanas caóticas',
      excerpt:
        'Misiones de emergencia, XP mínimo viable y cómo usar el modo viaje sin sentirte culpable.',
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
          q: '¿Debería usar el modo viaje o es hacer trampa?',
          a: 'No es trampa. La investigación sobre hábitos apunta a que el comportamiento consolidado depende de señales de contexto estables, y un viaje rompe todas a la vez. Pausar es más honesto que fingir una racha que no ocurrió.',
        },
      ],
      body: `Las rachas no se rompen los días malos. Se rompen los días raros: el viaje, la mudanza, la gripe, la semana de entregas. Días en los que el sistema que montaste para tu vida normal no encaja, y en vez de adaptarlo, lo abandonas.

## 1 · Ten una misión de emergencia por skill

Para cada skill, define de antemano la versión mínima absoluta. Fuerza: veinte flexiones en el salón. Lectura: una página. Idiomas: cinco minutos. No es hacer trampa: es la diferencia entre una racha de 40 días con tres días flojos y dos rachas de 12 días separadas por un cero.

## 2 · Ponte un suelo diario y no lo negocies

Decide cuál es tu suelo diario, pongamos 30 XP, y trátalo como innegociable. En una semana normal lo pasas sin pensar. En una semana caótica es lo único que persigues, y sabes exactamente cuándo has terminado.

:::tip
Escribe tu misión de emergencia el día que estás motivado. Tu yo de las 23:40 no está en condiciones de negociar consigo mismo.
:::

## 3 · Usa el modo viaje antes de necesitarlo

El modo viaje existe para que un contexto distinto no cuente como un fallo. Actívalo el día antes de salir, no el día después de haber roto la racha. Planificar una pausa no es lo mismo que abandonar, y tu historial debería reflejar esa diferencia.

## 4 · Mueve la misión a primera hora

En semanas caóticas lo que se pospone no se hace. Si tu misión mínima vive a las 8:00, la caos del día no puede alcanzarla. Las misiones de la noche son las primeras en morir.

## 5 · Rompe la racha a propósito una vez

Suena raro, pero funciona: la gente que más rachas largas mantiene es la que ya sabe que una racha rota no borra el progreso. Míralo una vez, comprueba que tu nivel sigue ahí, y deja de tenerle miedo. El miedo a romperla es lo que hace que la gente cierre la app en vez de abrirla.

> La racha es un indicador, no el objetivo. El objetivo es la curva de los últimos seis meses.`,
    },
    en: {
      slug: 'tricks-to-keep-your-streak',
      title: '5 tricks to protect your streak on chaotic weeks',
      excerpt:
        'Emergency quests, minimum viable XP, and how to use travel mode without feeling guilty.',
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
          q: 'Should I use travel mode, or is that cheating?',
          a: 'Not cheating. Habit research points to established behaviour depending on stable context cues, and travel breaks all of them at once. Pausing is more honest than faking a streak that did not happen.',
        },
      ],
      body: `Streaks do not break on bad days. They break on strange days: the trip, the move, the flu, the deadline week. Days when the system you built for your normal life does not fit, and instead of adapting it, you drop it.

## 1 · Keep one emergency quest per skill

For each skill, decide the absolute minimum version in advance. Strength: twenty push-ups in the living room. Reading: one page. Languages: five minutes. This is not cheating: it is the difference between a 40-day streak with three weak days and two 12-day streaks separated by a zero.

## 2 · Set a daily floor and stop negotiating it

Pick your daily floor, say 30 XP, and treat it as non-negotiable. In a normal week you clear it without thinking. In a chaotic week it is the only thing you chase, and you know exactly when you are done.

:::tip
Write your emergency quest on a day you feel motivated. Your 11:40pm self is in no condition to negotiate with itself.
:::

## 3 · Use travel mode before you need it

Travel mode exists so that a different context does not count as a failure. Turn it on the day before you leave, not the day after the streak broke. Planning a pause is not the same as quitting, and your history should show that difference.

## 4 · Move the quest to first thing

In chaotic weeks, whatever gets postponed does not happen. If your minimum quest lives at 8:00, the day's chaos cannot reach it. Evening quests are always the first to die.

## 5 · Break the streak on purpose, once

It sounds odd, but it works: the people who sustain the longest streaks are the ones who already know a broken streak does not erase progress. Watch it happen once, confirm your level is still there, and stop fearing it. Fear of breaking the streak is what makes people close the app instead of opening it.

> The streak is an indicator, not the goal. The goal is the curve over the last six months.`,
    },
  },

  // ─────────────────────────────────────────────────────────── 4 · consejos
  {
    translationKey: 'goals-vs-quests',
    category: 'tips',
    icon: 'lightbulb',
    readingMinutes: 7,
    xp: 35,
    featured: false,
    publishedAt: '2026-07-10',
    sources: [SOURCES.gollwitzer1999, SOURCES.gollwitzer2006, SOURCES.lally2010],
    es: {
      slug: 'metas-grandes-misiones-diarias',
      title: 'Metas grandes vs. misiones diarias: cómo dividirlas',
      excerpt:
        'De "aprender inglés" a una misión de 15 minutos que puedes completar hoy mismo.',
      tldr:
        'Una meta grande no se puede hacer; solo se puede hacer la tarea de hoy. Convertir \\"aprender alemán\\" en \\"después de comer, 15 minutos de Anki en el escritorio\\" es la diferencia entre un deseo y un plan, y concretar de antemano la hora y el sitio es de lo que mejor funciona en los estudios.',
      faq: [
        {
          q: '¿Cómo divido una meta grande en misiones diarias?',
          a: 'Busca la unidad más pequeña que se pueda terminar hoy y que no dependa de nadie más. Si la tarea necesita que otro responda o dure más de una sesión, todavía no es una misión diaria.',
        },
        {
          q: '¿Cuánto debería durar una misión?',
          a: 'Lo que quepa en un hueco que ya exista en tu día. Si tienes que reorganizar la tarde para encajarla, es demasiado grande para empezar.',
        },
        {
          q: '¿Por qué concretar el cuándo funciona tanto?',
          a: 'Porque quita la decisión del momento. Dejarlo escrito como \\"si pasa X, entonces hago Y\\", traslada el esfuerzo del momento de actuar al momento de planificar, que sale mucho más barato.',
        },
      ],
      body: `"Aprender inglés" no es una meta: es una dirección. No tiene final claro, no se puede completar un martes y no te dice qué hacer en los próximos quince minutos. Por eso lleva cuatro años en tu lista.

## 1 · Baja un peldaño hasta que puedas empezar hoy

El truco es bajar peldaños hasta llegar a algo que puedas hacer hoy mismo:

1. Dirección: aprender inglés.
2. Meta con final: mantener una conversación de 20 minutos sin bloquearme.
3. Proyecto trimestral: 12 clases de conversación.
4. Misión diaria: 15 minutos de práctica hablando.

Solo el último nivel se puede completar hoy. Los otros tres existen para que ese cuarto tenga sentido.

## 2 · La meta va en la skill; la misión, en el día

En Skillion la skill guarda la dirección, Idiomas, y las misiones diarias son lo que de verdad marcas. La barra sube por las misiones, pero significa algo por la meta. Si separas las dos cosas, dejas de sentir que hacer quince minutos es "poco": es exactamente 1/48 de tu trimestre.

:::tip
Si una misión no cabe en una frase con verbo y duración, todavía es un proyecto. "Estudiar inglés" no vale. "Hablar 15 minutos" sí.
:::

## 3 · Elige el tamaño por frecuencia, no por ambición

Una misión diaria de 15 minutos suma 7,5 horas al mes. Una misión de dos horas los sábados, si la cumples todos los sábados, suma 8. Casi lo mismo, salvo que la primera sobrevive a un sábado malo y la segunda no. Cuando dudes, reparte.

## 4 · Revisa la meta cada trimestre, no cada semana

Las misiones se ajustan a menudo; las metas, no. Cambiar de meta cada dos semanas es la forma más rápida de no avanzar en ninguna. Ponle fecha de revisión a tres meses vista y hasta entonces solo toca las misiones.

> No falta disciplina: falta un peldaño lo bastante bajo como para subirlo hoy.`,
    },
    en: {
      slug: 'big-goals-daily-quests',
      title: 'Big goals vs. daily quests: how to split them',
      excerpt:
        'From "learn Spanish" to a 15-minute quest you can actually finish today.',
      tldr:
        'You cannot do a big goal; you can only do today\'s task. Turning \\"learn German\\" into \\"after lunch, 15 minutes of Anki at my desk\\" is the difference between a wish and a plan, and pinning down the hour and the place in advance is one of the things that works best in the studies.',
      faq: [
        {
          q: 'How do I split a big goal into daily quests?',
          a: 'Find the smallest unit that can be finished today and does not depend on anyone else. If the task needs someone to reply, or spans more than one session, it is not a daily quest yet.',
        },
        {
          q: 'How long should a quest be?',
          a: 'As long as a slot that already exists in your day. If you have to rearrange your afternoon to fit it, it is too big to start with.',
        },
        {
          q: 'Why does pinning down the when work so well?',
          a: 'Because it removes the decision from the moment. Writing it down as \\"if X happens, then I do Y\\", moves the effort from the moment of acting to the moment of planning, which is far cheaper.',
        },
      ],
      body: `"Learn Spanish" is not a goal: it is a direction. It has no clear end, it cannot be completed on a Tuesday, and it does not tell you what to do in the next fifteen minutes. That is why it has been on your list for four years.

## 1 · Step down until you can start today

The trick is walking down the steps until you reach something you can do today:

1. Direction: learn Spanish.
2. Goal with an end: hold a 20-minute conversation without freezing.
3. Quarterly project: 12 conversation classes.
4. Daily quest: 15 minutes of speaking practice.

Only the last level can be completed today. The other three exist to give that fourth one meaning.

## 2 · The goal lives in the skill; the quest lives in the day

In Skillion the skill holds the direction, Languages, and the daily quests are what you actually check off. The bar rises because of the quests, but it means something because of the goal. Separate the two and fifteen minutes stops feeling like "not much": it is exactly 1/48 of your quarter.

:::tip
If a quest does not fit in one sentence with a verb and a duration, it is still a project. "Study Spanish" does not count. "Speak for 15 minutes" does.
:::

## 3 · Pick the size by frequency, not by ambition

A daily 15-minute quest adds up to 7.5 hours a month. A two-hour Saturday session, if you hit every Saturday, adds up to 8. Nearly identical, except the first survives one bad Saturday and the second does not. When in doubt, spread it out.

## 4 · Review the goal quarterly, not weekly

Quests get adjusted often; goals do not. Changing your goal every two weeks is the fastest way to make progress on none of them. Set a review date three months out and until then only touch the quests.

> It is not discipline you are missing: it is a step low enough to climb today.`,
    },
  },

  // ───────────────────────────────────────────────────────── 5 · cómo usar
  {
    translationKey: 'weekly-recap',
    category: 'how-to',
    icon: 'calendar',
    readingMinutes: 4,
    xp: 20,
    featured: false,
    publishedAt: '2026-06-26',
    sources: [SOURCES.woodNeal2007, SOURCES.woodRunger2016],
    es: {
      slug: 'configura-tu-resumen-semanal',
      title: 'Configura tu Resumen Semanal para compartirlo',
      excerpt:
        'Qué métricas elegir, cómo se ve en stories y por qué revisarlo el domingo cambia tu semana.',
      tldr:
        'El Resumen Semanal sirve si lo miras para decidir la semana siguiente, no para sentirte bien por la anterior. Elige dos o tres métricas y revísalas siempre el mismo día: la investigación sobre hábitos apunta a que lo que sostiene el comportamiento son las señales estables de contexto, y una cita fija consigo mismo es una de ellas.',
      faq: [
        {
          q: '¿Qué métricas conviene elegir?',
          a: 'Dos o tres, y que puedas cambiar con tu comportamiento de la semana que viene. Una métrica que no puedes mover no informa una decisión: solo genera culpa o autocomplacencia.',
        },
        {
          q: '¿Qué día es mejor para revisarlo?',
          a: 'El que puedas repetir siempre. Lo que importa no es el día, sino que sea el mismo: una revisión errática deja de ser una señal y pasa a ser una tarea más.',
        },
        {
          q: '¿Comparto el resumen o me lo guardo?',
          a: 'Antes de compartirlo, mira qué skills aparecen. Es tu semana, pero también es información sobre ti: puedes ocultar las que no quieras enseñar sin que dejen de contar para tu XP.',
        },
      ],
      body: `El Resumen Semanal es la única pantalla de Skillion que no sirve para registrar nada. Sirve para mirar hacia atrás, y resulta que mirar hacia atrás es lo que hace que la semana siguiente vaya mejor.

## 1 · Elige tres números, no todos

Se pueden mostrar muchas, pero un resumen con nueve números no se lee: se ojea. La combinación que mejor funciona es una de cada tipo:

- Volumen: XP total de la semana. Responde "¿cuánto?".
- Constancia: días activos o racha. Responde "¿seguido?".
- Foco: la skill que más subió. Responde "¿en qué?".

## 2 · Formato vertical para stories

El resumen se exporta en 1080×1920, que es exactamente el lienzo de una story. Si vas a compartirlo, revisa antes qué skills aparecen: es tu semana, pero también es información sobre ti. Puedes ocultar las que no quieras enseñar sin que dejen de contar para tu XP.

:::tip
Comparte el resumen de una semana normal, no el de tu mejor semana. Las semanas normales son las que hacen que alguien piense "esto yo también puedo".
:::

## 3 · Revísalo el domingo, no el lunes

El domingo el resumen es información: todavía puedes decidir cómo quieres que sea la semana siguiente. El lunes ya es un boletín de notas de algo que no puedes cambiar. Es la misma pantalla y produce sensaciones opuestas.

## 4 · Hazte una sola pregunta

No hace falta un ritual de media hora. Abre el resumen y pregúntate: ¿qué skill se quedó parada y por qué? Si la respuesta es "la misión era demasiado grande", bájala antes de cerrar la app. Ese ajuste de treinta segundos es el que sostiene los meses.

> Registrar te dice lo que hiciste. Revisar es lo que cambia lo que harás.`,
    },
    en: {
      slug: 'set-up-your-weekly-recap',
      title: 'Set up your Weekly Recap so it is worth sharing',
      excerpt:
        'Which metrics to pick, how it looks in stories, and why reviewing it on Sunday changes your week.',
      tldr:
        'The Weekly Recap earns its place if you read it to decide next week, not to feel good about last week. Pick two or three metrics and review them on the same day every time: habit research points to stable context cues as what sustains behaviour, and a fixed appointment with yourself is one of them.',
      faq: [
        {
          q: 'Which metrics should I pick?',
          a: 'Two or three, and ones you can change with next week\'s behaviour. A metric you cannot move informs no decision: it only produces guilt or complacency.',
        },
        {
          q: 'Which day is best to review it?',
          a: 'Whichever one you can repeat. What matters is not the day but that it is the same one: an erratic review stops being a cue and becomes just another task.',
        },
        {
          q: 'Should I share the recap or keep it private?',
          a: 'Before sharing, check which skills show up. It is your week, but it is also information about you: you can hide the ones you would rather not display without them losing XP.',
        },
      ],
      body: `The Weekly Recap is the only screen in Skillion that does not record anything. It exists so you can look back, and looking back turns out to be what makes the following week go better.

## 1 · Pick three metrics, not all of them

You can show many, but a recap with nine numbers does not get read: it gets glanced at. The combination that works best is one of each kind:

- Volume: total XP for the week. Answers "how much?".
- Consistency: active days or streak. Answers "how steadily?".
- Focus: the skill that grew the most. Answers "on what?".

## 2 · Vertical format for stories

The recap exports at 1080×1920, which is exactly a story canvas. If you are going to share it, check which skills show up first: it is your week, but it is also information about you. You can hide the ones you would rather not display without them losing XP.

:::tip
Share a normal week, not your best week. Normal weeks are the ones that make someone else think "I could do that too".
:::

## 3 · Review it on Sunday, not Monday

On Sunday the recap is information: you can still decide what the coming week looks like. On Monday it is a report card for something you can no longer change. Same screen, opposite feelings.

## 4 · Ask yourself one question

You do not need a half-hour ritual. Open the recap and ask: which skill stalled, and why? If the answer is "the quest was too big", shrink it before closing the app. That thirty-second adjustment is what carries the months.

> Tracking tells you what you did. Reviewing is what changes what you will do.`,
    },
  },
];
