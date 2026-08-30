/**
 * Fuentes citables, comprobadas una a una contra la API de Crossref: el DOI
 * existe y el título es el que aquí se dice. Se centralizan para que dos
 * artículos que citan el mismo estudio lo citen igual, y para que verificar el
 * fondo entero sea abrir un solo fichero.
 *
 * Se enlaza al DOI y no al PDF de turno: el DOI es la dirección canónica y no
 * se rompe cuando la editorial reorganiza su web. Que algunos lleven a un muro
 * de pago es normal y no resta: lo que se comprueba es la referencia.
 *
 * Para revalidarlas:
 *   curl -s https://api.crossref.org/works/<doi> | python3 -m json.tool
 */

export const SOURCES = {
  lally2010: {
    title: 'How are habits formed: Modelling habit formation in the real world',
    url: 'https://doi.org/10.1002/ejsp.674',
    publisher: 'European Journal of Social Psychology',
  },
  ryanDeci2000: {
    title: 'Self-determination theory and the facilitation of intrinsic motivation',
    url: 'https://doi.org/10.1037/0003-066X.55.1.68',
    publisher: 'American Psychologist',
  },
  deci1999: {
    title:
      'A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation',
    url: 'https://doi.org/10.1037/0033-2909.125.6.627',
    publisher: 'Psychological Bulletin',
  },
  woodNeal2007: {
    title: 'A new look at habits and the habit-goal interface',
    url: 'https://doi.org/10.1037/0033-295X.114.4.843',
    publisher: 'Psychological Review',
  },
  woodRunger2016: {
    title: 'Psychology of Habit',
    url: 'https://doi.org/10.1146/annurev-psych-122414-033417',
    publisher: 'Annual Review of Psychology',
  },
  gardner2012: {
    title: "Making health habitual: the psychology of 'habit-formation' and general practice",
    url: 'https://doi.org/10.3399/bjgp12X659466',
    publisher: 'British Journal of General Practice',
  },
  hamari2014: {
    title: 'Does Gamification Work? A Literature Review of Empirical Studies on Gamification',
    url: 'https://doi.org/10.1109/HICSS.2014.377',
    publisher: 'Hawaii International Conference on System Sciences',
  },
  schultz1997: {
    title: 'A Neural Substrate of Prediction and Reward',
    url: 'https://doi.org/10.1126/science.275.5306.1593',
    publisher: 'Science',
  },
  gollwitzer1999: {
    title: 'Implementation intentions: Strong effects of simple plans',
    url: 'https://doi.org/10.1037/0003-066X.54.7.493',
    publisher: 'American Psychologist',
  },
  gollwitzer2006: {
    title: 'Implementation Intentions and Goal Achievement: A Meta-analysis of Effects and Processes',
    url: 'https://doi.org/10.1016/S0065-2601(06)38002-1',
    publisher: 'Advances in Experimental Social Psychology',
  },
};

/**
 * Autores.
 *
 * SCRUM-450 pide "autor con nombre real y una línea de quién es": para un
 * modelo, un artículo firmado por "Equipo" es indistinguible de contenido
 * generado en masa, y la bio es lo que dice por qué esa persona puede hablar
 * del tema.
 */
export const AUTHORS = {
  luigy: {
    es: {
      name: 'Luigy Leonardo',
      bio: 'Fundador de Skillion. Decide qué entra en cada versión de la app y qué se queda fuera.',
    },
    en: {
      name: 'Luigy Leonardo',
      bio: 'Founder of Skillion. Decides what ships in every release and what does not.',
    },
  },
  jesus: {
    es: {
      name: 'Jesús Beleño',
      bio: 'Desarrollador en Skillion. Construye por dentro el sistema de hábitos, XP y rachas.',
    },
    en: {
      name: 'Jesús Beleño',
      bio: 'Developer at Skillion. Builds the habit, XP and streak system from the inside.',
    },
  },
};
