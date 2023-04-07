# Calculadora basica con HTML CSS y Javascript

Este es un programa básico de calculadora que utiliza HTML y JavaScript. El código HTML define la interfaz de usuario y el JavaScript maneja las interacciones del usuario. 

La calculadora tiene 10 botones numéricos (0-9), cuatro botones de operaciones matemáticas (+, -, x, /), un botón de igual (=), un botón de reset (C) y un botón de borrado. La pantalla muestra los números que se están escribiendo, los operadores matemáticos y el resultado de la operación.

El código comienza definiendo variables para cada botón de la calculadora y para la pantalla de la calculadora. Luego, se definen varias funciones que realizan las operaciones matemáticas básicas: suma, resta, multiplicación y división.

La función "comprobación" se utiliza para verificar si el usuario está ingresando un número para el primer operando o el segundo operando. Dependiendo de la variable "numOneAdd" o "numTwoAdd", la función agrega el número a "numeros1" o "numeros2" y actualiza la pantalla correspondiente.

La función "setOperador" se utiliza para establecer el operador matemático que se utilizará en la operación. Si el usuario no ha ingresado ningún número para el primer operando, el programa ignora el botón del operador. Si el usuario ha ingresado un número para el primer operando, la función cambia la variable "numOneAdd" a "false" y cambia la variable "numTwoAdd" a "true". Luego, actualiza la pantalla para mostrar el operador matemático y el segundo operando.

La función "operacion" se utiliza para realizar la operación matemática. Esta función toma dos números como entrada y utiliza la función correspondiente para realizar la operación matemática. Luego, actualiza la pantalla para mostrar el resultado.

Las funciones de botón utilizan las funciones anteriores para interactuar con el usuario. Cuando se hace clic en un botón numérico, se llama a la función "comprobación" para agregar el número a "numeros1" o "numeros2". Cuando se hace clic en un botón de operación matemática, se llama a la función "setOperador" para establecer el operador matemático. Cuando se hace clic en el botón de igual, se llama a la función "operacion" para realizar la operación matemática. Cuando se hace clic en el botón de reset o el botón de borrado, se llama a la función correspondiente para borrar la pantalla o reiniciar el programa.