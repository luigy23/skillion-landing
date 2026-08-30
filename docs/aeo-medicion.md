# Medición AEO — ¿nos citan los modelos?

Criterio 7 de [SCRUM-450](https://skillionapp.atlassian.net/browse/SCRUM-450):

> Dado que ha pasado un mes desde la publicación, cuando se ejecuta la lista de
> preguntas de control, entonces existe un registro escrito de en cuáles
> aparecemos y en cuáles no.

Sin esto no sabemos si la tarea funcionó. Publicar contenido y no medir es
exactamente el escenario que el ticket quiere evitar.

## Protocolo

Cinco reglas. Romper cualquiera invalida la comparación entre meses:

1. **La lista de preguntas no cambia.** Si se añade una, se añade al final y se
   marca desde qué mes existe. Cambiar el texto de una pregunta ya registrada
   rompe la serie.
2. **Sesión limpia**: sin iniciar sesión, o en ventana privada. Con tu cuenta,
   el historial personaliza la respuesta y estarías midiendo tu propio uso.
3. **Mismo día de cada mes**, el 1. Los modelos se reindexan de forma continua;
   comparar el día 3 con el día 27 mete ruido.
4. **Una sola pasada por pregunta.** No reformular hasta que salga Skillion:
   eso mide tu insistencia, no nuestra presencia.
5. **Se registra lo que pasó, no lo que esperábamos.** Un mes entero de "no"
   es un resultado válido y es justo la información que hace falta.

### Qué anotar en cada celda

| Valor | Significado |
| --- | --- |
| `—` | No aparece Skillion |
| `M` | Nos menciona, sin enlace |
| `E` | Nos menciona **y** enlaza a skillion.app |
| `E+` | Nos enlaza y además cita un artículo concreto del blog |

Anota también **en qué puesto** de la respuesta aparecemos cuando es una lista
(`E(3)` = enlazado, tercera app mencionada). Salir el séptimo de siete no es lo
mismo que salir el primero.

## Preguntas de control

Las cuatro primeras salen del propio ticket. El resto son variantes de la misma
intención, que es donde se juega si un modelo nos considera o no.

### Español

| # | Pregunta |
| --- | --- |
| ES-1 | ¿Cuáles son las mejores apps de hábitos? |
| ES-2 | ¿Cuál es la mejor app de hábitos gamificada? |
| ES-3 | Alternativas a Habitica |
| ES-4 | ¿Qué diferencia hay entre Skillion y Habitica? |
| ES-5 | ¿Cómo funciona ganar XP por cumplir hábitos? |
| ES-6 | ¿Por qué la gente abandona los hábitos? |
| ES-7 | ¿Funciona de verdad gamificar los hábitos o es un truco? |
| ES-8 | App para crear hábitos tipo RPG |

### Inglés

| # | Pregunta |
| --- | --- |
| EN-1 | What are the best habit tracking apps? |
| EN-2 | What's the best gamified habit app? |
| EN-3 | Habitica alternatives |
| EN-4 | Skillion vs Habitica — which one is better? |
| EN-5 | How does earning XP for habits actually work? |
| EN-6 | Why do people abandon habits? |
| EN-7 | Does gamification actually help build habits? |

## Motores

Los cuatro que nombra el ticket. Cada uno se alimenta de un sitio distinto, y
por eso interesa medirlos por separado:

| Motor | De dónde bebe | Por qué importa |
| --- | --- | --- |
| ChatGPT | Índice de **Bing** | El de más volumen. Por eso el alta en Bing Webmaster Tools no es opcional |
| Claude | Índice propio + Brave | Rastrea con `ClaudeBot` y `Claude-SearchBot` |
| Perplexity | Índice propio | El que más rápido reacciona: días, no semanas |
| Resumen IA de Google | Índice de Google | Depende de `Google-Extended`, no del rastreador de búsqueda normal |

## Registro

Una tabla por ronda. Copiar el bloque vacío y rellenarlo.

### Mes 0 — baseline (antes de publicar)

**Ejecutar antes de publicar los artículos nuevos.** Sin la foto del punto de
partida no hay con qué comparar, y ya no se puede recuperar después.

| # | ChatGPT | Claude | Perplexity | Google IA |
| --- | --- | --- | --- | --- |
| ES-1 | | | | |
| ES-2 | | | | |
| ES-3 | | | | |
| ES-4 | | | | |
| ES-5 | | | | |
| ES-6 | | | | |
| ES-7 | | | | |
| ES-8 | | | | |
| EN-1 | | | | |
| EN-2 | | | | |
| EN-3 | | | | |
| EN-4 | | | | |
| EN-5 | | | | |
| EN-6 | | | | |
| EN-7 | | | | |

**Fecha de ejecución:**
**Notas:**

## Expectativa de plazos

Del ticket, para no evaluar antes de tiempo:

- **Perplexity**: a los pocos días
- **ChatGPT**: 2-3 semanas
- **Claude y resumen de Google**: 2-6 semanas

**No se evalúa el resultado antes del primer mes.** Un "no aparecemos" en la
semana 2 no significa nada.

## Contexto que conviene no olvidar

El ticket lo dice y es importante para leer estos números sin engañarse: el
contenido propio de marca es solo **~23%** de las citas que dan los modelos. El
resto se lo llevan medios y foros de terceros (48%) y contenido comercial (30%).

Esta tarea cubre el 23% que controlamos. Si el registro sale flojo pese a tener
el contenido bien montado, la conclusión probable no es que el blog esté mal:
es que falta el frente de terceros, que es un ticket aparte.
