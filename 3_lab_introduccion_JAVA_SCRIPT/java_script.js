var comida = "chilaquiles";

let cena = "tacos";

const precio = 70;

console.log("hola");
console.info("Valor de la comida: " + comida);

console.warn("El precio no se puede modificar");
console.error("El precio no se puede modificar");

console.assert(1 === 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);

// alcance de las variables

for(let i = 1; i <= 10; i++){
    console.log(i);
}

//Aqui ocurre un erorr porque la variable i ya murio al terminar el ciclo
//console.log(i);


alert("hola!");

let nombre = prompt("Como te llamas?");

console.log("Hola " + nombre);

let is_hungry = confirm("Tienes hambre?");

console.log(is_hungry);