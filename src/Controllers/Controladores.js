const Controlador = {};
//6 

Controlador.index = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(console.log(err));
        }
        res.render('index');
    });
};

Controlador.formulario = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(console.log(err));
        }
        res.render('formularioCliente');
    });
};





Controlador.listar = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM for_cliente', (err, listar) => {
            if (err) {
                res.json(err);
            }
            res.render('listar', {
                data: listar
            });
        });
    });
};

Controlador.salvar = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO for_cliente set ?', data, (err, customer) => {

            res.redirect('/formularioCliente');
        });
    });
};

Controlador.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM for_cliente WHERE id = ?', [id], (err, rows) => {
            res.redirect('/listar');
        });
    });
};

Controlador.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM for_cliente WHERE id = ?", [id], (err, rows) => {

            res.render('editar', {
                data: rows[0]
            })
        });
    });
};

//11 paso
Controlador.update = (req, res) => {
    const { id } = req.params;

    const resiviendoLosCampos = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE for_cliente set ? WHERE Id = ?', [resiviendoLosCampos, id], (err, rows) => {

            res.redirect('/listar');
        });
    });
};


module.exports = Controlador;