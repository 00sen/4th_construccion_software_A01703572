//java script lab 3

let boton = document.getElementById("boton_audio");
boton.innerHTML = "Click para iniciar musica epica";
boton.onclick = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

let boton_2 = document.getElementById("boton_1");
boton_2.innerHTML = "Click para iniciar ejercicio 1";
boton_2.onclick = () => {
    let num = prompt("Ingrese numero para prueba");
    num = parseInt(num);
    console.log(num);
}