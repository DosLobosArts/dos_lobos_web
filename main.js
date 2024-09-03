productos = [
  {//PULSERAS
    "id": 0,
    "titulo": "Pulsera 7 nudos hilo fino roja",
    "imagen": "./images/Pulseritas/pulse finita 7 nudos roja.jpg",
    "precio": "1000",
    "categoria": "pulseras"
  },
  {
    "id": 1,
    "titulo": "Pulsera 7 nudos hilo fino violeta",
    "imagen": "./images/Pulseritas/pulse finita 7 nudos violeta.jpg",
    "precio": "1000",
    "categoria": "pulseras"
  },
  {
    "id": 2,
    "titulo": "Pulsera 7 nudos hilo fino purpura",
    "imagen": "./images/Pulseritas/pulse finita 7 nudos purpura.jpg",
    "precio": "1000",
    "categoria": "pulseras"
  },
  {
    "id": 3,
    "titulo": "Pulsera 7 nudos roja",
    "imagen": "./images/Pulseritas/pulse 7 nudos roja.jpg",
    "precio": "1200",
    "categoria": "pulseras"
  },
  {
    "id": 4,
    "titulo": "Pulsera 7 nudos violeta",
    "imagen": "./images/Pulseritas/pulse 7 nudos violeta.jpg",
    "precio": "1200",
    "categoria": "pulseras"
  },
  {
    "id": 5,
    "titulo": "Pulsera 7 nudos purpura",
    "imagen": "./images/Pulseritas/pulse 7 nudos purpura.jpg",
    "precio": "1200",
    "categoria": "pulseras"
  },
  {
    "id": 6,
    "titulo": "Pulsera 7 nudos fluo",
    "imagen": "./images/Pulseritas/pulse 7 nudos fluo.jpg",
    "precio": "1200",
    "categoria": "pulseras"
  },
  {
    "id": 7,
    "titulo": "Pulsera ojito chato roja",
    "imagen": "./images/Pulseritas/pulse finita 1 ojito chato roja.jpg",
    "precio": "1200",
    "categoria": "pulseras"
  },
  {
    "id": 8,
    "titulo": "Pulsera ojito roja",
    "imagen": "./images/Pulseritas/pulse finita 1 ojito roja.jpg",
    "precio": "1000",
    "categoria": "pulseras"
  },
  {
    "id": 9,
    "titulo": "Pulsera ojito violeta",
    "imagen": "./images/Pulseritas/pulse finita 1 ojito violeta.jpg",
    "precio": "1000",
    "categoria": "pulseras"
  },
  {
    "id": 10,
    "titulo": "Pulsera ojo ovalado roja",
    "imagen": "./images/Pulseritas/pulse 1 ojito ovalado roja.jpg",
    "precio": "1500",
    "categoria": "pulseras"
  },
  {
    "id": 11,
    "titulo": "Pulsera 7 nudos c/ ojitos roja",
    "imagen": "./images/Pulseritas/pulse 7 nudos ojitos rojo.jpg",
    "precio": "2500",
    "categoria": "pulseras"
  },
  {
    "id": 12,
    "titulo": "Pulsera 7 nudos c/ ojitos violeta",
    "imagen": "./images/Pulseritas/pulse 7 nudos ojitos violeta.jpg",
    "precio": "2500",
    "categoria": "pulseras"
  },
  {
    "id": 13,
    "titulo": "Pulsera macramé de hilo chino roja",
    "imagen": "./images/Pulseritas/pulse macrame chino rojo.jpg",
    "precio": "2000",
    "categoria": "pulseras" 
  },
  {
    "id": 14,
    "titulo": "Pulsera macramé de hilo chino violeta",
    "imagen": "./images/Pulseritas/pulse macrame chino violeta.jpg",
    "precio": "2000",
    "categoria": "pulseras" 
  },
  {
   "id": 15,
    "titulo": "Pulsera de cristales c/ ojito roja",
    "imagen": "./images/Pulseritas/pulse cristal corazon ojito roja.jpg",
    "precio": "2500",
    "categoria": "pulseras" 
  },
  {
    "id": 16,
     "titulo": "Pulsera de cristales c/ corazones roja",
     "imagen": "./images/Pulseritas/pulse cristal corazon roja.jpg",
     "precio": "2500",
     "categoria": "pulseras" 
  },
  {
    "id": 17,
     "titulo": "Pulsera de perlas c/ corazones blanca",
     "imagen": "./images/Pulseritas/pulse perlas corazon blanco.jpg",
     "precio": "2500",
     "categoria": "pulseras" 
   },
   
   //COLLARES

   {
    "id": 18,
    "titulo": "Collar llave San Benito chica",
    "imagen": "./images/Collares/collar llave chica.jpg",
    "precio": "2500",
    "categoria": "collares" 
  },
  {
    "id": 19,
    "titulo": "Collar llave San Benito grande",
    "imagen": "./images/Collares/collar llave grande.jpg",
    "precio": "3000",
    "categoria": "collares" 
  },
  {
    "id": 20,
    "titulo": "Collar nudo de bruja chico",
    "imagen": "./images/Collares/collar nudo bruja chico.jpg",
    "precio": "2500",
    "categoria": "collares" 
  },
  {
    "id": 21,
    "titulo": "Collar nudo de bruja grande",
    "imagen": "./images/Collares/collar nudo bruja grande.jpg",
    "precio": "3000",
    "categoria": "collares" 
  },
  {
    "id": 22,
    "titulo": "Collar de perlas blanco",
    "imagen": "./images/Collares/collar perlas blanco.jpg",
    "precio": "2500",
    "categoria": "collares" 
  },
  {
    "id": 23,
    "titulo": "Collar de perlas negro",
    "imagen": "./images/Collares/collar perlas negro.jpg",
    "precio": "2500",
    "categoria": "collares" 
  },
  {
    "id": 24,
    "titulo": "Collar rosa San Expedito",
    "imagen": "./images/Collares/collar rosa san expe.jpg",
    "precio": "3000",
    "categoria": "collares" 
  },
]

const contenedorProductos = document.querySelector("#contenedor_productos");
const botonesCategorias = document.querySelectorAll(".boton_categoria");
const tituloPrincipal = document.querySelector("#titulo_principal");
let botonesAgregar = document.querySelectorAll(".producto_agregar");
const numeroComprasElement = document.querySelector(".numero_compras");
const mobileOpenMenuBtn = document.querySelector(".menu_mobile_button")
const mobileCloseMenuBtn = document.querySelector(".menu_mobile_close")
let menuMobile = document.querySelector(".menu_mobile");

let productosComprados = [];

document.addEventListener('DOMContentLoaded', mostrarProductos("todos"));

//** PRODUCTOS */

async function mostrarProductos(categoria) {
  productosMostrados = productos;
  if (categoria !== "todos"){
    productosMostrados = productos.filter(producto => producto.categoria === categoria);
  }
  productosMostrados.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto_imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto_info">
        <h3>${producto.titulo}</h3>
        <p>$${producto.precio}</p>
        <button id="${producto.id}" class="producto_agregar" onclick="agregarAlCarrito(${producto.id})")>
          <span class="texto_producto_agregar">Comprar</span>
          <span class="texto_hover">Próximamente</span>
        </button>
      </div>
    `;
    contenedorProductos.append(div);
  });
}

mobileOpenMenuBtn.addEventListener("click", (e) => {
  menuMobile.style.display = 'flex';
})
mobileCloseMenuBtn.addEventListener("click", (e) => {
  menuMobile.style.display = 'none';
})

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");
    contenedorProductos.innerHTML = ``;
      mostrarProductos(e.currentTarget.id);
      tituloPrincipal.innerText = e.currentTarget.textContent.trim();
  });
});

/* CARRITO WIP

async function agregarAlCarrito(idProducto) {
  productosComprados[idProducto] += 1;
  actualizarNumeroCompras();
  console.log("Array de productosComprados: ", productosComprados);
}

function actualizarNumeroCompras() {
  const totalCompras = productosComprados.reduce((acc, curr) => acc + curr, 0);
  const numeroComprasElement = document.querySelector(".numero_compras");
  numeroComprasElement.textContent = totalCompras;
}
*/

/* MODAL 

const imagenesProducto = document.querySelectorAll(".producto_imagen");
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal_close");

function openModal(src) {
  modal.style.display = "flex";
  modalImage.src = src;
}

function closeModal() {
  modal.style.display = "none";
}

imagenesProducto.forEach((item) => {
  item.addEventListener("click", () => openModal(item.src));
});

closeBtn.addEventListener("click", closeModal);

// Cierra el modal cuando se hace clic fuera de la imagen
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    closeModal();
  }
});

inicializarArrays();
cargarProductosTodos();

async function inicializarArrays() {
  const response = await fetch(`/productos/`);
  const productos = await response.json();

  // Inicializa productosComprados con la misma longitud que productos
  productosComprados = new Array(productos.length).fill(0);
}

*/