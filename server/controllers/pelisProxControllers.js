var express = require('express');
var Peliculas = require("../models/pelisProx");

var multer = require('multer');
var path = require('path');

var upload = multer({ dest: 'uploads/' });

var fs = require("fs");
var csv = require('fast-csv');

// Middlewares
const token = require('../middlewares/token');

var router = express.Router();

// debe de estar loggueado para poder consumir los servicios
router.use(token);

router.route('/pelis-prox/:id')
    .get(function(req,res){
        Peliculas.findById(req.params.id,function(err,peli){
            if(err){
                res.json("Error al intentar ver los datos de la pelicula");
            }else{
                res.json(peli);
            }
        });
    })
    .put(upload.single('portada'), function(req,res){
        Peliculas.findById(req.params.id,function(err,peli){
            if(!peli){
                res.status(200).json({
                    mensaje:"No existe la película que piensas actualizar...",
                    tipo: "danger",
                    visible: true
                });
            }else{
                var peli_update = peli;
                var extension = req.file.originalname.split(".").pop();

                try {
                    if(fs.accessSync("public/imagenes/films-prox/" + peli.foto)) {
                        // existe
                        fs.unlink("public/imagenes/films-prox/" + peli.foto,  (err) => {
                            if (err) {
                                console.log("No se pudo eliminar la imagen");
                            } else {
                                console.log('imagen eliminada');                                
                            }
                        });
                    }
                } catch (e) {
                    console.log('La imagen no existe...');
                }               

                peli_update.nombre     = typeof req.body.nombre == 'undefined' ? peli.nombre : req.body.nombre;
                peli_update.foto   = typeof req.file == 'undefined' ? peli.foto : req.body.nombre + "." + extension;
                peli_update.is_public  = typeof req.body.is_public == 'undefined' ? peli.is_public : req.body.is_public;              
                
                fs.rename(req.file.path,"public/imagenes/films-prox/" + req.body.nombre + "." + extension, function (err) {
					if (err) return console.error(err);
					console.log("Imagen enviada a la carpeta de imagenes!");
				});

                peli_update.save().then(function(us){
                    res.status(200).json({
                        mensaje:"La película " + peli.nombre + " ha sido actualizada exitosamente...",
                        tipo: "success",
                        visible: true
                    });
                },function(err){
                    res.status(200).json("Hubo un error al actualizar los datos de la pelicula");
                });
            }
        });
    })
    .delete(function(req,res){
        Peliculas.findById(req.params.id,function(err,pelicula){
            if(!pelicula){
                res.status(200).json({
                    mensaje:"No existe la película que piensas eliminar...",
                    tipo: "danger",
                    visible: true
                });
            }else{
                var pelicula_delete = pelicula;

                pelicula_delete.remove().then(function(us){

                    try {
                        if(fs.accessSync("public/imagenes/films-prox/" + pelicula.foto)) {
                            // existe
                            fs.unlink("public/imagenes/films-prox/" + pelicula.foto,  (err) => {
                                if (err) {
                                    console.log("No se pudo eliminar la imagen");
                                } else {
                                    console.log('imagen eliminada');                                
                                }
                            });
                        }
                    } catch (e) {
                        console.log('La imagen no existe...');
                    }
                    
                    res.status(200).json({
                        mensaje:"Han sido eliminado los datos de la película " + pelicula.nombre + " exitosamente...",
                        tipo: "success",
                        visible: true
                    });  
                },function(err){
                    res.status(200).json("Hubo un error al eliminar los datos de la película");
                });                

            }
        });
    });

router.route('/pelis-prox')
    .get(function(req,res){
        Peliculas.find({},function (err,pelis) {
            if (err) {
				res.json(err); 
			}else{
                if(pelis.length){   
                    console.log("si hay pelis");
                    res.json({pelis: pelis});                 
                }else{
                    console.log("no hay pelis");
                    res.json({
                        mensaje:"No hay películas registradas...",
                        tipo: "danger",
                        visible: true,
                        pelis: pelis
                    });
                }
			}
			
		});
    })
    .post(upload.single('portada'), function(req,res){
        var extension = req.file.originalname.split(".").pop();

        var pelis = new Peliculas({
            nombre: req.body.nombre,
            foto: req.body.nombre + "." + extension,
            is_public: req.body.is_public
        });

        pelis.save().then(function(us){
            fs.rename(req.file.path,"public/imagenes/films-prox/" + req.body.nombre + "." + extension,function (err) {
                if (err) return console.error(err);
                console.log("Succes!");
                res.status(200).json({
                    mensaje:"Hemos Registrado los datos de la pelicula " + req.body.nombre + " exitosamente...",
                    tipo: "success",
                    visible: true
                });
            });
        },function(err){
            res.json(err);
        });
    });

module.exports = router;