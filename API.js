var express = require('express');
var app = express();
const path = require('path');
const fs = require('fs');



app.get('/', function(req, res, ){
    res.sendFile(path.resolve(__dirname, 'index.html'));
});


var productos = [{
    title: "Lapicera",
    price: 190,
    thumbnail: "https://tse2.mm.bing.net/th/id/OIP.Ot-OLIPG2hCib76q4YsxXwHaHa?pid=ImgDet&rs=1"
},
{
    title: "Libro",
    price: 320,
    thumbnail: "https://th.bing.com/th/id/R.90e0cdc1191ab53425fd44c6deb56d5a?rik=KXc1YelGyMK27g&pid=ImgRaw&r=0"
},
{
    title: "Goma",
    price: 100,
    thumbnail: "https://tse3.mm.bing.net/th/id/OIP.TlCUjkX2gzWyl1CIO4zhAAHaHa?pid=ImgDet&rs=1"
},
{
    title: "Liquid Paper",
    price: 420,
    thumbnail: "https://th.bing.com/th/id/R.2844c44919508670153c6ed4b689081b?rik=mL7Zt3r%2f0JeCtg&pid=ImgRaw&r=0"
},
]
productoAgregado = {
    title: "Carpeta",
    price: 375,
    thumbnail: "https://www.vivian.com.gt/tienda/wp-content/uploads/2020/08/CUADERNOS-COSIDOS-CON-LINEAS-450x450.png"
}

app.get('/api/productos', function(req, res, ){
    res.send(productos)
    
});

app.get('/api/productos/:id',(req, res) => {
    let id = req.params.id;
    let productoUnico = productos[id]
    console.log(productoUnico)
    res.send(productoUnico);
});

app.post('/api/productos', function(req, res, ){
    res.send(productoAgregado);
});

app.delete('/api/productos:id', function(req, res, ){

});

const server = app.listen(0, () =>{
    console.log(`Escuchando en puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`))