const btn = document.getElementById('btn')
let input = document.getElementById('input')


const enviar = ( ) => {
    const mensaje = input.value
    console.log(mensaje)
    input.value = ''
}

btn.addEventListener('click', enviar)

btn.addEventListener('keydown', enviar)