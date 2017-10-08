var express = require('express');
var Peliculas = require("../models/film");
var Generos = require("../models/genero");
var Enlaces = require("../models/enlace");

var multer = require('multer');
var path = require('path');

var upload = multer({ dest: 'uploads/' });

var fs = require("fs");
var csv = require('fast-csv');

// Middlewares
const token = require('../middlewares/token');

var router = express.Router();

router.use(token);

router.route('/csv/peliculas')
        .post(upload.single('archivo'),function(req,res){
            
            console.log(req.file);

            fs.rename(req.file.path,"public/archivos/"+req.file.originalname,function (err) {
                if (err) return console.error(err);
                console.log("Succes!");
                // res.status(200).json("guardamos tus datos.");
            });

            fs.createReadStream('public/archivos/'+ req.file.originalname)
            .pipe(csv())
            .on('data', function(data){
                
                console.log(data[3]);

                Generos.findOne({nombre: data[3]},function(err,genero){
                    if(err){
                        res.status(200).json("No existe el genero...");
                    }else{

                        var film = new Peliculas({
                            titulo: data[0],
                            age: data[1],
                            descripcion: data[2],
                            audio: data[4],
                            calidad: data[5],
                            puntuacion: data[6],
                            director: data[7],
                            elenco: data[8],
                            genero: genero._id,
                            foto: 'films 450.png'
                        });

                        film.save(function (err) {
                            if (!err) {
                                console.log("pelicula guardada exitosamente...")
                            }else{
                                res.status(200).json("Hubo un error al guardar los datos de la pelicula");
                            }
                        });
                        
                    }
                });          
            })
            .on('end', function(data){
                
                console.log('lectura finalizada');
                fs.unlink("public/archivos/" + req.file.originalname);  

                res.status(200).json("guardamos tus datos exitosamente.");
            });

        })
        .get(function(req,res){  

            var options = { encoding: 'utf-8' };

            var ws = fs.createWriteStream('public/peliculas.csv', options);            

            Peliculas.find({})
            .exec(function (err,films) {
                if (err) {
                    res.json(err); 
                }else{
                    //arreglo
                    var peliculas = [
                        [
                            'Titulo',
                            'Año',
                            'Descripcion',
                            'Audio',
                            'Calidad',
                            'Puntuacion',
                            'Director',
                            'Elenco',
                            'Genero',
                            'Foto'                           
                        ]
                    ];

                    for(var peli in films){
                        
                        var pelicula = [
                            films[peli]['titulo'],
                            films[peli]['age'],
                            films[peli]['descripcion'],
                            films[peli]['audio'],
                            films[peli]['calidad'],
                            films[peli]['puntuacion'],
                            films[peli]['director'],
                            films[peli]['elenco'],
                            films[peli]['genero'],
                            films[peli]['foto']                                                                                    
                        ];

                        peliculas.push(pelicula);

                        pelicula = [];
                    }

                    csv
                        .write(peliculas,{headers: true})
                        .pipe(ws);                                        
                   
                   res.status(200).json("Archivo csv generado exitosamente");

                }
            });

        });



router.route('/csv/generos')
    .get(function(req,res){  

            var options = { encoding: 'utf-8' };

            var ws = fs.createWriteStream('public/generos.csv', options);            

            Generos.find({})
            .exec(function (err,generos) {
                if (err) {
                    res.json(err); 
                }else{
                    //arreglo
                    var gnrs = [
                        [
                            'Nombre'                           
                        ]
                    ];

                    for(var genero in generos){
                        
                        var gnr = [
                            generos[genero]['nombre']                                                                                  
                        ];

                        gnrs.push(gnr);

                        gnr = [];
                    }

                    csv
                        .write(gnrs,{headers: true})
                        .pipe(ws);                                        
                   
                   res.status(200).json("Archivo csv generado exitosamente");

                }
            });

        })
        .post(upload.single('archivo'),function(req,res){
            
            console.log(req.file);

            fs.rename(req.file.path,"public/archivos/"+req.file.originalname,function (err) {
                if (err) return console.error(err);
                console.log("Succes!");
            });

            fs.createReadStream('public/archivos/'+ req.file.originalname)
            .pipe(csv())
            .on('data', function(data){

                var gen = new Generos({
                    nombre: data[0]
                });

                gen.save(function (err) {
                    if (!err) {
                        console.log("Generos guardados exitosamente...")
                    }else{
                         console.log("Hubo un error al guardar los datos del Genero");
                    }
                });         
            })
            .on('end', function(data){
                
                console.log('lectura finalizada');
                fs.unlink("public/archivos/" + req.file.originalname);  

                res.status(200).json("guardamos tus datos exitosamente.");
            });

        });

module.exports = router;