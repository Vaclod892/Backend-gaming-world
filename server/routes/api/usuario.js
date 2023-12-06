var express = require('express');
var router = express.Router();
var con = require("./conexion");

router.post('/', function(req, res, next) {
    const usuarios=req.body;
    const sql="INSERT INTO usuarios(usuario,correo,contraseña)VALUES(?,?,?)";
    con.query(sql, [usuarios.usuario, usuarios.correo, usuarios.contraseña], function(error, result) {
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
    const sql='SELECT* FROM usuarios'
    con.query(sql, function(error, result){
    
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
                usuarios:result
            });
        }
    })
});

router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    const usuarios= req.body;
    const sql = "UPDATE usuarios SET usuario=?, correo=?, contraseña=? WHERE id=?";
    con.query(sql, [usuarios, id], function(error, result) {
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

router.get('/:id', function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT* FROM usuarios where id=' + req.params.id
    con.query(sql, function(error, result){
        
        if (error){
            res.json({
                status:"error" ,
                error
            })
        } else {
            res.json({
                status:"ok",
                usuarios:result
            });
        }
    })
});

  module.exports = router;