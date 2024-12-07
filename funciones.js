// function suma(a: number, b: number): number {
//     return a + b;
// }
var vehiculos = [
    { marca: "Toyota", modelo: "Corolla", año: 2020 },
    { marca: "Ford", modelo: "Mustang", año: 2015, kilometraje: 150000 },
    { marca: "Chevrolet", modelo: "Spark", año: 2022 }
];
function printDetails(vehiculos) {
    vehiculos.forEach(function (vehiculo) {
        console.log("Marca: ".concat(vehiculo.marca, ", Modelo: ").concat(vehiculo.modelo, ", A\u00F1o: ").concat(vehiculo.año, ", Kilometraje: ").concat(vehiculo.kilometraje ? vehiculo.kilometraje : "N/A"));
    });
}
printDetails(vehiculos);
