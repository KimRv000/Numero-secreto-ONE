alert("Bienvenido(a) a Número Secreto")

const numSecreto = Math.floor(Math.random()*10 +1); 
console.log(numSecreto);

let resultado = "";
let mensaje = "";


let numUsuario = 0;
console.log(numUsuario);

let intentos = 0;
const max_intentos = 5;


while (intentos < max_intentos) {
    numUsuario = parseInt(prompt(`Ingrese un número del 1 al 10. Tienes ${max_intentos - intentos} intentos`));
    intentos += 1 
    if (numUsuario <= 0 || numUsuario > 10) {
        alert("Número fuera de rango")
    }
    else if (numUsuario === numSecreto) {
        resultado = "Correcto!";
        alert(resultado)
        alert(`Adivinaste el número secreto ${numSecreto}, lo intentaste  ${intentos} ${intentos === 1 ? "vez" : "veces"} `)
        break
    } else if (intentos === max_intentos) {
        alert(`Sin intentos! Lo intentaste ${intentos} ${intentos === 1 ? "vez" : "veces"}`)
    } else {
        if (numUsuario < numSecreto) {
            mensaje = "Incorrecto, escoge un número mayor"
            alert(mensaje)
        } else {
            mensaje = "Incorrecto, escoge un número menor"
            alert(mensaje)
        }
    }

}

