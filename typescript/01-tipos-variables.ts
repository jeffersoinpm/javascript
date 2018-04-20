//var nombre='Jefferson';
let segundoNombre: any = 'Vicente';//mala practica decirle dos veces
const cedula = '1003627302';


segundoNombre = 'Jose';
//cedula='21231'; da error de read only
const URL_PO = 'http://www.epn.edu.ec';
segundoNombre = 123;//Duck typing

////////
let nombre: String;
let edad: Number;
let fecha: Date = new Date();
let casado: boolean = false;

//let mascotas:object={};
class Usuario {
    public nombre: String;
    private edad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String) {
        this.nombre = nombre;
        this.edad = edad;
        this.mCedula = cedula;
        this.imprimirenConsola();
    }

    public imprimirenConsola() {

        console.log('El usuario se  llama:${this.nombre}');
    }

}

let usuario=new Usuario('Jefferson',24,'10003627302');

console.log(usuario);

interface UsuariDos{
    mNombre:String;
    mEdad:Number;
    mCedula:String;
    imprimirEnConsola(nombre:String):void;
}
let usuarioCuatro:UsuariDos;
class Usuario4 {
    constructor(public nombre: String,
                private edad: Number,
                protected mCedula: String){
    }
}

