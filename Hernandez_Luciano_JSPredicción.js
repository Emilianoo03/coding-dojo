/* Desafío de código: Predecir funciones */

// Predicción 1: Qué indicará console.log cuando se llame a esta función?
function myBirthYearFunc(){
    console.log("Nací en" + 1980);
}

// se espera que imprima "Nací en 1980"

/* 
  Predicción 2: Si necesitáramos enviar un año de nacimiento a la función, 
  le diríamos a la función "oye, te enviaremos una variable llamada birthYearInput". 

  Lo hacemos agregando el nombre de la variable entre paréntesis. Mira a continuación un ejemplo. 

  Entonces, si la variable birthYearInput es 1980 (también conocida como var birthYearInput = 1980), 
  y se llama a esta función, ¿qué indicará console.log?
*/

function myBirthYearFunc(birthYearInput){
    console.log("Nací en" + birthYearInput);
}

// se espera que imprima "Nací en 1980"

/* 
  Predicción 3: Intentémoslo otra vez. Si var num1 = 10 y var num2 = 20, ¿qué indicaría console.log?
*/

function add(num1, num2){
    console.log("¡Sumando números!");
    console.log("num1 es: " + num1);
    console.log("num2 es: " + num2);
    var sum = num1 + num2;
    console.log(sum);
}

// se espera que imprima "¡Sumando números!", "num1 es: 10", "num2 es: 20" y "30"

