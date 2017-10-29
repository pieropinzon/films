let express = require('express');
let Peliculas = require("../models/film");
let Generos = require("../models/genero");
let Enlaces = require("../models/enlace");

let utilities = require('../clases/utilities');

let multer = require('multer');
let path = require('path');

let upload = multer({ dest: 'uploads/' });

let fs = require("fs");
let csv = require('fast-csv');

// Middlewares
const token = require('../middlewares/token');

let router = express.Router();

// para CORN
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// debe de estar loggueado para poder consumir los servicios
router.use(token);

router.route('/peliculas/:id')
    .get(function(req,res){
        Peliculas.find({_id: req.params.id})
		.populate("enlace")
		.exec(function (err,films) {
			if (err) {
				 res.status(200).json("Error al intentar ver los datos de la pelicula");
			}else{
                res.status(200).json(films[0]);
			}
		});
    })
    .put(upload.single('portada'),function(req,res){
        Peliculas.findById(req.params.id,function(err,pelicula){
            if(err){
                res.status(500).json({
                    mensaje: "Hubo un error al tratar de actualizar los datos de la pelicula " + req.body.titulo,
                    tipo: "danger",
                    err: err,
                    visible: true
                });
            }else{                  
                
                var pelicula_update = pelicula;
                var extension, foto = "";

                try {
                    extension = req.file.originalname.split(".").pop();
                    foto = utilities.convertToSlug(req.body.titulo) + "." + extension;

                    if(pelicula.foto == "films450.png"){

                        fs.rename(req.file.path,"public/imagenes/films/" + utilities.convertToSlug(req.body.titulo) + "." + extension, function (err) {
                            if (err) return console.error(err);
                        });
                    
                    }else{
                        // Elimino la imagen antes asginada
                        fs.unlink("public/imagenes/films/" + pelicula.foto,  (err) => {});
                        // agrego la nueva imagen que se le va a asignar
                        fs.rename(req.file.path,"public/imagenes/films/" + foto,function (err) {
                            if (err) return console.error(err);
                        });
                    }

                } catch (error) {
                    // mantengo el valor de la foto ya registrada
                    foto = pelicula.foto;
                }                                

                pelicula_update.titulo      = typeof req.body.titulo == 'undefined' ? pelicula.titulo : req.body.titulo;
                pelicula_update.age         = typeof req.body.age == 'undefined' ? pelicula.age : req.body.age;
                pelicula_update.descripcion = typeof req.body.descripcion == 'undefined' ? pelicula.descripcion : req.body.descripcion;
                pelicula_update.audio       = typeof req.body.audio == 'undefined' ? pelicula.audio : req.body.audio;
                pelicula_update.calidad     = typeof req.body.calidad == 'undefined' ? pelicula.calidad : req.body.calidad;
                pelicula_update.puntuacion  = typeof req.body.puntuacion == 'undefined' ? pelicula.puntuacion : req.body.puntuacion;
                pelicula_update.director    = typeof req.body.director == 'undefined' ? pelicula.director : req.body.director;
                pelicula_update.elenco      = typeof req.body.elenco == 'undefined' ? pelicula.elenco : req.body.elenco;                
                pelicula_update.is_public   = typeof req.body.is_public == 'undefined' ? pelicula.is_public : req.body.is_public;
                pelicula_update.slug        = typeof req.body.titulo == 'undefined' ? pelicula.slug : utilities.convertToSlug(req.body.titulo);                                                                                
                pelicula_update.genero      = typeof req.body.genero == 'undefined' ? pelicula.genero : req.body.genero;
                pelicula_update.foto        = foto;
                

                for(var index in req.body.servidor){
                    console.log(typeof req.body._id == 'undefined')
                    if(typeof req.body._id != 'undefined'){

                        Enlaces.findByIdAndUpdate(req.body._id[index], { servidor: req.body.servidor[index], url: req.body.url[index]}, function(err, enlace) {
                            if (err) throw err;
                        });

                    }else{
                        
                        var enlace_new = new Enlaces({
                            servidor: req.body.servidor[index],
                            url: req.body.url[index],
                            pelicula: pelicula_update._id
                        });

                        enlace_new.save();  

                        pelicula_update.enlace.push(enlace_new);                    
                    }
                }

                pelicula_update.save().then(function(us){
                    res.status(200).json({
                        mensaje:"Hemos actualizado los datos de la película " + req.body.titulo + " exitosamente...",
                        tipo: "success",
                        visible: true
                    });
                },function(err){
                    res.status(500).json({
                        mensaje: "Hubo un error al tratar de actualizar los datos de la pelicula " + req.body.titulo,
                        tipo: "danger",
                        err: err,
                        visible: true
                    });
                });
            }
        });
    })
    .delete(function(req,res){
        Peliculas.findById(req.params.id,function(err,pelicula){
            if(err){
                res.status(500).json({
                    mensaje:"Hubo un error al eliminar los datos de la pelicula " + pelicula.titulo,
                    tipo: "danger",
                    visible: true
                });
            }else{
                var pelicula_delete = pelicula;
                
                Enlaces.remove({pelicula: req.params.id}, function(error){});

                pelicula_delete.remove().then(function(us){

                    if(pelicula.foto != "films450.png"){
                        fs.unlink("public/imagenes/films/" + pelicula.foto);                        
                    }

                    res.status(200).json({
                        mensaje:"Hemos eliminado los datos de la película " + pelicula.titulo + " exitosamente",
                        tipo: "success",
                        visible: true
                    });
                },function(err){
                    res.status(500).json({
                        mensaje:"Hubo un error al eliminar los datos de la pelicula " + pelicula.titulo,
                        tipo: "danger",
                        visible: true
                    });
                });                

            }
        });
    });

router.route('/peliculas')
    .get(function(req,res){
        Peliculas.find({})
        .populate("genero")
		.populate("enlace")
        .sort({created: -1})
		.exec(function (err,films) {
			if (err) {
				res.json({
                    mensaje:"Hubo un error al cargar las películas...",
                    tipo: "danger",
                    visible: true
                }); 
			}else{
                res.status(200).json({
                    mensaje:"Películas cargadas exitosamente...",
                    tipo: "success",
                    visible: true,
                    films: films
                });
			}
		});
    })
    .post(upload.single('portada'),function(req,res){

        var extension, foto = "";
        var longitudEnlace = Object.keys(req.body.servidor).length;
        var idenEnlace = [];

        try {
            extension = req.file.originalname.split(".").pop();
            foto = utilities.convertToSlug(req.body.titulo) + "." + extension;


            fs.rename(req.file.path,"public/imagenes/films/" + foto,function (err) {
                if (err) return console.error(err);
            });

        } catch (error) {
            extension = ".png";
            foto = "films450" + extension;
        }

        var film = new Peliculas({
            titulo: req.body.titulo,
            age: req.body.age,
            descripcion: req.body.descripcion,
            audio: req.body.audio,
            calidad: req.body.calidad,
            puntuacion: req.body.puntuacion,
            director: req.body.director,
            elenco: req.body.elenco,
            is_public: req.body.is_public,
            slug: utilities.convertToSlug(req.body.titulo),
            genero: req.body.genero,
            foto: foto
        });
        
        for(var i=0; i < longitudEnlace; i++){
            var enlace_new = new Enlaces({
                    servidor: req.body.servidor[i],
                    url: req.body.url[i],
                    pelicula: film._id
                });

            enlace_new.save();

            idenEnlace.push(enlace_new);            
        }

        for(var enlace in idenEnlace){
            film.enlace.push(idenEnlace[enlace]);
        }

        film.save(function (err) {
			if (!err) {
                res.status(200).json({
                    mensaje:"Hemos Registrado los datos de la película " + req.body.titulo + " exitosamente",
                    tipo: "success",
                    visible: true
                });
			}else{
				res.status(500).json({
                    mensaje: "Hubo un error al guardar los datos de la pelicula " + req.body.titulo,
                    tipo: "danger",
                    err: err,
                    visible: true,
                });
			}
		});
    });

router.route('/peliculas/:id/enlaces')
    .post(function(req,res){  
        Peliculas.findById(req.params.id,function(err,pelicula){
            if(err){
                res.status(200).json("No existe la pelicula");
            }else{
                
                var pelicula_update = pelicula;

                var enlace_new = new Enlaces({
                    servidor: req.body.servidor,
                    url: req.body.url
                });

                enlace_new.pelicula = pelicula_update._id;
                enlace_new.save();

                pelicula_update.enlace.push(enlace_new);

                pelicula_update.save().then(function(us){
                    res.status(200).json("Enlace guardado correctamente...");
                },function(err){
                    res.status(200).json("Hubo un error al guardar el enlace de la pelicula...");
                });
            }
        });
    });

module.exports = router;