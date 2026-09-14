document.addEventListener("DOMContentLoaded", function () {
    const productoElements = document.querySelectorAll(".producto");

    productoElements.forEach(element => {
        element.addEventListener("click", function () {
            const idProducto = this.dataset.productoId;
            if (idProducto) {
                mostrarInfo(idProducto);
            }
        });

        element.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                const idProducto = this.dataset.productoId;
                if (idProducto) {
                    mostrarInfo(idProducto);
                }
            }
        });
    });

    const checkboxCombo = document.getElementById("checkboxCombo");
    if (checkboxCombo) {
        checkboxCombo.addEventListener("change", actualizarCombo);
    }

    const cerrarBtn = document.querySelector(".cerrar");
    if (cerrarBtn) {
        cerrarBtn.addEventListener("click", cerrarModal);
    }

    // Botón volver al inicio
    const btnVolverInicio = document.getElementById("btnVolverInicio");
    if (btnVolverInicio) {
        const SCROLL_THRESHOLD = 300;
        let ticking = false;

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    const scrollY = window.scrollY || document.documentElement.scrollTop;
                    if (scrollY > SCROLL_THRESHOLD) {
                        btnVolverInicio.hidden = false;
                    } else {
                        btnVolverInicio.hidden = true;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll, { passive: true });

        btnVolverInicio.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

        btnVolverInicio.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    }

    // Alerta de horario
    const alertaHorario = document.getElementById("alertaHorario");
    const alertaCerrar = document.querySelector(".alerta-horario-cerrar");
    const ALERTA_KEY = "cartaComicsHorarioCerrado";

    if (alertaHorario && alertaCerrar) {
        const yaCerrado = sessionStorage.getItem(ALERTA_KEY);
        if (!yaCerrado) {
            alertaHorario.hidden = false;
        }

        alertaCerrar.addEventListener("click", function () {
            alertaHorario.hidden = true;
            sessionStorage.setItem(ALERTA_KEY, "1");
        });

        alertaCerrar.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                alertaHorario.hidden = true;
                sessionStorage.setItem(ALERTA_KEY, "1");
            }
        });
    }
});