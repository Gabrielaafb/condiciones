onclick = function() {
        validarPassword();
    };

function validarPassword() {
    let mensaje = document.querySelector("#mensaje");
    let numero1 = document.querySelector('#opcion1').value;
    let numero2 = document.querySelector('#opcion2').value;
    let numero3 = document.querySelector('#opcion3').value;

    let clave = numero1 + numero2 + numero3;

    if (clave === '911') {
        mensaje.innerHTML = '¡La contraseña 1 es correcta!';
    } else if (clave === '714') {
        mensaje.innerHTML = '¡La contraseña 2 es correcta!';
    } else {
        mensaje.innerHTML = '¡La contraseña es incorrecta, intenta nuevamente!';
    }
}
