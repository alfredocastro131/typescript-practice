// let nombre: string = "Ana"
// let edad: number = 30;
// let activo: boolean = true;
// let indefinido: undefined = undefined;
// let nulo: null = null;
// console.log(`Nombre: ${nombre}, Edad: ${edad}, Activo: ${activo}, Indefinido: ${indefinido}, Nulo: ${nulo}`);
// let numeros: number[] = [1,2,3,4];
// let palabras: string[] = ["hola", "mundo"];
// console.log("Numeros: ", numeros);
// console.log("Palabras: ", palabras);
// let usuario: [number, string, boolean] = [1, "Juan", true];
// console.log(`Usuario: ID=${usuario[0]}, Nombre=${usuario[1]}, Activo=${usuario[2]}`)
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
var colorFavorito = Color.Verde;
console.log("Color favorito: ".concat(Color[colorFavorito]));
var cualquierCosa = "Esto puede ser cualquier cosa";
console.log(cualquierCosa);
cualquierCosa = 123;
console.log(cualquierCosa);
