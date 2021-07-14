// Declaración de Variables
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let Nombre = document.getElementById('nombre');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;

// Función de uso  barra de navegación transparente o degradada dependiendo de la posición de desplazamiento de la página
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual <= 300){
        nav.classList.remove('nav2');
        nav.className = ('nav1');    
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = "#fff"
        Nombre.style.color = "#fff"
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        //abrir.style.color = '#000';
        //Nombre.style.color = "#000"
    }
}

// Captura de evento Scroll para ejecución de función de carga de barra de navegación
window.addEventListener('scroll', function(){
    menus();
});

// Captura de evento de carga inicial o refresh de la página para ejecución de función de barra de navegación
window.addEventListener('load', function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});

// Captura de evento de cambio de tamaño de ventana para cambio de tipo de barra de navegación
window.addEventListener('resize', function(){
    if(screen.width>=700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

// Función de apertura y cierre de menú desplegable
function apertura(){
    if(cerrado){
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}

// Captura de evento de click en ícono de menú para ejecución de función apertura de menú desplegable
abrir.addEventListener('click', function(){
    apertura();
});

// Captura de evento de click en ciertas secciones de la página para ejecución de función cierre de menú desplegable
window.addEventListener('click', function(e){
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});

