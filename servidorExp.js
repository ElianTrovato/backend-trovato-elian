var express = require('express');
var app = express();
const path = require('path');
const fs = require('fs');

const server = app.listen(8080, () =>{
    console.log(`Escuchando en puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', function(req, res, ){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/productos', function(req, res, ){
    res.sendFile(path.resolve(__dirname, 'productos2.txt'));
});

app.get('/productoRandom', function(req, res, ){
    productoFilter = fs.readFileSync("./productos2.txt", "utf-8", (error, contenido) => {console.log(error); return;});
    let pos = Math.random() * (2 - 0) + 0;
    let productos = JSON.parse(productoFilter);
    res.send(productos[2]);
});