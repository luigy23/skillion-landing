# Configuración de MailerLite

Este proyecto incluye integración con MailerLite para el formulario de prerregistro.

## Configuración

1. **Obtener API Key de MailerLite:**
   - Ve a [MailerLite Dashboard](https://dashboard.mailerlite.com/integrations/api)
   - Crea una nueva API key con permisos de lectura/escritura
   - Copia la API key

2. **Configurar variables de entorno:**
   - Copia el archivo `.env.example` a `.env`
   - Reemplaza `your_mailerlite_api_key_here` con tu API key real
   - Opcionalmente, configura `MAILERLITE_GROUP_ID` si quieres agregar suscriptores a un grupo específico

3. **Obtener Group ID (opcional):**
   - En MailerLite Dashboard, ve a Subscribers > Groups
   - Crea un grupo o usa uno existente
   - El ID del grupo estará en la URL o puedes obtenerlo via API

## Estructura de archivos

- `src/pages/api/subscribe.ts` - Endpoint API que maneja la suscripción
- `src/components/PreRegisterForm.astro` - Componente del formulario
- `.env` - Variables de entorno (no incluido en git)
- `.env.example` - Plantilla de variables de entorno

## Funcionalidades

- ✅ Validación de email en frontend y backend
- ✅ Manejo de errores (email duplicado, conexión, etc.)
- ✅ Notificaciones visuales personalizadas
- ✅ Estados de carga en el botón
- ✅ Integración completa con MailerLite API v2

## Desarrollo local

Asegúrate de tener el archivo `.env` configurado antes de ejecutar el proyecto:

```bash
npm run dev
```

El formulario enviará los emails a MailerLite cuando esté correctamente configurado.
