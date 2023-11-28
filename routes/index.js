var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.send("<h1>app de express</h1>")
});

router.get('/ejemplo', function(req, res, next) {
  const {busqueda} = req.query;
  console.log(busqueda);
  guardarPersona(nombre);
  res.send("<h1>gest Ruta de ejemplo </h1>")
  });

  router.post('/ejemplo', function(req, res, next) {
    const {nombre} = req.body;
  console.log(nombre);
    res.send("<h1>post Ruta de ejemplo </h1>")
    });

module.exports = router;