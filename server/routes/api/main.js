var express = require('express');
var router = express.Router();

var desarrolladorasRouter = require('./desarrolladoras');
var generoRouter = require('./genero');
var usuarioRouter = require('./usuario');
var plataformaRouter = require('./plataforma');
var juegosRouter = require('./juegos');

router.use("/desarrolladoras", desarrolladorasRouter);
router.use("/genero", generoRouter);
router.use("/usuario", usuarioRouter);
router.use("/plataforma", plataformaRouter);
router.use("/juegos", juegosRouter);


module.exports = router