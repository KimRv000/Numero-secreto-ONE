alert("Bienvenido(a) a Número Secreto")

let max_rango = 10;
let max_rangoUsuario = parseInt((prompt("Escoge un rango máximo, de lo contrario será 10")));
console.log("rangoUsuario  " + max_rangoUsuario)

if (isNaN(max_rangoUsuario)) {
    max_rangoUsuario = 10;
    console.log("El usuario no insertó nada")
} else {
    max_rango = max_rangoUsuario
}
console.log("Rango máximo  " + max_rango);

const numSecreto = Math.floor(Math.random() * max_rango + 1); 
console.log(numSecreto);

let resultado = "";
let mensaje = "";

let numUsuario = 0;

let intentos = 0;
const max_intentos = 5;

while (intentos < max_intentos) {
    numUsuario = parseInt(prompt(`Ingrese un número del 1 al ${max_rango}. Tienes ${max_intentos - intentos} intentos`)); 
    intentos += 1
    if (numUsuario <= 0 || numUsuario > max_rango) { 
        alert("Número fuera de rango")
    }
    else if (numUsuario === numSecreto) {
        resultado = "Correcto!";
        alert(resultado)
        alert(`Adivinaste el número secreto ${numSecreto}, lo intentaste  ${intentos} ${intentos === 1 ? "vez" : "veces"} `)
        break
    } else if (intentos === max_intentos) {
        alert(`Sin intentos! Lo intentaste ${intentos} ${intentos === 1 ? "vez" : "veces"}`)
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

}

