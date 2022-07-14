// producto y la cantidad de cuotas. Ambas inicializadas en 0.
let sumaCuotas = 0;
let cantidadDeCuotas = 0;

// Inicializamos la variable nota donde recibiremos las notas ingresadas por prompt.
let cuota;

// Utilizamos do while ya que nos facilita el pedido de la primera entrada.
// Recordemos que el do while se ejecuta al menos una vez.
do {
 
  cuota = prompt('Ingrese el numero de cuotas con que quiere pagar. Para finalizar de ingresar las cuotas ingrese "FIN"');
  
  const cuotaParseada = parseInt(cuota);
  // Solo tenemos en cuenta las cuota del 1 al 10, ignorando cualquier valor invalido.
  if (cuotaParseada >= 1 && cuotaParseada <= 10) {
  
    sumaCuotas = sumaCuotas + cuotaParseada;
 
    cantidadDeCuotas++;
  }
} while (cuota != 'FIN');


const promedio = sumacuota / cantidadDeCuotas;


let textoDescuento;


if (promedio < 3) {
  textoDescuento = 'sin interes';
} else if (promedio >= 6) {
  textoDescuento = '10 % de interes';
} else {
  textoDescuento = '20 % de interes';
}


alert('El promedio es: ' + promedio + '(' + textoDescuento + ')');