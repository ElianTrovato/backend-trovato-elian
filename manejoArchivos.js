const fs = require('fs');

class Contenedor{
    constructor(productos){
        this.productos = productos
    }

    getAllSync() {
        console.log("-----FUNCION getAllSync-----");
        let result = fs.readFileSync("./productos.txt", "utf-8", (error, contenido) => {
            if (error) {
                console.log("error");
            } else {
                return contenido;
            }
        })
        return result;
    }

    getAll() {
        console.log("-----FUNCION getAll-----");
        let result = fs.readFile("./productos.txt", "utf-8", (error, contenido) => {
            if (error) {
                console.log("error");
            } else {
                console.log(contenido);
                return JSON.parse(contenido);
            }
        })
        return result;
    }

   save(nuevoProducto) {
        console.log("-----FUNCION save-----");
        let contenidoArchivo = JSON.parse(this.getAllSync());
        let nuevoId = 0;
        let idMaximo = 0;

        if (contenidoArchivo == ""){
            nuevoProducto["id"] = nuevoId;
        }
        else {
            //busco id maximo
            contenidoArchivo.forEach(producto => {
                if (idMaximo < producto.id){
                    idMaximo = producto.id;
                }
            });

            nuevoId = idMaximo + 1;
            nuevoProducto["id"] = nuevoId;   
        }

        contenidoArchivo.push(nuevoProducto);
            
        console.log(contenidoArchivo);
        fs.writeFile("./productos.txt", JSON.stringify(contenidoArchivo), error =>{
            if(error){
                console.log("Ocurrió un error al guardar el archivo.");
            } else {
                console.log("Guardado. Id Nro:" + nuevoId);
                return nuevoId;
            }
        })  
    }

    getById(posicion) {
        let contenidoArchivo = JSON.parse(this.getAllSync());
        
        let result = contenidoArchivo[posicion-1];

        if (result != undefined){
            console.log(result);
            return result;
        }
        else{
            console.log('No se encontró producto con ese Id');
            return null;
        }        
    }

    deleteById(id) {    
        let contenidoArchivo = JSON.parse(this.getAllSync());
        let encontrado = 0;

        contenidoArchivo.forEach(producto => {
            if (producto.id == id){
                encontrado = 1;
                contenidoArchivo.splice(contenidoArchivo.indexOf(producto), 1);
            }
        });

        if (encontrado == 1){
            fs.writeFile("./productos.txt", JSON.stringify(contenidoArchivo), error =>{
                if(error){
                    console.log("Ocurrió un error al eliminar el producto.");
                } else {
                    console.log("Producto eliminado");
                }
            })
        }
        else{
            console.log("No se encontró producto el archivo");
        }
    }

    deleteAll() {    
        fs.writeFile("./productos.txt", JSON.stringify([]), error =>{
            if(error){
                console.log("No se cargó el archivo");
            } else {
                //console.log("Guardado. Posición Nro:" + nuevaPosicion);
                //return nuevaPosicion;
            }
        })   
    }
}

const contents = new Contenedor (
                {
                    producto : `lapiz de prueba`,
                    precio : 27
                }
)

contents.save(contents.productos);
contents.getAll();
contents.getById(1);
contents.deleteById(7);
contents.deleteAll();