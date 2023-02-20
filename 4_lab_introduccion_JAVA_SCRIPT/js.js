//java script lab 3

let boton = document.getElementById("boton_audio");
boton.innerHTML = "Click para iniciar musica epica";
boton.onclick = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

//actividad 1 ----------------------------------------

let boton_2 = document.getElementById("boton_2");
boton_2.innerHTML = "Click para iniciar ejercicio 1";
boton_2.onclick = () => {
    let texto = document.getElementById("resultado1");
    let num = prompt("Ingrese numero para prueba");
    let num1 = parseInt(num);
    if(num1 <= 0){
        alert("Numero debe ser igual o mayor a 1");
    } else if(num1 == 1){
        texto.innerHTML = "1<br>1<br>1";
    } else {
        let tabla = "<table>";
        for(let i = 1; i<= 3; i++){
            tabla = tabla + "<tr>";
            if(i == 1){
                for(let i = 1; i <=num1; i++){
                    tabla = tabla + "<th>";
                    tabla = tabla + i;
                    tabla = tabla + "</th>";
                }
            } else if(i == 2){
                for(let i = 1; i <=num1; i++){
                    tabla = tabla + "<th>";
                    tabla = tabla + i * i;
                    tabla = tabla + "</th>";
                }
            } else if(i == 3){
                for(let i = 1; i <=num1; i++){
                    tabla = tabla + "<th>";
                    tabla = tabla + i*i*i;
                    tabla = tabla + "</th>";
                }
            }
            tabla = tabla + "</tr>";
        }
        tabla = tabla + "</table>";
        texto.innerHTML = tabla;
    }
}

//actividad 2 ---------------------------------------------

let boton_3 = document.getElementById("boton_3");
boton_3.innerHTML = "Click para iniciar ejercicio 2";
boton_3.onclick = () => {
    let texto = document.getElementById("resultado2");
    let tiempo = document.getElementById("tiempo");
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    let resultado = "";
    let tiempo_1 = Date.now();
    resultado = prompt("Ingrese resultado de " + 
        num1 +" + "+ num2);
    let tiempo_2 = Date.now();
    let tiempo_3 = (tiempo_2 - tiempo_1)/1000;
    if((num1 + num2) != resultado){
        texto.innerHTML = "Respuesta incorrecta, la respuesta correcta es "
            + (num1 + num2); 
    } else if((num1+num2)== resultado){
        texto.innerHTML = "Respuesta correcta";
    }
    tiempo.innerHTML = "Te tardaste " + tiempo_3 + 
        " segundos en responder";
}


//ejercicio 3 --------------------------------------------------------
let boton_4 = document.getElementById("boton_4");
boton_4.innerHTML = "Click para iniciar ejercicio 3";

function ingresar_numeros(){

    let cantidad = 0;
    let texto = "Ingrese cantidad de numeros deseada";
    while(cantidad <= 0){
        cantidad = prompt(texto);
        if(cantidad <= 0){
            texto = "Cantidad debe ser mayor a 0";
        }
    }

    let num = 0;
    const arreglo_temporal = [];
    for(let i = 0; i<cantidad; i++){
        num = prompt("Ingrese numero " + (i+1));
        arreglo_temporal[i] = num;
    }
    return arreglo_temporal;
}

function contador(numeros){
    const contadores = [0,0,0];
    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i] < 0){
            contadores[0] += 1;
        } else if(numeros[i] == 0){
            contadores[1] += 1;
        } else if(numeros[i] > 0){
            contadores[2] += 1;
        }
    }
    return contadores;
}

boton_4.onclick = () => {
    const arreglo = contador(ingresar_numeros());
    let texto = document.getElementById("resultado3");
    texto.innerHTML = "La cantidad de numeros negativos es: " + 
    arreglo[0] + "<br>La cantidad de ceros es: " + arreglo[1] +
    "<br>La cantidad de numeros positivos es: " + arreglo[2];
}

//ejercicio 4 -----------------------------------------------------

let boton_5 = document.getElementById("boton_5");
boton_5.innerHTML = "Click para iniciar ejercicio 4";
let resultado4 = document.getElementById("resultado4");

function Promedios(arreglo_de_arreglos){
    const arreglo_promedios = [];
    let suma = 0;
    for(let i = 0; i < arreglo_de_arreglos.length; i++){

        suma = 0;
        for(let f = 0; f < arreglo_de_arreglos[i].length; f++){
            suma = suma + arreglo_de_arreglos[i][f];
        }
        arreglo_promedios[i] = suma / arreglo_de_arreglos[i].length;
    }
    return arreglo_promedios;
}

boton_5.onclick = () => {

    const arreglo = [];
    let cantidad = prompt("Ingrese cantidad de arreglos");

    let lista_arreglos_temporal = "";
    let lista_arreglos = document.getElementById("lista_arreglos");
    lista_arreglos.innerHTML = "Arreglos por usar: (numeros aleatorios):<br>";
    
    for(let i = 0; i < cantidad; i++){
        const arreglo_2 = [];
        let longitud = Math.floor(Math.random() * 5) +1;
        for(let f = 0; f < longitud; f++){
            arreglo_2[f] = Math.floor(Math.random() * 50);
        }
        arreglo[i] = arreglo_2;
        lista_arreglos_temporal = lista_arreglos_temporal
         + arreglo_2 + "<br>";
    }
    
    lista_arreglos.innerHTML = lista_arreglos.innerHTML
     + lista_arreglos_temporal;

    resultado4.innerHTML = "Promedios:<br>" + Promedios(arreglo);
}


