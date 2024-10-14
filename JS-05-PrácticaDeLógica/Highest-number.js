//Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.

function encontrarMayor() {
    let numeros = [];
    
    // Pedir al usuario que ingrese 10 números
    for (let i = 0; i < 10; i++) {
      let num = parseFloat(prompt("Introduce 10 números en total, por cada número escrito pulsa la tecla enter o da click en aceptar"));
      numeros.push(num); // Agregar el número al array
    }
  
    // Inicializar la variable mayor con el primer número
    let mayor = numeros[0];
  
    // Recorrer el array para encontrar el número mayor
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayor) {
        mayor = numeros[i]; // Actualizar el valor de mayor si el número actual es mayor
      }
    }
  
    // Mostrar el número mayor
    console.log("De los números que me diste, el mayor es: " + mayor);
  }
  
  // Ejecuta la función
  encontrarMayor();
  