//46
const express = require('express');
const Rutas = express.Router();

const Controladores = require('../Controllers/Controladores');
Rutas.get('/', Controladores.index);
                Rutas.get('/formularioCliente', Controladores.formulario);
           Rutas.get('/listar', Controladores.listar);
Rutas.post('/Guardar', Controladores.salvar);
Rutas.get('/delete/:id', Controladores.delete);
Rutas.get('/update/:id', Controladores.edit);
Rutas.post('/update/:id', Controladores.update);
//Rutas.get('/', Controladores.listar);


module.exports = Rutas;