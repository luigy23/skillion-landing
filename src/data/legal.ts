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
 *
 * Los textos admiten <strong> y <a href>, y solo eso. La politica de
 * privacidad los usa 47 y 2 veces para destacar terminos y enlazar las
 * politicas de Firebase y RevenueCat; quitarlos dejaria el documento plano y
 * mas dificil de ojear. Se pintan con set:html en LegalPage, asi que lo que se
 * escriba aqui llega al HTML tal cual: no meter nada que no sea una de esas
 * dos etiquetas.
 */
import type { Lang } from '../lib/blog';

export interface LegalBlock {
  /** Parrafo normal. */
  p?: string;
  /** Lista de puntos. */
  ul?: string[];
  /** Subtitulo dentro de un apartado. La privacidad usa once. */
  sub?: string;
  /** Tercer nivel. Solo lo usan los tres servicios de terceros. */
  sub2?: string;
}

/** Una fila de la caja de contacto del final. */
export interface LegalContact {
  key: string;
  value: string;
  /** Si lleva href, se pinta como enlace. El de la app no lo lleva. */
  href?: string;
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
  contact: LegalContact[];
  /** Nota final. La privacidad no trae, asi que es opcional. */
  updatedNote?: string;
  /** Emoji del encabezado. Solo lo trae la privacidad. */
  emoji?: string;
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
  contact: [
    { key: 'Email', value: 'hello@skillion.app', href: 'mailto:hello@skillion.app' },
    { key: 'Website', value: 'https://skillion.app', href: 'https://skillion.app' },
  ],
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
  contact: [
    { key: 'Email', value: 'hello@skillion.app', href: 'mailto:hello@skillion.app' },
    { key: 'Sitio Web', value: 'https://skillion.app', href: 'https://skillion.app' },
  ],
  updatedNote: 'Última Actualización: 1 de enero de 2025',
};

export const TERMS: Record<Lang, LegalDoc> = { en: termsEn, es: termsEs };

const privacyEn: LegalDoc = {
  metaTitle: 'Privacy Policy | Skillion',
  metaDescription:
    'How Skillion collects, uses and protects your data. Local-first storage, your rights, and how to delete your account.',
  emoji: '🕵️',
  heading: ['Privacy', 'Policy'],
  intro:
    'Your privacy matters to us. Learn how we protect your data and give you control over your information.',
  effectiveLabel: 'Effective Date',
  effectiveDate: 'January 1, 2025',
  sections: [
    {
      title: 'Introduction',
      blocks: [
        { p: 'Welcome to <strong>Skillion</strong>. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding data collection and your rights as a user.' },
        { p: 'By using Skillion, you agree to the collection and use of information in accordance with this policy.' },
      ],
    },
    {
      title: '1. Information We Collect',
      blocks: [
        { sub: '1.1 Personal Information You Provide' },
        { p: 'When you create an account with Skillion, we collect:' },
        {
          ul: [
            '<strong>Email address</strong> (used for authentication and account recovery)',
            '<strong>Name</strong> (display name you provide during registration)',
            '<strong>Nickname</strong> (your chosen in-app username)',
            '<strong>Password</strong> (encrypted and securely stored via Firebase Authentication)',
          ],
        },
        { sub: '1.2 Automatically Collected Data' },
        { p: 'We collect the following data to improve your experience:' },
        {
          ul: [
            '<strong>Device information</strong> (device type, operating system version)',
            '<strong>Usage analytics</strong> (app interactions, feature usage, session duration)',
            '<strong>Game progress data</strong> (skills, tasks, XP, levels, energy points, avatar customization)',
            '<strong>Activity history</strong> (task completions, skill progress over the last 90 days by default)',
          ],
        },
        { sub: '1.3 Local Storage' },
        { p: 'Most of your data is stored <strong>locally on your device</strong> using SQLite database:' },
        {
          ul: [
            'User profile and game statistics',
            'Tasks and skills you create',
            'Custom categories',
            'Activity history',
            'Avatar configuration',
          ],
        },
      ],
    },
    {
      title: '2. How We Use Your Information',
      blocks: [
        { p: 'We use the collected information for the following purposes:' },
        {
          ul: [
            '<strong>Account Management:</strong> To create, maintain, and secure your account',
            '<strong>App Functionality:</strong> To provide core features like task tracking, skill progression, and gamification mechanics',
            '<strong>Analytics:</strong> To understand how users interact with the app and improve user experience',
            '<strong>Notifications:</strong> To send you reminders about tasks (if you enable notifications)',
            '<strong>Subscription Management:</strong> To process premium subscriptions and manage payment-related features',
            '<strong>Customer Support:</strong> To respond to your inquiries and provide assistance',
          ],
        },
      ],
    },
    {
      title: '3. Data Storage and Security',
      blocks: [
        { sub: '3.1 Local-First Architecture' },
        { p: 'Skillion uses a <strong>local-first architecture</strong>, meaning:' },
        {
          ul: [
            'Most of your data is stored <strong>locally on your device</strong> and is not transmitted to our servers',
            'Data remains private and accessible only to you',
            'Your progress is tied to your device unless you create a backup',
          ],
        },
        { sub: '3.2 Third-Party Services' },
        { p: 'We use the following trusted third-party services:' },
        { sub2: 'Firebase (Google)' },
        {
          ul: [
            '<strong>Purpose:</strong> User authentication only',
            '<strong>Data Collected:</strong> Email, user ID (UID), authentication tokens',
            '<strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>',
          ],
        },
        { sub2: 'Firebase Analytics (Google)' },
        {
          ul: [
            '<strong>Purpose:</strong> To analyze app usage patterns and improve functionality',
            '<strong>Data Collected:</strong> Anonymous usage events (e.g., task created, skill level up, screen views), device information',
            '<strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>',
          ],
        },
        { sub2: 'RevenueCat' },
        {
          ul: [
            '<strong>Purpose:</strong> Subscription and in-app purchase management',
            '<strong>Data Collected:</strong> User ID, purchase receipts, subscription status',
            '<strong>Privacy Policy:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>',
          ],
        },
        { sub: '3.3 Data Security' },
        { p: 'We implement industry-standard security measures:' },
        {
          ul: [
            'Encrypted authentication via Firebase',
            'Secure local database storage on your device',
            'No server-side storage of your personal game data',
            'HTTPS encryption for all network communications',
          ],
        },
      ],
    },
    {
      title: '4. Data Retention',
      blocks: [
        { sub: '4.1 Active Account Data' },
        {
          ul: [
            'Your account data and game progress are retained <strong>as long as your account is active</strong>',
            'Activity history is automatically cleaned after <strong>90 days</strong> to maintain app performance (configurable)',
            'Automatic backups are rotated, keeping only the <strong>3 most recent</strong> versions',
          ],
        },
        { sub: '4.2 Account Deletion' },
        { p: 'When you delete your account:' },
        {
          ul: [
            'Your Firebase Authentication account is <strong>permanently deleted</strong>',
            'All local data (tasks, skills, history, profile) is <strong>permanently erased from your device</strong>',
            'RevenueCat retains minimal subscription data for <strong>billing and legal compliance</strong> purposes only',
            '<strong>This action is irreversible</strong>',
          ],
        },
      ],
    },
    {
      title: '5. Data Sharing and Disclosure',
      blocks: [
        { p: 'We <strong>do not sell, rent, or trade</strong> your personal information to third parties.' },
        { p: 'We may share data only in the following limited circumstances:' },
        {
          ul: [
            '<strong>With your consent:</strong> If you explicitly authorize data sharing',
            '<strong>Service providers:</strong> Firebase and RevenueCat process data on our behalf under strict privacy agreements',
            '<strong>Legal obligations:</strong> If required by law, court order, or government regulation',
            '<strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets (users will be notified)',
          ],
        },
      ],
    },
    {
      title: '6. Your Rights and Choices',
      blocks: [
        { sub: '6.1 Access and Portability' },
        {
          ul: [
            'You can <strong>export your data</strong> using the in-app backup feature (creates a JSON file with your tasks, skills, and history)',
            'You can <strong>view all your personal data</strong> within the app\'s profile section',
          ],
        },
        { sub: '6.2 Correction and Update' },
        { p: 'You can update your email, name, and nickname at any time in the app settings.' },
        { sub: '6.3 Account Deletion' },
        {
          ul: [
            'You can <strong>delete your account</strong> at any time via the profile screen',
            'Deletion is <strong>permanent and irreversible</strong>',
            'For GDPR-related deletion requests involving RevenueCat data, contact us at hello@skillion.app',
          ],
        },
      ],
    },
    {
      title: '7. Children\'s Privacy',
      blocks: [
        { p: 'Skillion is designed to be safe for users of all ages. However, we are committed to complying with the Children\'s Online Privacy Protection Act (COPPA) and similar regulations worldwide.' },
        { p: '<strong>For users under 13 years of age:</strong>' },
        {
          ul: [
            'We recommend that parents or legal guardians supervise account creation and app usage',
            'We collect only the minimum information necessary for app functionality (email, name, nickname)',
            'All data is stored locally on the device and is not shared with third parties except as described in this policy',
            'Parents can request to review, modify, or delete their child\'s information by contacting us',
          ],
        },
      ],
    },
    {
      title: '8. International Data Transfers',
      blocks: [
        { p: 'Your data may be processed in countries other than your own (e.g., via Firebase servers in the United States). By using Skillion, you consent to the transfer of your information to these locations. We ensure that such transfers comply with applicable data protection laws.' },
      ],
    },
    {
      title: '9. Changes to This Privacy Policy',
      blocks: [
        { p: 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by:' },
        {
          ul: [
            'Posting the new policy in the app',
            'Sending an email notification (if applicable)',
            'Updating the "Last Updated" date at the top of this policy',
          ],
        },
        { p: 'Your continued use of Skillion after changes constitutes acceptance of the updated policy.' },
      ],
    },
  ],
  contactTitle: '10. Contact Us',
  contactIntro: 'If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:',
  contact: [
    { key: 'Email', value: 'hello@skillion.app', href: 'mailto:hello@skillion.app' },
    { key: 'Website', value: 'https://skillion.app', href: 'https://skillion.app' },
    { key: 'App', value: 'Skillion - Available on iOS and Android' },
  ],
  updatedNote: 'Last Updated: January 1, 2025',
};

const privacyEs: LegalDoc = {
  metaTitle: 'Política de Privacidad | Skillion',
  metaDescription:
    'Cómo Skillion recopila, usa y protege tus datos. Almacenamiento local, tus derechos y cómo eliminar tu cuenta.',
  emoji: '🕵️',
  heading: ['Política de', 'Privacidad'],
  intro:
    'Tu privacidad es importante para nosotros. Aprende cómo protegemos tus datos y te damos control sobre tu información.',
  effectiveLabel: 'Fecha de Vigencia',
  effectiveDate: '1 de enero de 2025',
  sections: [
    {
      title: 'Introducción',
      blocks: [
        { p: 'Bienvenido a <strong>Skillion</strong>. Estamos comprometidos a proteger tu privacidad y asegurar transparencia sobre cómo recopilamos, usamos y protegemos tu información personal. Esta Política de Privacidad explica nuestras prácticas respecto a la recopilación de datos y tus derechos como usuario.' },
        { p: 'Al usar Skillion, aceptas la recopilación y uso de información de acuerdo con esta política.' },
      ],
    },
    {
      title: '1. Información que Recopilamos',
      blocks: [
        { sub: '1.1 Información Personal que Proporcionas' },
        { p: 'Cuando creas una cuenta con Skillion, recopilamos:' },
        {
          ul: [
            '<strong>Dirección de correo electrónico</strong> (usada para autenticación y recuperación de cuenta)',
            '<strong>Nombre</strong> (nombre de visualización que proporcionas durante el registro)',
            '<strong>Apodo</strong> (tu nombre de usuario elegido en la app)',
            '<strong>Contraseña</strong> (encriptada y almacenada de forma segura vía Firebase Authentication)',
          ],
        },
        { sub: '1.2 Datos Recopilados Automáticamente' },
        { p: 'Recopilamos los siguientes datos para mejorar tu experiencia:' },
        {
          ul: [
            '<strong>Información del dispositivo</strong> (tipo de dispositivo, versión del sistema operativo)',
            '<strong>Analíticas de uso</strong> (interacciones con la app, uso de funciones, duración de sesión)',
            '<strong>Datos de progreso del juego</strong> (habilidades, tareas, XP, niveles, puntos de energía, personalización de avatar)',
            '<strong>Historial de actividad</strong> (completado de tareas, progreso de habilidades durante los últimos 90 días por defecto)',
          ],
        },
        { sub: '1.3 Almacenamiento Local' },
        { p: 'La mayoría de tus datos se almacenan <strong>localmente en tu dispositivo</strong> usando base de datos SQLite:' },
        {
          ul: [
            'Perfil de usuario y estadísticas del juego',
            'Tareas y habilidades que creas',
            'Categorías personalizadas',
            'Historial de actividad',
            'Configuración del avatar',
          ],
        },
      ],
    },
    {
      title: '2. Cómo Usamos Tu Información',
      blocks: [
        { p: 'Usamos la información recopilada para los siguientes propósitos:' },
        {
          ul: [
            '<strong>Gestión de Cuenta:</strong> Para crear, mantener y asegurar tu cuenta',
            '<strong>Funcionalidad de la App:</strong> Para proporcionar funciones principales como seguimiento de tareas, progreso de habilidades y mecánicas de gamificación',
            '<strong>Analíticas:</strong> Para entender cómo los usuarios interactúan con la app y mejorar la experiencia del usuario',
            '<strong>Notificaciones:</strong> Para enviarte recordatorios sobre tareas (si habilitas las notificaciones)',
            '<strong>Gestión de Suscripciones:</strong> Para procesar suscripciones premium y gestionar funciones relacionadas con pagos',
            '<strong>Soporte al Cliente:</strong> Para responder a tus consultas y proporcionar asistencia',
          ],
        },
      ],
    },
    {
      title: '3. Almacenamiento y Seguridad de Datos',
      blocks: [
        { sub: '3.1 Arquitectura Local-Primero' },
        { p: 'Skillion usa una <strong>arquitectura local-primero</strong>, lo que significa:' },
        {
          ul: [
            'La mayoría de tus datos se almacenan <strong>localmente en tu dispositivo</strong> y no se transmiten a nuestros servidores',
            'Los datos permanecen privados y accesibles solo para ti',
            'Tu progreso está vinculado a tu dispositivo a menos que crees una copia de seguridad',
          ],
        },
        { sub: '3.2 Servicios de Terceros' },
        { p: 'Usamos los siguientes servicios de terceros de confianza:' },
        { sub2: 'Firebase (Google)' },
        {
          ul: [
            '<strong>Propósito:</strong> Solo autenticación de usuarios',
            '<strong>Datos Recopilados:</strong> Email, ID de usuario (UID), tokens de autenticación',
            '<strong>Política de Privacidad:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>',
          ],
        },
        { sub2: 'Firebase Analytics (Google)' },
        {
          ul: [
            '<strong>Propósito:</strong> Para analizar patrones de uso de la app y mejorar la funcionalidad',
            '<strong>Datos Recopilados:</strong> Eventos de uso anónimos (ej., tarea creada, subida de nivel de habilidad, vistas de pantalla), información del dispositivo',
            '<strong>Política de Privacidad:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">https://firebase.google.com/support/privacy</a>',
          ],
        },
        { sub2: 'RevenueCat' },
        {
          ul: [
            '<strong>Propósito:</strong> Gestión de suscripciones y compras dentro de la app',
            '<strong>Datos Recopilados:</strong> ID de usuario, recibos de compra, estado de suscripción',
            '<strong>Política de Privacidad:</strong> <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>',
          ],
        },
        { sub: '3.3 Seguridad de Datos' },
        { p: 'Implementamos medidas de seguridad estándar de la industria:' },
        {
          ul: [
            'Autenticación encriptada vía Firebase',
            'Almacenamiento seguro de base de datos local en tu dispositivo',
            'Sin almacenamiento del lado del servidor de tus datos personales del juego',
            'Encriptación HTTPS para todas las comunicaciones de red',
          ],
        },
      ],
    },
    {
      title: '4. Retención de Datos',
      blocks: [
        { sub: '4.1 Datos de Cuenta Activa' },
        {
          ul: [
            'Los datos de tu cuenta y progreso del juego se retienen <strong>mientras tu cuenta esté activa</strong>',
            'El historial de actividad se limpia automáticamente después de <strong>90 días</strong> para mantener el rendimiento de la app (configurable)',
            'Las copias de seguridad automáticas se rotan, manteniendo solo las <strong>3 versiones más recientes</strong>',
          ],
        },
        { sub: '4.2 Eliminación de Cuenta' },
        { p: 'Cuando eliminas tu cuenta:' },
        {
          ul: [
            'Tu cuenta de Firebase Authentication se <strong>elimina permanentemente</strong>',
            'Todos los datos locales (tareas, habilidades, historial, perfil) se <strong>borran permanentemente de tu dispositivo</strong>',
            'RevenueCat retiene datos mínimos de suscripción solo para <strong>facturación y cumplimiento legal</strong>',
            '<strong>Esta acción es irreversible</strong>',
          ],
        },
      ],
    },
    {
      title: '5. Compartir y Divulgación de Datos',
      blocks: [
        { p: 'NO vendemos, alquilamos o intercambiamos tu información personal con terceros.' },
        { p: 'Podemos compartir datos solo en las siguientes circunstancias limitadas:' },
        {
          ul: [
            '<strong>Con tu consentimiento:</strong> Si autorizas explícitamente el intercambio de datos',
            '<strong>Proveedores de servicios:</strong> Firebase y RevenueCat procesan datos en nuestro nombre bajo acuerdos de privacidad estrictos',
            '<strong>Obligaciones legales:</strong> Si es requerido por ley, orden judicial o regulación gubernamental',
            '<strong>Transferencias comerciales:</strong> En caso de fusión, adquisición o venta de activos (los usuarios serán notificados)',
          ],
        },
      ],
    },
    {
      title: '6. Tus Derechos y Opciones',
      blocks: [
        { sub: '6.1 Acceso y Portabilidad' },
        {
          ul: [
            'Puedes <strong>exportar tus datos</strong> usando la función de copia de seguridad en la app (crea un archivo JSON con tus tareas, habilidades e historial)',
            'Puedes <strong>ver todos tus datos personales</strong> dentro de la sección de perfil de la app',
          ],
        },
        { sub: '6.2 Corrección y Actualización' },
        { p: 'Puedes actualizar tu email, nombre y apodo en cualquier momento en la configuración de la app.' },
        { sub: '6.3 Eliminación de Cuenta' },
        {
          ul: [
            'Puedes <strong>eliminar tu cuenta</strong> en cualquier momento vía la pantalla de perfil',
            'La eliminación es <strong>permanente e irreversible</strong>',
            'Para solicitudes de eliminación relacionadas con GDPR que involucren datos de RevenueCat, contáctanos en hello@skillion.app',
          ],
        },
      ],
    },
    {
      title: '7. Privacidad de Menores',
      blocks: [
        { p: 'Skillion está diseñado para ser seguro para usuarios de todas las edades. Sin embargo, estamos comprometidos a cumplir con la Ley de Protección de Privacidad en Línea de Menores (COPPA) y regulaciones similares en todo el mundo.' },
        { p: '<strong>Para usuarios menores de 13 años:</strong>' },
        {
          ul: [
            'Recomendamos que los padres o tutores legales supervisen la creación de cuentas y el uso de la app',
            'Solo recopilamos la información mínima necesaria para la funcionalidad de la app (email, nombre, apodo)',
            'Todos los datos se almacenan localmente en el dispositivo y no se comparten con terceros excepto como se describe en esta política',
            'Los padres pueden solicitar revisar, modificar o eliminar la información de su hijo contactándonos',
          ],
        },
      ],
    },
    {
      title: '8. Transferencias Internacionales de Datos',
      blocks: [
        { p: 'Tus datos pueden ser procesados en países diferentes al tuyo (ej., vía servidores de Firebase en Estados Unidos). Al usar Skillion, consientes la transferencia de tu información a estas ubicaciones. Nos aseguramos de que dichas transferencias cumplan con las leyes aplicables de protección de datos.' },
      ],
    },
    {
      title: '9. Cambios a Esta Política de Privacidad',
      blocks: [
        { p: 'Podemos actualizar esta Política de Privacidad de vez en cuando. Te notificaremos de cualquier cambio significativo mediante:' },
        {
          ul: [
            'Publicar la nueva política en la app',
            'Enviar una notificación por email (si aplica)',
            'Actualizar la fecha de "Última Actualización" en la parte superior de esta política',
          ],
        },
        { p: 'Tu uso continuado de Skillion después de los cambios constituye aceptación de la política actualizada.' },
      ],
    },
  ],
  contactTitle: '10. Contáctanos',
  contactIntro: 'Si tienes preguntas, inquietudes o solicitudes respecto a esta Política de Privacidad o tus datos, por favor contáctanos:',
  contact: [
    { key: 'Email', value: 'hello@skillion.app', href: 'mailto:hello@skillion.app' },
    { key: 'Sitio Web', value: 'https://skillion.app', href: 'https://skillion.app' },
    { key: 'App', value: 'Skillion - Disponible en iOS y Android' },
  ],
  updatedNote: 'Última Actualización: 1 de enero de 2025',
};

export const PRIVACY: Record<Lang, LegalDoc> = { en: privacyEn, es: privacyEs };

