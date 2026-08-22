# Imágenes pendientes por descargar

No pude descargar los archivos de imagen automáticamente (el dominio no está habilitado
en mi entorno de navegación/descarga). Descárgalos tú manualmente desde el sitio original
(clic derecho > "Guardar imagen como...") y colócalos en la carpeta `images/` con estos
nombres exactos, para que los HTML ya generados las muestren correctamente:

| Nombre de archivo requerido | Dónde aparece en el sitio original |
|---|---|
| images/mascota.png | Mascota azul (ingeniero de agua) - Home y Quiénes somos |
| images/plantas-acuaticas.png | Foto de plantas verdes - sección "Hola a todos" del Home |
| images/aqua4d-logo.png | Logo "AQUA4D Swiss efficiency" - Home, Quiénes somos, Servicios |
| images/finca-ilustracion.png | Ilustración de finca/granja - sección AQUA4D del Home |
| images/logo.png | Logo pequeño "SHC QAMPO" del header (si existe como imagen; si es solo texto+ícono, no es necesario) |

## Imágenes de producto (página productos.html)
Actualmente los 6 productos usan un recuadro de texto como marcador de posición
(`product-img`). Descarga las fotos reales de cada máquina y reemplaza esos
recuadros por etiquetas `<img>`:
- Lavadora por cepillado
- Lavadora de tambor
- Lavadora por inmersión
- Despulpadora 2 Ton/h
- Peladora de sábila
- Tanque lavado manual

## Cómo descargar rápido desde el navegador
1. Abre cada página en shcqampo.com.
2. Clic derecho sobre cada imagen > "Guardar imagen como..."
3. Guárdala con el nombre indicado, dentro de la carpeta `images/` del repositorio.

## Estado de las páginas
Ya reconstruidas con el contenido y estilo real (a partir de tus capturas de pantalla):
- ✅ index.html (Home)
- ✅ quienes.html (¿Quiénes somos?)
- ✅ aqua4d.html (Servicios / SHC Qampo x AQUA4D)
- ✅ productos.html (Productos)

Nota: el video incrustado en aqua4d.html (sección "Ciencia Detrás de la Tecnología")
se dejó como un recuadro marcador de posición — si tienes el archivo de video o el
link de YouTube original, dímelo y lo incrusto correctamente.
