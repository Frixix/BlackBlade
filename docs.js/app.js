document.addEventListener("DOMContentLoaded", function () {

    // Detectar click en servicios
    document.querySelectorAll(".service-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const servicio = this.dataset.servicio;

            // Autoseleccionar en el formulario
            document.getElementById("servicio").value = servicio;

            // Scroll al formulario
            document.getElementById("form-agenda").scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Envío a WhatsApp
    document.getElementById("form-agenda").addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const servicio = document.getElementById("servicio").value;

        if (!servicio) {
            alert("Selecciona un servicio");
            return;
        }

        const mensaje = `BlackBlade Barbería

Solicitud de cita

Cliente: ${nombre}
Servicio: ${servicio}

Me gustaría reservar un turno.
Quedo atento a la disponibilidad.

(Enviado desde la web - demo)`;

        const url = `https://wa.me/573249498311?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });

});