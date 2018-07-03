const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

// Esta parte nos permite servir archivos estáticos
app.use(express.static(__dirname + '/data'));

// Configuramos los permisos para acceder a nuestro servidor
app.use((req, res, next) => {

    // Página desde la cual podemos recibir nuestros datos
    res.setHeader('Access-Control-Allow-Origin', 'https://vulnerability-map.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// Esta parte nos permite enviar nuestro archivo JSON como respuesta
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'data', 'distritos.json'))
});

app.listen(port);
