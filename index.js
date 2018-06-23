const express = require('express')
const path = require('path')
const port = process.env.PORT || 8000
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/data'))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', 'https://vulnerability-map.herokuapp.com');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'data', 'distritos.json'))
})

app.listen(port)
console.log("server started on port " + port);
