console.log(document.title);

let val;
val = document.querySelector('.infocard');
console.log(val);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const gen1 = document.getElementById('gen-1')
gen1.innerText = 'Generasión 1 Pokimon'

// 2. Cambia el color de fondo de la primera generación de Pokimon.
const backColor = document.querySelector('.infocard-list')
backColor.style.backgroundColor = ("lightblue")

//Versión cambiando de color el fondo de cada tarjeta.
// const backColor = document.querySelector(".infocard-list").querySelectorAll("div"); 
// for (let i = 0; i < backColor.length; i++) {
//     backColor[i].style.backgroundColor = "lightblue"
// } 

// 3. Imprime por consola la URL de la página.
console.log(document.URL);

// 4. Imprime por consola el dominio de la página.
console.log(document.domain);

// 5.Imprime todos los nodos de imagen.
const nodos = document.getElementsByTagName('img')
console.log(nodos);

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
const imagenes = document.getElementsByTagName('img');
for (let i = 0; i < imagenes.length; i++){
    imagenes[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
}

// PREMIUM
// 7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying.

let infocards = document.querySelectorAll(".infocard-lg-data,.text-muted")
for(i=0; i<infocards.length; i++){
    if (infocards[i].innerHTML.includes("flying")){
        infocards[i].style.backgroundColor="coral"
    }
}
