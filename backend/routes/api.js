const express = require('express');
const router = express.Router();

// Ruta GET para obtener productos
router.get('/productos', (req, res) => {
    res.json({ message: "Lista de productos" });
});

module.exports = router;

