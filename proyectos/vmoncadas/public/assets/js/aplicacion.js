var btnMenuOpen = document.getElementById("btn-menu-open");
var menuLateral = document.getElementById("menu-lateral");
var btnMenuClose = document.getElementById("btn-menu-close");
var btnNavToggle = document.getElementById("btn-nav-toggle");
var navLinks = document.getElementById("nav-links");


/* La función se manda sin paréntesis */
btnMenuOpen.addEventListener("click", mostrarMenuLateral);
btnMenuClose.addEventListener("click", ocultarMenuLateral);
btnNavToggle.addEventListener("click", toggleNavLinks);
/* El resize es para cuando se cambia el tamaño */
window.addEventListener("resize", arreglarNavLinks);

function mostrarMenuLateral() {
    /* Agregamos la clase mostrar creada en CSS para que se muestre el menu */
    menuLateral.classList.add("mostrar");
}

function ocultarMenuLateral() {
    /* Removemos la clase mostrar creada en CSS para que se oculte el menu */
    menuLateral.classList.remove("mostrar");
}

function toggleNavLinks() {
    navLinks.classList.toggle("mostrar");
}

function arreglarNavLinks() {
    if (window.innerWidth >= 900) {
        navLinks.classList.remove("mostrar");
    }
}

function cargarDatos() {
    var datos = [
        {
            /** El // determina si es http o https */
            url: "//unal.edu.co",
            nombre: "UNAL",
            instruccion: "Instruccion UNAL"
        },
        {
            /** El // determina si es http o https */
            url: "//css-tricks.com",
            nombre: "CSS Tricks",
            instruccion: "Instruccion CSS"
        },
        {
            url: "assets/uploads/actividades/actividad-normal/index.html",
            nombre: "Determinar operación",
            instruccion: "Fijate en los números y selecciona la operación que da el resultado"
        },
        {
            url: "assets/uploads/actividades/actividad-canvas/index.html",
            nombre: "Actividad Canvas",
            instruccion: "Organiza los pericos"
        },
        {
            url: "assets/uploads/actividades/actividades001-1/index.html",
            nombre: "Actividad1",
            instruccion: "Organiza los pericos"
        },
    ];
    return datos;
}

function generarLinks() {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.innerHTML = "";

    var links = cargarDatos();
    if (links.length > 0) {
        //Legaron datos
        for (var i = 0; i < links.length; i++) {
            var texto = document.createTextNode(links[i].nombre);
            //"a" porque es un link
            var link = document.createElement("a");
            link.href = links[i].url;
            link.target = "main-iframe";
            link.appendChild(texto);
            //creamos elemento li para agregarle el texto
            var itemLista = document.createElement("li");
            itemLista.appendChild(link);
            //Para que se muestre es necesario que el itemLista tenga padre, entonces se agrega a menuLinks
            menuLinks.appendChild(itemLista);

        }
    } else {
        //Creamos nodo de texto
        var texto = document.createTextNode("No se ha encontrado ninguna actividad");
        //creamos elemento li para agregarle el texto
        var itemLista = document.createElement("li");
        //agregamos al elemento li el nodo de texto
        itemLista.appendChild(texto);
        //Para que se muestre es necesario que el itemLista tenga padre, entonces se agrega a menuLinks
        menuLinks.appendChild(itemLista);
    }
}

generarLinks();