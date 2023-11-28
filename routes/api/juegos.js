var express = require('express');
var router = express.Router();
var con = require("./conexion");


router.post('/', function(req, res, next) {
    const {nombre, genero_id, desarrolladora_id, plataforma_id}=req.body;
    const sql="INSERT INTO juegos(nombre, genero_id, desarrolladora_id, plataforma_id)VALUES(?,?,?,?)";
    con.query(sql, [nombre, genero_id, desarrolladora_id, plataforma_id],function(error, result){
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
            });
        }
    })
  });


  router.get('/', function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT* FROM juegos'
    con.query(sql, function(error, result){
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
                juegos:result
            });
        }
    })
});



  module.exports = router;