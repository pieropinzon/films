var express = require('express');
var Peliculas = require("../models/pelisProx");

let utilities = require('../clases/utilities');

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
                res.status(404).json({
                    mensaje:"No existe la película que piensas actualizar...",
                    tipo: "danger",
                    visible: true
                });
            }else{
                var peli_update = peli;
                var extension, foto = "";

                try {
                    extension = req.file.originalname.split(".").pop();
                    foto = utilities.convertToSlug(req.body.nombre) + "." + extension;

                    if(peli.foto == "films450.png"){
                        fs.rename(req.file.path,"public/imagenes/films-prox/" + foto, function (err) {
                            if (err) return console.error(err);
                        });
                    }else{
                        // Elimino la imagen antes asignada
                        fs.unlink("public/imagenes/films-prox/" + peli.foto,  (err) => {});
                        // agrego la nueva imagen que se le va a asignar
                        fs.rename(req.file.path,"public/imagenes/films-prox/" + foto,function (err) {
                            if (err) return console.error(err);
                        });
                    }

                } catch (error) {
                    // mantengo el valor de la foto ya registrada
                    foto = peli.foto;
                }            

                peli_update.nombre     = typeof req.body.nombre == 'undefined' ? peli.nombre : req.body.nombre;
                peli_update.foto       = foto;
                peli_update.is_public  = typeof req.body.is_public == 'undefined' ? peli.is_public : req.body.is_public;              
                
                peli_update.save().then(function(us){
                    res.status(200).json({
                        mensaje:"La película por estrenar " + peli.nombre + " ha sido actualizada exitosamente...",
                        tipo: "success",
                        visible: true
                    });
                },function(err){
                    res.status(500).json({
                        mensaje:"Hubo un error al actualizar los datos de la pelicula por estrenar " + peli.nombre,
                        tipo: "danger",
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
                    mensaje:"Hubo un error al eliminar los datos de la pelicula " + pelicula.nombre,
                    tipo: "danger",
                    visible: true
                });
            }

            if(!pelicula){
                res.status(404).json({
                    mensaje:"No existe la película que piensas eliminar...",
                    tipo: "danger",
                    visible: true
                });
            }else{
                var pelicula_delete = pelicula;

                pelicula_delete.remove().then(function(us){

                    if(pelicula.foto != "films450.png"){
                        fs.unlink("public/imagenes/films-prox/" + pelicula.foto);                        
                    }
                    
                    res.status(200).json({
                        mensaje:"Han sido eliminado los datos de la película por estrenar " + pelicula.nombre + " exitosamente...",
                        tipo: "success",
                        visible: true
                    });  
                },function(err){
                    res.status(500).json({
                        mensaje:"Hubo un error al eliminar los datos de la pelicula por estrenar" + pelicula.nombre,
                        tipo: "danger",
                        visible: true
                    });
                });                

            }
        });
    });

router.route('/pelis-prox')
    .get(function(req,res){
        Peliculas.find({},function (err,pelis) {
            if (err) {
                res.status(500).json({
                    mensaje:"Hubo un error al cargar las películas por Estrenar...",
                    tipo: "danger",
                    visible: true
                }); 
			}else{
                if(pelis.length){   
                    res.status(200).json({
                        mensaje:"Películas cargadas exitosamente...",
                        tipo: "success",
                        visible: true,
                        pelis: pelis
                    });                 
                }else{
                    console.log("no hay pelis");
                    res.status(404).json({
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
        var extension, foto = "";

        try {
            extension = req.file.originalname.split(".").pop();
            foto = utilities.convertToSlug(req.body.nombre) + "." + extension;

            fs.rename(req.file.path,"public/imagenes/films-prox/" + foto,function (err) {
                if (err) return console.error(err);
            });

        } catch (error) {
            extension = ".png";
            foto = "films450" + extension;
        }

        var pelis = new Peliculas({
            nombre: req.body.nombre,
            foto: foto,
            is_public: req.body.is_public
        });

        pelis.save().then(function(us){
            res.status(200).json({
                mensaje:"Hemos Registrado los datos de la pelicula " + req.body.nombre + " exitosamente...",
                tipo: "success",
                visible: true
            });
        },function(err){
            res.status(500).json({
                mensaje: "Hubo un error al guardar los datos de la pelicula " + req.body.nombre,
                tipo: "danger",
                err: err,
                visible: true,
            });
        });
    });

module.exports = router;