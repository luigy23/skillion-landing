/**
 * Textos de la pagina de contacto, bilingues.
 *
 * Las dos preguntas que se muestran abajo NO estan aqui: se sacan de
 * data/faq.ts por su id. Estaban duplicadas a mano en las dos paginas de
 * contacto y ya habian empezado a divergir de la FAQ real; con una sola
 * fuente, cambiar la respuesta en un sitio la cambia en los dos.
 */
import type { Lang } from '../lib/blog';

export interface ContactCopy {
  metaTitle: string;
  metaDescription: string;
  /**
   * Titulo grande. Si trae dos trozos, el segundo va en dorado. En castellano
   * es una sola palabra —"Contactanos"— y partirla para colorear la mitad
   * quedaria raro, asi que ahi va entera.
   */
  heading: [string] | [string, string];
  intro: string;
  emailTitle: string;
  emailText: string;
  socialTitle: string;
  socialText: string;
  /** Redes de cada idioma. La version inglesa no enseña la cuenta en español. */
  social: { label: string; href: string }[];
  appTitle: string;
  appText: string;
  appStore: string;
  playStore: string;
  faqTitle: string;
  faqCta: string;
}

export const EMAIL = 'hello@skillion.app';
export const APP_STORE = 'https://apps.apple.com/app/skillion-gamify-your-life/id6752905262';
export const PLAY_STORE = 'https://play.google.com/store/apps/details?id=app.skillion&pcampaignid=web_share';

const en: ContactCopy = {
  metaTitle: 'Contact Skillion | Get in touch',
  metaDescription:
    "Get in touch with the Skillion team at hello@skillion.app. We're here to help you on your gamification journey.",
  heading: ['Contact', 'Us'],
  intro:
    "Ready to start your epic quest? Have questions about Skillion? We're here to help you level up your life!",
  emailTitle: 'Email Us',
  emailText: "Send us a message and we'll get back to you as soon as possible!",
  socialTitle: 'Follow Us',
  socialText: 'Join our community and stay updated on the latest Skillion news!',
  social: [
    { label: 'Instagram', href: 'https://instagram.com/skillion.app' },
    { label: 'TikTok', href: 'https://tiktok.com/@skillion.app' },
  ],
  appTitle: 'Get the App',
  appText: 'Skillion is out on both stores, and your progress syncs across devices.',
  appStore: 'Download on the App Store',
  playStore: 'Download on Google Play',
  faqTitle: 'Frequently Asked Questions',
  faqCta: 'See all frequently asked questions',
};

const es: ContactCopy = {
  metaTitle: 'Contacta con Skillion | Escríbenos',
  metaDescription:
    'Ponte en contacto con el equipo de Skillion en hello@skillion.app. Estamos aquí para ayudarte a subir de nivel.',
  heading: ['Contáctanos'],
  intro:
    '¿Listo para comenzar tu épica aventura? ¿Tienes preguntas sobre Skillion? ¡Estamos aquí para ayudarte a subir de nivel en tu vida!',
  emailTitle: 'Escríbenos',
  emailText: 'Envíanos un mensaje y te responderemos lo antes posible.',
  socialTitle: 'Síguenos',
  socialText: '¡Únete a nuestra comunidad y mantente al día con las últimas noticias de Skillion!',
  social: [
    { label: 'Instagram', href: 'https://instagram.com/skillion.app' },
    { label: 'Instagram ES', href: 'https://instagram.com/skillion.es' },
    { label: 'TikTok', href: 'https://tiktok.com/@skillion.app' },
  ],
  appTitle: 'Descarga la app',
  appText: 'Skillion está en las dos tiendas, y tu progreso se sincroniza entre dispositivos.',
  appStore: 'Descargar en el App Store',
  playStore: 'Descargar en Google Play',
  faqTitle: 'Preguntas Frecuentes',
  faqCta: 'Ver todas las preguntas frecuentes',
};

export const CONTACT: Record<Lang, ContactCopy> = { en, es };
