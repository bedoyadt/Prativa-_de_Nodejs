//46
const express = require('express');
const Rutas = express.Router();

const Controladores = require('../Controllers/Controladores');
Rutas.get('/', Controladores.index);
Rutas.get('/formularioCliente/', Controladores.formulario);
Rutas.get('/', Controladores.listar);


module.exports = Rutas