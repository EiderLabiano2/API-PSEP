const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ejemplos de series
let animes = [
    { id: 1, nombre: 'My Hero Academia', genero: 'Acción', episodios: 138 },
    { id: 2, nombre: 'Haikyuu!!', genero: 'Deportes', episodios: 85 },
    { id: 3, nombre: 'Jujutsu Kaisen', genero: 'Acción', episodios: 47 },
    { id: 4, nombre: 'Neon Genesis Evangelion', genero: 'Mecha', episodios: 26},
    { id: 5, nombre: 'Cowboy Bebop', genero: 'Ciencia ficción', episodios: 26}
];

// 1. Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenid@ a la API de Series de Anime');
});

// 2. Obtener todas las series o filtrar por género
app.get('/animes', (req, res) => {
    const genero = req.query.genero;

    if (genero) {
        const animesFiltrados = animes.filter(a => a.genero.toLowerCase() === genero.toLowerCase());
        if (animesFiltrados.length === 0) {
            return res.status(404).send('No se encontraron animes con ese género');
        }
        return res.json(animesFiltrados);
    }
    res.json(animes);
});

// 3. Obtener serie por ID (en cado de pedir por ID)
app.get('/animes/:id', (req, res) => {
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    if (!anime) return res.status(404).send('Anime no encontrado');
    res.json(anime);
});

// 4. Añadir serie
app.post('/animes', (req, res) => {
    const nuevoAnime = {
        id: animes.length + 1,
        nombre: req.body.nombre,
        genero: req.body.genero,
        episodios: req.body.episodios,
        autor: req.body.autor,
        año_lanzamiento: req.body.año_lanzamiento
    };
    animes.push(nuevoAnime);
    res.status(201).json(nuevoAnime);
});

// 5. Actualizar serie
app.put('/animes/:id', (req, res) => {
    const anime = animes.find(a => a.id === parseInt(req.params.id));
    if (!anime) return res.status(404).send('Anime no encontrado');

    anime.nombre = req.body.nombre;
    anime.genero = req.body.genero;
    anime.episodios = req.body.episodios;
    anime.autor = req.body.autor || anime.autor;
    anime.año_lanzamiento = req.body.año_lanzamiento || anime.año_lanzamiento;
    res.json(anime);
});

// 6. Eliminar serie
app.delete('/animes/:id', (req, res) => {
    const index = animes.findIndex(a => a.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Anime no encontrado');

    animes.splice(index, 1);
    res.status(204).send();
});

// 7. Borrar todos las series
app.delete('/animes', (req, res) => {
    animes = [];
    res.status(200).send('Todos los animes han sido eliminados');
});

// 8. Mostrar puerto de salida
app.listen(port, () => {
    console.log(`Servidor API REST corriendo en http://localhost:${port}`);
});
