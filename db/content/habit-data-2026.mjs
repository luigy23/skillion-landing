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
  icon: 'coin3',
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
      'De 9.923 hábitos reales que se repiten, la mitad no pasa de 7 días de vida, no de 66. Un 16,8% no llega ni a las 24 horas. Pero esa cifra engaña: si miras solo a quien lleva más de 90 días con la app, la mitad aguanta 85 días. Las dos son ciertas y la diferencia entre ellas es lo más útil que hemos aprendido mirando nuestros propios datos.',
    faq: [
      {
        q: '¿Cuánto dura un hábito nuevo según datos reales?',
        a: 'De nuestros 9.923 hábitos que se repiten, la mitad no pasa de 7 días: se muere en la primera semana. Una cuarta parte llega a 19 días, y solo el 8,7% alcanza los 66 días que en los estudios marcan el punto donde la cosa ya sale sola. El hábito vivo más veterano lleva 314 días.',
      },
      {
        q: '¿Por qué vuestros datos dicen 7 días y los estudios dicen 66?',
        a: 'Porque miden cosas distintas. Aquel estudio midió cuánto tarda un hábito en salir solo, en gente que siguió participando las doce semanas. Nosotros medimos cuánto aguanta un hábito en una app que cualquiera puede cerrar y no volver a abrir. Los 66 días son lo que tarda en cuajar. Los 7 son lo que la gente le da antes de tirar la toalla.',
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
    body: `Casi todo lo que has leído sobre hábitos sale de estudios con unas decenas de voluntarios que aceptaron que los siguieran durante semanas. Son estudios serios y los citamos a menudo. Pero les falta media película: solo miden a gente que se apuntó y aguantó.

Nosotros vemos justo lo contrario. Vemos a quien se instala la app un martes, se crea cuatro hábitos, cumple dos días y no vuelve. Esa persona no sale en ningún estudio, y resulta que es la mayoría.

Esto es lo que encontramos al mirar nuestros propios números, incluida la parte que preferiríamos no contar.

## 1 · Qué estamos contando

Antes de soltar una sola cifra, porque si no lo de abajo no significa nada:

- Del 9 de octubre de 2025 al 30 de agosto de 2026. Unos diez meses y medio.
- 7.070 personas, 156.028 tareas completadas y 9.923 hábitos que se repiten, de 2.323 personas.
- Todo sumado y sin nombres. Ningún grupo de menos de 50 personas aparece aquí. No hay datos de nadie en concreto.
- Cuando decimos que un hábito "vivió 90 días" queremos decir que pasaron 90 días entre la primera vez que alguien lo cumplió y la última. No que lo cumpliera todos esos días. Uno hecho el día 1 y el día 90 cuenta como 90 días con dos cumplimientos. Es una forma generosa de contarlo, y aun así los números salen bajos.

## 2 · La mitad no llega a la segunda semana

De 9.923 hábitos que se repiten:

| | Cuánto vivieron |
| --- | --- |
| Una cuarta parte, menos de | 3 días |
| La mitad, menos de | 7 días |
| Tres cuartas partes, menos de | 19 días |

O sea que la mitad de los hábitos que alguien se propone aquí no pasa de la primera semana. Y un 16,8% se cumple una vez y nunca más: nacen y se mueren el mismo día.

En la otra punta, el hábito vivo más veterano lleva 314 días.

## 3 · Por qué esa cifra también engaña

Aquí es donde casi todos los artículos de datos hacen trampa, así que te enseñamos las dos cuentas.

Si un hábito nació hace diez días, no puede llevar 90 vivo. Meterlo igualmente en el saco de "cuántos llegan a los 90 días" hace que salgan muchos más muertos de los que hay. Es el fallo más repetido cuando alguien publica una gráfica de este tipo.

Si miras solo a quien tuvo oportunidad de verdad, gente que lleva 90 días o más con la app, la foto cambia entera:

| Sigue vivo a los... | Todos (9.923) | Los que llevan 90 días o más (1.333) |
| --- | --- | --- |
| 7 días | 54% | 92% |
| 14 días | 34% | 85% |
| 30 días | 16% | 74% |
| 66 días | ~9% | 57% |
| 90 días | 6% | 48% |
| La mitad aguanta | 7 días | 85 días |

Siete días contra ochenta y cinco. Las dos columnas son verdad y ninguna de las dos es la buena.

La primera contesta a "si me propongo un hábito hoy, ¿qué posibilidades tiene de durar?". La segunda contesta a "de los que llevan tres meses aquí, ¿cómo les ha ido?", y tira para arriba porque solo cuenta a los que siguen.

Lo que se saca de las dos juntas: el filtro no está en el hábito, está en la primera semana. Quien la cruza se parece muchísimo más a la gente de los estudios.

## 4 · ¿Y los 66 días de los que todo el mundo habla?

Hay un estudio muy citado, y nosotros el primero, que siguió a gente durante doce semanas y vio que a la mitad le costaba unos 66 días llegar al punto en que el hábito ya sale solo. Con un margen de 18 días a más de 250.

No nos lleva la contraria. Está midiendo otra cosa.

Ellos midieron cuánto tarda algo en salirte solo, en gente que siguió participando tres meses. Nosotros medimos cuánto aguanta la gente antes de tirar la toalla, en una app que puedes cerrar y no volver a abrir jamás.

Juntando las dos, sale algo incómodo: la mayoría abandona en la primera semana una cosa que tarda dos meses en cuajar. No es falta de constancia. Es que nadie te dijo el plazo. Y como solo el 8,7% llega a los 66 días, casi nadie llega a comprobar si aquello le funcionaba.

## 5 · Nadie avisa de que lo deja

Este es el dato que más nos descolocó.

De 7.070 personas que completaron 156.042 tareas, solo 801 marcaron alguna vez una tarea como fallida. Un 11%.

No quiere decir que el otro 89% cumpla todo. Quiere decir que rendirse no se anuncia. Nadie entra en la app para decir que lo deja. Sencillamente deja de abrirla.

Los datos de uso cuentan lo mismo desde otro lado. Mirando 31 grupos distintos, de unas 1.125 personas cada uno:

| | Vuelven |
| --- | --- |
| Al día siguiente | 58% |
| A los 3 días | 27% |
| A los 7 días | 17% |
| A los 14 días | 10% |
| Al mes | ~5% |

El 42% no vuelve al día siguiente de instalarla. Y encaja con lo anterior: si el 16,8% de los hábitos se muere en 24 horas y el 42% de la gente no vuelve al día siguiente, son dos cuentas distintas contando la misma historia.

:::tip
Si llevas tres días seguidos ya vas por delante del 73% de la gente que se instaló la app el mismo día que tú. La primera semana no es el principio del camino. Es casi todo el camino.
:::

## 6 · Prometer "siempre" cuesta el doble

Comparando las tareas de una sola vez con las que se repiten:

| Tipo | Creadas | Se cumplen |
| --- | --- | --- |
| De una vez | 49.509 | 34% |
| Que se repiten | 60.283 | 17% |

Justo la mitad. Y aun así la gente crea más de las que se repiten que de las otras.

Nos comprometemos más con lo que menos cumplimos. Y tiene su lógica: cuando creas la tarea no estás prometiendo hacerla hoy, estás prometiendo hacerla siempre, y "siempre" desde el sofá siempre parece más fácil.

## 7 · El día de la semana da igual

Tareas completadas por día, de más a menos: martes 23.402, domingo 22.777, miércoles 22.565, lunes 22.467, viernes 22.037, jueves 21.853, sábado 20.941.

Del mejor al peor hay un 12%. Eso es plano.

El lunes no tiene nada mágico y el fin de semana no es el desastre que se supone. Si llevas tiempo esperando al lunes para empezar, los datos dicen que el martes te va a ir exactamente igual.

## 8 · Lo que estos datos no pueden decirte

Esta es la parte que ningún artículo de datos publica, y es justo la que hace que te puedas creer el resto.

No sabemos qué habilidades elige la gente. La lista existe (disciplina 7.573 personas, intelecto 6.887, salud 4.987) pero no vale para nada: son las que la propia app te pone al empezar, traducidas a cada idioma. Las cinco primeras en español y sus equivalentes en inglés, ruso y francés son la misma lista. Su nivel medio va de 1,1 a 1,9 y su racha media de 1 a 3, o sea que nadie las cultiva. Estamos midiendo lo que ponemos nosotros, no lo que elige nadie.

No podemos decirte con cuántos hábitos conviene empezar. Queríamos comprobar nuestro propio consejo, el de empezar con tres y no con doce, y no se puede: la app ya te siembra tres y casi nadie crea más. El grupo de "cuatro o más" se queda en 69 personas, por debajo de lo que publicamos. Ese consejo lo damos por lo que dicen los estudios, no por lo que vemos aquí.

No sabemos si planificar el día funciona. Quien coloca las tareas en una franja del día completa 26,6 de media, frente a 20,5 de quien no. Es tentador leerlo como "planificar funciona" y sería un error: puede ser al revés, que la gente más constante sea justo la que se molesta en planificar. Que dos cosas vayan juntas no significa que una cause la otra, y con nuestros datos no hay forma de separarlo.

No sabemos a qué hora cumple la gente. Guardamos la hora en horario universal y no la zona de cada persona. El pico que aparece a las dos de la madrugada es casi seguro la tarde en Latinoamérica. Publicar "la gente cumple de madrugada" habría sido un titular estupendo y falso.

## 9 · Qué haríamos nosotros con esto

Si tuviéramos que sacar una sola conclusión de diez meses de datos: el problema no es mantener un hábito, es llegar a la segunda semana.

Todo lo que se escribe sobre hábitos, las rachas, el refuerzo, la identidad, los 66 días, sirve a partir de ahí. Antes de ahí lo único que importa es que mañana vuelvas a abrir la app.

Así que el consejo es aburrido y es el que sale de los números: haz el hábito ridículamente pequeño durante siete días. No para crear el hábito, que en siete días no se crea. Para cruzar el tramo donde se muere la mitad.

---

*De dónde sale esto: números sumados de la base de datos de Skillion y de la analítica de uso, consultados el 30 de agosto de 2026 sobre el periodo del 9 de octubre de 2025 al 30 de agosto de 2026. No publicamos ningún grupo de menos de 50 personas ni ningún dato individual. Las consultas están guardadas en el repositorio de la web.*`,
  },

  en: {
    slug: 'real-data-on-quitting-habits',
    title: 'What 156,000 completed tasks say about quitting habits',
    excerpt:
      'Aggregated data from 7,070 Skillion users over 10 months: how long a habit really lasts, when people quit, and where we got the measurement wrong.',
    tldr:
      'Out of 9,923 real repeating habits, half of them last 7 days, not 66. Some 16.8% do not make it past 24 hours. But that figure misleads: if you only look at people who have been with the app 90 days or more, half of them last 85 days. Both are true, and the gap between them is the most useful thing we learned from our own data.',
    faq: [
      {
        q: 'How long does a new habit last according to real data?',
        a: 'Out of our 9,923 repeating habits, half do not get past 7 days: they die in the first week. A quarter reach 19 days, and only 8.7% make it to the 66 days that studies mark as the point where it starts running on its own. The oldest habit still alive is at 314 days.',
      },
      {
        q: 'Why does your data say 7 days when studies say 66?',
        a: 'Because they measure different things. That study measured how long a habit takes to run on its own, among people who kept taking part for twelve weeks. We measure how long a habit lasts in an app anyone can close and never reopen. The 66 days is how long it takes to set. The 7 is how long people give it before they throw in the towel.',
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
    body: `Almost everything you have read about habits comes from studies with a few dozen volunteers who agreed to be followed for weeks. They are serious studies and we cite them often. But they are missing half the picture: they only measure people who signed up and stuck around.

We see the opposite. We see the person who installs the app on a Tuesday, creates four habits, shows up twice and never comes back. That person appears in no study, and it turns out they are the majority.

Here is what we found in our own numbers, including the part we would rather not tell you.

## 1 · What we are counting

Before a single figure, because without this the rest means nothing:

- From 9 October 2025 to 30 August 2026. About ten and a half months.
- 7,070 people, 156,028 completed tasks and 9,923 repeating habits, from 2,323 people.
- All of it added up, no names. No group smaller than 50 people appears here. Nothing about any individual.
- When we say a habit "lived 90 days" we mean 90 days passed between the first time someone completed it and the last. Not that they did it every day. One done on day 1 and day 90 counts as 90 days with two completions. That is a generous way to count, and the numbers still come out low.

## 2 · Half of them never reach week two

Out of 9,923 repeating habits:

| | How long they lived |
| --- | --- |
| A quarter, less than | 3 days |
| Half, less than | 7 days |
| Three quarters, less than | 19 days |

So half the habits anyone sets here do not get past the first week. And 16.8% get completed once and never again: born and dead the same day.

At the other end, the oldest habit still alive is on 314 days.

## 3 · Why that figure misleads too

This is where most data articles cheat, so we will show you both sums.

If a habit was born ten days ago, it cannot have lived 90. Throwing it into the "how many reach 90 days" bucket anyway makes far more of them look dead than really are. It is the most repeated mistake when someone publishes a chart like this.

If you look only at people who had a real shot, those who have been around 90 days or more, the picture changes completely:

| Still alive at... | Everyone (9,923) | People on 90+ days (1,333) |
| --- | --- | --- |
| 7 days | 54% | 92% |
| 14 days | 34% | 85% |
| 30 days | 16% | 74% |
| 66 days | ~9% | 57% |
| 90 days | 6% | 48% |
| Half of them last | 7 days | 85 days |

Seven days against eighty-five. Both columns are true and neither is the right one.

The first answers "if I set myself a habit today, what are its chances?". The second answers "of the people still here after three months, how did it go?", and it skews high because it only counts survivors.

What the two together tell you: the filter is not in the habit, it is in the first week. Anyone who gets through it looks a great deal more like the people in the studies.

## 4 · What about the 66 days everyone quotes?

There is a much-cited study, and we quote it ourselves, that followed people for twelve weeks and found half of them took around 66 days to reach the point where the habit runs on its own. With a spread of 18 days to over 250.

It does not contradict us. It measures something else.

They measured how long something takes to become automatic, in people who kept taking part for three months. We measure how long people last before giving up, in an app you can close and never open again.

Put the two together and you get something uncomfortable: most people quit in the first week on a thing that takes two months to set. That is not a lack of grit. Nobody told them the timeline. And since only 8.7% reach 66 days, hardly anyone finds out whether it would have worked for them.

## 5 · Nobody announces they are quitting

This is the number that threw us most.

Of 7,070 people who completed 156,042 tasks, only 801 ever marked a task as failed. That is 11%.

That does not mean the other 89% do everything. It means giving up is not announced. Nobody opens the app to say they are done. They just stop opening it.

The usage data says the same thing from another angle. Looking at 31 separate groups of about 1,125 people each:

| | Come back |
| --- | --- |
| Next day | 58% |
| After 3 days | 27% |
| After 7 days | 17% |
| After 14 days | 10% |
| After a month | ~5% |

42% never come back the day after installing it. And it fits with the above: if 16.8% of habits die within 24 hours and 42% of people do not return the next day, those are two separate sums telling the same story.

:::tip
If you are three days in, you are already ahead of 73% of the people who installed the app the same day you did. The first week is not the start of the road. It is most of the road.
:::

## 6 · Promising "always" costs double

Comparing one-off tasks with repeating ones:

| Type | Created | Get done |
| --- | --- | --- |
| One-off | 49,509 | 34% |
| Repeating | 60,283 | 17% |

Exactly half. And people still create more repeating ones than one-offs.

We commit hardest to what we deliver least. Which makes sense: when you create the task you are not promising to do it today, you are promising to do it always, and "always" always looks easier from the sofa.

## 7 · The day of the week barely matters

Tasks completed by day, most to least: Tuesday 23,402, Sunday 22,777, Wednesday 22,565, Monday 22,467, Friday 22,037, Thursday 21,853, Saturday 20,941.

Best to worst is 12%. That is flat.

Monday has nothing magic about it and the weekend is not the disaster everyone assumes. If you have been waiting for a Monday to start, the data says Tuesday will go exactly the same.

## 8 · What this data cannot tell you

This is the part no data article publishes, and it is exactly what makes the rest believable.

We do not know which skills people choose. The list exists (discipline 7,573 people, intellect 6,887, health 4,987) but it is useless: they are the ones the app puts there for you at the start, translated into each language. The top five in Spanish and their equivalents in English, Russian and French are the same list. Their average level runs from 1.1 to 1.9 and their average streak from 1 to 3, which means nobody is growing them. We are measuring what we put there, not what anyone picked.

We cannot tell you how many habits to start with. We wanted to check our own advice, the one about starting with three rather than twelve, and it cannot be done: the app already plants three and hardly anyone adds more. The "four or more" group sits at 69 people, below what we will publish. We give that advice on the strength of the studies, not on what we see here.

We do not know whether planning your day works. People who put tasks on a slot in the day complete 26.6 on average, against 20.5 for people who do not. It is tempting to read that as "planning works" and it would be a mistake: it could be the other way round, that the people who bother to plan were the consistent ones already. Two things moving together does not mean one causes the other, and our data cannot separate them.

We do not know what time of day people deliver. We store the time in universal time and not each person's zone. The apparent spike at two in the morning is almost certainly the afternoon in Latin America. Publishing "people deliver in the small hours" would have been a great headline and a false one.

## 9 · What we would do with this

If we had to pull one conclusion out of ten months of data: the problem is not keeping a habit going, it is reaching week two.

Everything written about habits, the streaks, the reinforcement, the identity, the 66 days, applies from there on. Before that, the only thing that matters is that you open the app again tomorrow.

So the advice is boring and it is the one the numbers give: make the habit ridiculously small for seven days. Not to build the habit, which takes longer than seven days. To cross the stretch where half of them die.

---

*Where this comes from: added-up figures from Skillion's database and usage analytics, queried on 30 August 2026 over the period from 9 October 2025 to 30 August 2026. We publish no group smaller than 50 people and no individual data. The queries are kept in the website's repository.*`,
  },
};
