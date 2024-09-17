let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,*#@&$+=/÷¿?[]{}\|!()';

function generar(){

let numeroDigitado = parseInt (cantidad.value);

    if(cantidad < 8){
      alert("La cantidad de caracteres debe ser mayor a 8"); 
    }

    let password = '';
for(let i=0; i< numeroDigitado; i++){

let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

console.log (caracterAleatorio);

password+=caracterAleatorio;

}
console.log('password generada;' + password);
contrasena.value = password;

validar(password);

}

function LaContrasenaesSegura(contrasena) {
    const tieneMayusculas = /[A-Z]/.test(contrasena);
    const tieneMinusculas = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneCaracterEspecial = /[.,*#@&$+=/÷¿?[]{}\|!()]/.test(contrasena);

    return {
EsSegura: tieneMayusculas && tieneMinusculas && tieneNumero && tieneCaracterEspecial,
tieneMayusculas,
tieneMinusculas,
tieneNumero,
tieneCaracterEspecial
    };
}

function validar(password){
const resultadoValidacion = LaContrasenaesSegura (password);
if (resultadoValidacion.esSegura)
    alert ("La contraseña es segura.");

 }
 
    let mensaje = "La contraseña generada no es segura. Necesita";
    if (resultadoValidacion.tieneMayusculas) {
        mensaje += "\n- Al menos una letra mayúscula.";
    }
    if (resultadoValidacion.tieneMinusculas) {
        mensaje += "\n- Al menos una letra minúscula.";
    }
    if (resultadoValidacion.tieneNumeros) {
        mensaje += "\n- Al menos un número.";
    }
    if (resultadoValidacion.tieneCaracteresEspeciales) {
        mensaje += "\n- Al menos un carácter especial.";
    }
    alert(mensaje);




function borrar() {
    contrasena.value = ''; 
    cantidad.value = '';   
}


boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', borrar);
