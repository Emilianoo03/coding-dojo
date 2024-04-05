/* Desafío de código: Parámetros */

/* 
Utilizando lo que has aprendido sobre funciones y parámetros, crea una función que, dado un nombre, 
diga "buenos días" a esa persona por su nombre.

Por ejemplo, la llamada de función greet("Anakin") registraría en la consola, ¡Buen día, Anakin!

Nivel 2: 
Personaliza aún más tu función incluyendo la hora del día en tu saludo. 
Pista: ¿las funciones solo pueden tomar un parámetro?

Nivel 3: 
Tú y el Conde Dooku tienen problemas. Personaliza aún más tu código para que diga "¡Voy por ti, Dooku!" 
si tu función se llama con "Count Dooku".

1. Crea una función que, dado un nombre, diga "buenos días" a esa persona por su nombre.
2. Personaliza aún más tu función incluyendo la hora del día en tu saludo.
3. Personaliza aún más tu código para que diga "¡Voy por ti, Dooku!" si tu función se llama con "Count Dooku".
*/

function saludo(nombre, hora) {
    // Personaliza el saludo para el Conde Dooku
    if (nombre === "Count Dooku") {
        console.log("¡Voy por ti, Dooku!");
    } else {
        // Personaliza el saludo en función de la hora del día
        if (hora < 12) {
            console.log("¡Buenos días, " + nombre + "!");
        } else if (hora < 18) {
            console.log("¡Buenas tardes, " + nombre + "!");
        } else {
            console.log("¡Buenas noches, " + nombre + "!");
        }
    }
}

// Casos de prueba
saludo("Anakin", 10);
saludo("Obi-Wan", 14);

// Caso correccto
saludo("Count Dooku", 20);

// by: Luciano Emiliano Hernandez