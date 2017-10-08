// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
// const connect = require('connect');

// Get our API routes
const film   = require('./server/controllers/filmController');
const genero = require('./server/controllers/generoController');
const enlace = require('./server/controllers/enlaceController');
const user = require('./server/controllers/userController');
const front = require('./server/controllers/frontController');
const extras = require('./server/controllers/extras');
const pelis_prox = require('./server/controllers/pelisProxControllers');

let peliculasClass = require('./server/clases/peliculas');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// comprimir archivos estaticos con gzip
// app.use(connect.compress());

//declaracion de la ruta de archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// motor de vistas
app.set('views', path.join(__dirname, './server/views'));
app.set("view engine", "jade");

//rutas de las vistas del backend
app.use('/',front);

// rutas de la api del cliente
app.use('/api', user);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
app.get('/admin/peliculas', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/api', film);
app.use('/api', genero);
app.use('/api', enlace);
app.use('/api', pelis_prox);
app.use('/api', extras);

// error 404
app.get('*', (req, res) => {
    const num_por_page = 5;

    let page = (parseInt(1)-1)*num_por_page,
		num_page = parseInt(1),
		sinResultados = '',
		count;

		let busqueda = peliculasClass.tipoBusqueda("","");
		peliculasClass.obtenerPeliculas(res, req, "", "", busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas para descargar gratis en HD");

});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));