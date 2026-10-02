# Ejercicio 3 — Ejecutar el contenedor

## Objetivo

Crear una instancia ejecutable de nuestra imagen.

```bash
docker run --name containers-101 -p 3000:3000 containers-101
```

En el navegador ir a: http://localhost:3000

## Inspección

En otra terminal:

```bash
docker ps
```

```bash
docker logs containers-101
```

## Detener

```bash
docker stop containers-101
```

## El puerto

```text
-p HOST:CONTAINER

3000:3000
```

El navegador llega al puerto 3000 del host y Docker lo redirige al puerto 3000 del contenedor.

## Experimento

Detén el contenedor y ejecútalo con otro puerto:

```bash
docker run --name containers-101-2 -p 8080:3000 containers-101
```

En el navegador ir a: http://localhost:8080

El proceso dentro del contenedor sigue escuchando en el puerto 3000.
