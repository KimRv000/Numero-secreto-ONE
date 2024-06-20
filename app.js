alert("Bienvenido(a) a Número Secreto")

const numSecreto = 3;
console.log(numSecreto);
let resultado = "";
let mensaje = "";


let numUsuario = 0;
console.log(numUsuario);

let intentos = 0;


while (resultado !== "Correcto!") {
    numUsuario = parseInt(prompt("Ingrese un número del 1 al 10"));
    if (numUsuario < 0 || numUsuario > 10) {
        alert("Número fuera de rango")
    }
    else if (numUsuario === numSecreto) {
        resultado = "Correcto!";
        alert(resultado)
        alert(`Adivinaste en ${intentos} intentos, el número secreto es ${numSecreto}`)
        break
    } else {
        if (numUsuario < numSecreto) {
            mensaje = "Incorrecto, escoge un número mayor"
            alert(mensaje)
        } else {
            mensaje = "Incorrecto, escoge un número menor"
            alert(mensaje)
        }
    }
    intentos += 1
}

