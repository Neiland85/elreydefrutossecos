// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Carga las variables de entorno desde el archivo .env

const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar JSON y habilitar CORS
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("No se encontró la variable MONGO_URI en el archivo .env");
    process.exit(1); // Sale de la aplicación si no se encuentra la URI
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => {
        console.error("Error conectando a la base de datos:", err);
        process.exit(1); // Sale de la aplicación si hay un error en la conexión
    });

// Definición de rutas
app.use('/api', require('./routes/api')); // Asegúrate de que la ruta a 'api.js' es correcta

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

