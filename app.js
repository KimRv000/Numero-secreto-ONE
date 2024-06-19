alert("Bienvenido(a) a Número Secreto")

const numSecreto = 3;
console.log(numSecreto);

const numUsuario = parseInt(prompt("Ingrese un número del 1 al 10"));
console.log(numUsuario);

if (numUsuario === numSecreto){
    alert("Correcto!")
} else{
    alert("Incorrecto!")
}
