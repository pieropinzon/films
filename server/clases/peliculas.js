const peliculasModels = require('../models/film');
const generosModels = require('../models/genero');

const pelisProxModels = require('../models/pelisProx');


function sinResult(tipo, req){
	let busqueda;

	if(tipo == "age"){
		busqueda = 'No se han encontrado resultados para el año: ' + req.params.age;
	}else{
		if(tipo == "genero"){
			busqueda = 'No se han encontrado resultados para el Genero: ' + req.params.genero;
		}
	}

	return busqueda;
}

exports.tipoBusqueda = function(tipo, dato){
	let busqueda;

	if(tipo == ""){
		busqueda = {};
	}else{
		if(tipo == "age"){
			busqueda = {age: dato};
		}else{
			if(tipo == "genero"){
				busqueda = {genero: dato};
			}
		}
	}

	return busqueda;
}

exports.obtenerPeliculas = function(res, req, tipo, dato, busqueda, page, num_page, num_por_page, count, sinResultados, title){

	peliculasModels
		.count(busqueda)
		.then( num => {
			count = parseInt((num/num_por_page)+1)
		});

	peliculasModels.find(busqueda)
		.populate("genero")
		.skip(page)
		.limit(num_por_page)
		.exec(function (err,peliculas) {
			if (err) console.log(err);

			if(peliculas.length < 1){
				sinResultados = sinResult(tipo, req);
			}


			pelisProxModels.find({ is_public: true }, function(err, peliculasProx){
				if(err) console.log(err);

				let context = {
								peliculas : peliculas,
								num_page : num_page,
								count : count,
								result: sinResultados,
								url: tipo,
								dato: dato,
								title: title,
								proxEstrenos: peliculasProx
						};


				res.render("index",context);
			}).limit(8).sort({created: -1});
			
		});

}

exports.expresionBuscador = function(expresion){
	return expresion.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}