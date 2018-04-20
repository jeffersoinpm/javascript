var nombre = "24";
var edad = 24
var fecha = new Date();
var casado=true;
var casa=undefined;
var carro=null;
var uno=1;
var cero=0;
var menos1=-1;
var arreglo=[];
console.log(casa?"verdadero":"Falso");
console.log(carro?"V":"F");
console.log(uno?"V":"F");
console.log(cero?"V":"F");
console.log(menos1?"V":"F");
console.log(arreglo?"V":"F");

console.log(sumarDosNumeros(7,4));
var usuario={
    "nombre":"Jefferson",
    apellido:"Paredes",
    cedula:'1003627302',
    imprimirEnConsola:sumarDosNumeros
    };

var arregla= [1,2,3,false, null];
console.log(arregla);

console.log(usuario.imprimirEnConsola(2,100));
function sumarDosNumeros(numeroUno,numeroDos){
//    return numeroDos+numeroUno;
}
console.log(sumarDosNumeros(1,2
))
function sumarDosNumerosV2(numeroUno,numeroDos){
    return numeroDos+numeroUno;
}

console.log("Usuario",sumarDosNumerosV2());
if (nombre === edad) {
    console.log("verdadero");
} else {
    console.log("falso");
}
console.log(casado)