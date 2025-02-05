# API de Series de Anime

## Requisitos
- Node.js y npm instalados.

## Instalación
1. Clona este repositorio o descarga los archivos.
2. Abre una terminal en el directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Levantar el servidor
1. Ejecuta `node app.js` para levantar el servidor.
2. El servidor estará corriendo en `http://localhost:3000`.

## Rutas disponibles
- **GET /animes**: Obtener todas las series.
- **GET /animes/{genero}**: Obtener una serie por género.
- **POST /animes**: Crear una nueva serie.
- **PUT /animes/{id}**: Actualizar una serie.
- **DELETE /animes/{id}**: Eliminar una serie por ID.
- **DELETE /animes**: Eliminar todas las series.

## Pruebas con Postman
1. Abre Postman y realiza las peticiones a las rutas indicadas.
