const exprerss = require('express');


const app = express();


app.set('port', process.env.PORT || 2000);




app.listen(app.get('port'), () => {
    console.log('Estoy En EL Servidor 2000');
});