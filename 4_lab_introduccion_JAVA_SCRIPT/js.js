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