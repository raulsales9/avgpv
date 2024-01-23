const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión a MongoDB exitosa'))
    .catch(err => console.error('No se pudo conectar a MongoDB', err));

// Crear el esquema de la base de datos
const miEsquema = new mongoose.Schema({
    nombre: String,
    edad: Number,
});

const MiModelo = mongoose.model('MiModelo', miEsquema);

// Crear la aplicación Express
const app = express();

// Establecer el motor de vistas
app.set('view engine', 'ejs');

// Establecer el directorio de vistas
app.set('views', path.join(__dirname, 'templates'));

// Middleware para parsear el cuerpo de las peticiones POST
app.use(express.json());

// Rutas
app.get('/misdatos', async (req, res) => {
    const datos = await MiModelo.find();
    res.send(datos);
});

app.post('/misdatos', async (req, res) => {
    let dato = new MiModelo({
        nombre: req.body.nombre,
        edad: req.body.edad,
    });
    dato = await dato.save();

    res.send(dato);
});

app.get('/formulario', (req, res) => {
    res.render('forms');
});

// Iniciar el servidor
app.listen(3000, () => console.log('Servidor ejecutándose en el puerto 3000'));
