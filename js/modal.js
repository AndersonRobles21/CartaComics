let productoActual = null;

function mostrarInfo(idProducto) {
    const producto = productos[idProducto];

    if (!producto) {
        console.error("No existe el producto:", idProducto);
        return;
    }

    productoActual = producto;

    document.getElementById("modalNombre").textContent = producto.nombre;

    const imagen = document.getElementById("modalImagen");
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    document.getElementById("modalDescripcion").textContent = producto.descripcion;

    document.getElementById("modalPrecio").textContent = formatearPrecio(producto.precio);

    const listaIngredientes = document.getElementById("modalIngredientes");
    listaIngredientes.innerHTML = "";

    producto.ingredientes.forEach(ingrediente => {
        const li = document.createElement("li");
        li.textContent = ingrediente;
        listaIngredientes.appendChild(li);
    });

    document.getElementById("checkboxCombo").checked = false;

    const seccionCombo = document.getElementById("seccionCombo");

    if (producto.combo) {
        seccionCombo.style.display = "block";
    } else {
        seccionCombo.style.display = "none";
    }

    document.getElementById("modalPrecioFinal").textContent = formatearPrecio(producto.precio);

    const modal = document.getElementById("modalProducto");
    modal.classList.add("activo");
    document.body.classList.add("modal-abierto");
}

function actualizarCombo() {
    if (!productoActual) return;

    const checkbox = document.getElementById("checkboxCombo");

    let precioFinal = productoActual.precio;

    if (checkbox.checked) {
        precioFinal += PRECIO_COMBO;
    }

    document.getElementById("modalPrecioFinal").textContent = formatearPrecio(precioFinal);
}

function cerrarModal() {
    const modal = document.getElementById("modalProducto");
    modal.classList.remove("activo");
    document.body.classList.remove("modal-abierto");
    productoActual = null;
}

document.getElementById("modalProducto").addEventListener("click", function (event) {
    if (event.target === this) {
        cerrarModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        const modal = document.getElementById("modalProducto");
        if (modal.classList.contains("activo")) {
            cerrarModal();
        }
    }
});