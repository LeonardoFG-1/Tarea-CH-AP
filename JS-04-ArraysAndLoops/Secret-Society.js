//Find the name of a secret society based on the first letter of each member's name.
function secretName (nombres) {
    const primerLetra = nombres.map(nombres=>nombres[0]);
    return primerLetra.sort().join("");
}
const nombres1 = ["Francisco", "Daniel", "Mariana","Cesar","Luis"]
console.log(secretName(nombres1));
console.log(secretName(["Leonardo","Juan","Oscar","Adriana","Pedro"]));