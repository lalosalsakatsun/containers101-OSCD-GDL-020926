# Containers 101 — De localhost a producción

Charla de introducción a contenedores + taller práctico para el Open Source Collaboration Day \
organizado por @Linuxeros Zapopan en el Tecnologico Superior de Jalisco Plantel Zapopan.


## Objetivo

Esta charla/taller tiene como objetivo que los asistentes conozcan los conceptos básicos sobre contenedores y al finalizar puedan:

- Explicar qué es un contenedor.
- Diferenciar una imagen de un contenedor.
- Crear un `Dockerfile`.
- Construir una imagen.
- Ejecutar un contenedor.
- Mapear un puerto.
- Consultar logs.
- Reconstruir una imagen después de cambiar el código.
- Entender el camino conceptual hacia producción.

## Requisitos

- Docker Desktop o Docker Engine
- Git
- Node.js 22+ y npm (solo para ejecutar la app fuera de Docker)
- VS Code o editor equivalente
- Navegador

Verificación rápida:

```bash
docker --version
docker run hello-world
git --version
node --version
npm --version
```

## Inicio rápido

### Ejecutar sin Docker

```bash
npm install
npm start
```

En el navegador ir a: http://localhost:3000

### Construir la imagen

```bash
docker build -t containers-101 .
```

### Ejecutar el contenedor

```bash
docker run --name containers-101 -p 3000:3000 containers-101
```

En el navegador ir a: http://localhost:3000

### Listar contenedores

```bash
docker ps
```

### Ver logs

```bash
docker logs containers-101
```

### Detener

```bash
docker stop containers-101
```

## Estructura

```text
containers-101/
  Dockerfile
  .dockerignore
  package.json
  package-lock.json
  README.md
src/
  server.js
public/
  index.html
exercises/
```


## Ejercicios

1. [Ejercicio 1 — Ejecutar localmente](exercises/01-local.md)
2. [Ejercicio 2 — Crear la imagen](exercises/02-dockerfile.md)
3. [Ejercicio 3 — Ejecutar el contenedor](exercises/03-container.md)
4. [Ejercicio 4 — Challenge](exercises/04-challenge.md)
