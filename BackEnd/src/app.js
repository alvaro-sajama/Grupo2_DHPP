const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const mainRouter = require('../src/routers/main.js');

app.use('/', mainRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
);