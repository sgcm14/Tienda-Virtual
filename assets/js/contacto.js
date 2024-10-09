//Envio Formulario Contacto
    emailjs.init  ('nNvfpW96h0Mw57P7o') //('user_hx2rYaxbexZ0qlT8bs771')
    const btn = document.getElementById('button-contacto');

    document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    

    const serviceID = 'service_r72k36m';//'default_service';
    const templateID ='template_qgdhzfi';// 'template_y735lib';

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


