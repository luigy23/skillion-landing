# 🎮 Skillion Landing Page

Landing page épica para la app Skillion - donde la vida es un juego y tú subes de nivel.

## 🚀 Estructura del Proyecto

Esta landing page está construida con **Astro 5.0** y **Tailwind CSS**, optimizada para conversión y diseñada con estética pixel art que refleja la identidad visual de Skillion.

```
/
├── public/
│   ├── favicon.svg          # Favicon personalizado pixel art
│   └── icons/               # Iconos SVG pixel art
├── src/
│   ├── components/
│   │   ├── FeatureCard.astro    # Tarjetas de características
│   │   ├── PixelButton.astro    # Botones con estilo pixel/gaming
│   │   └── PreRegisterForm.astro # Formulario de pre-registro
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal con fuentes Poppins
│   ├── pages/
│   │   └── index.astro          # Landing page principal
│   └── styles/
│       └── global.css           # Estilos globales de Tailwind
├── astro.config.mjs
├── tailwind.config.mjs          # Configuración personalizada con paleta gaming
└── package.json
```

## 🎨 Características de Diseño

### Paleta de Colores Gaming
- **Primary**: Azules vibrantes (#0ea5e9)
- **Secondary**: Púrpuras mágicos (#d946ef) 
- **Accent**: Naranjas energéticos (#f97316)
- **Gaming**: Colores temáticos RPG
  - Gold: #ffd700 (Para botones CTA)
  - Health: #ff6b6b (Para elementos de vida/salud)
  - Mana: #4ecdc4 (Para elementos mágicos)
  - XP: #45b7d1 (Para barras de experiencia)

### Tipografía
- **Fuente principal**: Poppins (300, 400, 600, 700, 800)
- Cargada desde Google Fonts para máximo rendimiento

### Animaciones Pixel Art
- `float`: Flotación suave para elementos hero
- `pulse-glow`: Efecto de brillo pulsante
- `pixel-shimmer`: Parpadeo estilo retro
- `levelup`: Animación de subida de nivel

## 📋 Secciones de la Landing Page

### 1. 🎯 Héroe de la Aventura
- **Título principal**: "La vida es un juego. Sube de nivel."
- **Subtítulo explicativo**: Qué es Skillion y cómo funciona
- **CTA primario**: Formulario de pre-registro
- **Visual**: Personaje pixel art animado (placeholder actual: 🎮)

### 2. 😴 El Problema
- **Headline**: "¿Las apps de hábitos te aburren?"
- **Dolor del usuario**: Apps aburridas, sin progreso visible, desmotivación
- **Visual**: Iconos que representan los problemas actuales

### 3. ⚔️ La Solución (Skillion)
- **Headline**: "Tu vida, tus reglas, tu juego"
- **3 Características principales**:
  - 🧠 Crea tus Propias Skills
  - ⚔️ Completa Misiones Reales  
  - 🏆 Sube de Nivel y Desbloquea
- **Beneficios claros** con iconos temáticos

### 4. 📱 Galería "Instagrammable"
- **Headline**: "Diseñado para que presumas tu progreso"
- **3 Mockups**:
  - 📊 Perfil de Aventurero
  - 📈 Resumen Semanal (estilo Spotify Wrapped)
  - 🎉 Animación de Misión Completada
- **Enfoque**: Shareability en redes sociales

### 5. 🌟 Únete a la Comunidad
- **Headline**: "Sé uno de los primeros aventureros"
- **Prueba social**: Enlaces a redes sociales
  - Instagram: @skillion.app
  - Instagram ES: @skillion.es  
  - TikTok: @skillion.app
- **Recompensas de fundador**: Ítems exclusivos, acceso beta

### 6. 🚀 CTA Final
- **Headline**: "¿Listo para empezar la partida?"
- **Formulario duplicado**: Mayor conversión
- **Urgencia**: "No dejes que la procrastinación sea el boss final"

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                            |
| `npm run dev`             | Inicia servidor local en `localhost:4321`      |
| `npm run build`           | Construye el sitio para producción en `./dist/` |
| `npm run preview`         | Vista previa del build localmente               |
| `npm run astro ...`       | Ejecuta comandos CLI de Astro                   |

## 🎮 Integración con Backend

### Formulario de Pre-registro
El componente `PreRegisterForm.astro` incluye:
- **Validación de email** del lado cliente
- **Evento de submit** personalizable
- **Placeholder** para integrar con servicios como:
  - Mailchimp
  - ConvertKit  
  - Brevo (ex Sendinblue)
  - Tu propia API

```javascript
// En PreRegisterForm.astro - línea ~35
document.getElementById('preregister-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const email = formData.get('email');
  
  // 🔧 AQUÍ INTEGRAR CON TU SERVICIO DE EMAIL
  console.log('Email registrado:', email);
});
```

## 🚀 Deployment

### Vercel (Recomendado)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### Manual/VPS
```bash
npm run build
# Upload dist/ folder to your server
```

## 🎨 Personalización

### Cambiar Colores
Edita `tailwind.config.mjs` para modificar la paleta:

```javascript
colors: {
  gaming: {
    'gold': '#tu-color-dorado',
    'health': '#tu-color-vida',
    // ... más colores
  }
}
```

### Añadir Animaciones
Define nuevas animaciones en `tailwind.config.mjs`:

```javascript
animation: {
  'tu-animacion': 'tu-keyframe 2s ease-in-out infinite',
},
keyframes: {
  'tu-keyframe': {
    '0%': { /* estado inicial */ },
    '100%': { /* estado final */ }
  }
}
```

### Modificar Contenido
Edita directamente `src/pages/index.astro` para cambiar:
- Textos de headlines
- Descripciones de características  
- Enlaces de redes sociales
- Calls to action

## 📊 Optimización y Analytics

### Performance
- ✅ **Astro**: Carga rápida con hidratación selectiva
- ✅ **Tailwind**: CSS purificado automáticamente
- ✅ **Fonts**: Precarga de Poppins desde Google Fonts
- ✅ **Images**: Formato SVG para iconos escalables

### SEO Ready
- ✅ Meta tags configurables
- ✅ Estructura semántica HTML5
- ✅ Favicon personalizado
- ✅ Enlaces externos con `target="_blank"`

### Analytics Integration
Añade tu servicio de analytics en `Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Próximos Pasos

### Contenido
- [ ] Añadir imágenes/mockups reales de la app
- [ ] Crear animación personalizada del personaje hero
- [ ] Añadir testimoniales de beta testers
- [ ] Crear página de términos y privacidad

### Funcionalidad
- [ ] Integrar API de pre-registro real
- [ ] Añadir popup de exit-intent
- [ ] Implementar A/B testing para CTAs
- [ ] Crear sistema de referidos

### Marketing
- [ ] Configurar píxel de Facebook/Meta
- [ ] Añadir schema markup para rich snippets
- [ ] Crear landing pages específicas por fuente de tráfico
- [ ] Implementar live chat o chatbot

---

**¡Tu aventura épica comienza aquí! 🎮✨**

*¿Listo para convertir hábitos aburridos en una aventura RPG?*
