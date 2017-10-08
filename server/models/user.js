var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var user_schema = new Schema({
    username:{
        type:String,
        required: "EL usuario es Obligatorio",
        trim: true
    },
    email:{
        type:String,
        required: "EL correo es Obligatorio",
        trim: true
    },
    password:{
        type:String,
        required: "El password es Obligatorio",
        trim: true
    },
    created:{
        type: Date,
        default: Date.now
    },
});

var User = mongoose.model("User",user_schema);

module.exports = User;