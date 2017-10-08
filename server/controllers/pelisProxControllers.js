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


module.exports = router;