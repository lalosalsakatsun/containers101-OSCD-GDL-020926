# Ejercicio 2 — Crear la imagen

## Objetivo

Convertir la aplicación y su runtime en una imagen reproducible.

El proyecto ya contiene un `Dockerfile`. Léelo antes de ejecutar el build.

## Construir

```bash
docker build -t containers-101 .
```

## Verificar

```bash
docker images
```

Busca:

```text
containers-101
```

## Discusión

Relaciona cada instrucción:

| Dockerfile | Función |
|---|---|
| `FROM` | Imagen base |
| `WORKDIR` | Directorio de trabajo |
| `COPY` | Copiar archivos |
| `RUN` | Ejecutar comandos durante el build |
| `ENV` | Variables de entorno |
| `EXPOSE` | Documentar puerto |
| `CMD` | Proceso por defecto |

## Idea clave

`docker build` crea una **image**. Todavía no se está ejecutando un contenedor.
