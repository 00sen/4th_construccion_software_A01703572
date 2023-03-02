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

//comprobar contrasenias ---------------------------------------------

let boton_contrasenia = document.getElementById("boton_password");
boton_contrasenia.innerHTML = "Click para comprobar";

boton_contrasenia.onclick = () => {
    let input1 = document.getElementById("psw1");
    let input2 = document.getElementById("psw2");
    console.log(input1.value);
    console.log(input2.value);
    if(input1.value != input2.value){
        alert("contrasenias no son iguales");
    } else {
        alert("contrasenia valida");
    }
}


