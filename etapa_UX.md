# Etapa UX — FESplataformas

## Objetivo
Dotar al proyecto de fluidez visual, textura en las interacciones y una identidad gráfica más cuidada, sin comprometer rendimiento ni la jerarquía de información actual.

---

## 1. Animaciones con GSAP

### Transiciones de sidebar (index.html)
- **Apertura/cierre**: `gsap.to('#sidebar', { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' })` al seleccionar país
- **Contenido dinámico**: al cambiar de país, animar fade out → reemplazar HTML → fade in del nuevo contenido
- **Tooltip flotante** (index_flotante.html): fade+scale en aparición, no solo opacity CSS

### Hover sobre países
- **Escala sutil**: `gsap.to(layer, { scale: 1.02, duration: 0.2 })` en mouseover, con `transformOrigin: 'center'`
- **Color transition**: en vez del salto brusco actual, animar fillOpacity y color con GSAP

### Popup de Leaflet
- Animar apertura con `gsap.from(popup.getElement(), { opacity: 0, y: -10, duration: 0.25 })`
- Actualmente Leaflet maneja popups con CSS nativo; se puede intervenir con `popup.on('open')`

### Scroll suave en viewer.html
- **Anchor links** de legislación/centrales con `gsap.to(window, { scrollTo: '#legislacion', duration: 0.6 })`
- Requiere plugin `ScrollTo`

### Ventajas de GSAP vs CSS transitions
- Control fino sobre easing, overlapping, timeline secuencial
- `power2.out` / `expo.out` se sienten más orgánicos que `ease-in-out`
- Pueden encadenarse: hover → popup → highlight → sidebar en secuencia

---

## 2. Imágenes de fondo aleatorias

### Mecanismo
- Carpeta `assets/bg/` con 6-10 imágenes (trabajo en plataformas, repartidores, ciudades, texturas)
- Al cargar la página, JS selecciona una aleatoriamente y la asigna como fondo del contenedor `#bg-layer` (ya existe en index.html)
- Cambio diario o por sesión (localStorage para persistir)

### Consideraciones
- Las imágenes deben ser **peso ligero** (webp, < 200 KB cada una)
- Opción: degradado + overlay semitransparente encima para mantener legibilidad del mapa
- El mapa tiene `z-index` superior, el fondo queda atrás
- En mobile, algunas imágenes pueden recortarse — considerar `object-fit: cover`

### Implementación mínima
```js
const bgImages = ['bg01.webp', 'bg02.webp', /* ... */];
const selected = bgImages[Math.floor(Math.random() * bgImages.length)];
document.getElementById('bg-layer').style.backgroundImage =
  `url(assets/bg/${selected})`;
```

---

## 3. Micro-interacciones adicionales

### Carga progresiva (skeleton)
- Mientras se descargan los JSON, mostrar un esqueleto gris animado en lugar de blanco
- GSAP puede animar un shimmer con `background-position`

### Contador animado (paises.html)
- El "22 países" / "92 centrales" podría animarse con `gsap.to(counter, { innerText: 92, duration: 1.5, snap: 'innerText' })` al hacer scroll hacia la sección

### Transición entre vistas
- Desde la tarjeta de país al viewer: una transición tipo "morph" de la tarjeta expandiéndose sería atractiva pero compleja
- Alternativa simple: fade rápido con `gsap.to(window, { opacity: 0, duration: 0.15 })` antes del navigate

---

## 4. Consideraciones técnicas

- GSAP debe cargarse desde CDN (`gsap`, `scrollTo` plugin si se usa)
- Peso: ~30 KB gzip para GSAP core, ~10 KB adicional por ScrollTo
- Alternativa más ligera si no se necesita ScrollTo: solo GSAP core
- No mezclar con animaciones CSS existentes (revisar `transition` en CSS para evitar conflictos)
- Probar en móvil: animaciones deben respetar `prefers-reduced-motion`

---

## 5. Orden sugerido de implementación

1. **Fondo aleatorio** (más simple, impacto visual inmediato)
2. **GSAP en sidebar** (la interacción principal del index)
3. **Hover animado en países** (refuerza la sensación de mapa vivo)
4. **Popups con entrada animada**
5. **Contadores animados** en paises.html (detalle final)
6. **Scroll suave** en viewer.html (si se justifica)

---

## 6. Lo que NO conviene hacer

- **No** animar la carga de geometrías (el mapa ya renderiza 22 features rápido)
- **No** sobrecargar con parallax o scroll hijinks en el mapa
- **No** usar GSAP para reemplazar la lógica de negocio (filtros, renderizado condicional)
- **No** imágenes de fondo muy pesadas (> 300 KB) en mobile
