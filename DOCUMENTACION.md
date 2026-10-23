# Guía del portafolio de Andrés

Este archivo explica la estructura actual del portafolio, sus animaciones y los puntos que puedes personalizar sin tener que buscar por todo el código.

## Dirección visual

La referencia de Juan Pablo Salomón inspira tres decisiones, sin copiar su diseño:

- Un primer cuadro con un mensaje profesional memorable.
- Proyectos presentados como productos reales, no como una lista genérica.
- Una llamada de contacto clara al final de la experiencia.

Tu versión conserva una estética propia: gris azulado claro, azul marino, acentos celestes y una narrativa centrada en tu evolución como desarrollador Full Stack.

## Orden de la navegación

La página está preparada como una experiencia secuencial:

1. **Inicio**: presentación, mensaje principal y frase personal.
2. **Sobre mí**: perfil profesional y fortalezas técnicas.
3. **Proyectos**: tres proyectos reales con espacio para enlazar sus demostraciones.
4. **Contacto**: invitación directa para iniciar una conversación.

Los enlaces del encabezado desplazan suavemente a cada bloque mediante enlaces como `href="#about"` y `href="#contact"`.

## Primer cuadro: mensaje y personalidad

El mensaje de apertura está pensado para comunicar profesionalismo técnico sin perder cercanía:

- El texto superior identifica el perfil: **Andrés Cuello · Desarrollador Full Stack .NET**.
- El título principal dice: **“Construyo productos web robustos, pensados para personas.”** Combina capacidad de ingeniería con foco en el usuario.
- La línea `hero-summary` presenta el stack principal: C#, ASP.NET Core, SQL Server, React y TypeScript.
- El círculo contiene **“Tecnología con propósito.”** como detalle creativo y humano.

Para modificar el mensaje, busca el bloque `hero-copy` dentro de `src/main.tsx`. Sus tres elementos `hero-line` son las líneas que se animan en secuencia; es mejor mantener tres líneas para conservar el ritmo visual.

## Estructura de `src/main.tsx`

### `projects`

Es la lista de proyectos que se muestra en la columna izquierda. Cada proyecto contiene:

- `number`: número visible del proyecto.
- `title`: nombre del proyecto.
- `type`: tecnologías o descripción breve.
- `demo`: URL de la demostración.

Cuando tengas una demo real, reemplaza el valor de `demo`, por ejemplo:

```ts
demo: 'https://mi-demo.com'
```

### `strengths`

Contiene las fortalezas técnicas que se muestran debajo del perfil. Puedes añadir, quitar o reescribir cada frase sin modificar el diseño.

### `Reveal`

Es el componente responsable de las apariciones al hacer scroll.

- Usa `IntersectionObserver`, una API del navegador que detecta si una sección entra en pantalla.
- Cuando la sección se ve, agrega la clase `is-visible`.
- Cuando el usuario se aleja, la clase se elimina. Al regresar, la animación vuelve a ejecutarse.
- La propiedad `delay` permite que cada bloque aparezca en secuencia.

Ejemplo:

```tsx
<Reveal delay="220ms">
  <p>Contenido que aparecerá después.</p>
</Reveal>
```

### `menuOpen`

Controla el menú en pantallas pequeñas.

- Al tocar el botón del menú, `setMenuOpen(!menuOpen)` cambia entre abierto y cerrado.
- Al elegir un enlace móvil, `setMenuOpen(false)` cierra el menú antes de ir a la sección.

## Eventos y animaciones de `src/index.css`

### `.reveal` y `.reveal.is-visible`

Dan entrada suave a los bloques con tres efectos: opacidad, desplazamiento vertical y desenfoque. La clase `is-visible` los deja completamente visibles.

### `.hero-line`

Divide el título principal en tres líneas. Cada una entra con un retraso diferente para crear el efecto de lectura secuencial.

### `orbit-float`

Hace que el círculo con la frase “Aprender. Crear. Mejorar.” suba y baje levemente. No cambia el contenido ni bloquea la lectura.

### `label-pulse`

Da un movimiento muy sutil al texto “Desarrollador Full Stack” al volver a entrar en pantalla. Cambia suavemente el color y el espaciado entre letras.

### `prefers-reduced-motion`

Respeta la configuración de accesibilidad del visitante. Si una persona prefiere reducir movimiento en su dispositivo, las animaciones se simplifican automáticamente.

## Revisión contigo, bloque por bloque

Iremos en este orden y te preguntaré antes de cambiar cada bloque:

1. **Mensaje principal**: ¿quieres que transmita más confianza técnica, creatividad o cercanía?
2. **Imagen o demostración destacada**: ¿prefieres una captura de tu mejor proyecto, un video corto o una composición visual?
3. **Proyectos**: ¿qué demo y resultado importante debe mostrar cada proyecto?
4. **Perfil técnico**: ¿qué habilidad quieres que una empresa recuerde primero?
5. **Contacto**: ¿buscas atraer empleos, clientes freelance o colaboraciones?

## Archivos importantes

- `src/main.tsx`: contenido, navegación, listas y eventos de React.
- `src/index.css`: colores, transiciones y animaciones.
- `DOCUMENTACION.md`: esta guía de mantenimiento.
