# Ejercicio 4 — Challenge: Personaliza tu contenedor

## Objetivo

Modificar la aplicación y crear tu propia imagen.

### Reto 1 — Identidad

Haz que `/api/student` devuelva tu nombre y carrera usando variables de entorno.

Ejemplo:

```bash
docker run \
  --name my-container \
  -e STUDENT_NAME="LaloSalsa" \
  -e CAREER="Ingeniería de Sistemas" \
  -p 3000:3000 \
  containers-101
```

### Reto 2 — Nueva versión

Modifica `APP_VERSION` o el código para crear una versión 2.

Construye:

```bash
docker build -t my-container:v2 .
```

Ejecuta:

```bash
docker run \
  --name my-container-v2 \
  -e STUDENT_NAME="Tu Nombre" \
  -e CAREER="Tu Carrera" \
  -e APP_VERSION="2.0.0" \
  -p 3000:3000 \
  my-container:v2
```

### Bonus (GifCard)

Ejecuta dos versiones simultáneamente:

```bash
docker run --name app-v1 -p 3001:3000 containers-101
docker run --name app-v2 -p 3002:3000 my-container:v2
```

En el navegador ir a:

- http://localhost:3001
- http://localhost:3002

## Pregunta final

¿Qué diferencia hay entre:

- una imagen,
- un contenedor,
- un puerto,
- una variable de entorno?
