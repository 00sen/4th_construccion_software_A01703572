//java script lab 3

let boton = document.getElementById("boton_audio");
boton.innerHTML = "Click para iniciar musica epica";
boton.onclick = () => {
    let audio = document.getElementById("audio");
    audio.play();
}