var mysql = require("mysql")

var conexion=mysql.createConnection({
    host:"ctpoba.ar",
    user: "fuertesf",
    password:"46056320",
    database:"71_C"
})

conexion.connect(()=>{
    console.log("conectado a la db")
});
module.exports = conexion;