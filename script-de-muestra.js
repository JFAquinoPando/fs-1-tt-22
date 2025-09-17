const seccion = document.querySelector("#aplicacion");
/* seccion.outerHTML = "" */
seccion.insertAdjacentHTML("beforebegin", `<strong id="encontrar" class=" text-white">texto desde el script 💕</strong>`);

const e = document.querySelector("#encontrar");

function x(este_Elemento_Vamos_A_Usar_Para_encontrar_algo){
    console.log(este_Elemento_Vamos_A_Usar_Para_encontrar_algo);
    
    este_Elemento_Vamos_A_Usar_Para_encontrar_algo
    .target
    .classList
    .toggle("bg-red-600");
    
    este_Elemento_Vamos_A_Usar_Para_encontrar_algo
    .target
    .innerHTML  
    = "Otro texto 👍🏽";
}
e.addEventListener("click", x);


/* document.write("<hr>Hola, soy un nuevo texto"); */
/* console.log(window); */

/* alert({
    nombre: "Fabricio",
    apellido: "Aquino"
}) */

const objeto = {
    nombre: "Fabricio",
    apellido: "Aquino",
    apellido2: "Pando",
    texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis esse?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab mollitia fugiat iure in non debitis expedita. Nobis voluptatibus enim ab velit numquam, iusto voluptatem distinctio, sint animi, veritatis QQQQ?"
};

document.querySelector("pre").insertAdjacentHTML("beforeend", JSON.stringify(objeto));

/* alert(JSON.stringify(objeto)) */

console.error("texto: ",objeto);

/* let elemento = document.createElement("a")
elemento.setAttribute("href", "https://google.com.py")
elemento.setAttribute("target", "_blank")
elemento.setAttribute("class","font-bold text-3xl color-red-900")
elemento.textContent = "Soy el enlace" */

/* seccion.insertAdjacentElement("afterend", elemento) */

const a=5,b=6,c=a*b;console.log(a,b,c);
