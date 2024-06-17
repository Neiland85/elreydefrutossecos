const express = require('express');
const router = express.Router();

// Ejemplo de ruta GET
router.get('/productos', (req, res) => {
    res.send('Lista de productos');
});

module.exports = router;
