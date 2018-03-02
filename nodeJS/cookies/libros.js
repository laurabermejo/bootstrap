var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Bienvenido a la tienda de libros');
});

router.post('/add', function(req, res) {
  res.send('has añadido un libro');
});
// define the about route
router.get('/:id', function(req, res) {
    res.send('El libro que has seleccionado es: '+req.params.id);
});
router.get('/edit/:id', function(req, res) {
    res.send('Edición del libro: '+req.params.id);
});
router.post('/edit/:id', function(req, res) {
    res.send('Guardar los cambios del libro: '+req.params.id);
});
router.get('/delete/:id', function(req, res) {
    res.send('Borrar el libro: '+req.params.id);
});
router.get('/delete/confirm/:id', function(req, res) {
        res.send('¿Deseas borrar el libro: '+req.params.id +'?');
});

module.exports = router;

