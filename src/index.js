const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

//12345

const app = express();
const InportandoRutas = require('./Routes/ExportRutas');
//inportante para el EMAIL
const router = require('./Routes/index_Email');

app.set('port', process.env.PORT || 2000);
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'bedoya701',
    post: 3306,
    database: 'formularuo'
}, 'single'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', InportandoRutas);
//inportante para el EMAIL
app.use('/', router);



app.use(express.static(path.join(__dirname, 'Public')));

app.listen(app.get('port'), () => {
    console.log('Estoy En EL Servidor 2000');
});