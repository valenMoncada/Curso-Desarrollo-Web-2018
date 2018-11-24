var _btnContinuar = document.getElementById("btn-continuar");
var _btnAudio = document.getElementById("btn-audio");
_btnContinuar.addEventListener("click", procesarPuntaje, false);
_btnAudio.addEventListener("click", reproducirAudio, false);

var _puntaje = null;

function seleccionar(a){
    if (a == 0) {
        correcto();
    }else
        incorrecto();
}

function correcto() {
    _puntaje = 1;
    mostrarContinuar();
}
function incorrecto() {
    _puntaje = 0;
    mostrarContinuar();
}

function procesarPuntaje() {
    var puntaje = _puntaje;

    if (puntaje == null) {
        var texto = "Por favor completa la actividad";
        if(typeof parent.mostrarAlerta === "function") {
            parent.mostrarAlerta(texto);
        } else {
            alert(texto);
        }
        ocultarContinuar();
    }else {
        if(typeof parent.enviarPuntaje === "function") {
            parent.enviarPuntaje(puntaje);
        }else{
            alert("Puntaje: " + puntaje);
        }
    }
}

function mostrarContinuar() {
    _btnContinuar.style.display = "block";
}
function ocultarContinuar() {
    _btnContinuar.style.display = "none";
}

function reproducirAudio() {
    console.log("Audio ...");
}