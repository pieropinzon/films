var express = require('express');
var Users = require("../models/user");
var jwt = require('jsonwebtoken');

var mySecretKey = "asd323afasdASDASDQI1312";

var router = express.Router();

router.route('/user/login')
    .post(function(req,res){
        var credentials = {
            username: req.body.username,
            password: req.body.password            
        };

        Users.findOne(credentials, function(err, user){
            if(err){
                return res.status(500).json({
                    success: false,
                    message: 'Error obteniendo el usuario'
                });
            }

            if(!user){
                return res.status(404).json({
                    success: false,
                    message: 'Usuario no encontrado'
                });
            }

            var payload = {
                username: user.username,
                email: user.email
            };

            var token = jwt.sign(payload, mySecretKey,{
                expiresIn : 60*60*24
            });

            return res.status(200).json({
                success: true,
                message: 'token recibido...',
                user: user.username,
                token: token
            });
        });
    });


router.route('/user')
    .post(function(req,res){
       var user = new Users({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password            
        });

        user.save().then(function(us){
            res.json("guardamos tus datos.");
        },function(err){
            res.json(err);
        });
    });

module.exports = router;