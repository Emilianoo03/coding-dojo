/* 
Un preparador físico e ingeniero mecánico local está construyendo un dispositivo 
IoT que hace saltar un caramelo cada vez que un corredor llega a 3 kilómetros en una trotadora, 
pero deja de dar caramelos en el kilómetro 10. Tenemos la tarea de crear la funcionalidad de bucle para saber cuando dar un caramelo 
y cuando parar.

Paso 1: Usando comentarios en tu VS Code, responde las siguientes preguntas: 

¿Cómo sabemos que necesitamos un bucle aquí? 
Porque se requiere una accion que se repite cada 3 kilometros, dandole un caramelo al corredor.

¿Cuál es el punto de partida del bucle?
El punto de partida del bucle es 0 (desde que el corredor comienza).

¿Cuándo debe detenerse el bucle?
El bucle debe detenerse en el kilómetro 10.

¿Cómo sabrá parar?
El bucle sabrá parar cuando la distancia actual sea mayor que 10.

¿Cuál es el incremento para cada iteración del bucle?
El incremento para cada iteración del bucle es 1 (se icrementa de 1km a 1km y cuando recorre 3km se le da un caramelo).

¿Qué variables necesitamos?
Necesitamos una variable para rastrear la distancia actual.

NOTA --> la lista anterior de preguntas es una gran herramienta para ayudar a desglosar la construcción de un bucle. En el futuro, se espera que sepas cómo hacer esas preguntas por tu cuenta. 

Paso 2: construye el bucle.

Paso 3: guarda y envía.


Característica Estiramiento 1

Crea un nuevo bucle en el que el corredor solo recibe un caramelo cada 3 kilómetros Y si se desplaza a más de 9 kilómetros por hora.

*/

// Inicia la distancia en 0 km
for (let distancia = 0; distancia < 10; distancia++) {
    // Solo entrega un caramelo cada 3 km
    if (distancia !== 0 && distancia % 3 === 0) {
        console.log("\n¡Aquí tienes un caramelo!\n");
    }else{
        console.log("Sigue corriendo vas bien, solo faltan " + (10 - distancia) + " km para llegar a la meta");
    }
}

console.log("¡Felicidades, has llegado a la meta!\n");

console.log("------------------------------");
console.log("Característica Estiramiento 1");
console.log("------------------------------\n");

let velocidad = 10; // velocidad en km/h
for (let distancia = 0; distancia <= 10; distancia++) {
    // Solo entrega un caramelo cada 3 km
    if ((distancia !== 0 && distancia % 3 === 0) && (velocidad > 9)) {
        console.log("\n¡Aquí tienes un caramelo!\n");
    } else {
        console.log("Sigue corriendo vas bien, solo faltan " + (10 - distancia) + " km para llegar a la meta");
    }
   console.log("Mantén ese ritmo, vas a " + velocidad + " km/h");
}

// by: Luciano Emiliano Hernandez