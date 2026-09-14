const PRECIO_COMBO = 6000;

const productos = {

    // =========================
    // 🍔 HAMBURGUESAS
    // =========================

    ironman: {
        nombre: "Iron Man",
        imagen: "img/iron-man.jpg",
        descripcion: "Hamburguesa de carne de res con queso, tocineta y vegetales frescos.",
        ingredientes: [
            "Carne de res",
            "Queso cheddar",
            "Tocineta",
            "Lechuga",
            "Tomate",
            "Cebolla",
            "Salsa de la casa"
        ],
        precio: 18000,
        combo: true
    },

    deadpool: {
        nombre: "Deadpool",
        imagen: "img/deadpool.jpg",
        descripcion: "Hamburguesa con un toque picante, ideal para quienes buscan una experiencia más intensa.",
        ingredientes: [
            "Carne de res",
            "Queso",
            "Tocineta",
            "Jalapeños",
            "Cebolla",
            "Lechuga",
            "Salsa picante"
        ],
        precio: 19000,
        combo: true
    },

    "doctor-strange": {
        nombre: "Doctor Strange",
        imagen: "img/doctor-strange.jpg",
        descripcion: "Una hamburguesa especial con sabores intensos y una combinación diferente.",
        ingredientes: [
            "Carne de res",
            "Doble queso",
            "Champiñones",
            "Cebolla caramelizada",
            "Lechuga",
            "Salsa especial"
        ],
        precio: 20000,
        combo: true
    },

    hulk: {
        nombre: "Hulk",
        imagen: "img/hulk.jpg",
        descripcion: "Una hamburguesa gigante con doble carne y una combinación contundente de ingredientes.",
        ingredientes: [
            "Doble carne de res",
            "Doble queso",
            "Tocineta",
            "Lechuga",
            "Tomate",
            "Cebolla",
            "Salsa de la casa"
        ],
        precio: 23000,
        combo: true
    },

    "ant-man": {
        nombre: "Ant Man",
        imagen: "img/ant-man.jpg",
        descripcion: "Una hamburguesa clásica y equilibrada, perfecta para cualquier momento.",
        ingredientes: [
            "Carne de res",
            "Queso",
            "Jamón",
            "Lechuga",
            "Tomate",
            "Salsa especial"
        ],
        precio: 17000,
        combo: true
    },

    venom: {
        nombre: "Venom",
        imagen: "img/venom.jpg",
        descripcion: "Hamburguesa de sabor intenso con tocineta, jalapeños y salsa BBQ.",
        ingredientes: [
            "Carne de res",
            "Queso",
            "Tocineta",
            "Cebolla caramelizada",
            "Jalapeños",
            "Salsa BBQ"
        ],
        precio: 20000,
        combo: true
    },

    "capitan-america": {
        nombre: "Capitán América",
        imagen: "img/capitan-america.jpg",
        descripcion: "Una hamburguesa completa con carne, queso, jamón y tocineta.",
        ingredientes: [
            "Carne de res",
            "Queso",
            "Jamón",
            "Tocineta",
            "Lechuga",
            "Tomate",
            "Cebolla",
            "Salsa de la casa"
        ],
        precio: 21000,
        combo: true
    },


    // =========================
    // 🌭 PERROS CALIENTES
    // =========================

    aquaman: {
        nombre: "Aquaman",
        imagen: "img/aquaman.jpg",
        descripcion: "Perro caliente clásico con queso, papas y las salsas de la casa.",
        ingredientes: [
            "Salchicha",
            "Queso",
            "Papas ripio",
            "Cebolla",
            "Salsa de tomate",
            "Mostaza",
            "Mayonesa"
        ],
        precio: 13000,
        combo: true
    },

    gamora: {
        nombre: "Gamora",
        imagen: "img/gamora.jpg",
        descripcion: "Perro caliente con tocineta, queso y cebolla caramelizada.",
        ingredientes: [
            "Salchicha",
            "Queso",
            "Tocineta",
            "Cebolla caramelizada",
            "Papas ripio",
            "Salsas de la casa"
        ],
        precio: 15000,
        combo: true
    },

    thanos: {
        nombre: "Thanos",
        imagen: "img/thanos.jpg",
        descripcion: "Un perro caliente poderoso con doble salchicha y una combinación especial de ingredientes.",
        ingredientes: [
            "Doble salchicha",
            "Queso",
            "Tocineta",
            "Papas ripio",
            "Cebolla",
            "Salsas de la casa"
        ],
        precio: 18000,
        combo: true
    },


    // =========================
    // 🌽 MAZORCADAS
    // =========================

    superman: {
        nombre: "Superman",
        imagen: "img/superman.jpg",
        descripcion: "Mazorcada con pollo, queso, tocineta y papas ripio.",
        ingredientes: [
            "Maíz dulce",
            "Pollo desmechado",
            "Queso",
            "Tocineta",
            "Papas ripio",
            "Salsas de la casa"
        ],
        precio: 18000,
        combo: true
    },

    "doctor-tocino": {
        nombre: "Doctor Tocino",
        imagen: "img/doctor-tocino.jpg",
        descripcion: "Mazorcada especial con pollo, abundante tocineta y queso.",
        ingredientes: [
            "Maíz dulce",
            "Pollo desmechado",
            "Tocineta",
            "Queso",
            "Papas ripio",
            "Salsa BBQ"
        ],
        precio: 20000,
        combo: true
    },


    // =========================
    // 🟨 PATACONES
    // =========================

    "pantera-negra": {
        nombre: "Pantera Negra",
        imagen: "img/pantera-negra.jpg",
        descripcion: "Patacón con carne desmechada, queso, hogao y guacamole.",
        ingredientes: [
            "Patacón",
            "Carne desmechada",
            "Queso",
            "Hogao",
            "Guacamole",
            "Salsas de la casa"
        ],
        precio: 18000,
        combo: true
    },

    flash: {
        nombre: "Flash",
        imagen: "img/flash.jpg",
        descripcion: "Patacón con pollo, queso, maíz y papas ripio.",
        ingredientes: [
            "Patacón",
            "Pollo desmechado",
            "Queso",
            "Maíz",
            "Papas ripio",
            "Salsas de la casa"
        ],
        precio: 17000,
        combo: true
    },


    // =========================
    // 🫓 AREPAS
    // =========================

    spiderman: {
        nombre: "Spiderman",
        imagen: "img/spiderman.jpg",
        descripcion: "Arepa rellena de pollo, queso y maíz con salsa especial.",
        ingredientes: [
            "Arepa",
            "Pollo desmechado",
            "Queso",
            "Maíz",
            "Salsa de la casa"
        ],
        precio: 15000,
        combo: true
    },

    "mujer-maravilla": {
        nombre: "Mujer Maravilla",
        imagen: "img/mujer-maravilla.jpg",
        descripcion: "Arepa con carne desmechada, queso y aguacate.",
        ingredientes: [
            "Arepa",
            "Carne desmechada",
            "Queso",
            "Aguacate",
            "Salsa especial"
        ],
        precio: 17000,
        combo: true
    },

    "harley-quinn": {
        nombre: "Harley Quinn",
        imagen: "img/harley-quinn.jpg",
        descripcion: "Arepa con pollo, tocineta, queso y un toque de salsa BBQ.",
        ingredientes: [
            "Arepa",
            "Pollo desmechado",
            "Tocineta",
            "Queso",
            "Maíz",
            "Salsa BBQ"
        ],
        precio: 17000,
        combo: true
    },

    nebula: {
        nombre: "Nebula",
        imagen: "img/nebula.jpg",
        descripcion: "Arepa especial con carne, pollo, queso y maíz.",
        ingredientes: [
            "Arepa",
            "Carne desmechada",
            "Pollo desmechado",
            "Queso",
            "Maíz",
            "Salsas de la casa"
        ],
        precio: 19000,
        combo: true
    },


    // =========================
    // 🍟 SALCHIPAPAS
    // =========================

    joker: {
        nombre: "Joker",
        imagen: "img/joker.jpg",
        descripcion: "Salchipapa clásica con queso, tocineta y una combinación de salsas.",
        ingredientes: [
            "Papas francesas",
            "Salchicha",
            "Queso",
            "Tocineta",
            "Maíz",
            "Salsas de la casa"
        ],
        precio: 17000,
        combo: false
    },

    "batman-robin": {
        nombre: "Batman y Robin",
        imagen: "img/batman-robin.jpg",
        descripcion: "Una salchipapa para compartir con doble salchicha, pollo, queso y tocineta.",
        ingredientes: [
            "Papas francesas",
            "Doble salchicha",
            "Pollo desmechado",
            "Queso",
            "Tocineta",
            "Salsas de la casa"
        ],
        precio: 22000,
        combo: false
    },

    "rocket-man": {
        nombre: "Rocket Man",
        imagen: "img/rocket-man.jpg",
        descripcion: "Salchipapa cargada con salchicha, pollo, queso, maíz y tocineta.",
        ingredientes: [
            "Papas francesas",
            "Salchicha",
            "Pollo desmechado",
            "Queso",
            "Maíz",
            "Tocineta",
            "Salsa BBQ"
        ],
        precio: 22000,
        combo: false
    },

    "black-adam": {
        nombre: "Black Adam",
        imagen: "img/black-adam.jpg",
        descripcion: "Una salchipapa poderosa con carne, pollo, doble salchicha y queso.",
        ingredientes: [
            "Papas francesas",
            "Doble salchicha",
            "Carne desmechada",
            "Pollo desmechado",
            "Queso",
            "Tocineta",
            "Salsas de la casa"
        ],
        precio: 25000,
        combo: false
    },


    // =========================
    // 🧒 MENÚ INFANTIL
    // =========================

    thor: {
        nombre: "Thor Rompetormentas",
        imagen: "img/thor.jpg",
        descripcion: "Mini hamburguesa pensada especialmente para los más pequeños.",
        ingredientes: [
            "Mini hamburguesa de carne",
            "Queso",
            "Papas francesas",
            "Bebida"
        ],
        precio: 14000,
        combo: false
    },

    "capitana-marvel": {
        nombre: "Capitana Marvel",
        imagen: "img/capitana-marvel.jpg",
        descripcion: "Mini perro caliente acompañado de papas y bebida.",
        ingredientes: [
            "Mini salchicha",
            "Pan",
            "Queso",
            "Papas francesas",
            "Bebida"
        ],
        precio: 14000,
        combo: false
    }
};


// ==========================================
// PRODUCTO ACTUAL
// ==========================================

let productoActual = null;


// ==========================================
// MOSTRAR INFORMACIÓN
// ==========================================

function mostrarInfo(idProducto) {

    const producto = productos[idProducto];

    if (!producto) {
        console.error("No existe el producto:", idProducto);
        return;
    }

    productoActual = producto;

    // Nombre
    document.getElementById("modalNombre").textContent = producto.nombre;

    // Imagen
    const imagen = document.getElementById("modalImagen");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    // Descripción
    document.getElementById("modalDescripcion").textContent =
        producto.descripcion;

    // Precio
    document.getElementById("modalPrecio").textContent =
        formatearPrecio(producto.precio);

    // Ingredientes
    const listaIngredientes =
        document.getElementById("modalIngredientes");

    listaIngredientes.innerHTML = "";

    producto.ingredientes.forEach(ingrediente => {

        const li = document.createElement("li");

        li.textContent = ingrediente;

        listaIngredientes.appendChild(li);
    });


    // Reiniciar checkbox
    document.getElementById("checkboxCombo").checked = false;


    // Mostrar u ocultar combo
    const seccionCombo =
        document.getElementById("seccionCombo");

    if (producto.combo) {

        seccionCombo.style.display = "block";

    } else {

        seccionCombo.style.display = "none";
    }


    // Precio final inicial
    document.getElementById("modalPrecioFinal").textContent =
        formatearPrecio(producto.precio);


    // Abrir modal
    document
        .getElementById("modalProducto")
        .classList.add("activo");
}


// ==========================================
// ACTUALIZAR COMBO
// ==========================================

function actualizarCombo() {

    if (!productoActual) return;

    const checkbox =
        document.getElementById("checkboxCombo");

    let precioFinal = productoActual.precio;

    if (checkbox.checked) {

        precioFinal += PRECIO_COMBO;
    }

    document.getElementById("modalPrecioFinal").textContent =
        formatearPrecio(precioFinal);
}


// ==========================================
// CERRAR MODAL
// ==========================================

function cerrarModal() {

    document
        .getElementById("modalProducto")
        .classList.remove("activo");

    productoActual = null;
}


// ==========================================
// CERRAR AL HACER CLICK AFUERA
// ==========================================

document
    .getElementById("modalProducto")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            cerrarModal();
        }
    });


// ==========================================
// FORMATO DE PRECIOS
// ==========================================

function formatearPrecio(precio) {

    return "$" + precio.toLocaleString("es-CO");
}

