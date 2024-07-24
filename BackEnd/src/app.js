const express = require('express');
const cors = require('cors')

require('dotenv').config()
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//const mainRouter = require('../src/routers/main.js');
const aspiranteRouter = require('../src/routers/aspirantes.routes.js');
const empresaRouter = require('../src/routers/empresas.routes.js');
const profesionRouter = require('../src/routers/profesiones.routes.js');

//app.use('/', mainRouter);
app.use('/aspirantes', aspiranteRouter);
app.use('/empresas', empresaRouter);
app.use('/profesiones', profesionRouter);

const PORT = process.env.PORT;

app.listen(PORT, () =>
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);