## <1.0.0> - <19-06-24>

### Sprint learnings

- Variables
- Condicionales
- Prompts
- Alerts
- Tipos de datos


### Added

E Usuario ingresa un número del 1 al 10 mediante un prompt. Dicho número será evaluado con un número previamente asignado como número secreto, de ser iguales devolverá un alert anunciando que es correcto, de lo contrario el alert indicará que el número es incorrecto.

- Alert de Bienvenida.
- Constante del número Secreto.
- Variable para número de Usuario convertido a número con parseInt().
- Condición que evalua si el número de Usuario es igual al número Secreto .
- Alerts que indican si el resultado es correcto o incorrecto.

### Changed

- Título de la página (HTML)
- Textos mostrados en la interfaz (HTML)

## <1.2.0> - <20-06-24>

### Sprint learnings

- Loops
- Break
- Template Strings

### Added

El usuario tiene varios turnos hasta adivinar el número secreto,en cada intento se evalúa si el número del usuario en menor o mayos al número secreto. El usuario conoce el número de intentos que hizo.

- Loop while que contiene la lógica principal del juego y que termina el juego hasta encontrar la respuesta correcta.
- Condición que evalua que el número del usuario esté dentro del rango (1-10) permitido.
- Condicionales que evalúan si el número del Usuario es menor o mayor al número secreto.
- Alerts que indica al usuario si debe escoger un número mayor o menor al que eligió previamente.
- Variables para los mensajes de alert.
- Contador de intentos.
- Alert que indicalos intentos y el número secreto adivinado por el usuario, utilizando template strings.


### Changed

- Condiciones en la lógica.
- Mensajes de los Alerts.