/* Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'. */

function datosUsuario() {
    // Solicitar el nombre de usuario y la edad
    let nombreUsuario = prompt("Ingresa tu nombre de usuario");
    let edadUsuario = parseInt(prompt("Ingresa tu edad"));
  
    // Solicitar la cantidad de películas favoritas
    let cantidadPeliculas = parseInt(prompt("¿Cuántas películas favoritas tienes?"));
    let peliculasFavoritas = [];
  
    // Solicitar las películas favoritas y almacenarlas en un array
    for (let i = 0; i < cantidadPeliculas; i++) {
      let pelicula = prompt(`Introduce el nombre de tu película favorita ${i + 1}:`);
      peliculasFavoritas.push(pelicula);
    }
  
    // Mostrar la información del usuario en la consola
    console.log(`Nombre de usuario: ${nombreUsuario}`);
    console.log(`Edad: ${edadUsuario} años`);
    
    // Mostrar las películas favoritas con un pequeño mensaje
    console.log("Películas favoritas:");
    peliculasFavoritas.forEach(film => {
      console.log(`La película "${film}" es una de mis favoritas.`);
    });
  }
  
  // Ejecutar la función para solicitar y mostrar los datos
  datosUsuario();
  