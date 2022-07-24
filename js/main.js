// array

function Persona(nombre, apellido, dni, fechaNacimiento){
    this.nombre = nombre
    this.apellido = apellido
    this.dni = dni
    this.fechaNacimiento = fechaNacimiento
}

const persona1 = new Persona('Pablo', 'Gomez', '38756940', '05-10-1994')
const persona2 = new Persona('Ivan', 'Arce', '38867345', '15-03-1994')
const persona3 = new Persona('Martin', 'Babos', '36098563', '25-07-1994')
const persona4 = new Persona('Martina', 'Tissera', '33048563', '26-07-1994')

alumnxs.push(persona1)
alumnxs.push(persona2)
alumnxs.push(persona3)
alumnxs.push('Martina')
alumnxs.push('Marta')
alumnxs.push(persona4)

console.log(alumnxs)
console.log('dni: '+ alumnxs[5].dni)


let personas = []
//typeof() - bucle 
for(let i=0; i < alumnxs.length; i++){
    console.log(typeof(alumnxs[i]))
    if(typeof(alumnxs[i]) == 'object' ){
        personas.push(alumnxs[i])
    }
};
