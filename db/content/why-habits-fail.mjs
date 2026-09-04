import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Por qué se abandonan los hábitos" (SCRUM-450, uno de los 4 temas mínimos).
 *
 * Casi sin producto a propósito. Es la pregunta con más intención de las
 * cuatro, y un artículo que la responda y solo mencione Skillion al final se
 * cita; uno que la use de excusa para vender, no.
 */
export const whyHabitsFail = {
  translationKey: 'why-habits-fail',
  category: 'science',
  icon: 'brain',
  readingMinutes: 8,
  xp: 40,
  featured: false,
  publishedAt: '2026-08-30',
  author: AUTHORS.jesus,
  sources: [
    SOURCES.lally2010,
    SOURCES.woodNeal2007,
    SOURCES.woodRunger2016,
    SOURCES.gardner2012,
    SOURCES.gollwitzer2006,
    SOURCES.deci1999,
  ],

  es: {
    slug: 'por-que-se-abandonan-los-habitos',
    title: 'Por qué se abandonan los hábitos (y qué dice la investigación)',
    excerpt:
      'No es falta de disciplina. Cinco motivos, con estudios detrás, por los que un hábito nuevo se muere sobre la semana tres, y qué hacer con cada uno.',
    tldr:
      'La gente no deja los hábitos por falta de fuerza de voluntad, sino porque los deja antes de que lleguen a salirle solos. En los estudios, a la mitad le cuesta unos 66 días llegar a ese punto, y a algunos más de 250. Casi todo el mundo lo deja dentro de ese margen, cuando todavía hay que empujar a mano. Los cuatro factores que más pesan son empezar con demasiados a la vez, no decidir cuándo ni dónde, depender de la motivación en lugar del contexto, y tratar un fallo aislado como el final.',
    faq: [
      {
        q: '¿Cuánto se tarda de verdad en crear un hábito?',
        a: 'Lo de los 21 días es un bulo. Hay un estudio que siguió a gente montando hábitos de verdad durante doce semanas: a la mitad le costó unos 66 días, y hubo quien lo tuvo en 18 y quien pasó de 250. Depende de la persona y de lo gordo que sea el hábito. Beber un vaso de agua sale solo mucho antes que ir al gimnasio.',
      },
      {
        q: '¿Fallar un día rompe el hábito?',
        a: 'No. En ese mismo estudio, saltarse un día suelto no movió nada a la larga. Lo que sí hace daño es lo que haces después: rendirte del todo por un día.',
      },
      {
        q: '¿Por qué siempre fallo en la semana tres?',
        a: 'Porque la novedad ya se te ha pasado y todavía no te sale solo. Las primeras semanas te empuja lo nuevo; al cabo de un mes te empuja la costumbre. En medio queda un tramo en el que tiras solo a pulso, y ahí se cae casi todo el mundo.',
      },
      {
        q: '¿Es mejor confiar en la motivación o en la rutina?',
        a: 'En la rutina, y esto no es opinión mía. Lo que dispara un hábito ya asentado suele ser el contexto: la hora, el sitio, lo que acabas de hacer. Casi nunca una decisión heroica en el momento. La motivación sirve para arrancar, no para aguantar.',
      },
    ],
    body: `Me creí lo de los 21 días durante años. Lo repetí en conversaciones y lo di por bueno cuando diseñamos la primera versión de las rachas.

Resulta que no sale de ningún estudio sobre hábitos. Sale de un cirujano plástico de los años sesenta. Cuando fui a buscar el dato de verdad me encontré otra cosa, y explica bastante mejor por qué la gente lo deja.

Porque la explicación que uno se da a sí mismo casi siempre es la misma, *me falta disciplina*, y es cómoda justamente porque no hay manera de comprobarla. Lo que sale en los estudios es más aburrido y te sirve mucho más: **la gente lo deja antes de que la cosa llegue a salirle sola.** Calculaste mal cuánto iba a durar la parte difícil, y ya está.

## 1 · ¿Cuánto tarda de verdad?

Lo de los 21 días lleva décadas dando vueltas y no sale de ningún estudio sobre hábitos. Sale de un cirujano plástico de los años sesenta que se fijó en lo que tardaban sus pacientes en acostumbrarse a su cara nueva. Eso es todo. Ese es el origen de la cifra que has visto mil veces.

El dato bueno viene de un grupo de investigadores que siguió a gente durante doce semanas mientras montaba un hábito de verdad, de comer, beber o moverse. A la mitad le costó unos 66 días llegar al punto en que ya no pesa. Hubo quien lo tuvo en 18 días y quien pasó de 250.

Ese margen es lo que importa. Si te apuntaste al gimnasio contando con que a las tres semanas dejara de costarte, no fallaste tú. Fallaron tus cuentas.

## 2 · ¿Por qué justo la semana tres?

Los primeros días te empuja la novedad. Al cabo de unos meses te empuja la costumbre. Entre una cosa y la otra hay un tramo de dos a seis semanas en el que lo único que te empuja eres tú a pulso, y esa es la gasolina más cara que tienes.

**Ahí se cae casi todo el mundo.** No te has ablandado. Es que en esas semanas el hábito te sigue cobrando el precio entero cada día y no te devuelve nada todavía.

## 3 · Los cuatro motivos que más pesan

### Empezaste con demasiados

El error clásico del primer día: quince hábitos nuevos. Si uno solo te va a pedir dos meses de empujar a mano, quince a la vez son quince cosas caras aguantando meses. Se cae la torre entera y encima te llevas la sensación de haber fracasado en quince frentes.

Tres. Cuando esos tres dejen de doler, añades otro.

### No dijiste cuándo ni dónde

"Voy a leer más" no es un plan. Es un deseo. "Después de cenar leo veinte minutos en el sofá" ya es otra cosa.

Esto es de lo más comprobado que hay en el tema. Alguien juntó decenas de estudios sobre esto y salió lo mismo en casi todos: la gente que deja escrito de antemano a qué hora y en qué sitio va a hacer algo, lo hace mucho más que la que solo se lo propone. Suena tonto. Funciona igual.

### Tiraste de motivación

La motivación es un estado de ánimo, y los estados de ánimo van y vienen. Lo que dispara un hábito ya asentado suele ser el contexto: una hora, un sitio, algo que siempre haces justo antes. No una decisión heroica en el momento.

Traducido: no diseñes para el día que te apetece. Diseña para el martes de lluvia en el que llegas reventado. Si tu hábito depende de que te apetezca, todavía no es un hábito.

### Trataste un fallo como el final

En el estudio que te contaba, saltarse un día no movió la aguja. Uno suelto no rompe nada.

Lo que rompe es lo que haces después: fallas el martes, decides que "ya la he liado" y no vuelves el miércoles. 
> La racha es el termómetro, no la fiebre. Confundir las dos cosas es lo que convierte un tropiezo en un abandono.

:::tip
Vas a fallar. Decide de antemano cuál es tu versión mínima. Cinco minutos de lectura siguen siendo leer. Lo que sostiene el hábito es no perder el hilo, no lo largo que sea la sesión.
:::

## 4 · El motivo que casi nadie mira: la app te estaba castigando

Hay un quinto motivo que no está en ti, sino en la herramienta.

Cuando alguien lleva años premiándote por algo, el premio puede acabar comiéndose las ganas originales. Está estudiado y es un resultado incómodo para media industria de apps de hábitos, la mía incluida: si el sistema te aplaude demasiado por cumplir o te riñe demasiado por fallar, terminas haciéndolo por el sistema y no por el motivo por el que empezaste.

La señal de que te está pasando es muy concreta: **empiezas a evitar abrir la app.** No por falta de tiempo, sino porque abrirla es sentarte delante de una lista de reproches. Cuando llegas ahí, esa app dejó de ayudarte hace semanas.

## 5 · Qué hacer con todo esto

Cuatro cosas, por orden:

1. Recalcula el plazo. Dos meses, no tres semanas. Si cuentas con que va a costar hasta el día 60, el día 20 deja de parecerte un fracaso.
2. Bájate a tres hábitos. Los que sobran no los estabas haciendo igualmente.
3. Escribe el cuándo y el dónde, no solo el qué. Con esa frase concreta, con su hora y su sitio.
4. Decide tu versión mínima antes de necesitarla, no el día que fallas.

Nada de esto necesita una app. Una app decente hace que estos cuatro pasos te cuesten menos, y en Skillion colocas cada tarea en su hueco del día justo por el punto 3. Pero el orden importa: primero el plan, luego la herramienta. Al revés es como se acaba con el móvil lleno de apps de hábitos y ningún hábito.`,
  },

  en: {
    slug: 'why-people-abandon-habits',
    title: 'Why people abandon habits (and what the research says)',
    excerpt:
      'It is not a discipline problem. Five evidence-backed reasons a new habit dies around week three, and what to do about each one.',
    tldr:
      'People do not drop habits for lack of willpower. They drop them before the thing ever starts running by itself. In the research, half of people take around 66 days to get there, and some take over 250. Almost everybody quits inside that window, while it still has to be pushed by hand. The four factors that weigh most are starting with too many at once, never deciding when and where, relying on motivation instead of context, and treating one missed day as the end.',
    faq: [
      {
        q: 'How long does it really take to build a habit?',
        a: 'The 21-day figure is a myth. One study followed people building real habits for twelve weeks: half of them took around 66 days, some got there in 18 and others went past 250. It depends on the person and on how big the habit is. Drinking a glass of water runs by itself long before going to the gym does.',
      },
      {
        q: 'Does missing one day break the habit?',
        a: 'No. In that same study, skipping one day moved nothing in the long run. What does the damage is what you do next: giving up entirely over one day.',
      },
      {
        q: 'Why do I always fail in week three?',
        a: 'Because the novelty has worn off and it does not run by itself yet. The first weeks the new thing carries you; after a month the routine does. In between there is a stretch where you are pulling by hand, and that is where almost everybody falls off.',
      },
      {
        q: 'Should I rely on motivation or on routine?',
        a: 'Routine, and that is not just my opinion. What fires a settled habit is usually the context: the time, the place, what you have just done. Hardly ever a heroic decision in the moment. Motivation is for starting, not for lasting.',
      },
    ],
    body: `I believed the 21-day thing for years. I repeated it in conversations and took it as read when we designed the first version of the streaks.

It turns out it comes from no habit study at all. It comes from a plastic surgeon in the 1960s. When I went looking for the real figure I found something else, and it explains far better why people give up.

Because the story people tell themselves is nearly always the same, *I have no discipline*, and it is comfortable precisely because there is no way to check it. What the research says is duller and far more useful: **people quit before the thing ever starts running by itself.** You got the timeline wrong, that is all.

## 1 · How long does it actually take?

The 21-day figure has been going around for decades and comes from no habit study at all. It comes from a plastic surgeon in the 1960s who noticed how long his patients took to get used to their new face. That is the whole origin of the number you have seen a thousand times.

The good data comes from a team who followed people for twelve weeks while they built a real habit around eating, drinking or moving. Half of them took about 66 days to reach the point where it stopped being heavy. Some got there in 18 days. Others went past 250.

That spread is the part that matters. If you joined a gym expecting it to stop costing you after three weeks, you did not fail. Your maths did.

## 2 · Why week three, specifically?

For the first few days, novelty pushes you. Months later, routine pushes you. In between there is a stretch of two to six weeks where the only thing pushing you is you, by hand, and that is the most expensive fuel you own.

**That is where almost everybody falls off.** You did not go soft. In those weeks the habit still charges you full price every day and gives you nothing back yet.

## 3 · The four reasons that weigh most

### You started with too many

The classic day-one mistake: fifteen new habits. If one alone is going to ask two months of pushing by hand, fifteen at once is fifteen expensive things running for months. The whole tower comes down, and you walk away feeling like you failed on fifteen fronts.

Three. When those three stop hurting, add another.

### You never said when or where

"I'll read more" is not a plan. It is a wish. "After dinner I read twenty minutes on the sofa" is something else.

This is one of the best-tested ideas in the field. Someone pulled together dozens of studies on it and got the same answer nearly every time: people who write down in advance what time and what place they will do something end up doing it far more than people who merely intend to. It sounds daft. It works anyway.

### You ran on motivation

Motivation is a mood, and moods come and go. What actually fires a settled habit tends to be the context around it: a time, a place, something you always do right before. Not a heroic decision in the moment.

Translated: do not design for the day you feel like it. Design for the rainy Tuesday when you get home wrecked. If your habit depends on wanting to, it is not a habit yet.

### You treated one miss as the end

In that same study, skipping a single day moved nothing. One miss breaks nothing.

What breaks things is what you do next: you miss Tuesday, decide you have blown it, and skip Wednesday too. > 
> The streak is the thermometer, not the fever. Mixing those up is what turns a stumble into quitting.

:::tip
You are going to miss. Decide your minimum version in advance. Five minutes of reading is still reading. What holds a habit up is not losing the thread, not how long the session was.
:::

## 4 · The reason almost nobody looks at: the app was punishing you

There is a fifth reason, and it lives in the tool rather than in you.

When something rewards you for long enough, the reward can end up eating the reason you started. It has been studied, and it is an uncomfortable finding for half the habit-app industry, mine included: if the system claps too hard when you comply and scolds too hard when you slip, you end up doing it for the system.

The sign that this is happening is very specific: **you start avoiding the app.** Not for lack of time, but because opening it means sitting down in front of a list of reproaches. By the time you get there, that app stopped helping weeks ago.

## 5 · What to do with all this

Four things, in order:

1. Recalculate the timeline. Two months, not three weeks. If you expect it to cost until day 60, day 20 stops looking like failure.
2. Cut down to three habits. You were not doing the extra ones anyway.
3. Write the when and the where, not just the what. That concrete sentence, with its hour and its place.
4. Decide your minimum version before you need it, not on the day you miss.

None of this needs an app. A decent app makes those four steps cheaper, and in Skillion you drop each task into its slot in the day precisely because of point 3. But the order matters: plan first, tool second. The other way round is how people end up with a phone full of habit apps and no habits.`,
  },
};
