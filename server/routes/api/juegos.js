var express = require('express');
var router = express.Router();
var con = require("./conexion");


router.post('/', function(req, res, next) {
    const juegos = req.body;
    const sql = "INSERT INTO juegos(nombre, genero_id, desarrolladora_id, plataforma_id, precio) VALUES(?,?,?,?,?)";
    con.query(sql, [juegos.nombre, juegos.genero_id, juegos.desarrolladora_id, juegos.plataforma_id, juegos.precio], function(error, result) {
        if (error) {
            res.json({
                status: "error",
                error
            });
        } else {
            res.json({
                status: "ok",
            });
        }
    });
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

router.put('/:juegos_id', function(req, res, next) {
    const juegos_id = req.params.juegos_id;
    const juegos = req.body;
    const sql = "UPDATE juegos SET nombre=?, genero_id=?, desarrolladora_id=?, plataforma_id=?, precio=? WHERE juegos_id=?";
    con.query(sql, [juegos, juegos_id], function(error, result) {
            if (error) {
            res.json({
                status: "error",
                error
            })
        } else {
            res.json({
                status: "ok",
            });
        }
    })
});

        /*filtro*/
 router.get('/:juegos_id', function(req, res, next){
     const {authorization}= req.headers;
     console.log(authorization);
     const sql='SELECT* FROM juegos where juegos_id=' + req.params.juegos_id
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