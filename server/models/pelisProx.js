var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var pelis_prox_schema = new Schema({
    nombre:{type:String,required: "EL nombre del genero es Obligatorio"},
    foto:{type:String,required: "Debe la imagen de portadade la pelicula"},
    is_public:{type:Boolean},
    created:{
        type: Date,
        default: Date.now
    },   
});

var Pelis_Prox = mongoose.model("Pelis_Prox",pelis_prox_schema);

module.exports = Pelis_Prox;