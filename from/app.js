const btn = document.getElementById('btn')
const tarjeta = document.getElementById('tarjeta')
const cvc = document.getElementById('cvc')
const monto = document.getElementById('monto')
const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const cuidad = document.getElementById('cuidad')
const comuna = document.getElementById('comuna')
const codigoPostal = document.getElementById('codigoPostal')
const mensaje = document.getElementById('mensaje')

btn.addEventListener( 'click', () => {
    // Expresiones regulares
    const minNumbersTarjeta = /(\d.*?){16}/;
    const minNumbersCVC = /(\d.*?){3,}/;
    const textRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/; // Expresión regular para letras y espacios (incluyendo caracteres con tilde)
    const noLeadingSpaces = /^[^\s][a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/; // Expresión regular para no espacios al inicio


    if (tarjeta.value == '' || cvc.value == '' || monto.value == '' || nombre == '' || apellido.value == '' || cuidad.value == ''|| comuna.value == '' || codigoPostal.value == '') {
        alert('Por favor ingrese todos los datos solicitados')
    } else if (monto.value < 0) {
        alert('Por favor ingrese un monto valido')
    }else if (!minNumbersTarjeta.test(tarjeta.value )) {
        alert('por favor ingrese correctamente el número de tarjeta')
    }else if (!minNumbersCVC.test(cvc.value)) {
        alert('por favor ingrese correctamente el número CVC de la tarjeta')
    }else if (!noLeadingSpaces.test(nombre.value) || !textRegex.test (nombre.value)) {
        alert('Debes ingresar tu nombre sin espacios adelante y sin caracteres especiales')
    } else if (!noLeadingSpaces.test(apellido.value) || !textRegex.test(apellido.value)) {
        alert('Debes ingresar tu apellido sin espacios adelante y sin caracteres especiales')
    } else {
        console.log(tarjeta.value)
        console.log(cvc.value)
        console.log(monto.value)
        console.log(nombre.value)
        console.log(apellido.value)
        console.log(cuidad.value)
        console.log(comuna.value)
        console.log(codigoPostal.value)
        console.log(mensaje.value)

        tarjeta.value = ''
        cvc.value = ''
        monto.value = ''
        nombre.value = ''
        apellido.value = ''
        cuidad.value = ''
        comuna.value = ''
        codigoPostal.value = ''
        mensaje.value = ''
    }
})

