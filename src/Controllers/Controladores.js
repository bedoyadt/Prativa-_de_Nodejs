const controller = {};
//6 
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM registro', (err, cliente) => {
            if (err) {
                res.json(err);
            }
            res.render('cliente', {
                data: cliente
            });
        });
    });
};