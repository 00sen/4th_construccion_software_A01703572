//boton para redirigir a agregar personaje

let boton_agregar_personaje = document.getElementById("agregar_personaje");
boton_agregar_personaje.innerHTML = "Agregar personaje";

boton_agregar_personaje.onclick = () => {
    location.href = 'nuevo';
}
