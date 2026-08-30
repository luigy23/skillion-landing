import { AUTHORS, SOURCES } from './sources.mjs';

/**
 * Datos propios agregados (SCRUM-450, criterio 4).
 *
 * Fuente: Supabase de producción y Mixpanel, consultados el 2026-08-30 con
 * docs/aeo-datos-consultas.sql. Todo agregado, umbral de 50 usuarios por grupo,
 * ninguna cifra permite llegar a una persona.
 *
 * NO incluye métricas de negocio (MRR, ingresos, suscripciones activas): son
 * decisión de Jesús, no mía, y el ratio entre clientes nuevos y suscripciones
 * le diría a un competidor exactamente dónde está la empresa.
 *
 * Las advertencias metodológicas van DENTRO del artículo, no en un pie de
 * página: una curva de supervivencia sin declarar la censura de cohorte es una
 * cifra falsa, y publicarla así nos costaría justo la credibilidad que esta
 * tarea intenta ganar.
 */
export const habitData2026 = {
  translationKey: 'habit-data-2026',
  category: 'science',
  icon: 'coin',
  readingMinutes: 10,
  xp: 50,
  featured: false,
  publishedAt: '2026-08-30',
  author: AUTHORS.luigy,
  sources: [SOURCES.lally2010, SOURCES.gardner2012, SOURCES.woodRunger2016],

  es: {
    slug: 'datos-reales-abandono-de-habitos',
    title: 'Lo que 156.000 tareas completadas dicen sobre abandonar hábitos',
    excerpt:
      'Datos agregados de 7.070 usuarios de Skillion durante 10 meses: cuánto dura un hábito de verdad, cuándo se abandona y en qué nos equivocamos al medirlo.',
    tldr:
      'En 9.923 hábitos recurrentes reales, la mediana de vida es de 7 días, no de 66. El 16,8% no sobrevive a las primeras 24 horas. Pero esa cifra engaña: si solo miras a quienes llevan más de 90 días con la app, la mediana sube a 85 días. Las dos son ciertas y la diferencia entre ellas es lo más útil que hemos aprendido mirando nuestros propios datos.',
    faq: [
      {
        q: '¿Cuánto dura un hábito nuevo según datos reales?',
        a: 'En nuestros 9.923 hábitos recurrentes, la mediana es de 7 días: la mitad muere en la primera semana. El cuartil superior llega a 19 días y solo el 8,7% alcanza los 66 días que la investigación asocia con la automatización. El hábito vivo más antiguo lleva 314 días.',
      },
      {
        q: '¿Por qué vuestros datos dicen 7 días y los estudios dicen 66?',
        a: 'Porque miden cosas distintas. El estudio de Lally midió cuánto tardaba en automatizarse un hábito en gente que siguió participando las 12 semanas. Nosotros medimos cuánto sobrevive un hábito en una app que cualquiera puede cerrar y no volver a abrir. Los 66 días son el tiempo que tarda en consolidarse; los 7 son el tiempo que la gente le da antes de rendirse.',
      },
      {
        q: '¿Cuándo se abandona un hábito?',
        a: 'Antes de lo que parece y sin avisar. El 16,8% de los hábitos se completa una sola vez y nunca más. En la app, el 42% de la gente no vuelve al día siguiente de instalarla, y a la semana queda el 17%. Casi nadie marca formalmente que ha fallado: de 7.070 personas, solo 801 usaron alguna vez la función de marcar una tarea como fallida.',
      },
      {
        q: '¿Es mejor una tarea recurrente o una suelta?',
        a: 'En nuestros datos, las tareas sueltas se completan el 34% de las veces y las recurrentes el 17%: exactamente la mitad. Y aun así la gente crea más recurrentes que sueltas. Nos comprometemos justo con lo que menos cumplimos.',
      },
      {
        q: '¿Estos datos permiten identificar a alguien?',
        a: 'No. Todo está agregado y ningún grupo con menos de 50 usuarios aparece publicado. No hay datos por persona, ni nombres de tareas, ni nada que se pueda cruzar para llegar a una cuenta concreta.',
      },
    ],
    body: `Casi todo lo que se lee sobre hábitos sale de estudios con decenas de participantes que aceptaron que los siguieran durante semanas. Son buenos estudios y los citamos a menudo. Pero tienen un sesgo enorme: **miden a gente que se apuntó y se quedó**.

Nosotros vemos lo contrario. Vemos a quien instala la app un martes, crea cuatro hábitos, cumple dos días y desaparece. Esa persona no aparece en ningún estudio, y es la mayoría.

Esto es lo que hemos encontrado al mirar nuestros propios datos, incluyendo las partes que preferiríamos no publicar.

## 1 · ¿Qué estamos midiendo exactamente?

Antes de una sola cifra, porque sin esto los números de abajo no significan nada:

- **Ventana:** del 9 de octubre de 2025 al 30 de agosto de 2026. Unos 10 meses y medio.
- **Muestra:** 7.070 usuarios, 156.028 tareas completadas, 9.923 hábitos recurrentes de 2.323 usuarios.
- **Todo agregado.** Ningún grupo de menos de 50 usuarios aparece aquí. No hay datos por persona.
- **"Días de vida" de un hábito** significa la distancia entre la primera y la última vez que se completó. **No** significa constancia. Un hábito cumplido el día 1 y el día 90 cuenta como 90 días de vida con dos cumplimientos. Es una medida generosa, y aun así los números salen bajos.

## 2 · La mediana es de 7 días

De 9.923 hábitos recurrentes:

| | Días de vida |
| --- | --- |
| Percentil 25 | 3 |
| **Mediana** | **7** |
| Percentil 75 | 19 |

La mitad de los hábitos que alguien se propone en Skillion no llega a la segunda semana. El **16,8% se completa una sola vez y nunca más**: nacen y mueren el mismo día.

En el otro extremo, el hábito vivo más antiguo lleva **314 días**.

## 3 · Por qué esa cifra también engaña

Aquí es donde la mayoría de artículos de datos hacen trampa, así que vamos a enseñar las dos lecturas.

Si un hábito nació hace diez días, **no puede** llevar 90 días vivo. Meterlo en el denominador de "cuántos llegan a 90 días" infla artificialmente la mortalidad. Es censura de cohorte, y es el error más común al publicar curvas de supervivencia.

Si se mira solo a quienes tuvieron oportunidad real —usuarios con 90 días o más de recorrido— el panorama cambia por completo:

| Sigue vivo a los... | Todos los hábitos (9.923) | Cohorte con 90+ días (1.333) |
| --- | --- | --- |
| 7 días | 54% | 92% |
| 14 días | 34% | 85% |
| 30 días | 16% | 74% |
| 66 días | ~9% | 57% |
| 90 días | 6% | 48% |
| **Mediana** | **7 días** | **85 días** |

Siete días contra ochenta y cinco. Las dos columnas son ciertas y ninguna es la buena.

La primera responde *"si me propongo un hábito hoy, ¿qué probabilidad hay de que dure?"*. La segunda responde *"entre los que aguantaron tres meses en la app, ¿cómo les fue?"* — y está sesgada hacia arriba, porque solo contiene supervivientes.

La lección práctica es que **el filtro no está en el hábito, está en la primera semana**. Quien pasa de ahí se parece muchísimo más a los sujetos de los estudios.

## 4 · ¿Por qué 7 días y no los 66 de la investigación?

El estudio de Lally y su equipo, que citamos en casi todos nuestros artículos, encontró una mediana de unos 66 días hasta la automatización, con un rango de 18 a más de 250.

No nos contradice. **Mide otra cosa.**

Lally midió *cuánto tarda un comportamiento en volverse automático* en gente que siguió participando doce semanas. Nosotros medimos *cuánto tiempo le da la gente a un hábito antes de rendirse* en una app que se puede cerrar y no volver a abrir.

Puestos juntos, el resultado es incómodo: **la mayoría abandona en la primera semana un proceso que tarda dos meses en cuajar**. No es un fallo de constancia. Es un desajuste de expectativas, y como el 8,7% llega a los 66 días, casi nadie llega a comprobar si la teoría funcionaba con él.

## 5 · Nadie declara que abandona

Este es el dato que más nos sorprendió.

De 7.070 personas que completaron 156.042 tareas, solo **801 marcaron alguna vez una tarea como fallida**. Un 11%.

No significa que el otro 89% cumpla todo. Significa que abandonar no es un acto: **es un silencio**. Nadie entra a la app a declarar que se rinde. Simplemente deja de abrirla.

Los datos de uso lo confirman desde otro ángulo. Promediando 31 cohortes diarias de unos 1.125 usuarios cada una:

| | Vuelven |
| --- | --- |
| Día 1 | 58% |
| Día 3 | 27% |
| Día 7 | 17% |
| Día 14 | 10% |
| Día 30 | ~5% |

**El 42% no vuelve al día siguiente de instalarla.** Y encaja con lo de arriba: si el 16,8% de los hábitos muere en 24 horas y el 42% de la gente no vuelve al día siguiente, son dos fuentes independientes contando la misma historia.

:::tip
Si llevas tres días seguidos, ya estás por encima del 73% de la gente que instaló la app el mismo día que tú. La primera semana no es el principio del camino: es casi todo el camino.
:::

## 6 · Repetir cuesta el doble

Comparando tareas de una sola vez con tareas recurrentes:

| Tipo | Creadas | Se completan |
| --- | --- | --- |
| Sueltas | 49.509 | **34%** |
| Recurrentes | 60.283 | **17%** |

Exactamente la mitad. Y aun así la gente crea **más recurrentes que sueltas**.

Nos comprometemos preferentemente con lo que menos cumplimos. Tiene sentido: al crear la tarea no estás prometiendo hacerla hoy, estás prometiendo hacerla siempre, y la versión "siempre" siempre parece más fácil desde el sofá.

## 7 · El día de la semana da casi igual

Tareas completadas por día, de mayor a menor: martes 23.402, domingo 22.777, miércoles 22.565, lunes 22.467, viernes 22.037, jueves 21.853, sábado 20.941.

Del mejor al peor hay un **12%**. Eso es prácticamente plano.

El lunes no tiene nada especial, ni el fin de semana es el desastre que se supone. Si has estado esperando al lunes para empezar, los datos dicen que el martes que viene te va a dar exactamente igual.

## 8 · Lo que estos datos NO pueden decirte

La parte que ningún artículo de datos publica, y que es la que hace que el resto se pueda creer.

**No sabemos qué skills elige la gente.** El ranking existe —disciplina 7.573 usuarios, intelecto 6.887, salud 4.987— pero es inútil: son las skills que la propia app siembra en el onboarding, traducidas a cada idioma. Las cinco primeras en español y sus equivalentes en inglés, ruso y francés son la misma lista. Su nivel medio es de 1,1 a 1,9 y su racha media de 1 a 3: nadie las cultiva. Estamos midiendo nuestro propio onboarding, no una elección.

**No podemos decirte cuántos hábitos conviene empezar.** Queríamos comprobar nuestro propio consejo —"empieza con tres, no con doce"— y no se puede: la app siembra tres por defecto y casi nadie crea más. El grupo de "cuatro o más" se queda en 69 usuarios, por debajo de nuestro umbral de publicación. Ese consejo lo seguimos dando por la literatura, no por nuestros datos.

**No sabemos si planificar funciona.** Quien usa Time Blocking completa de media 26,6 tareas frente a 20,5 de quien no. Es tentador leerlo como "planificar funciona", y sería un error: es igual de probable que la gente más constante sea la que se molesta en planificar. Correlación, no causalidad, y con nuestros datos no se puede separar.

**No sabemos a qué hora se cumple.** Los sellos de tiempo están en UTC y no guardamos la zona horaria de cada persona. El pico aparente a las 2 de la madrugada es, casi con seguridad, la tarde en Latinoamérica. Publicar "la gente cumple de madrugada" habría sido un titular llamativo y falso.

## 9 · Qué haríamos con esto

Si tuviéramos que sacar una sola conclusión de diez meses de datos: **el problema no es sostener un hábito, es llegar a la semana dos**.

Todo lo que se escribe sobre hábitos —el refuerzo, las rachas, la identidad, los 66 días— aplica a partir de ahí. Antes de ahí, lo único que importa es volver a abrir la app mañana.

Así que la recomendación es aburrida y es la que dan los datos: **haz el hábito ridículamente pequeño durante siete días**. No para crear el hábito, que no se crea en siete días. Para cruzar el tramo donde muere la mitad.

---

*Metodología: agregados de la base de datos de producción de Skillion y de la analítica de uso, consultados el 30 de agosto de 2026 sobre la ventana del 9 de octubre de 2025 al 30 de agosto de 2026. Ningún grupo de menos de 50 usuarios se publica. No se han utilizado ni publicado datos individuales. Las consultas están versionadas en el repositorio de la web.*`,
  },

  en: {
    slug: 'real-data-on-quitting-habits',
    title: 'What 156,000 completed tasks say about quitting habits',
    excerpt:
      'Aggregated data from 7,070 Skillion users over 10 months: how long a habit really lasts, when people quit, and where we got the measurement wrong.',
    tldr:
      'Across 9,923 real recurring habits, the median lifespan is 7 days, not 66. Some 16.8% do not survive the first 24 hours. But that figure misleads: if you only look at people who have been with the app for 90 days or more, the median jumps to 85 days. Both are true, and the gap between them is the most useful thing we learned from our own data.',
    faq: [
      {
        q: 'How long does a new habit last according to real data?',
        a: 'Across our 9,923 recurring habits, the median is 7 days: half die in the first week. The upper quartile reaches 19 days and only 8.7% make it to the 66 days research associates with automaticity. The oldest habit still alive is at 314 days.',
      },
      {
        q: 'Why does your data say 7 days when studies say 66?',
        a: 'Because they measure different things. The Lally study measured how long a habit took to automate among people who kept participating for 12 weeks. We measure how long a habit survives in an app anyone can close and never reopen. The 66 days is how long it takes to consolidate; the 7 is how long people give it before giving up.',
      },
      {
        q: 'When do people quit a habit?',
        a: 'Sooner than it looks, and without announcing it. 16.8% of habits are completed exactly once and never again. In the app, 42% of people do not come back the day after installing, and by day seven 17% remain. Almost nobody formally marks a failure: out of 7,070 people, only 801 ever used the mark-as-failed feature.',
      },
      {
        q: 'Is a recurring task better than a one-off?',
        a: 'In our data, one-off tasks get completed 34% of the time and recurring ones 17%: exactly half. And people still create more recurring tasks than one-offs. We commit hardest to the thing we follow through on least.',
      },
      {
        q: 'Can this data identify anyone?',
        a: 'No. Everything is aggregated and no group with fewer than 50 users is published. There is no per-person data, no task names, nothing that can be cross-referenced back to an account.',
      },
    ],
    body: `Almost everything written about habits comes from studies with dozens of participants who agreed to be tracked for weeks. They are good studies and we cite them often. But they carry a huge bias: **they measure people who signed up and stayed**.

We see the opposite. We see the person who installs the app on a Tuesday, creates four habits, follows through for two days and vanishes. That person appears in no study, and they are the majority.

Here is what we found in our own data, including the parts we would rather not publish.

## 1 · What exactly are we measuring?

Before a single figure, because without this the numbers below mean nothing:

- **Window:** 9 October 2025 to 30 August 2026. About ten and a half months.
- **Sample:** 7,070 users, 156,028 completed tasks, 9,923 recurring habits from 2,323 users.
- **All aggregated.** No group under 50 users appears here. No per-person data.
- **A habit's "days alive"** means the distance between the first and last completion. It does **not** mean consistency. A habit done on day 1 and day 90 counts as 90 days alive with two completions. It is a generous measure, and the numbers still come out low.

## 2 · The median is 7 days

Across 9,923 recurring habits:

| | Days alive |
| --- | --- |
| 25th percentile | 3 |
| **Median** | **7** |
| 75th percentile | 19 |

Half the habits people set for themselves in Skillion do not reach week two. **16.8% are completed exactly once and never again**: born and dead the same day.

At the other end, the oldest habit still alive is at **314 days**.

## 3 · Why that figure also misleads

This is where most data posts cheat, so here are both readings.

If a habit was created ten days ago, it **cannot** be 90 days old. Putting it in the denominator of "how many reach 90 days" artificially inflates mortality. That is cohort censoring, and it is the most common error in published survival curves.

Look only at those who had a real chance — users with 90 or more days of history — and the picture changes completely:

| Still alive at... | All habits (9,923) | 90+ day cohort (1,333) |
| --- | --- | --- |
| 7 days | 54% | 92% |
| 14 days | 34% | 85% |
| 30 days | 16% | 74% |
| 66 days | ~9% | 57% |
| 90 days | 6% | 48% |
| **Median** | **7 days** | **85 days** |

Seven days against eighty-five. Both columns are true and neither is the right one.

The first answers *"if I start a habit today, what are the odds it lasts?"*. The second answers *"among those who stuck with the app for three months, how did it go?"* — and it is biased upward, because it contains only survivors.

The practical lesson is that **the filter is not in the habit, it is in the first week**. Whoever gets past it looks a great deal more like the subjects of the studies.

## 4 · Why 7 days and not the 66 from the research?

The Lally study, which we cite in nearly all our articles, found a median of about 66 days to automaticity, ranging from 18 to over 250.

It does not contradict us. **It measures something else.**

Lally measured *how long a behaviour takes to become automatic* among people who kept participating for twelve weeks. We measure *how long people give a habit before giving up* in an app you can close and never reopen.

Put together, the result is uncomfortable: **most people quit in the first week a process that takes two months to set**. It is not a consistency failure. It is an expectations mismatch, and since only 8.7% reach 66 days, almost nobody finds out whether the theory would have worked for them.

## 5 · Nobody announces they are quitting

This is the finding that surprised us most.

Of 7,070 people who completed 156,042 tasks, only **801 ever marked a task as failed**. Eleven percent.

That does not mean the other 89% follow through on everything. It means quitting is not an act: **it is a silence**. Nobody opens the app to declare they are giving up. They just stop opening it.

Usage data confirms it from another angle. Averaging 31 daily cohorts of about 1,125 users each:

| | Come back |
| --- | --- |
| Day 1 | 58% |
| Day 3 | 27% |
| Day 7 | 17% |
| Day 14 | 10% |
| Day 30 | ~5% |

**42% never return the day after installing.** And it lines up with the above: if 16.8% of habits die within 24 hours and 42% of people do not come back the next day, that is two independent sources telling the same story.

:::tip
If you are three days in, you are already ahead of 73% of the people who installed the app the same day you did. The first week is not the beginning of the road: it is most of the road.
:::

## 6 · Repeating costs double

Comparing one-off tasks with recurring ones:

| Type | Created | Completed |
| --- | --- | --- |
| One-off | 49,509 | **34%** |
| Recurring | 60,283 | **17%** |

Exactly half. And people still create **more recurring than one-off**.

We commit hardest to what we follow through on least. It makes sense: creating the task is not a promise to do it today, it is a promise to do it always, and the "always" version always looks easier from the sofa.

## 7 · The day of the week barely matters

Completed tasks by day, highest to lowest: Tuesday 23,402, Sunday 22,777, Wednesday 22,565, Monday 22,467, Friday 22,037, Thursday 21,853, Saturday 20,941.

Best to worst is a **12%** spread. That is essentially flat.

Monday is not special, and the weekend is not the disaster it is assumed to be. If you have been waiting for Monday to start, the data says next Tuesday will do just as well.

## 8 · What this data CANNOT tell you

The part no data post publishes, and the part that makes the rest believable.

**We do not know which skills people choose.** The ranking exists — discipline 7,573 users, intellect 6,887, health 4,987 — but it is useless: those are the skills the app itself seeds during onboarding, translated per language. The top five in Spanish and their equivalents in English, Russian and French are the same list. Their average level is 1.1 to 1.9 and their average streak 1 to 3: nobody cultivates them. We are measuring our own onboarding, not a choice.

**We cannot tell you how many habits to start with.** We wanted to check our own advice — "start with three, not twelve" — and we cannot: the app seeds three by default and almost nobody creates more. The "four or more" group lands at 69 users, below our publication threshold. We still give that advice on the strength of the literature, not our data.

**We do not know whether planning works.** People who use Time Blocking complete an average of 26.6 tasks versus 20.5 for those who do not. It is tempting to read that as "planning works", and it would be wrong: it is just as likely that the more consistent people are the ones who bother to plan. Correlation, not causation, and our data cannot separate them.

**We do not know what time of day people follow through.** Timestamps are in UTC and we do not store each person's timezone. The apparent 2am peak is almost certainly late afternoon in Latin America. Publishing "people follow through in the middle of the night" would have been a catchy, false headline.

## 9 · What we would do with this

If we had to pull one conclusion from ten months of data: **the problem is not sustaining a habit, it is reaching week two**.

Everything written about habits — reinforcement, streaks, identity, the 66 days — applies from there on. Before that, the only thing that matters is opening the app again tomorrow.

So the recommendation is boring and it is the one the data gives: **make the habit ridiculously small for seven days**. Not to build the habit, which does not happen in seven days. To cross the stretch where half of them die.

---

*Methodology: aggregates from Skillion's production database and usage analytics, queried on 30 August 2026 over the window 9 October 2025 to 30 August 2026. No group under 50 users is published. No individual data was used or published. The queries are versioned in the website repository.*`,
  },
};
