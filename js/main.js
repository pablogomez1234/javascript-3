let formulario = document.querySelector('#formulario')
let mensajeError = document.querySelector('.errorFormulario')
let contrasena = document.querySelector('input[type="password"]')

formulario.addEventListener('submit', validar)

function validar(e){
    e.preventDefault()
    console.log(e)
    let formArray = e.target
    console.log(e)

    let usuario = formArray[0]
    let contrasena = formArray[1]

   

    if(usuario.value.length < 5){
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! El usuario debe tener mas de 5 caracteres!!'
        mensajeError.style.color = 'red'
    }else{
        mensajeError.style.display = 'none'
    }

    
    if(!contrasena.value){
       
        mensajeError.style.display = 'block'
        mensajeError.innerText = '* Error! la contraseña no puede estar vacia'
        mensajeError.style.color = 'red'
    }
    
}

