//Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.

function palindromo(frase) {
    // Eliminar espacios, puntuación y convertir a minúsculas
    const fraseLimpia = frase
        .toLowerCase()
        .replace(/[^a-z0-9]/g, ''); // Para mantener solo letras y números

    // Verificar si es un palíndromo comparando la frase con su reverso
    const reverso = fraseLimpia.split('').reverse().join(''); // Convierte la frase en un array de caracteres, lo revierte y luego lo vuelve a unir en una cadena.
    return fraseLimpia === reverso;
}

// Solicitar la frase o palabra al usuario
const frase = prompt("Ingresa una palabra o frase:");
if (palindromo(frase)) {
    console.log("Tu frase: " + frase + " es un palíndromo.");
} else {
    console.log("Tu frase: " + frase + " No es un palíndromo.");
}
