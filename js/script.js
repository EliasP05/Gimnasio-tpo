
let nav=document.querySelector('.menu');
let menuBtn=document.querySelector('#btn-menu');
menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-xmark');
    nav.classList.toggle('active')
};
//variable que almacenas los items del carrusel
var contenedor=$('.sucContenedor');
var siguiente=$('#btn-next');
var anterior=$('#btn-prev');
//mover ultima tarjeta al primer lugar
$('.sucContenedor .sucursal:last').insertBefore('.sucContenedor .sucursal:first')
//mostrar la primer imagen
contenedor.css('margin-left','-'+25+'rem');

//hacia delante
function moverDelante(){
    contenedor.animate({marginLeft:'-'+50+'rem'
},700, function(){
    $('.sucContenedor .sucursal:first').insertAfter('.sucContenedor .sucursal:last');
    contenedor.css('margin-left','-'+25+'rem');
});
}



//hacia atras
function moverAtras(){
    contenedor.animate({marginLeft:0
},700, function(){
    $('.sucContenedor .sucursal:last').insertBefore('.sucContenedor .sucursal:first');
    contenedor.css('margin-left','-'+25+'rem');
});
}

//cuando haga click se ejecuta la funcion
siguiente.on('click',function(){
    moverDelante();
});
anterior.on('click',function(){
    moverAtras();
});


let btnMapa=document.querySelectorAll('.btnMapa');
var mapa=document.querySelectorAll('.contMapa');
var texto=document.querySelectorAll('.SucTexto');
var icon=document.querySelectorAll('.fa-angle-up');
var textMapa=document.querySelectorAll('.fa-angle-up');
var cambiaText=document.querySelectorAll('.btn-mapa button');
console.log(btnMapa);
for(var x=0;x<btnMapa.length;x++){
    btnMapa[x].addEventListener('click',()=>{

        for(var i=0;i<mapa.length;i++){
            texto[i].classList.toggle('desaparece');
            mapa[i].classList.toggle('apareceMapa');
            icon[i].classList.toggle('iconV');
            cambiaText[i].classList.toggle('cambiaTex');
        }
        
    })
}

//formulario
function validar(){
    let nombre=document.getElementById('contacNom').value;
    let mail=document.getElementById('contacMail').value;
    let mensaje=document.getElementById('contacMsj').value;
    let msjEror=document.getElementById('msjError');
    let expresion=/\w+@\w+\.+[a-z]/;

    if(nombre==="" && mail==="" && mensaje===""){
        msjEror.innerHTML='Debe rellenar todos los campos';
    }else if(mail===""){
        msjEror.innerHTML='Debe ingresar un correo';
        
        return false;
    }else if(!expresion.test(mail)){
        msjEror.innerHTML='El correo no es válido';
        
        return false;
    }
    else if(mensaje===""){
        msjEror.innerHTML='Debe redactar un mensaje';
        
        return false;
    }else if(nombre===""){
        msjEror.innerHTML='Debe ingresar un nombre';
        
        return false;
    }
}
