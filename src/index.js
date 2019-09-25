const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

//12345

const app = express();

const InportandoRutas = require('./Routes/ExportRutas');


app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'bedoya701',
    post: 3306,
    database: 'formulario'
}, 'single'));

app.use('/', InportandoRutas);


app.use(express.static(path.join(__dirname, 'puclic')));

app.listen(app.get('port'), () => {
    console.log('Estoy En EL Servidor 2000');
});