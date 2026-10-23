# Etapa 2 - Arquitectura de información y composición

Estado: aprobado como plano estructural previo al sistema visual y la implementación.

## 1. Decisión principal

El portafolio será una landing de una sola página con navegación por secciones.
Esta estructura permite entender rápidamente quién es Andrés, revisar evidencia real,
probar recorridos y llegar al contacto sin atravesar páginas vacías o repetitivas.

La experiencia se organizará como una historia continua:

```text
Quién soy
   ↓
Qué construyo
   ↓
Cómo se comporta
   ↓
Cómo lo construyo
   ↓
Cómo compruebo su calidad
   ↓
Cómo podemos trabajar juntos
```

La landing no necesitará una API propia. El contenido será local y tipado; los
enlaces a GitHub y las futuras demos serán recursos externos claramente identificados.

## 2. Objetivo de cada sección

Cada sección responderá una sola pregunta principal:

| Sección | Pregunta que responde |
|---|---|
| Inicio | ¿Quién es Andrés y qué valor aporta? |
| Proyectos | ¿Qué productos reales ha construido? |
| Demos | ¿Cómo se comportan esos productos? |
| Proceso | ¿Cómo convierte un problema en una solución? |
| Calidad | ¿Cómo demuestra que las reglas funcionan? |
| Sobre mí | ¿Cómo piensa y cómo trabaja con otras personas? |
| Experiencia | ¿Qué formación y práctica respaldan el perfil? |
| Tecnologías | ¿Con qué herramientas construye cada parte? |
| Próximamente | ¿Cómo continuará creciendo el portafolio? |
| Contacto | ¿Cómo puedo iniciar una conversación? |

## 3. Navegación

### Navegación visible

- Inicio
- Proyectos
- Demos
- Sobre mí
- Contacto

Proceso, calidad, experiencia y tecnologías formarán parte del recorrido, pero no
ocuparán enlaces permanentes en la navegación. Esto mantiene el encabezado breve.

### Comportamiento

- El encabezado permanecerá visible al desplazarse.
- Cada enlace llevará a un ancla dentro de la landing.
- La sección activa se indicará con contraste y forma, no solamente con color.
- El nombre de Andrés funcionará como regreso al inicio.
- En móvil se utilizará un menú desplegable accesible con cierre explícito.
- Al elegir una sección en móvil, el menú se cerrará y el foco seguirá una ruta
  comprensible.
- Se incluirá un enlace para saltar directamente al contenido principal.

### Identificadores previstos

```text
#inicio
#proyectos
#demos
#proceso
#calidad
#sobre-mi
#experiencia
#tecnologias
#proximamente
#contacto
```

## 4. Firma estructural - Mapa del sistema

El elemento memorable estará en el hero. Representará cinco capas conectadas:

```text
Necesidad → Dominio → API → Interfaz → Evidencia
```

No será un diagrama arquitectónico decorativo. Cada capa explicará una capacidad
real del perfil:

- Necesidad: entender el problema antes de construir.
- Dominio: convertir las reglas en comportamiento verificable.
- API: comunicar las capacidades con contratos claros.
- Interfaz: hacer comprensible el producto para una persona.
- Evidencia: probar que las reglas continúan funcionando.

### Interacción

- En escritorio, pasar el puntero o enfocar una capa revelará un ejemplo breve de
  CarIsRD.
- En móvil, las capas se presentarán verticalmente y podrán abrirse con un toque.
- Una sola animación inicial recorrerá la conexión entre las capas.
- La animación no se repetirá de manera constante.
- Con movimiento reducido, el mapa aparecerá completo y sin transición.

## 5. Wireframe general de escritorio

```text
┌──────────────────────────────────────────────────────────────────────┐
│ Andrés Cuello       Inicio  Proyectos  Demos  Sobre mí  Contacto    │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ DESARROLLADOR FULL STACK .NET                                        │
│                                                                      │
│ Desarrollo productos digitales       ┌───────────────────────────┐   │
│ confiables con visión técnica y       │ Necesidad                 │   │
│ mentalidad de liderazgo.              │    ↓                      │   │
│                                       │ Dominio → API → Interfaz  │   │
│ Texto de apoyo                        │                    ↓      │   │
│ [Ver proyectos] [Conocer mi perfil]   │                Evidencia  │   │
│                                       └───────────────────────────┘   │
│ Lead with clarity. Build with purpose.                               │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ PROYECTO INSIGNIA                                                    │
│                                                                      │
│ ┌──────────────────────────────────┐  CarIsRD                        │
│ │                                  │  Problema local                 │
│ │ Captura amplia del producto      │  Regla protegida                │
│ │                                  │  Decisiones principales         │
│ └──────────────────────────────────┘  [Explorar] [Código]            │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ TurnoFlow                              Captura / flujo                │
│ Problema y regla protegida              del producto                  │
│                                                                      │
│ Captura / flujo                         StockPilot                    │
│ del producto                            Problema y regla protegida    │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ DEMOS                                                                │
│ ┌─────────────────┐  ┌────────────────────────────────────────────┐  │
│ │ CarIsRD         │  │                                            │  │
│ │ TurnoFlow       │  │       Área de demostración guiada         │  │
│ │ StockPilot      │  │                                            │  │
│ └─────────────────┘  └────────────────────────────────────────────┘  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ CÓMO CONSTRUYO                                                        │
│ Problema → Reglas → Contrato → Experiencia → Verificación            │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ CALIDAD                                                               │
│ Escenario Gherkin real             QualityFlow y evidencia           │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ SOBRE MÍ                         EXPERIENCIA Y FORMACIÓN              │
│ Historia profesional             Trayectoria breve                   │
│ Forma de colaborar               Educación                           │
│                                  Inglés                              │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ TECNOLOGÍAS POR FUNCIÓN                                               │
│ Backend  Interfaz  Datos  Arquitectura  Calidad  Entrega             │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ PRÓXIMAMENTE                                                          │
│ Una franja adaptable para nuevos proyectos                           │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│ Construyamos algo que funcione con claridad.                         │
│ [Enviar correo]  GitHub  LinkedIn  [Descargar CV]                    │
└──────────────────────────────────────────────────────────────────────┘
```

## 6. Wireframe móvil

```text
┌──────────────────────────────┐
│ Andrés Cuello          Menú  │
├──────────────────────────────┤
│ Desarrollador Full Stack     │
│                              │
│ Desarrollo productos        │
│ digitales confiables...     │
│                              │
│ Texto de apoyo              │
│ [Ver proyectos]             │
│ [Conocer mi perfil]         │
│                              │
│ Lead with clarity...        │
│                              │
│ Necesidad                   │
│    ↓                         │
│ Dominio                     │
│    ↓                         │
│ API                         │
│    ↓                         │
│ Interfaz                    │
│    ↓                         │
│ Evidencia                   │
├──────────────────────────────┤
│ CarIsRD                     │
│ Captura                     │
│ Problema                    │
│ Regla protegida             │
│ [Explorar] [Código]         │
├──────────────────────────────┤
│ TurnoFlow                   │
│ Captura y contenido         │
├──────────────────────────────┤
│ StockPilot                  │
│ Captura y contenido         │
├──────────────────────────────┤
│ Demos                       │
│ [CarIsRD]                   │
│ Panel abierto               │
│ [TurnoFlow]                 │
│ [StockPilot]                │
├──────────────────────────────┤
│ Proceso                     │
│ Secuencia vertical          │
├──────────────────────────────┤
│ Calidad                     │
│ Escenario + explicación     │
├──────────────────────────────┤
│ Sobre mí                    │
│ Experiencia                 │
│ Formación                   │
├──────────────────────────────┤
│ Tecnologías por función     │
├──────────────────────────────┤
│ Contacto                    │
└──────────────────────────────┘
```

## 7. Composición por sección

### Inicio

Escritorio: dos áreas asimétricas. El texto ocupará aproximadamente el 58 % y el mapa
del sistema el 42 %. El contenido se alineará a la izquierda; no se centrará el hero.

Móvil: el texto aparecerá primero y el mapa después. Las acciones ocuparán el ancho
disponible cuando sea necesario, sin reducir su área táctil.

El hero podrá ocupar casi la altura inicial de la pantalla, pero no esconderá el
inicio del proyecto principal. Debe quedar una pista visual del siguiente bloque.

### Proyectos

CarIsRD tendrá una composición amplia con captura, problema, regla protegida y
acciones. No se representará como una tarjeta igual a las demás.

TurnoFlow y StockPilot alternarán la posición de imagen y contenido en escritorio.
En móvil, todas las imágenes aparecerán antes de su explicación para mantener un
orden predecible.

Cada proyecto mostrará solamente cuatro niveles de información en la landing:

1. Nombre y propósito.
2. Problema principal.
3. Regla de negocio que demuestra criterio.
4. Acciones disponibles.

Los detalles de arquitectura más extensos podrán abrirse posteriormente en un panel
o caso de estudio sin cambiar la landing principal.

### Demos

Escritorio: selector vertical a la izquierda y demostración a la derecha.

Móvil: acordeón; solamente una demo estará abierta a la vez. Esto evita un carrusel
horizontal difícil de recorrer con teclado o lector de pantalla.

Cada demo incluirá:

- Producto seleccionado.
- Objetivo del recorrido.
- Estado real de disponibilidad.
- Área de interacción o vista previa.
- Acción para abrir la aplicación completa cuando exista.
- Alternativa visual si la demostración no puede cargarse.

### Proceso

Se utilizará una secuencia numerada porque el contenido sí representa un orden:

1. Entender la necesidad.
2. Modelar las reglas.
3. Diseñar el contrato.
4. Construir la experiencia.
5. Verificar el comportamiento.

En escritorio podrá leerse horizontalmente; en móvil se convertirá en una secuencia
vertical sin desplazamiento lateral.

### Calidad

Un escenario Gherkin real ocupará un lado y la explicación de QualityFlow el otro.
El fragmento técnico será evidencia, no decoración. Tendrá contraste suficiente,
descripción y una alternativa legible para lectores de pantalla.

### Sobre mí, experiencia y formación

La biografía tendrá una columna principal de lectura corta. Experiencia, universidad
y formación en inglés se organizarán en una línea temporal independiente.

No se utilizará una fotografía genérica ni una ilustración de banco. La composición
funcionará sin retrato y permitirá incorporarlo después si se dispone de una imagen
que aporte identidad.

### Tecnologías

Se mostrará una matriz por función, no una nube de logotipos o etiquetas:

```text
Backend       C# · .NET 8 · ASP.NET Core
Interfaz      React · TypeScript · JavaScript
Datos         SQL Server · Entity Framework Core
Arquitectura  Dominio · Capas · Inyección de dependencias
Calidad       Reqnroll · NUnit · Playwright · RestSharp
Entrega       Git · GitHub · Docker · GitHub Actions
```

### Próximamente

Será una franja editorial pequeña, no una colección de tarjetas vacías. Permitirá
anunciar un proyecto futuro con nombre, estado y una frase breve.

### Contacto

La landing cerrará con una invitación clara y acciones directas. La primera versión
no tendrá formulario porque no existe una necesidad que justifique una API o un
servicio de formularios.

Acciones iniciales:

- Enviar correo mediante un enlace `mailto`.
- Abrir GitHub.
- Abrir LinkedIn cuando se confirme la URL.
- Descargar el CV.

## 8. Sistema de ancho y ritmo

### Contenedor

- Ancho máximo general: 1280 px.
- Contenido de lectura: entre 620 y 760 px.
- Márgenes laterales móviles: 20 px.
- Márgenes laterales de tableta: 32 px.
- Márgenes laterales de escritorio: 48 px o más según el viewport.

### Espaciado vertical previsto

- Entre bloques relacionados: 32-56 px.
- Entre secciones en móvil: 88-104 px.
- Entre secciones en escritorio: 128-160 px.
- El hero tendrá un ritmo propio y no heredará automáticamente el espaciado de las
  demás secciones.

### Alineación

- Texto general alineado a la izquierda.
- Párrafos sin justificar para evitar espacios irregulares.
- Líneas de lectura por debajo de 80 caracteres.
- Centrado reservado para estados puntuales, nunca como regla de toda la landing.

## 9. Comportamiento responsive

### 320-639 px

- Una sola columna.
- Navegación en menú.
- Tipografía y espacios ajustados sin perder jerarquía.
- Imágenes con proporción reservada para evitar saltos.
- Demos en acordeón.
- Proceso vertical.

### 640-1023 px

- Hero todavía en una columna amplia o transición controlada a dos columnas.
- Proyectos con imagen y contenido apilados.
- Navegación visible si los enlaces caben sin comprimir.
- Matriz tecnológica en dos columnas.

### 1024 px en adelante

- Hero en dos columnas asimétricas.
- Alternancia de proyectos.
- Demo con selector y panel.
- Proceso horizontal.
- Sobre mí con biografía y trayectoria en paralelo.

No habrá contenido esencial que solo se revele mediante hover.

## 10. Flujo de interacción

### Revisión rápida

```text
Hero → CarIsRD → otros proyectos → contacto
```

Pensado para reclutadores que dedican pocos minutos a una primera revisión.

### Revisión técnica

```text
CarIsRD → proceso → calidad → GitHub
```

Pensado para líderes técnicos que buscan decisiones, reglas y evidencia.

### Exploración de producto

```text
Proyecto → demo → comportamiento → código
```

Pensado para quien quiere entender el producto antes de leer el repositorio.

## 11. Estructura de componentes prevista

```text
App
└── LandingPage
    ├── SkipLink
    ├── SiteHeader
    │   ├── BrandLink
    │   ├── DesktopNavigation
    │   └── MobileNavigation
    ├── HeroSection
    │   └── SystemMap
    ├── ProjectsSection
    │   ├── FeaturedProject
    │   └── ProjectStory
    ├── DemosSection
    │   └── DemoExplorer
    ├── ProcessSection
    ├── QualitySection
    ├── AboutSection
    ├── ExperienceSection
    ├── TechnologiesSection
    ├── UpcomingSection
    ├── ContactSection
    └── SiteFooter
```

El contenido de proyectos vivirá en una estructura de datos local. Los componentes
no contendrán descripciones duplicadas ni dependerán de GitHub en tiempo de ejecución.

## 12. Estados y casos límite

### Navegación

- Menú abierto y cerrado.
- Enlace activo.
- Navegación con teclado.
- Encabezado sobre fondo inicial y sobre secciones claras u oscuras.

### Proyectos y demos

- Repositorio disponible sin demo.
- Demo disponible.
- Demo en preparación.
- Imagen ausente o que no carga.
- Enlace externo roto o retirado.
- Títulos y descripciones más largos de lo esperado.

### Contenido

- CV no disponible temporalmente.
- LinkedIn pendiente.
- Nuevo proyecto añadido sin captura final.
- Tecnologías añadidas sin romper la matriz.

### Accesibilidad

- Foco visible.
- Orden semántico de encabezados.
- Objetivos táctiles cómodos.
- Contraste WCAG 2.1 AA como mínimo.
- Texto alternativo descriptivo en capturas.
- Movimiento reducido.
- Estados que no dependan solamente del color.

## 13. Revisión contra diseños genéricos

### Decisiones descartadas

- Cuadrícula de tres tarjetas idénticas para los proyectos.
- Fondo negro con cian como identidad principal.
- Ventana de terminal como decoración del hero.
- Etiquetas superiores en mayúsculas sobre cada título.
- Animaciones de aparición repetidas en todas las secciones.
- Nubes de logotipos sin explicación.
- Números decorativos donde no existe una secuencia real.

### Ajustes realizados

- CarIsRD recibe una composición propia por su relevancia y contexto dominicano.
- El mapa del sistema relaciona visualmente las capacidades reales del perfil.
- Las numeraciones se reservan para el proceso, donde sí comunican orden.
- QualityFlow aparece como evidencia conectada al producto.
- Las demos explican reglas de negocio, no solamente enseñan pantallas.
- La composición alterna proyectos para crear ritmo sin convertir cada bloque en una
  tarjeta diferente sin razón.

## 14. Decisiones reservadas para la etapa 3

La arquitectura está cerrada, pero los siguientes elementos pertenecen al sistema
visual y se definirán después:

- Paleta final y valores hexadecimales.
- Familias tipográficas y escala.
- Apariencia precisa del mapa del sistema.
- Radios, bordes, superficies y elevación.
- Dirección de iconografía.
- Tratamiento de capturas.
- Curvas y duración exacta del movimiento.

## 15. Criterios de cierre

- La landing tiene un recorrido comprensible de principio a fin.
- Cada sección responde una pregunta concreta.
- El hero cuenta con una firma estructural relacionada con el trabajo real.
- CarIsRD tiene mayor jerarquía que los demás proyectos.
- Demos y proyectos cumplen funciones diferentes.
- QualityFlow complementa la evidencia de CarIsRD.
- El contenido funciona sin fotografía personal.
- La estructura responde desde 320 px hasta pantallas amplias.
- Los recorridos rápidos, técnicos y de producto están contemplados.
- Navegación, demos y recursos ausentes tienen estados definidos.
- No existe dependencia de una API propia.

Con estos criterios, la arquitectura queda lista para la etapa 3: dirección visual y
sistema de diseño.
