console.log("hola mundo desde node");
console.info("Este script se está ejecutando desde una computadora y no desde el navegador");
console.warn("document, alert, confirm y prompt, no existen en el entorno de ejecución de node");
console.error("Así se ve un error");

//fs es el módulo para trabajar con el sistema de archivos
const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde node');
console.log("Terminamos de escribir el archivo");


const arreglo = [7000, 5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {console.log(item);}, item);
} 

console.log("Este log está después de imprimir el arreglo");

setTimeout(() => {console.log("Ya te hackié");}, 12000);

//http es el módulo que permite crear un servidor que pueda atender peticiones http
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Chilaquiles</h1>");
    response.write("Hola desde node!");
    response.end();
});

server.listen(3000);