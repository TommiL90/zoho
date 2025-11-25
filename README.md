# Zoho - Landing Page

Landing page responsiva desarrollada como parte de la entrevista técnica para Zoho. Implementada con HTML5, CSS3 y JavaScript (jQuery), siguiendo las especificaciones de diseño proporcionadas.

## 🚀 Características

- **Diseño Responsivo**: Adaptado para dispositivos desde 320px hasta desktop
- **Fuente Personalizada**: Implementación de Zoho Puvi desde CDN
- **Sprite de Íconos**: Optimización de imágenes mediante sprite
- **Animaciones**: Efectos suaves con CSS y jQuery
- **Tabs Interactivos**: Sistema de tabs funcional con cambio de contenido
- **Sin Frameworks**: Implementación vanilla sin Bootstrap, Grid u otros frameworks

## 📁 Estructura del Proyecto

```
zoho/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── images/             # Imágenes y assets
│   ├── Group 24685.svg
│   ├── Group.png
│   ├── analytics-512.png
│   ├── Redshift-Logo.svg.png
│   ├── Layer1.png
│   ├── Layer2.png
│   ├── graphic.png
│   └── sprite.png
├── font.txt            # Definiciones de fuente Zoho Puvi
├── guia_tecnica.md     # Especificaciones técnicas
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos, animaciones y responsive design
- **JavaScript**: Interactividad y animaciones
- **jQuery 3.6.0**: Biblioteca para manipulación DOM

## 📋 Requisitos

No se requieren dependencias adicionales. El proyecto utiliza:
- jQuery desde CDN
- Fuentes Zoho Puvi desde CDN de Zoho

## ⚙️ Configuración

### Ancho del Contenedor
- Ancho máximo del contenido: **1170px**
- Ancho del navegador: **100%**

### Breakpoints Responsivos
- Desktop: > 1170px
- Tablet: ≤ 768px
- Mobile: ≤ 480px
- Small Mobile: ≤ 320px

### Fuentes
Las fuentes Zoho Puvi se cargan desde el CDN de Zoho:
- Zoho_Puvi_Regular
- Zoho_Puvi_Medium
- Zoho_Puvi_SemiBold
- Zoho_Puvi_Bold

## 📱 Secciones de la Página

1. **Hero Section**: Sección principal con gradiente azul y CTA
2. **Testimonial Section**: Tarjeta de testimonio con quotes
3. **Lorem Section**: Contenido con ilustración
4. **Gray Section**: Grid de características con fondo gris
5. **Tab Section**: Sistema de tabs interactivo con contenido dinámico
6. **Footer**: Footer con gradiente y CTA

## 🎨 Paleta de Colores

- **Azul Principal**: `#2163C3`
- **Azul Oscuro**: `#000EA3`
- **Rojo CTA**: `#F4333D`
- **Amarillo**: `#F8D35B`
- **Gris Claro**: `#F9F9FC`
- **Gris Borde**: `#E1E7F0`

## 📝 Notas de Desarrollo

- No se utilizan frameworks CSS (Bootstrap, Grid, etc.)
- No se utilizan plugins de JavaScript
- jQuery se utiliza únicamente para funcionalidades básicas
- El sprite de íconos está implementado en `images/sprite.png`
- Todas las imágenes están optimizadas

## 🔧 Desarrollo Local

Para ver el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd zoho
   ```

2. Abre `index.html` en tu navegador o usa un servidor local:
   ```bash
   # Con Python
   python3 -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   ```

3. Accede a `http://localhost:8000`

## 📄 Licencia

Este proyecto fue desarrollado como parte de una entrevista técnica para Zoho.

## 👤 Autor

Desarrollado siguiendo las especificaciones técnicas proporcionadas en `guia_tecnica.md`.

---

**Nota**: Este proyecto está listo para desplegarse en Vercel sin configuración adicional. Vercel detectará automáticamente que es un proyecto estático y lo desplegará correctamente.

