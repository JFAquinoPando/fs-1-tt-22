/* 1. El día del niño se acerca en Paraguay, por lo que una de las empresas más
grandes de juguetes tiene el almacénhecho un desastre. Ayúdale a ordenar los
juguetes en el almacén para que pueda encontrarlos más fácilmente. Para ello, nos dan dos arrays. El primero es un array de juguetes, y el segundoesun array de números que indican la posición de cada juguete en el almacén. Lo único a tener en cuenta es que las posiciones pueden no empezar en 0, aunquesiempre serán números consecutivos y de forma ascendente. Tenemos que devolver un array donde cada juguete esté en la posición que lecorresponde.
 */

const juguetes = ["auto", "muñeca", "trensito 🚂","libro para pintar", "pelota"]
const posiciones = [3,2,4,1,0]
/* al ordenar ["pelota", "libro para pintar", "muñeca","auto", "trensito 🚂"] */

function ordenarJuguetes(games, positions) {
    let ordenado = []
    
    for(let indice = 0; indice < positions.length; indice++){
        /* console.log("indice:", indice);
        console.log("posicion con indice:", positions[indice]);
        console.log("juegos con indice:", games[indice]); */
        ordenado[ positions[indice]  ] = games[indice]
    }
    /* creando las intrucciones para ordenar y devolverlo corregido */
    return ordenado
}

const nuevo = ordenarJuguetes(juguetes, posiciones);
/* console.log("Aquí te devuelvo lo pedido... pero ya ordenado: ",nuevo); */


let juguetes2 = ["pc", "xbox", "ps5", "switch2", "nintendo game boy", "auto", "muñeca", "trensito 🚂","libro para pintar", "pelota"]
let posiciones2 = [8,6,5,7,9,3,2,4,1,0]
const nuevo2 = ordenarJuguetes(juguetes2, posiciones2);
/* console.log("Aquí te devuelvo lo pedido... pero ya ordenado: ",nuevo2); */
/*  */
/*  */

const listado = 
document.querySelector("#lista-juguetes")

console.log("yo soy un texto... 🤣");
console.log(listado);

const prueba = "Fabricio"

for (let inicio = 0; inicio < nuevo2.length; inicio++) {
    console.log("valor de inicio es",inicio," y tengo este valor:" ,nuevo2[inicio]);
    listado.insertAdjacentHTML("beforeend", `<li>${nuevo2[inicio]}</li>`)
}


















