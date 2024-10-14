//Calculate the sum of all resistors connected in series.
let suma=0;

function sumaResistores(resistores) {
    for (let i=0; i<resistores.length; i++){
        suma = suma + Math.abs(resistores[i]);
    }
    return `La suma de los resitores es: ${suma} ohms`;
}
const resistores = [-1,5,6,3];
console.log (sumaResistores(resistores));