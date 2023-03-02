const fileSystem = require('fs');
const http = require('http');


const data = fileSystem.readFileSync('datos.txt', 'utf8');
const numeros_string = data.split('\n');
const numeros = [];
for(let numero of numeros_string){
    numeros.push(Number(numero));
}

function sacar_promedio(arreglo){
    let promedio = 0;
    for(let i = 0; i<arreglo.length; i++){
        promedio = promedio + arreglo[i];
    }
    promedio = promedio / arreglo.length;
    return promedio;
}

let intro = 'Datos del archivo datos.txt<br>';
let primer_texto = "";

for (let i = 0; i < numeros_string.length; i++){
    primer_texto = primer_texto + numeros_string[i];
    primer_texto = primer_texto + " | ";
}


let promedio = sacar_promedio(numeros);
let promedio_texto = "<br><br> Promedio: ";
promedio_texto += promedio;

let string_para_archivo = "'texto de prueba'";

function escribir_archivo(texto){
    fileSystem.writeFileSync('texto.txt', texto);
}

escribir_archivo(string_para_archivo);

let num = Math.floor(Math.random() * 500);

function EsPrimo(esto){
    if(esto == 0 || esto == 1 || esto == 4) return false;
    for(let i = 2; i < esto / 2; i++){
        if(esto % i == 0)return false;
    }
    return true;
}

let bool = EsPrimo(num);

let comprobador = "";
if(bool == false){
    comprobador = " NO es primo.";
} else{
    comprobador = " SI es primo."
}
let resultado3 = "El numero " + num
+ comprobador;


    const server = http.createServer( (request, response) => {
        console.log(request.url);

        if(request.url === "/") {
            response.setHeader('Content-Type', 'text/html');
            response.write(intro);
            response.write(primer_texto);
            response.write(promedio_texto + "<br><br>");
            return response.end();
        } else if (request.url === "/ejercicio2" && request.method == "GET") {
            response.write("Texto para escribir en el archivo 'texto.txt' : <br><br>");
            response.write(string_para_archivo);
            return response.end();
        } else if (request.url === "/ejercicio3" && request.method == ) {
            response.write("<br><br> El problema opcional es saber<br>si un numero es primo o no.");
            response.write("<br><br>Numero prueba aleatorio: "+ num + "<br><br>");
            response.write(resultado3+"<br><br>");
            return response.end();
        } else {
            response.statusCode = 404;
            response.write("No encontramos la pagina que busca :c");
            response.end();
        }
    });
    
    server.listen(3000);



