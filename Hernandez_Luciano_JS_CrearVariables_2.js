/* 
La historia: 
Queremos una aplicación que una vez que mida la altura de un niño, 
pueda mostrar si el niño es lo suficientemente alto como para subirse a la montaña rusa. 
Nos encargaron la construcción de la función que mostrará el mensaje correcto al niño.

Paso 1: Revisa y edita tus variables según sea necesario
¿Son precisas tus variables? Actualízalas si es necesario.

Paso 2: Crea un condicional donde:
Si la altura de la persona es mayor a 52, el console.log debe decir "¡Súbete, chico!". 
Si no, console.log debe mostrar "Lo siento, chico. Tal vez el próximo año”.

SUGERENCIA: 
Si te atrasas, ¡está bien! Sigue jugando con eso. Utiliza las páginas de este curso para ayudarte. 

Característica Stretch 1:
Ajusta la sentencia condicional para requerir tanto la altura como la edad. 

Característica Stretch 2:
Ajusta la sentencia condicional para exigir que se cumpla el requisito de altura o el requisito de edad.  

*/
/* Desafío de código: Súbete a ese juego */

// Variable para almacenar la altura de la persona en metros
let altura = 53; // Debe ser mayor o igual a 1 ( Pueden ser decimales )

// Variable para almacenar la edad de la persona en años
let edad = 11; // Debe ser mayor a 10 ( Debe ser un entero )

// Si la altura de la persona es mayor a 52.
if (altura > 52) {
    console.log("¡Súbete, chico!");
} else {
    console.log("Lo siento, chico. Tal vez el próximo año");
}

// Característica Stretch 1: Requerir tanto la altura como la edad
if (altura > 52 && edad > 10) {
  console.log("¡Súbete, chico!");
} else {
  console.log("Lo siento, chico. Tal vez el próximo año");
}

// Característica Stretch 2: Exigir que se cumpla el requisito de altura o el requisito de edad
if (altura > 1 || edad > 10) {
  console.log("¡Súbete, chico!");
} else {
  console.log("Lo siento, chico. Tal vez el próximo año");
}

// By: Luciano Emiliano Hernandez 