let express = require('express');
let Generos = require("../models/genero");
let Peliculas = require("../models/film");

//utilities
let utilities = require('../clases/utilities');

// Middlewares
const token = require('../middlewares/token');


let router = express.Router();

// debe de estar loggueado para poder consumir los servicios
router.use(token);

// rest de peliculas

// ruta para crear peliculas
router.get('/genero/new',function(req,res){
    res.render('app/genero/create');
});

router.route('/genero/:id')
    .get(function(req,res){
        Generos.findById(req.params.id,function(err,genero){
            if(err){
                res.json("Error al intentar ver los datos del genero");
            }else{
                res.json(genero);
            }
        });
    })
    .put(function(req,res){
        Generos.findById(req.params.id,function(err,genero){
            if(!genero){
                res.json({
                    mensaje:"No existe el Genero que piensas actualizar...",
                    tipo: "danger",
                    visible: true
                });
            }else{
                var genero_update = genero;

                genero_update.nombre  = typeof req.body.nombre == 'undefined' ? genero.nombre : req.body.nombre;
                genero_update.slug  = utilities.convertToSlug(req.body.nombre);                

                genero_update.save().then(function(us){
                    res.status(200).json({
                        mensaje:"El genero ha sido actualizado exitosamente...",
                        tipo: "success",
                        visible: true
                    });
                },function(err){
                    res.status(200).json("Hubo un error al actualizar el Genero");
                });
            }
        });
    })
    .delete(function(req,res){
        Generos.findById(req.params.id,function(err,genero){
            if(err){
                res.status(500).json({
                    mensaje:"Ups, ha ocurrido un error en el servidor...",
                    tipo: "danger",
                    visible: true
                });
            }
            
            if(!genero){
                res.status(404).json({
                    mensaje:"No existe el Genero que desea eliminar...",
                    tipo: "danger",
                    visible: true
                });
            }else{

                Peliculas.remove({genero: genero._id}, function (err) {
                    if (err) console.log(err);
                });               

               Generos.remove({_id: req.params.id}, function(error){
                    if(error){
                        res.status(500).json({
                            mensaje:"Ups, ha ocurrido un error en el servidor...",
                            tipo: "danger",
                            visible: true
                        });
                    }else{ 
                        res.status(200).json({
                            mensaje:"Hemos Eliminado los datos del genero...",
                            tipo: "success",
                            visible: true
                        });
                   }
               });
            }
        });
    });

router.route('/genero')
    .get(function(req,res){
        Generos.find({},function (err,generos) {
            if (err) {
				res.json(err); 
			}else{
                if(generos.length){
                    console.log("si hay generos");
                    res.json({generos: generos});                    
                }else{
                    console.log("no hay generos");
                    res.json({
                        mensaje:"No hay GENEROS registrados...",
                        tipo: "danger",
                        visible: true,
                        generos: generos
                    });                    
                }
			}
			
		});
    })
    .post(function(req,res){
        var genero = new Generos({
            nombre: req.body.nombre,
            slug: utilities.convertToSlug(req.body.nombre)
        });

        genero.save().then(function(us){
            res.json({
                mensaje:"Hemos Registrado los datos del genero " + req.body.nombre + " exitosamente...",
                tipo: "success",
                visible: true
            });
        },function(err){
            res.json(err);
        });
    });

router.route('/genero/:id/peliculas')
    .get(function(req,res){
        Peliculas.find({genero:req.params.id})
        .populate("genero")
		.populate("enlace")
		.exec(function (err,peliculas) {
			if (err) {
				res.json(err); 
			}else{
				if(peliculas.length == 0){
					res.status(200).json("No hay peliculas registradas");
				}else{
                    res.status(200).json(peliculas);
				}
			}
		});
    });

module.exports = router;