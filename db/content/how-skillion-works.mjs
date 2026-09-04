import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Cómo funciona Skillion por dentro" — la guía de mecánicas, con los números
 * tal y como están en el código de la app (skillapp, septiembre de 2026).
 *
 * Existe porque la landing hablaba de XP y habilidades en abstracto y no
 * contaba las mecánicas que de verdad sostienen el uso: la energía (100 puntos
 * al día), el factor de suerte del XP, los puntos negativos entre habilidades,
 * los hitos de racha y lo que pasa cuando una tarea vence. Cada cifra sale de
 * una constante del repo; si el código cambia, este artículo tiene que cambiar.
 *
 * Firma Jesús porque es su terreno: enseña de dónde sale cada número y dice
 * lo que la app NO hace (sección 8) antes de que se lo pregunten.
 */
export const howSkillionWorks = {
  translationKey: 'how-skillion-works',
  category: 'how-to',
  icon: 'energy',
  readingMinutes: 6,
  xp: 30,
  featured: false,
  publishedAt: '2026-09-03',
  author: AUTHORS.jesus,
  sources: [SOURCES.schultz1997, SOURCES.deci1999],

  es: {
    slug: 'como-funciona-skillion-por-dentro',
    title: 'Cómo funciona Skillion por dentro: energía, XP y rachas',
    excerpt:
      'Qué pasa exactamente cuando marcas una tarea: cuánta energía gasta, cuánto XP da, qué le pasa a tu racha y qué ocurre si no la haces.',
    tldr:
      'Cada tarea gasta energía de un depósito de 100 puntos al día, da XP según su dificultad con un factor de suerte, reparte los puntos que tú le pongas entre tus habilidades y suma un día a su racha. Si no la haces, no pierdes nada salvo que tú actives la penalización.',
    faq: [
      {
        q: '¿Cuánta energía tengo al día?',
        a: '100 puntos. Se rellenan a las seis de la mañana. Cada tarea gasta lo que tú le pongas al crearla, de 1 a 50 puntos, y una tarea de descanso como dormir puede devolver energía en vez de gastarla.',
      },
      {
        q: '¿Cuánto XP da una tarea?',
        a: 'Depende de la dificultad: 5 puntos si es fácil, 10 si es media, 15 si es difícil y 20 si es muy difícil. Encima se aplica un factor de suerte entre 0,8 y 1,7, así que la misma tarea no da siempre lo mismo.',
      },
      {
        q: '¿Qué pasa si no hago una tarea?',
        a: 'Por defecto, nada: la tarea aparece como vencida y su racha vuelve a cero. Solo pierdes puntos si activaste la penalización en esa tarea. Entonces resta 5 de vida y la mitad del XP que daba a cada habilidad.',
      },
      {
        q: '¿Puedo congelar la racha?',
        a: 'No hace falta. Cuando una racha se rompe, el contador vuelve a cero y no pasa nada más: el XP y el nivel se quedan. Y los hitos a los 3, 7, 14, 30, 60 y 100 días dan un bonus de XP a la habilidad principal de la tarea.',
      },
    ],
    body: `Cada tarea que marcas en Skillion mueve cuatro cosas a la vez: gasta energía, da XP, sube tus habilidades y alarga tu racha. Ese es el motor de la app. Y es lo que hace que una tarea hecha se sienta como algo ganado, no como algo tachado.

Yo escribo ese código. Me puse a contar cuántas reglas se ejecutan al marcar una tarea y salieron once. Este artículo es esa fila, con los números tal y como están en el código hoy.

Una nota de vocabulario. En la app, lo que haces se llama tarea. Las habilidades son las barras que suben. Y la palabra misión solo aparece cuando la Máquina del destino te asigna una tarea.

## 1 · La energía: 100 puntos al día

Empiezas cada día con 100 puntos de energía. Se rellenan a las seis de la mañana.

Cada tarea gasta energía al completarla, no al crearla. Cuánto gasta lo decides tú cuando la creas: por defecto 1 punto, y puedes subirlo hasta 50. Una tarea también puede devolver energía. Dormir, una siesta, un paseo: les pones un coste negativo y al marcarlas la barra sube.

Si intentas completar una tarea y no te queda energía, la app no la marca. Te propone crear una tarea de descanso que te devuelva puntos.

**La energía no da nada. Solo obliga a elegir.** Con 100 puntos y tareas de 20, no caben más de cinco al día. Esa es su función: que el día tenga tope.

## 2 · El XP de la tarea: dificultad por suerte

Cuando creas una tarea le pones una dificultad. Cada dificultad tiene un XP base fijo:

| Dificultad | XP base |
|---|---|
| Muy fácil o fácil | 5 |
| Media | 10 |
| Difícil | 15 |
| Muy difícil | 20 |

Encima del XP base se aplica un factor de suerte. Es un número al azar entre 0,8 y 1,7. Una tarea media puede dar 8 puntos un día y 17 otro.

La animación te lo enseña. Si el factor sale por debajo de 0,95 pone "Tirada baja". Por encima de 1,1, "¡Suerte!". A partir de 1,5, "¡CRÍTICO!".

¿Por qué al azar? Porque el cerebro responde más a la recompensa que no espera. Lo explica Luigy en [el artículo de la Máquina del destino](/es/blog/por-que-metimos-una-tragaperras-en-skillion/).

## 3 · Los puntos de cada habilidad: los pones tú

Además del XP de la tarea, cada tarea reparte puntos entre tus habilidades. Esos puntos no dependen de la dificultad ni de la suerte. Los escribes tú, habilidad por habilidad, al crear la tarea. Por defecto son 10.

Si te da pereza rellenar todo esto, escribes el título y pulsas "Configurar con magia". La IA propone dificultad, energía, habilidades y repetición, y tú corriges lo que quieras. Es una de las cosas que trae Premium.

Pueden ser negativos. Una tarea puede sumar 15 a Descanso y restar 10 a Productividad. Es la forma de apuntar algo que haces y que te cuesta en otro lado. La habilidad que resta puede bajar de nivel.

Cada habilidad tiene su propia escala de nivel. Del 1 al 2 hacen falta 100 puntos. Del 2 al 3, 150. Del 3 al 4, 250. Del 4 al 5, 360. Desde ahí, 100 más cada nivel. No hay nivel máximo.

:::tip
Pon XP alto en la habilidad que te cuesta empezar, no en la que ya te sale. Los puntos son un presupuesto de atención: gástalos donde hay fricción.
:::

## 4 · Las monedas: la suerte pega menos

Cada tarea también da monedas. Cuántas, lo decides tú al crearla; por defecto 10.

Aquí el factor de suerte solo cuenta al 30%. Una tarea de 10 monedas da entre 9 y 12. Así la tienda no se infla. Subir de nivel de personaje da además entre 20 y 100 monedas.

Las monedas se gastan en la tienda. Una poción de vida cuesta 50. La ropa del avatar, 1000. Y puedes crear tus propias recompensas con el precio que quieras: "una tarde de videojuegos, 200 monedas". Comprarla es canjearla.

## 5 · La racha y sus hitos

Cada tarea que se repite tiene su racha: días seguidos en los que la completaste. Completarla dos veces el mismo día cuenta como un día.

Hay seis hitos: 3, 7, 14, 30, 60 y 100 días. Cada hito da un bonus de 5 XP por día de racha: 15 puntos a los 3 días, 35 a los 7, 150 a los 30, 500 a los 100. El bonus va a la habilidad principal de la tarea.

Es poco a propósito. Una tarea de 40 XP hecha siete días seguidos da 280 XP de tareas y 35 de bonus. El comentario del código lo dice así: la racha es la guarnición, no el plato.

Si un día no completas la tarea, el contador vuelve a cero. Y no pasa nada más: el XP y el nivel no se tocan. Por eso Skillion no necesita escudos ni congelar rachas.

## 6 · Qué pasa si no la haces

Si una tarea llega a su hora límite sin completarse, pasa a vencida. Por defecto eso es todo. No resta XP, no resta vida.

Puedes activar una penalización tarea por tarea. Si lo haces y la tarea vence, pierdes 5 puntos de vida y la mitad del XP que daba a cada habilidad. Si la vida llega a cero, bajas un nivel y la vida se rellena.

Al abrir la app después de un día con tareas vencidas sale una lista: "Tareas vencidas. Mientras no estabas". Desde ahí puedes marcar como hecha ayer la que sí hiciste, o saltar el resto sin penalización.

Las penalizaciones están apagadas por defecto a propósito. Hay una revisión de 1999 sobre premios y castigos: cuanto más controlador es el sistema, más sustituye tu motivo por el suyo.

## 7 · Los avisos: uno al día como máximo

Skillion manda como máximo una notificación inteligente al día. Es un tope fijo en el código. Los recordatorios de hora fija que pongas tú van aparte.

Hay tres tipos. Racha en peligro: racha de 3 días o más y menos de seis horas para medianoche. Habilidad parada: cinco días sin puntos. Y si dejas de abrir la app: un aviso a los 3, 7 y 14 días. Después, silencio.

De 22:00 a 08:00 no suena nada, salvo la racha en peligro, que se adelanta a las diez. Los tres tipos se apagan por separado en Ajustes.

## 8 · Todo junto

Marcas una tarea. Gasta energía de tus 100 puntos del día. Da XP según la dificultad, con su tirada de suerte. Reparte los puntos que tú pusiste entre tus habilidades. Suma un día a la racha y, si toca hito, paga el bonus.

Y si un día fallas, no pierdes nada salvo que tú hayas pedido lo contrario. Eso es todo el motor, y cada número está en el código de hoy.

> Si cambia el código, cambia el artículo.`,
  },

  en: {
    slug: 'how-skillion-works-inside',
    title: 'How Skillion works inside: energy, XP and streaks',
    excerpt:
      'What exactly happens when you tick a task: how much energy it spends, how much XP it pays, what happens to your streak, and what happens if you skip it.',
    tldr:
      'Every task spends energy from a pool of 100 points a day, pays XP based on its difficulty with a luck factor, splits the points you set across your skills and adds a day to its streak. If you skip it, you lose nothing unless you turned the penalty on yourself.',
    faq: [
      {
        q: 'How much energy do I get per day?',
        a: '100 points. They refill at six in the morning. Each task spends what you set when you create it, from 1 to 50 points, and a rest task such as sleeping can give energy back instead of spending it.',
      },
      {
        q: 'How much XP does a task pay?',
        a: 'It depends on the difficulty: 5 points if it is easy, 10 if medium, 15 if hard and 20 if very hard. On top of that a luck factor between 0.8 and 1.7 applies, so the same task does not always pay the same.',
      },
      {
        q: 'What happens if I skip a task?',
        a: 'By default, nothing: the task shows as expired and its streak goes back to zero. You only lose points if you turned the penalty on for that task. Then it takes 5 health and half the XP it paid to each skill.',
      },
      {
        q: 'Can I freeze my streak?',
        a: 'No need. When a streak breaks, the counter goes back to zero and nothing else happens: XP and level stay. And the milestones at 3, 7, 14, 30, 60 and 100 days pay an XP bonus to the main skill of the task.',
      },
    ],
    body: `Every task you tick in Skillion moves four things at once: it spends energy, pays XP, raises your skills and extends your streak. That is the engine of the app. And it is what makes a finished task feel like something earned, not something crossed off.

I write that code. I sat down to count how many rules run when you tick a task and got eleven. This article is that line-up, with the numbers exactly as they sit in the code today.

A note on vocabulary. In the app, what you do is called a task. Skills are the bars that go up. And a task only becomes a "mission" when the Task of destiny hands it to you.

## 1 · Energy: 100 points a day

You start every day with 100 energy points. They refill at six in the morning.

Each task spends energy when you complete it, not when you create it. How much is up to you when you create it: 1 point by default, and you can raise it up to 50.

A task can also give energy back. Sleep, a nap, a walk: give them a negative cost and the bar goes up when you tick them.

If you try to complete a task and you have no energy left, the app does not tick it. It suggests creating a rest task that gives you points back.

**Energy pays nothing. It only forces a choice.** With 100 points and tasks that cost 20, no more than five fit in a day. That is its job: to give the day a ceiling.

## 2 · Task XP: difficulty times luck

When you create a task you give it a difficulty. Each difficulty has a fixed base XP:

| Difficulty | Base XP |
|---|---|
| Very easy or easy | 5 |
| Medium | 10 |
| Hard | 15 |
| Very hard | 20 |

On top of the base XP a luck factor applies. It is a random number between 0.8 and 1.7. A medium task can pay 8 points one day and 17 the next.

The animation shows it. If the factor lands below 0.95 it says "Low roll". Above 1.1, "Lucky!". From 1.5 up, "CRITICAL!".

Why random? Because the brain responds more to the reward it does not expect. Luigy explains it in [the Task of destiny article](/blog/why-we-put-a-slot-machine-in-a-habit-app/).

## 3 · Points per skill: you set them

Besides task XP, each task splits points across your skills. Those points do not depend on difficulty or luck. You type them, skill by skill, when you create the task. The default is 10.

If filling all this in feels like a chore, you type the title and tap "Configure with magic". The AI proposes difficulty, energy, skills and repetition, and you correct whatever you want. It is one of the things Premium brings.

They can be negative. A task can add 15 to Rest and take 10 from Productivity. It is the way to log something you do that costs you somewhere else. The skill that loses points can drop a level.

Each skill has its own level scale. From 1 to 2 takes 100 points. From 2 to 3, 150. From 3 to 4, 250. From 4 to 5, 360. From there, 100 more per level. There is no level cap.

:::tip
Put high XP on the skill you struggle to start, not the one that already comes easy. Points are an attention budget: spend them where the friction is.
:::

## 4 · Coins: luck bites less

Each task also pays coins. How many is up to you when you create it; the default is 10.

Here the luck factor only counts at 30%. A 10-coin task pays between 9 and 12. That keeps the shop from inflating. Levelling up your character also pays between 20 and 100 coins.

Coins are spent in the shop. A health potion costs 50. Avatar clothes, 1000. And you can create your own rewards at whatever price you want: "an evening of video games, 200 coins". Buying it is redeeming it.

## 5 · The streak and its milestones

Each repeating task has its streak: consecutive days on which you completed it. Completing it twice on the same day counts as one day.

There are six milestones: 3, 7, 14, 30, 60 and 100 days. Each milestone pays a bonus of 5 XP per day of streak: 15 points at 3 days, 35 at 7, 150 at 30, 500 at 100. The bonus goes to the main skill of the task.

It is small on purpose. A 40 XP task done seven days in a row pays 280 XP in tasks and 35 in bonus. The comment in the code puts it like this: the streak is the garnish, not the meal.

If you miss the task one day, the counter goes back to zero. And nothing else happens: XP and level are untouched. That is why Skillion needs no shields and no streak freezes.

## 6 · What happens if you skip it

If a task reaches its deadline without being completed, it becomes expired. By default that is all. No XP lost, no health lost.

You can turn on a penalty task by task. If you do and the task expires, you lose 5 health points and half the XP it paid to each skill. If health reaches zero, you drop a level and health refills.

When you open the app after a day with expired tasks, a list appears: "Tasks Expired. While you were away". From there you can mark as done yesterday the one you did do, or skip the rest with no penalty.

Penalties are off by default on purpose. There is a 1999 review of rewards and punishments: the more controlling the system, the more it replaces your reason with its own.

## 7 · Notifications: one a day at most

Skillion sends at most one smart notification a day. It is a fixed cap in the code. Fixed-time reminders you set yourself are separate.

There are three kinds. Streak in danger: a streak of 3 days or more and fewer than six hours before midnight. Stalled skill: five days without points. And if you stop opening the app: a nudge at 3, 7 and 14 days. After that, silence.

From 22:00 to 08:00 nothing sounds, except streak in danger, which moves up to ten. The three kinds switch off separately in Settings.

## 8 · All together

You tick a task. It spends energy from your 100 points for the day. It pays XP by difficulty, with its luck roll. It splits the points you set across your skills. It adds a day to the streak and, on a milestone, pays the bonus.

And if you miss a day, you lose nothing unless you asked for it. That is the whole engine, and every number is in today's code.

> If the code changes, the article changes.`,
  },
};
