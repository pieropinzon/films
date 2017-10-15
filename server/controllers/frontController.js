var express = require("express");

const peliculasModels = require('../models/film');
const generosModels = require('../models/genero');
const pelisProxModels = require('../models/pelisProx');

let peliculasClass = require('../clases/peliculas');

var router = express.Router();

// muestra las peliculas del año
router.get("/peliculas/fecha/:age",function (req,res) {

	const num_por_page = 12;

	let page = (parseInt(1)-1)*num_por_page,
		num_page = parseInt(1),
		sinResultados = '',
		count;

	let busqueda = peliculasClass.tipoBusqueda("age",req.params.age);
	peliculasClass.obtenerPeliculas(res, req, "age", req.params.age, busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas del " + req.params.age +" para descargar gratis en HD");

});

// muestra las peliculas del año
router.get("/peliculas/fecha/:age/page/:page",function (req,res) {

	const num_por_page = 12;

	let page = (parseInt(req.params.page)-1)*num_por_page,
		num_page = parseInt(req.params.page),
		sinResultados = '',
		count;

	let busqueda = peliculasClass.tipoBusqueda("age",req.params.age);
	peliculasClass.obtenerPeliculas(res, req, "age", req.params.age, busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas del " + req.params.age +" para descargar gratis en HD");

});

// muestra las peliculas del año
router.get("/peliculas/genero/:genero",function (req,res) {
	
	const num_por_page = 12;

	let page = (parseInt(1)-1)*num_por_page,
		num_page = parseInt(1),
		sinResultados = '',
		count;

	generosModels.findOne({nombre: req.params.genero}, function(err, genero){
		if (err) console.log(err);

		if(genero){

			let busqueda = peliculasClass.tipoBusqueda("genero",genero._id);
			peliculasClass.obtenerPeliculas(res, req, "genero", req.params.genero, busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas de " + req.params.genero +" para descargar gratis en HD");

		}else{
			sinResultados = 'No se han encontrado resultados para el Genero: ' + req.params.genero;
			res.render("index",{result: sinResultados,
								title: req.params.genero
				});
		}		
	})
});

router.get("/peliculas/genero/:genero/page/:page",function (req,res) {
	
	const num_por_page = 12;

	let page = (parseInt(req.params.page)-1)*num_por_page,
		num_page = parseInt(req.params.page),
		sinResultados = '',
		count;

	generosModels.findOne({nombre: req.params.genero}, function(err, genero){
		if (err) console.log(err);

		if(genero){

			let busqueda = peliculasClass.tipoBusqueda("genero",genero._id);
			obtenerPeliculas(res, req, "genero", req.params.genero, busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas de " + req.params.genero +" para descargar gratis en HD");

		}else{
			sinResultados = 'No se han encontrado resultados para el Genero: ' + req.params.genero;
			res.render("index",{result: sinResultados,
								title: "Peliculas de " + req.params.genero +" para descargar gratis en HD"
				});
		}		
	})
});

router.get("/", function(req, res){

	const num_por_page = 12;

	let page = (parseInt(1)-1)*num_por_page,
		num_page = parseInt(1),
		sinResultados = '',
		count;

	if(req.query.search){
		const regex = new RegExp(peliculasClass.expresionBuscador(req.query.search),'gi');

		peliculasModels.find({titulo: regex})
		.populate("genero")
		.exec(function (err,peliculas) {
			if (err) console.log(err);

			if(peliculas.length < 1){
				sinResultados = 'No se han encontrado resultados para tu búsqueda: ' + req.query.search;
			}


			pelisProxModels.find({ is_public: true }, function(err, peliculasProx){
				if(err) console.log(err);

				let context = {
								peliculas : peliculas,
								num_page : num_page,
								count : count,
								result: sinResultados,
								title: "Peliculas de " + req.query.search +" para descargar gratis en HD",
								proxEstrenos: peliculasProx
						};


				res.render("index",context);
			}).limit(8).sort({created: -1});

		});

	}else{

		let busqueda = peliculasClass.tipoBusqueda("","");
		peliculasClass.obtenerPeliculas(res, req, "", "", busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas para descargar gratis en HD");

	}

});


router.get("/page/:page", function(req, res){

	const num_por_page = 12;

	let page = (parseInt(req.params.page)-1)*num_por_page,
		num_page = parseInt(req.params.page),
		sinResultados = '',
		count;	

	let busqueda = peliculasClass.tipoBusqueda("","");
	peliculasClass.obtenerPeliculas(res, req, "", "", busqueda, page, num_page, num_por_page, count, sinResultados, "Peliculas para descargar gratis en HD");

});


router.get("/films/:titulo", function(req, res){
	
	peliculasModels
		.findOne({titulo: req.params.titulo})
		.populate("genero")
		.populate("enlace")
		.exec(function (err,pelicula) {
			if (err) console.log(err);


			peliculasModels.find({ genero: pelicula.genero._id }, function(err, peliculasRecomds){
				if(err) console.log(err);
				
				let context = {
								pelicula : pelicula,
								title: pelicula.titulo + " (" + pelicula.age + ") descargar gratis en HD",
								pelisRecomends: peliculasRecomds,
								countRecomends: parseInt(peliculasRecomds.length)
						};


				res.render("pelis-detalle",context);
			}).limit(6);
			
		});
		
});

module.exports = router;