import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * Datos propios agregados (SCRUM-450, criterio 4).
 *
 * Fuente: Supabase de producción y Mixpanel, consultados el 2026-08-30 con
 * docs/aeo-datos-consultas.sql. Todo agregado, umbral de 50 usuarios por grupo,
 * ninguna cifra permite llegar a una persona.
 *
 * NO incluye métricas de negocio (MRR, ingresos, suscripciones activas).
 *
 * Las advertencias metodológicas van DENTRO del artículo: una curva de
 * supervivencia sin declarar la censura de cohorte es una cifra falsa.
 *
 * Acortado en septiembre de 2026 (de 1.700 a unas 950 palabras). Todas las
 * cifras que quedan son las mismas que en la versión larga; se quitó prosa,
 * no datos. ES y EN llevan cifras idénticas.
 */
export const habitData2026 = {
  translationKey: 'habit-data-2026',
  category: 'science',
  icon: 'coin3',
  readingMinutes: 5,
  xp: 25,
  featured: false,
  publishedAt: '2026-08-30',
  author: AUTHORS.jesus,
  sources: [SOURCES.lally2010, SOURCES.gardner2012, SOURCES.woodRunger2016],

  es: {
    slug: 'datos-reales-abandono-de-habitos',
    title: 'Lo que 156.000 tareas completadas dicen sobre abandonar hábitos',
    excerpt:
      'Datos agregados de 7.070 usuarios de Skillion durante 10 meses: cuánto dura un hábito de verdad, cuándo se abandona y en qué nos equivocamos al medirlo.',
    tldr:
      'De 9.923 hábitos reales, la mitad no pasa de 7 días. Pero si miras solo a quien lleva 90 días o más con la app, la mitad aguanta 85. Las dos cifras son ciertas, y la diferencia entre ellas es lo más útil que hemos aprendido.',
    faq: [
      {
        q: '¿Cuánto dura un hábito nuevo según datos reales?',
        a: 'De nuestros 9.923 hábitos que se repiten, la mitad no pasa de 7 días. Una cuarta parte llega a 19 días, y solo el 8,7% alcanza los 66 días que en los estudios marcan el punto donde la cosa ya sale sola. El hábito vivo más veterano lleva 314 días.',
      },
      {
        q: '¿Por qué vuestros datos dicen 7 días y los estudios dicen 66?',
        a: 'Porque miden cosas distintas. Aquel estudio midió cuánto tarda un hábito en salir solo, en gente que siguió participando las doce semanas. Nosotros medimos cuánto aguanta un hábito en una app que cualquiera puede cerrar. Los 66 días son lo que tarda en cuajar. Los 7 son lo que la gente le da antes de rendirse.',
      },
      {
        q: '¿Cuándo se abandona un hábito?',
        a: 'Antes de lo que parece y sin avisar. El 16,8% de los hábitos se completa una sola vez y nunca más. El 42% de la gente no vuelve al día siguiente de instalar la app, y a la semana queda el 17%. Casi nadie marca que ha fallado: de 7.070 personas, solo 801 usaron alguna vez esa función.',
      },
      {
        q: '¿Es mejor una tarea recurrente o una suelta?',
        a: 'En nuestros datos, las tareas sueltas se completan el 34% de las veces y las recurrentes el 17%: la mitad. Y aun así la gente crea más recurrentes que sueltas. Nos comprometemos justo con lo que menos cumplimos.',
      },
      {
        q: '¿Estos datos permiten identificar a alguien?',
        a: 'No. Todo está agregado y ningún grupo con menos de 50 usuarios aparece publicado. No hay datos por persona, ni nombres de tareas, ni nada que se pueda cruzar para llegar a una cuenta concreta.',
      },
    ],
    body: `Skillion está hecha para la primera semana: tareas pequeñas al empezar, energía que te impide meter quince cosas, y un aviso antes de que la racha se rompa. Ese diseño sale de un dato que casi nadie tiene: cuándo se abandona un hábito de verdad.

**La mitad de los hábitos que alguien se propone no llega a los siete días.** Lo sabemos porque lo medimos en nuestros propios datos. Lancé la consulta un domingo por la tarde contando con que la cifra saliera fea. Salió peor.

Casi todo lo que has leído sobre hábitos sale de estudios con unas decenas de voluntarios que aguantaron hasta el final. Nosotros vemos lo contrario: a quien se instala la app un martes, crea cuatro hábitos, cumple dos días y no vuelve. Por eso la app está montada como está.

## 1 · Qué estamos contando

- Del 9 de octubre de 2025 al 30 de agosto de 2026.
- 7.070 personas, 156.028 tareas completadas y 9.923 hábitos que se repiten, de 2.323 personas.
- Todo sumado y sin nombres. Ningún grupo de menos de 50 personas aparece aquí.
- "Un hábito vivió 90 días" significa que pasaron 90 días entre la primera vez que alguien lo cumplió y la última. No que lo cumpliera todos los días. Es una forma generosa de contar, y aun así los números salen bajos.

## 2 · La mitad no llega a la segunda semana

De 9.923 hábitos que se repiten:

| | Cuánto vivieron |
| --- | --- |
| Una cuarta parte, menos de | 3 días |
| La mitad, menos de | 7 días |
| Tres cuartas partes, menos de | 19 días |

Un 16,8% se cumple una vez y nunca más: nacen y mueren el mismo día. En la otra punta, el hábito vivo más veterano lleva 314 días.

## 3 · Por qué esa cifra también engaña

Si un hábito nació hace diez días, no puede llevar 90 vivo. Meterlo en la cuenta de "cuántos llegan a 90 días" hace que salgan más muertos de los que hay. Es el fallo más repetido en las gráficas de este tipo.

Si miras solo a quien lleva 90 días o más con la app, la foto cambia entera:

| Sigue vivo a los... | Todos (9.923) | Los que llevan 90 días o más (1.333) |
| --- | --- | --- |
| 7 días | 54% | 92% |
| 14 días | 34% | 85% |
| 30 días | 16% | 74% |
| 66 días | ~9% | 57% |
| 90 días | 6% | 48% |
| La mitad aguanta | 7 días | 85 días |

> Siete días contra ochenta y cinco. Las dos columnas son verdad y ninguna es la buena.

La primera contesta a "si me propongo un hábito hoy, ¿qué posibilidades tiene?". La segunda, a "de los que llevan tres meses aquí, ¿cómo les ha ido?". Juntas dicen una cosa: **el filtro no está en el hábito, está en la primera semana.**

## 4 · Los 66 días de los estudios

Hay un estudio muy citado que siguió a gente durante doce semanas. A la mitad le costó unos 66 días que el hábito saliera sin pensar, con un margen de 18 a más de 250.

No nos lleva la contraria. Ellos midieron cuánto tarda algo en hacerse automático en gente que siguió tres meses. Nosotros medimos cuánto aguanta la gente antes de rendirse.

Juntas dicen algo incómodo: **la mayoría abandona en la primera semana algo que tarda dos meses en asentarse.** Y como solo el 8,7% llega a los 66 días, casi nadie comprueba si le funcionaba.

## 5 · Nadie avisa de que lo deja

De 7.070 personas, solo 801 marcaron alguna vez una tarea como fallida. Un 11%. No es que el resto cumpla todo. Es que **rendirse no se anuncia**: la gente deja de abrir la app.

Los datos de uso lo confirman. Mirando 31 grupos de unas 1.125 personas cada uno:

| | Vuelven |
| --- | --- |
| Al día siguiente | 58% |
| A los 3 días | 27% |
| A los 7 días | 17% |
| A los 14 días | 10% |
| Al mes | ~5% |

**El 42% no vuelve al día siguiente de instalarla.**

:::tip
Si llevas tres días seguidos ya vas por delante del 73% de la gente que se instaló la app el mismo día que tú. La primera semana no es el principio del camino. Es casi todo el camino.
:::

## 6 · Prometer "siempre" cuesta el doble

| Tipo | Creadas | Se cumplen |
| --- | --- | --- |
| De una vez | 49.509 | 34% |
| Que se repiten | 60.283 | 17% |

Justo la mitad. Y aun así la gente crea más tareas que se repiten. Cuando creas la tarea no prometes hacerla hoy, prometes hacerla siempre. Y "siempre" desde el sofá parece fácil.

## 7 · El día de la semana da igual

El mejor día es el martes, con 23.402 tareas completadas. El peor, el sábado, con 20.941. Del mejor al peor hay un 12%. Eso es plano. Si esperas al lunes para empezar, el martes te va a ir igual.

## 8 · Lo que estos datos no pueden decirte

**Qué habilidades elige la gente.** Las más comunes son disciplina, intelecto y salud, pero son las que la app pone al empezar. Su nivel medio va de 1,1 a 1,9. Estamos midiendo lo que ponemos nosotros, no lo que elige nadie.

**Con cuántos hábitos conviene empezar.** La app pone tres al arrancar y casi nadie crea más. El grupo de "cuatro o más" son 69 personas, por debajo del mínimo que publicamos. El consejo de empezar con tres lo damos por los estudios, no por estos datos.

**Si planificar el día funciona.** Quien coloca las tareas en una franja del día completa 26,6 de media, frente a 20,5 de quien no. Puede ser al revés: que la gente constante sea la que planifica. Con nuestros datos no se puede separar.

**A qué hora cumple la gente.** Guardamos la hora universal, no la zona de cada persona. El pico de las dos de la madrugada es casi seguro la tarde en Latinoamérica.

## 9 · Qué hacemos con esto

Una sola conclusión: **el problema no es mantener un hábito, es llegar a la segunda semana.** Skillion está montada alrededor de eso.

Al empezar te pone tareas de tres minutos, para que el primer día sea una victoria segura. La energía, 100 puntos al día, te impide meter quince cosas. Y si una racha de tres días o más está a punto de romperse, te avisa antes de medianoche.

El consejo para ti sale de los mismos números: haz el hábito ridículamente pequeño durante siete días. No para crear el hábito. Para cruzar el tramo donde se muere la mitad.

---

*Números sumados de la base de datos de Skillion y de la analítica de uso, consultados el 30 de agosto de 2026. Ningún grupo de menos de 50 personas ni ningún dato individual.*`,
  },

  en: {
    slug: 'real-data-on-quitting-habits',
    title: 'What 156,000 completed tasks say about quitting habits',
    excerpt:
      'Aggregated data from 7,070 Skillion users over 10 months: how long a habit really lasts, when people quit, and where we got the measurement wrong.',
    tldr:
      'Out of 9,923 real habits, half last 7 days. But if you only look at people who have been with the app 90 days or more, half of them last 85. Both figures are true, and the gap between them is the most useful thing we learned.',
    faq: [
      {
        q: 'How long does a new habit last according to real data?',
        a: 'Out of our 9,923 repeating habits, half do not get past 7 days. A quarter reach 19 days, and only 8.7% make it to the 66 days that studies mark as the point where it starts running on its own. The oldest habit still alive is at 314 days.',
      },
      {
        q: 'Why does your data say 7 days when studies say 66?',
        a: 'Because they measure different things. That study measured how long a habit takes to run on its own, among people who kept taking part for twelve weeks. We measure how long a habit lasts in an app anyone can close. The 66 days is how long it takes to set. The 7 is how long people give it before giving up.',
      },
      {
        q: 'When do people quit a habit?',
        a: 'Sooner than it looks, and without announcing it. 16.8% of habits are completed exactly once and never again. 42% of people do not come back the day after installing the app, and by day seven 17% remain. Almost nobody marks a failure: out of 7,070 people, only 801 ever used that feature.',
      },
      {
        q: 'Is a recurring task better than a one-off?',
        a: 'In our data, one-off tasks get completed 34% of the time and recurring ones 17%: half. And people still create more recurring tasks than one-offs. We commit hardest to the thing we follow through on least.',
      },
      {
        q: 'Can this data identify anyone?',
        a: 'No. Everything is aggregated and no group with fewer than 50 users is published. There is no per-person data, no task names, nothing that can be cross-referenced back to an account.',
      },
    ],
    body: `Skillion is built for the first week: small tasks to start with, energy that stops you piling on fifteen things, and a nudge before a streak breaks. That design comes from a figure almost nobody has: when a habit really gets abandoned.

**Half the habits anyone sets never reach day seven.** We know because we measured it in our own data. I ran the query on a Sunday afternoon expecting an ugly number. It came out worse.

Almost everything you have read about habits comes from studies with a few dozen volunteers who stayed to the end. We see the opposite: the person who installs the app on a Tuesday, creates four habits, shows up twice and never comes back. That is why the app is built the way it is.

## 1 · What we are counting

- From 9 October 2025 to 30 August 2026.
- 7,070 people, 156,028 completed tasks and 9,923 repeating habits, from 2,323 people.
- All of it added up, no names. No group smaller than 50 people appears here.
- "A habit lived 90 days" means 90 days passed between the first time someone completed it and the last. Not that they did it every day. That is a generous way to count, and the numbers still come out low.

## 2 · Half of them never reach week two

Out of 9,923 repeating habits:

| | How long they lived |
| --- | --- |
| A quarter, less than | 3 days |
| Half, less than | 7 days |
| Three quarters, less than | 19 days |

16.8% get completed once and never again: born and dead the same day. At the other end, the oldest habit still alive is on 314 days.

## 3 · Why that figure misleads too

If a habit was born ten days ago, it cannot have lived 90. Throwing it into the "how many reach 90 days" count makes more of them look dead than really are. It is the most repeated mistake in charts like this.

If you look only at people who have been around 90 days or more, the picture changes completely:

| Still alive at... | Everyone (9,923) | People on 90+ days (1,333) |
| --- | --- | --- |
| 7 days | 54% | 92% |
| 14 days | 34% | 85% |
| 30 days | 16% | 74% |
| 66 days | ~9% | 57% |
| 90 days | 6% | 48% |
| Half of them last | 7 days | 85 days |

> Seven days against eighty-five. Both columns are true and neither is the right one.

The first answers "if I set myself a habit today, what are its chances?". The second, "of the people still here after three months, how did it go?". Together they say one thing: **the filter is not in the habit, it is in the first week.**

## 4 · The 66 days from the studies

There is a much-cited study that followed people for twelve weeks. Half of them took around 66 days for the habit to run without thinking, with a spread from 18 to over 250.

It does not contradict us. They measured how long something takes to become automatic in people who stayed three months. We measure how long people last before giving up.

Together they say something uncomfortable: **most people quit in the first week on something that takes two months to settle.** And since only 8.7% reach 66 days, hardly anyone finds out whether it would have worked.

## 5 · Nobody announces they are quitting

Of 7,070 people, only 801 ever marked a task as failed. That is 11%. It is not that the rest do everything. It is that **giving up is not announced**: people just stop opening the app.

The usage data confirms it. Looking at 31 groups of about 1,125 people each:

| | Come back |
| --- | --- |
| Next day | 58% |
| After 3 days | 27% |
| After 7 days | 17% |
| After 14 days | 10% |
| After a month | ~5% |

**42% never come back the day after installing it.**

:::tip
If you are three days in, you are already ahead of 73% of the people who installed the app the same day you did. The first week is not the start of the road. It is most of the road.
:::

## 6 · Promising "always" costs double

| Type | Created | Get done |
| --- | --- | --- |
| One-off | 49,509 | 34% |
| Repeating | 60,283 | 17% |

Exactly half. And people still create more repeating tasks. When you create the task you are not promising to do it today, you are promising to do it always. And "always" looks easy from the sofa.

## 7 · The day of the week barely matters

The best day is Tuesday, with 23,402 tasks completed. The worst is Saturday, with 20,941. Best to worst is 12%. That is flat. If you are waiting for a Monday to start, Tuesday will go the same.

## 8 · What this data cannot tell you

**Which skills people choose.** The most common are discipline, intellect and health, but they are the ones the app sets up at the start. Their average level runs from 1.1 to 1.9. We are measuring what we put there, not what anyone picked.

**How many habits to start with.** The app sets up three at the start and hardly anyone adds more. The "four or more" group is 69 people, below the minimum we publish. The advice to start with three comes from the studies, not from this data.

**Whether planning your day works.** People who put tasks on a slot in the day complete 26.6 on average, against 20.5 for people who do not. It could be the other way round: the consistent people are the ones who plan. Our data cannot separate them.

**What time of day people deliver.** We store universal time, not each person's zone. The spike at two in the morning is almost certainly the afternoon in Latin America.

## 9 · What we do with this

One conclusion: **the problem is not keeping a habit going, it is reaching week two.** Skillion is built around that.

When you start, it gives you three-minute tasks so day one is a sure win. Energy, 100 points a day, stops you piling on fifteen things. And if a streak of three days or more is about to break, it nudges you before midnight.

The advice for you comes from the same numbers: make the habit ridiculously small for seven days. Not to build the habit. To cross the stretch where half of them die.

---

*Added-up figures from Skillion's database and usage analytics, queried on 30 August 2026. No group smaller than 50 people and no individual data.*`,
  },
};
