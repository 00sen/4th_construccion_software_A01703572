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


//funciones tradicionales

function numero_tacos(){
    return 5;
}

console.log(numero_tacos());


//funciones modernas / anonimas / flecha / arrow function

let cantidad_tacos = () => {return 5;}

console.log(cantidad_tacos());

let boton = document.getElementById("buenos dias");
boton.innerHTML = "Buenos dias!";
boton.onclick = () => alert("Buenos diaaas");



//arreglos
const arreglo = ["Elemento"];
arreglo.push("Otro elemento");
arreglo["dos"] = 2;
arreglo.length = 10;
arreglo[20] = "Fin del arreglo";

console.log(arreglo);

for (let elemento in arreglo) {
    console.log(elemento);
}

for (let valor of arreglo) {
    console.log(valor);
}

//