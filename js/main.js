//pedirle al usuario que ingrese numeros para ver que destino le gusta . si ingres: 1 --> cordoba - ingresa 2: prenda:La rioja - ingresa: 3 --> Buenos Aires. ingrese: 4 --> cierre el programa. 


let opc = parseInt(prompt('Ingrese 1 para elegir Córdoba \n Ingrese 2 para elegir La Rioja \n Ingrese 3 para elegir Buenos Aires\n Ingrese 4 para apagar el programa\n'))

do{
    switch(opc){
        case 1:
            console.log('elegi Córdoba')
            opc = parseInt(prompt('Ingrese 1 para elegir Córdoba \n Ingrese 2 para elegir La Rioja \n Ingrese 3 para elegir Buenos Aires\n Ingrese 4 para apagar el programa\n'))
            break;
        case 2: 
            console.log('elegi La Rioja')
            opc = parseInt(prompt('Ingrese 1 para elegir Córdoba \n Ingrese 2 para elegir La Rioja \n Ingrese 3 para elegir Buenos Aires\n Ingrese 4 para apagar el programa\n'))
            break;
        case 3: 
            console.log('elegi Buenos Aires')
            opc = parseInt(prompt('Ingrese 1 para elegir Córdoba \n Ingrese 2 para elegir La Rioja \n Ingrese 3 para elegir Buenos Aires\n Ingrese 4 para apagar el programa\n'))
            break;
        case 4:
            console.log('chau')
            break;
        default:
            console.log('Ingresaste CUALQUIER COSA, lee bien!')
            opc = parseInt(prompt('Ingrese 1 para elegir Córdoba \n Ingrese 2 para elegir La Rioja \n Ingrese 3 para elegir Buenos Aires\n Ingrese 4 para apagar el programa\n'))
            break

    }
}while(opc != 4)