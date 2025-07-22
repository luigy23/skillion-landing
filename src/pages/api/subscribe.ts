import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const email = body.email as string;

    if (!email) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Email es requerido' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Email no válido' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    const groupId = import.meta.env.MAILERLITE_GROUP_ID;

    if (!apiKey) {
      console.error('MAILERLITE_API_KEY no está configurada');
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Error de configuración del servidor' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Crear subscriber en MailerLite
    const subscriberData = {
      email: email,
      status: 'active',
      groups: groupId && groupId !== 'your_group_id_here' ? [groupId] : undefined
    };

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(subscriberData)
    });

    const result = await response.json();

    if (response.ok) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: '¡Gracias, aventurero! Te notificaremos cuando Skillion esté listo para tu épica aventura. 🎮✨' 
      }), { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      // Si el email ya existe, MailerLite devuelve error pero lo consideramos éxito
      if (result.message && result.message.includes('email_address_already_exists')) {
        return new Response(JSON.stringify({ 
          success: true, 
          message: '¡Ya estás en nuestra lista de aventureros! Te notificaremos pronto. 🎮' 
        }), { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      console.error('Error de MailerLite:', result);
      return new Response(JSON.stringify({ 
        success: false, 
        message: 'Error al registrar el email. Inténtalo de nuevo.' 
      }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

  } catch (error) {
    console.error('Error en la suscripción:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      message: 'Error interno del servidor' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
