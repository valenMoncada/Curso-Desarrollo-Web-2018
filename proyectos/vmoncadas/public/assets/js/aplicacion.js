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

//Cargar enlaces de actividades con AJAX
document.addEventListener("DOMContentLoaded", cargarDatos);

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
    var url = menuLateral.dataset.url;
    var datos = [];
    axios.get(url)
        .then(function (res) {
            var actividades = res.data.actividades;
            if (actividades.length > 0) {
                actividades.forEach(function (actividad) {
                    var obj = {
                        url: actividad.rutaArchivo,
                        nombre: actividad.nombre,
                        instruccion: actividad.instruccion
                    };
                    datos.push(obj);
                });
            }
        }).catch(function (err) {
            // no me cumple
            console.log(err.response);
        }).finally(function () {
            generarLinks(datos);
        });

}

function generarLinks(links) {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.innerHTML = "";

    if (links.length > 0) {
        //Llegaron datos
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

//Recibir puntaje desde la actividad
function enviarPuntaje(puntaje) {
    alert('Tu puntaje es:' + puntaje*100);
}