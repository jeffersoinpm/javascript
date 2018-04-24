let arregloNumeros = [1, 2, 3, 4];
let arregloDeudas = [255.1, 2666, 6255.5];
//let arregloUsuarios: Array<UsuarioArreglo> =[
let arregloUsuarios: UsuarioArreglo [] = [
    {
        nombre: 'Jose',
        edad: 28
    },
    {
        nombre: 'Jeff',
        edad: 10
    },
    {
        nombre: 'Mayra',
        edad: 70
    },
    {
        nombre: 'Carlos',
        edad: 32
    },
    {
        nombre: 'Miguel',
        edad: 25
    },

];
let sumarDosNumeros = (numeroUno: number, numeroDos: number) => {  ///fat arrow function
    return numeroDos + numeroUno;
};
let totalEdades = arregloDeNumeros => {

};

let facultades = a => ['Facultad1', 'Facultad2'];

let facultadesDos = function (a, b?) {
    return ['Facultad1', 'Facultad2'];
};

facultadesDos(2);
//operador
let a = 0;
let resultdao = arregloNumeros.forEach(
    (valor) => {
        console.log('valor:', valor);
        a += valor;
    }
);
console.log(a);

let resultadoDeLaSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo) => {
        return totalAcumulado - valorArreglo;
    }, 20
);
console.log('resultado de la suma:', resultadoDeLaSuma);

let resultadoDeLaSumaDos = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo) => {
        return totalAcumulado - valorArreglo;
    }, 20
);
console.log('resultado de la suma:', resultadoDeLaSuma);


let resultadoDeLasEdades = arregloUsuarios.reduce(
    (totalAcumulado, valorArreglo: UsuarioArreglo) => {
        return totalAcumulado + valorArreglo.edad;
    }, 20
);
console.log('resultado de la suma1:', resultadoDeLasEdades);

let usuariosConCincoAniosMenos = arregloUsuarios.map(
    (usuario: UsuarioArreglo) => {
        usuario.edad = usuario.edad - 5;
        usuario.deuda = calculaDeudadeUsuario(usuario.edad);
        return usuario;
    }
);
console.log(usuariosConCincoAniosMenos);


function calculaDeudadeUsuario(edad: number) {
    return arregloDeudas.reduce((totalAcumulado, deuda: number) => {
        return totalAcumulado + ((edad / 100)) * deuda
    });
}

interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
}