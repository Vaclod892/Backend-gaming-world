var express = require('express');
var router = express.Router();
var con = require("./conexion");

router.get('/', function(req, res, next){
    const {authorization}= req.headers;
    console.log(authorization);
    const sql='SELECT* FROM genero'
    con.query(sql, function(error, result){
        
        if (error){
            res.json({
                status:"error",
                error
            })
        } else {
            res.json({
                status:"ok",
                genero:result
            });
        }
    })
});


  module.exports = router;