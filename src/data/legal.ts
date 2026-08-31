/**
 * Textos legales, bilingues.
 *
 * Se sacan de las paginas a un fichero de datos por el mismo motivo que el
 * changelog y la FAQ: la pagina pasa a ser plantilla y el contenido deja de
 * estar enterrado entre markup. Aqui importa mas de lo normal, porque este es
 * texto legal y hay que poder revisar un cambio de redaccion en un diff sin
 * que lo tape una capa de <div>.
 *
 * El contenido es EXACTAMENTE el que ya estaba publicado. Esta tarea era de
 * estetica: no se ha tocado ni una palabra de lo que dice, ni las fechas.
 */
import type { Lang } from '../lib/blog';

export interface LegalBlock {
  /** Parrafo normal. */
  p?: string;
  /** Lista de puntos. */
  ul?: string[];
}

export interface LegalSection {
  /** Numero y titulo, tal cual sale en pantalla. */
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDoc {
  metaTitle: string;
  metaDescription: string;
  /** Titulo grande de la pagina. El segundo trozo va en otro color. */
  heading: [string, string];
  intro: string;
  effectiveLabel: string;
  effectiveDate: string;
  sections: LegalSection[];
  contactTitle: string;
  contactIntro: string;
  emailLabel: string;
  siteLabel: string;
  updatedNote: string;
}

const termsEn: LegalDoc = {
  metaTitle: 'Terms and Conditions | Skillion',
  metaDescription:
    "Read Skillion's Terms and Conditions. Understand your rights and responsibilities when using our gamification app.",
  heading: ['Terms and', 'Conditions'],
  intro:
    'Please read these terms carefully. By using Skillion, you agree to be bound by these terms.',
  effectiveLabel: 'Effective Date',
  effectiveDate: 'January 1, 2025',
  sections: [
    {
      title: '1. Introduction',
      blocks: [
        {
          p: 'Welcome to Skillion. These Terms and Conditions ("Terms") govern your use of our mobile application and services. By using Skillion, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our app.',
        },
      ],
    },
    {
      title: '2. Acceptance of Terms',
      blocks: [
        {
          p: 'By downloading, installing, or using Skillion, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and Skillion.',
        },
      ],
    },
    {
      title: '3. User Accounts',
      blocks: [
        {
          p: 'To use certain features of Skillion, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating your account.',
        },
      ],
    },
    {
      title: '4. App Usage',
      blocks: [
        {
          p: 'Skillion is designed to help you track tasks, develop skills, and achieve personal goals. You may use the app for personal, non-commercial purposes. You agree not to use the app for any unlawful purpose or in any way that could damage, disable, or impair the app.',
        },
      ],
    },
    {
      title: '5. Premium Subscriptions',
      blocks: [
        {
          p: "Skillion offers premium features through subscription services. Subscription fees are charged in advance and are non-refundable except as required by law. You may cancel your subscription at any time through your device's subscription settings. Cancellation will take effect at the end of your current billing period.",
        },
      ],
    },
    {
      title: '6. Privacy and Data Protection',
      blocks: [
        {
          p: 'Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using Skillion, you consent to the collection and use of your information as described in our Privacy Policy.',
        },
      ],
    },
    {
      title: '7. Prohibited Uses',
      blocks: [
        { p: 'You may not use Skillion to:' },
        {
          ul: [
            '(a) violate any laws or regulations;',
            '(b) infringe on the rights of others;',
            '(c) distribute malware or harmful code;',
            '(d) attempt to gain unauthorized access to our systems;',
            '(e) use the app for commercial purposes without permission.',
          ],
        },
      ],
    },
    {
      title: '8. Intellectual Property',
      blocks: [
        {
          p: 'Skillion and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, or distribute our content without permission.',
        },
      ],
    },
    {
      title: '9. Disclaimers',
      blocks: [
        {
          p: 'Skillion is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free or uninterrupted. We are not responsible for any decisions you make based on the app\'s recommendations or features.',
        },
      ],
    },
    {
      title: '10. Limitation of Liability',
      blocks: [
        {
          p: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of Skillion. Our total liability shall not exceed the amount you paid for the app in the 12 months preceding the claim.',
        },
      ],
    },
    {
      title: '11. Termination',
      blocks: [
        {
          p: 'We may terminate or suspend your account and access to Skillion at any time, with or without notice, for any reason. You may terminate your account at any time by deleting the app or contacting us. Upon termination, your right to use the app will cease immediately.',
        },
      ],
    },
    {
      title: '12. Changes to Terms',
      blocks: [
        {
          p: 'We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms in the app or by other means. Your continued use of Skillion after such changes constitutes acceptance of the new Terms.',
        },
      ],
    },
    {
      title: '13. Governing Law',
      blocks: [
        {
          p: 'These Terms shall be governed by and construed in accordance with the laws of the Republic of Colombia, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts of Neiva, Huila, Colombia.',
        },
      ],
    },
  ],
  contactTitle: '14. Contact Information',
  contactIntro: 'If you have any questions about these Terms, please contact us at:',
  emailLabel: 'Email',
  siteLabel: 'Website',
  updatedNote: 'Last Updated: January 1, 2025',
};

const termsEs: LegalDoc = {
  metaTitle: 'Términos y Condiciones | Skillion',
  metaDescription:
    'Lee los Términos y Condiciones de Skillion. Conoce tus derechos y responsabilidades al usar nuestra app de gamificación.',
  heading: ['Términos y', 'Condiciones'],
  intro:
    'Por favor lee estos términos cuidadosamente. Al usar Skillion, aceptas estar sujeto a estos términos.',
  effectiveLabel: 'Fecha de Vigencia',
  effectiveDate: '1 de enero de 2025',
  sections: [
    {
      title: '1. Introducción',
      blocks: [
        {
          p: 'Bienvenido a Skillion. Estos Términos y Condiciones ("Términos") rigen el uso de nuestra aplicación móvil y servicios. Al usar Skillion, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con estos Términos, por favor no uses nuestra aplicación.',
        },
      ],
    },
    {
      title: '2. Aceptación de los Términos',
      blocks: [
        {
          p: 'Al descargar, instalar o usar Skillion, reconoces que has leído, entendido y aceptas estar sujeto a estos Términos y nuestra Política de Privacidad. Estos Términos constituyen un acuerdo legalmente vinculante entre tú y Skillion.',
        },
      ],
    },
    {
      title: '3. Cuentas de Usuario',
      blocks: [
        {
          p: 'Para usar ciertas funciones de Skillion, es posible que necesites crear una cuenta. Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de todas las actividades que ocurran bajo tu cuenta. Debes proporcionar información precisa y completa al crear tu cuenta.',
        },
      ],
    },
    {
      title: '4. Uso de la Aplicación',
      blocks: [
        {
          p: 'Skillion está diseñado para ayudarte a rastrear tareas, desarrollar habilidades y lograr objetivos personales. Puedes usar la aplicación para fines personales y no comerciales. Aceptas no usar la aplicación para ningún propósito ilegal o de manera que pueda dañar, deshabilitar o deteriorar la aplicación.',
        },
      ],
    },
    {
      title: '5. Suscripciones Premium',
      blocks: [
        {
          p: 'Skillion ofrece funciones premium a través de servicios de suscripción. Las tarifas de suscripción se cobran por adelantado y no son reembolsables excepto cuando lo requiera la ley. Puedes cancelar tu suscripción en cualquier momento a través de la configuración de suscripción de tu dispositivo. La cancelación tendrá efecto al final de tu período de facturación actual.',
        },
      ],
    },
    {
      title: '6. Privacidad y Protección de Datos',
      blocks: [
        {
          p: 'Tu privacidad es importante para nosotros. Nuestra Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información. Al usar Skillion, consientes la recopilación y uso de tu información como se describe en nuestra Política de Privacidad.',
        },
      ],
    },
    {
      title: '7. Usos Prohibidos',
      blocks: [
        { p: 'No puedes usar Skillion para:' },
        {
          ul: [
            '(a) violar cualquier ley o regulación;',
            '(b) infringir los derechos de otros;',
            '(c) distribuir malware o código dañino;',
            '(d) intentar obtener acceso no autorizado a nuestros sistemas;',
            '(e) usar la aplicación para fines comerciales sin permiso.',
          ],
        },
      ],
    },
    {
      title: '8. Propiedad Intelectual',
      blocks: [
        {
          p: 'Skillion y su contenido original, características y funcionalidad nos pertenecen y están protegidos por leyes internacionales de derechos de autor, marcas registradas y otras leyes de propiedad intelectual. No puedes copiar, modificar o distribuir nuestro contenido sin permiso.',
        },
      ],
    },
    {
      title: '9. Descargos de Responsabilidad',
      blocks: [
        {
          p: 'Skillion se proporciona "tal como está" sin garantías de ningún tipo. No garantizamos que la aplicación esté libre de errores o sea ininterrumpida. No somos responsables de las decisiones que tomes basadas en las recomendaciones o características de la aplicación.',
        },
      ],
    },
    {
      title: '10. Limitación de Responsabilidad',
      blocks: [
        {
          p: 'En la máxima medida permitida por la ley, no seremos responsables de daños indirectos, incidentales, especiales o consecuentes que surjan del uso de Skillion. Nuestra responsabilidad total no excederá la cantidad que pagaste por la aplicación en los 12 meses anteriores al reclamo.',
        },
      ],
    },
    {
      title: '11. Terminación',
      blocks: [
        {
          p: 'Podemos terminar o suspender tu cuenta y acceso a Skillion en cualquier momento, con o sin previo aviso, por cualquier razón. Puedes terminar tu cuenta en cualquier momento eliminando la aplicación o contactándonos. Al terminar, tu derecho a usar la aplicación cesará inmediatamente.',
        },
      ],
    },
    {
      title: '12. Cambios a los Términos',
      blocks: [
        {
          p: 'Nos reservamos el derecho de modificar estos Términos en cualquier momento. Te notificaremos de cualquier cambio material publicando los nuevos Términos en la aplicación o por otros medios. Tu uso continuado de Skillion después de dichos cambios constituye aceptación de los nuevos Términos.',
        },
      ],
    },
    {
      title: '13. Ley Aplicable',
      blocks: [
        {
          p: 'Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República de Colombia, sin consideración a los principios de conflicto de leyes. Cualquier disputa que surja de estos Términos se resolverá en los tribunales de Neiva, Huila, Colombia.',
        },
      ],
    },
  ],
  contactTitle: '14. Información de Contacto',
  contactIntro: 'Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en:',
  emailLabel: 'Email',
  siteLabel: 'Sitio Web',
  updatedNote: 'Última Actualización: 1 de enero de 2025',
};

export const TERMS: Record<Lang, LegalDoc> = { en: termsEn, es: termsEs };
