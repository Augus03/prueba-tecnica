const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Require routes
const imagenes = require('./routers/imagenes.routes');
const favoritos = require('./routers/imagenes.fav.routes');
const gatos = require('./routers/gato.routes');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routers
app.use('/gatos', gatos);
app.use('/imagenes', imagenes);
app.use('/favoritos', favoritos);

//Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})