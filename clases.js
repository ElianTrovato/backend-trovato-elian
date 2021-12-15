class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `Hola ${this.nombre} ${this.apellido}`
    };
    addMascota(mascota1){
        this.mascotas.push(mascota1)
    };
    countMascota(){
        return (this.mascotas.length)
    };
    addBook(libros1, autor1){
        this.libros.push({libros1,autor1})
    };
    getBookNames(){
        let Array1 = []
        for (let i = 0; i < this.libros.length; i++) {
            return (this.libros[i].nombre)
        }
        return this.libros[i].nombre.push(Array1)
        
    };
}

let usuario1 = new Usuario("Elian", "Trovato", [{nombre: "Padre rico, Padre Pobre", autor: "Robert Kiyosaky"}], ["Conejo", "Perro"]);
let usuario2 = new Usuario("Nahuel", "Trovato", [{nombre: "Don Quijote", autor: "Miguel de Cervantes"}], ["Gato", "Perro"]);
let usuario3 = new Usuario("Lourdes", "Le Coche", [{nombre: "El Señor de los Anillos", autor: "J. R. R. Tolkien"}], ["Perro", "Gato", "Conejo", "Peces"]);

console.log(usuario1.getFullName());
console.log(usuario2.getFullName());
console.log(usuario3.getFullName());

console.log(usuario1.countMascota());
console.log(usuario2.countMascota());
console.log(usuario3.countMascota());

console.log(usuario1.getBookNames());
console.log(usuario2.getBookNames());
console.log(usuario3.getBookNames());

