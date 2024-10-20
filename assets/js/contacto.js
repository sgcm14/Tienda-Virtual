//Envio Formulario Contacto
if (typeof config === 'undefined') {
    console.error("El archivo de configuración no se cargó correctamente.");
} else {
    // Inicializa EmailJS con la API key
    emailjs.init(config.apiKey);
}
    const btn = document.getElementById('button-contacto');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    

    const serviceID = 'default_service';
    const templateID = config.templateContactKey;

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {

            Swal.fire({
                icon: 'success',
                title: 'Se envió el mensaje',
                timer: 2500,
                showConfirmButton: false
              })

        window.location = "contacto.html";

        }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
        });
    });


