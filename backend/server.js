// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conexión a la base de datos
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error("No se encontró la variable MONGO_URI en el archivo .env");
    process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err));

// Rutas
app.use('/api', require('./routes/api'));

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

