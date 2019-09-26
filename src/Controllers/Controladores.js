const Controlador = {};
//6 

Controlador.index = (req, res) => {
    req.getConnection((err, conexion) => {
        if (err) {
            res.json(console.log(err));
        }
        res.render('index');
    });
};

Controlador.formulario = (req, res) => {
    req.getConnection((err, conexion) => {
        if (err) {
            res.json(console.log(err));
        }
        res.render('formularioCliente');
    });
};



Controlador.listar = (req, res) => {
    req.getConnection((err, conexion) => {
        conexion.query('SELECT * FROM for_cliente', (err, formularioCliente) => {
            if (err) {
                res.json(err);
            }
            res.render('formularioCliente', {
                data: formularioCliente
            });
        });
    });
};





module.exports = Controlador;