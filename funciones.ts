// function suma(a: number, b: number): number {
//     return a + b;
// }

// let resultado = suma(10, 20);
// console.log(`Resultado de la suma: ${resultado}`)

// function saludar(nombre: string, saludo: string = "Hola"): string {
//     return `${saludo}, ${nombre}!`;
// }

// console.log(saludar("Juan"));
// console.log(saludar("Ana", "Buenos días"));

// let persona: {nombre: string, edad: number, activo: boolean} = {
//     nombre: "Juan",
//     edad: 30,
//     activo: true
// };

// console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Activo: ${persona.activo}`);

// interface Usuario {
//     id: number;
//     nombre: string;
//     activo: boolean;
// }

// let usuario: Usuario = { id: 1, nombre: "Laura", activo: true };
// console.log(usuario);

// function imprimirUsuario(usuario: Usuario): void {
//     console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Activo: ${usuario.activo}`);
// }

// imprimirUsuario({id: 2, nombre: "Pedro", activo: false});

// interface Producto {
//     id: number;
//     nombre: string;
//     precio?: number;
// }

// let producto: Producto = {id: 101, nombre: "Café"};
// console.log(producto);

// let productoConPrecio: Producto = {id: 102, nombre: "Te americano", precio: 1.5};
// console.log(productoConPrecio);

interface Vehiculo {
    marca: string;
    modelo: string;
    año: number;
    kilometraje?: number;
}

let vehiculos: Vehiculo[] = [
    {marca: "Toyota", modelo: "Corolla", año: 2020},
    {marca: "Ford", modelo: "Mustang", año: 2015, kilometraje: 150000},
    {marca: "Chevrolet", modelo: "Spark", año: 2022}
]

function printDetails(vehiculos: Vehiculo[]) {
    vehiculos.forEach(vehiculo => {
        console.log(`Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Año: ${vehiculo.año}, Kilometraje: ${vehiculo.kilometraje ? vehiculo.kilometraje : "N/A"}`);
    });
}

printDetails(vehiculos);