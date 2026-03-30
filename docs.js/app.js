document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // 🧠 CALCULAR FECHA
    // =========================
    const ahora = new Date();
    const hora = ahora.getHours();

    if (hora >= 17) {
        ahora.setDate(ahora.getDate() + 1);
    }

    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const año = ahora.getFullYear();

    const fechaFormateada = `${dia}/${mes}/${año}`;

    console.log("Fecha generada:", fechaFormateada);


    // =========================
    // 📲 BOTONES WHATSAPP (TODO EN UNO)
    // =========================
    document.querySelectorAll(".btn-primary-wa").forEach(boton => {
        boton.addEventListener("click", function(e) {
            e.preventDefault();

            const barbero = this.dataset.barbero || "cualquiera";

            const mensaje = `BlackBlade Barbería

Hola, quisiera agendar una cita con ${barbero}
Fecha sugerida: ${fechaFormateada}`;

            const url = `https://wa.me/573249498311?text=${encodeURIComponent(mensaje)}`;

            window.open(url, "_blank");
        });
    });


    // =========================
    // ✂️ SERVICIOS (opcional)
    // =========================
    document.querySelectorAll(".service-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const servicioInput = document.getElementById("servicio");

            if (servicioInput) {
                servicioInput.value = this.dataset.servicio;
            }

            const form = document.getElementById("form-agenda");
            if (form) {
                form.scrollIntoView({ behavior: "smooth" });
            }
        });
    });


    // =========================
    // 📲 FORMULARIO (opcional)
    // =========================
    const form = document.getElementById("form-agenda");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = document.getElementById("nombre")?.value || "Cliente";
            const servicio = document.getElementById("servicio")?.value;

            if (!servicio) {
                alert("Selecciona un servicio");
                return;
            }

            const mensaje = `BlackBlade Barbería

Solicitud de cita

Cliente: ${nombre}
Servicio: ${servicio}
Fecha sugerida: ${fechaFormateada}`;

            const url = `https://wa.me/573249498311?text=${encodeURIComponent(mensaje)}`;

            window.open(url, "_blank");
        });
    }

});