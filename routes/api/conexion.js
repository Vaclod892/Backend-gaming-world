var mysql = require("mysql")

var conexion=mysql.createConnection({
    host:"ctpoba.ar",
    user: "valentinodellolio",
    password:"46029341",
    database:"71_C"
})

conexion.connect(()=>{
    console.log("conectado a la db")
});
module.exports = conexion;