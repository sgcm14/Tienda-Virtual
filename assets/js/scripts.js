jQuery('document').ready(function($){

//menu
var menuBtn=$('.menu-icon'),
menu=$('.navigation ul');

    menuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });

//carrito-menu
var carritoMenuBtn=$('.car'),
carritomenu=$('.dropdown-menu');

carritoMenuBtn.click(function(){
        if(carritomenu.hasClass('show')){
            carritomenu.removeClass('show');
        }else{
            carritomenu.addClass('show');
        }
    });

});


//mascotas
let imagenes = document.querySelectorAll('.card-img');
let modal = document.querySelector('#modal');
let img = document.querySelector('#modal-img');
let boton = document.querySelector('#modal-boton');

for(let i = 0; i<imagenes.length;i++){
    imagenes[i].addEventListener('click',function(e){
        modal.classList.toggle("modal-open");
        let src = e.target.src;
        img.setAttribute("src",src);
    });
}
boton.addEventListener('click',function(){
    modal.classList.toggle("modal-open");
});

