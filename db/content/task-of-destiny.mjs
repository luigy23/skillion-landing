import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * "Por qué metimos una tragaperras en una app de hábitos" — la Máquina del
 * destino (en inglés la app la llama "Task of destiny") y por qué engancha.
 *
 * Pedido por el jefe en septiembre de 2026: explicar por qué el "casino"
 * funciona y su relación con la dopamina y la recompensa incierta, tipo
 * TikTok. Se explica con tres fuentes comprobadas en Crossref (Schultz 1997,
 * Fiorillo 2003, Ferster y Skinner 1957) en lenguaje llano, y se dice para
 * quién no es. Los números (10% calavera, 15% triple, ×2/×3, topes del plan
 * gratis) son los del código de la app.
 *
 * Firma Luigy porque es una decisión de producto que hay que defender.
 */
export const taskOfDestiny = {
  translationKey: 'task-of-destiny',
  category: 'science',
  icon: 'star',
  readingMinutes: 4,
  xp: 20,
  featured: false,
  publishedAt: '2026-09-03',
  author: AUTHORS.luigy,
  sources: [SOURCES.fiorillo2003, SOURCES.schultz1997, SOURCES.fersterSkinner1957, SOURCES.deci1999],

  es: {
    slug: 'por-que-metimos-una-tragaperras-en-skillion',
    title: 'Por qué metimos una tragaperras en una app de hábitos',
    excerpt:
      'La Máquina del destino elige tu próxima tarea al azar y te devuelve la apuesta multiplicada si la terminas. Funciona por la misma razón que TikTok: no sabes qué viene.',
    tldr:
      'La Máquina del destino apuesta tus monedas sobre tus tareas pendientes y elige una al azar. Engancha porque no sabes qué va a salir: el cerebro responde más a una recompensa incierta que a una segura. Se diferencia de un casino en que el premio solo llega si haces la tarea, y las monedas se ganan trabajando.',
    faq: [
      {
        q: '¿Cómo funciona la Máquina del destino?',
        a: 'Eliges categorías y una apuesta de monedas. Giras, y la máquina elige al azar una de tus tareas pendientes. La haces con un temporizador y, al terminar, recuperas la apuesta por dos, o por tres si salieron tres iguales. Si abandonas, la apuesta se queda en la máquina.',
      },
      {
        q: '¿Puedo perder monedas?',
        a: 'Sí, de dos formas. Una de cada diez tiradas sale calavera y la máquina se queda la apuesta sin darte tarea. Y si aceptas una tarea y la abandonas, también la pierdes. Las monedas son las de la app, ganadas haciendo tareas. No hay dinero real.',
      },
      {
        q: '¿Por qué engancha no saber la recompensa?',
        a: 'Porque el cerebro responde más fuerte a una recompensa que llega mejor de lo esperado, y más aún cuando no sabe si va a llegar. Es lo mismo que hace que sigas deslizando en TikTok: no sabes qué vídeo viene. La máquina usa ese mecanismo para que hagas una tarea que ya querías hacer.',
      },
      {
        q: '¿Cuántas veces al día puedo usarla?',
        a: 'En el plan gratis, tres tareas aceptadas al día y apuestas de hasta 100 monedas. Con Premium no hay tope de tareas ni de apuesta, y además puedes mezclar categorías y sacar tareas concretas del bombo.',
      },
    ],
    body: `La Máquina del destino de Skillion te quita la excusa de no saber por dónde empezar. Apuestas monedas, elige una tarea pendiente por ti, y si la terminas cobras el doble. **Engancha por lo mismo que TikTok: no sabes qué va a salir.**

Metí una tragaperras en Skillion y la primera reacción del equipo fue: "eso es un casino". Tenían razón a medias. Abajo explico por qué funciona, con los estudios y los números tal cual están en la app.

## 1 · Cómo funciona

Eliges qué categorías entran y cuánto apuestas: 5, 10, 25, 50 o 100 monedas. Giras.

La máquina elige al azar una de tus tareas pendientes. Esa tarea pasa a ser tu misión. La aceptas y arranca un temporizador: 15, 25, 45 o 60 minutos, o el que tú pongas.

Cuando el temporizador llega a cero, marcas la tarea y cobras: la apuesta por dos. Si los tres rodillos salieron iguales, por tres. Eso pasa el 15% de las veces.

Una de cada diez tiradas sale calavera. La máquina se queda la apuesta y no hay tarea. Y si aceptas una misión y la abandonas, la apuesta también se queda dentro.

## 2 · Por qué engancha: la recompensa que no sabes

En 1997 unos investigadores midieron neuronas de dopamina en monos mientras recibían zumo. Las neuronas no se activaban al recibir el zumo. Se activaban cuando el zumo llegaba mejor de lo esperado. Si ya lo esperaban, casi nada.

En 2003 el mismo grupo afinó el dato. La respuesta era máxima cuando la probabilidad de premio era del 50%. Es decir, cuando el animal no tenía ni idea de si iba a cobrar.

Eso es lo que pasa en TikTok. No sabes si el siguiente vídeo será bueno. Por eso deslizas otra vez.

Y hay algo más viejo. En los años cincuenta, Skinner probó distintas formas de repartir premios a animales. La que producía la conducta más persistente premiaba tras un número de intentos que cambiaba cada vez. Es exactamente cómo funciona una tragaperras.

**La Máquina del destino usa las tres cosas.** No sabes qué tarea va a salir. No sabes si cobrarás por dos o por tres. Y a veces sale calavera.

## 3 · Lo que la separa de un casino

Un casino te cobra dinero y te da azar. La máquina te cobra monedas que ganaste haciendo tareas y te da una tarea.

El azar decide cuál. No decide si la haces. El premio solo llega cuando el temporizador termina y la tarea está hecha. Nadie cobra nada sin trabajar.

Y hay topes. En el plan gratis, tres misiones aceptadas al día y apuestas de hasta 100 monedas. Con Premium no hay tope, y además eliges qué tareas juegan y mezclas categorías. Quien paga ya ha demostrado que quiere usarla. Quien no, tiene un límite que le protege de su propio día malo.

:::tip
Empieza con apuestas de 5 o 10. La gracia no está en cuánto ganas, sino en que la tarea la elige otro.
:::

## 4 · Por qué la metí

La parte más difícil de una tarea no es hacerla. Es elegirla. Miras la lista, no eliges nada y se te va la tarde. La máquina elige por ti y el temporizador te saca del sofá.

Dos avisos honestos. Si te cuesta parar con las apuestas, no la uses: Skillion funciona igual de bien sin ella. Y si un día notas que haces tareas por la máquina y no por lo que te trajo, apágala una semana. Ese riesgo lo conté en [el artículo sobre gamificar tu vida](/es/blog/como-gamificar-tu-vida/).

> El azar no hace la tarea por ti. Solo te quita la excusa de no saber cuál.`,
  },

  en: {
    slug: 'why-we-put-a-slot-machine-in-a-habit-app',
    title: 'Why we put a slot machine in a habit app',
    excerpt:
      'The Task of destiny picks your next task at random and pays your bet back multiplied if you finish it. It works for the same reason TikTok does: you do not know what is coming.',
    tldr:
      'The Task of destiny bets your coins on your pending tasks and picks one at random. It hooks you because you do not know what will come out: the brain responds more to an uncertain reward than to a sure one. Unlike a casino, the prize only arrives if you do the task.',
    faq: [
      {
        q: 'How does the Task of destiny work?',
        a: 'You pick categories and a bet in coins. You spin, and the machine picks one of your pending tasks at random. You do it against a timer and, when you finish, you get the bet back doubled, or tripled if three of a kind came up. If you give up, the bet stays in the machine.',
      },
      {
        q: 'Can I lose coins?',
        a: 'Yes, in two ways. One spin in ten comes up skull and the machine keeps the bet without giving you a task. And if you accept a task and abandon it, you lose it too. The coins are the app\'s own, earned by doing tasks. There is no real money.',
      },
      {
        q: 'Why is not knowing the reward so addictive?',
        a: 'Because the brain responds harder to a reward that arrives better than expected, and harder still when it does not know whether it will arrive. It is the same thing that keeps you scrolling on TikTok: you do not know which video comes next. The machine uses that mechanism to get you to do a task you already wanted to do.',
      },
      {
        q: 'How many times a day can I use it?',
        a: 'On the free plan, three accepted tasks a day and bets of up to 100 coins. With Premium there is no cap on tasks or bets, and you can also mix categories and pull specific tasks out of the drum.',
      },
    ],
    body: `Skillion's Task of destiny takes away the excuse of not knowing where to start. You bet coins, it picks a pending task for you, and if you finish it you collect double. **It hooks you for the same reason TikTok does: you do not know what will come out.**

I put a slot machine in Skillion and the team's first reaction was: "that is a casino". They were half right. Below I explain why it works, with the studies and the numbers exactly as they are in the app.

## 1 · How it works

You pick which categories go in and how much you bet: 5, 10, 25, 50 or 100 coins. You spin.

The machine picks one of your pending tasks at random. That task becomes your mission. You accept it and a timer starts: 15, 25, 45 or 60 minutes, or whatever you set.

When the timer hits zero, you tick the task and collect: the bet doubled. If the three reels came up the same, tripled. That happens 15% of the time.

One spin in ten comes up skull. The machine keeps the bet and there is no task. And if you accept a mission and abandon it, the bet stays inside too.

## 2 · Why it hooks you: the reward you do not know

In 1997 some researchers measured dopamine neurons in monkeys while they were given juice. The neurons did not fire when the juice arrived. They fired when the juice arrived better than expected. If it was already expected, barely at all.

In 2003 the same group sharpened the finding. The response was highest when the chance of a reward was 50%. That is, when the animal had no idea whether it would get paid.

That is what happens on TikTok. You do not know whether the next video will be good. So you scroll again.

And there is something older. In the 1950s, Skinner tested different ways of handing out rewards to animals. The one that produced the most persistent behaviour rewarded after a number of attempts that changed every time. That is exactly how a slot machine works.

**The Task of destiny uses all three.** You do not know which task will come out. You do not know whether you will collect double or triple. And sometimes it comes up skull.

## 3 · What sets it apart from a casino

A casino charges you money and gives you chance. The machine charges you coins you earned by doing tasks and gives you a task.

Chance decides which one. It does not decide whether you do it. The prize only arrives when the timer ends and the task is done. Nobody collects anything without working.

And there are caps. On the free plan, three accepted missions a day and bets of up to 100 coins. With Premium there is no cap, and you also choose which tasks play and mix categories.

Whoever pays has already shown they want to use it. Whoever does not has a limit that protects them from their own bad day.

:::tip
Start with bets of 5 or 10. The point is not how much you win, it is that someone else picks the task.
:::

## 4 · Why I put it in

The hardest part of a task is not doing it. It is choosing it. You look at the list, pick nothing, and the afternoon is gone. The machine picks for you and the timer gets you off the sofa.

Two honest warnings. If you find it hard to stop betting, do not use it: Skillion works just as well without it.

And if one day you notice you are doing tasks for the machine and not for what brought you here, switch it off for a week. I wrote about that risk in [the article on gamifying your life](/blog/how-to-gamify-your-life/).

> Chance does not do the task for you. It only takes away the excuse of not knowing which one.`,
  },
};
