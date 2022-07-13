// let numeroMayor = 10;
// for (let i = 1; i <= 5; i++) {
//     console.log('Ingrese su calificacion',)
//     const numeroParseado = parseInt (numero);
//     if (numeroParseado > numeroMayor ) {
//         numeroMayor = numeroParseado;
//     }
// }

// alert ('El numero mayor es:' + numeroMayor);
let sumaNotas = 0;
let cantidadDeNotas = 0;

let nota;


do {
    const nota = prompt ('Ingrese nota alumno');
    const notaParseada = parseInt (nota);
    if (notaParseada >= 1 && notaParseada <= 10){
        sumaNotas = sumaNotas + notaParseada;
        cantidadDeNotas++;
    }
} while (nota != 'FIN');


const promedio = sumaNotas / cantidadDeNotas;


let textoAprobado
if (promedio < 4){
    textoAprobado = 'desaprobado';

} else if (promedio >= 9){
    textoAprobado = 'aprobado con honores';

}else {
    textoAprobado ='aprobado'

}