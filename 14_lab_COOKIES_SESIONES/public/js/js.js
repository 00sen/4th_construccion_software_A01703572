//javascript


//iniciar audio -------------------------------------------

let boton = document.getElementById("boton_audio");
boton.innerHTML = "Click para iniciar musica epica";
boton.onclick = () => {
    let audio = document.getElementById("audio");
    audio.play();
}

//cambiar fuente ----------------------------------------

let boton_texto = document.getElementById("boton_texto");
boton_texto.innerHTML = "Click para cambiar font";

var fuente = document.body.style.fontFamily;
var fswitch = false;

boton_texto.onclick = () => {

    if(!fswitch){
        document.body.style.fontFamily = "Minecraft";
        fswitch = true;
    } else {
        document.body.style.fontFamily = fuente;
        fswitch = false;
    }    
}

//boton para redirigir a lista

let boton_genshin = document.getElementById("boton_genshin");
boton_genshin.innerHTML = "Click para ir a lista de personajes";

boton_genshin.onclick = () => {
    location.href = 'lista/lista';
}
