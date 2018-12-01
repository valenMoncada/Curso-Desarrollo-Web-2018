var _btnContinuar = document.getElementById("btn-continuar");
var _btnAudio = document.getElementById("btn-audio");
_btnContinuar.addEventListener("click", procesarPuntaje, false);
_btnAudio.addEventListener("click", reproducirAudio, false);

var _puntaje = null;
var hecho = 0;

function procesarPuntaje() {
    var puntaje = _puntaje;
    if (puntaje == null) {
        var texto = "Por favor completa la actividad";
        if (typeof parent.mostrarAlerta === "function") {
            parent.mostrarAlerta(texto);
        } else {
            alert(texto);
        }
        ocultarContinuar();
    } else {
        if (typeof parent.enviarPuntaje === "function") {
            parent.enviarPuntaje(puntaje);
        } else {
            alert("Puntaje: " + puntaje);
        }
    }
}

function correcto() {
    _puntaje = _puntaje + 1 / 3;
}
function incorrecto(){
    _puntaje = 0;
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

var numero1 = 0;
var numero2 = 0;
var numero3 = 0;

window.onload = function () {
    var numeroMinimo = 0;
    var numeroMaximo = 9;
    numero1 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    numero2 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    numero3 = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
    var num1 = document.getElementById('numero1');
    var num2 = document.getElementById('numero2');
    var num3 = document.getElementById('numero3');
    num1.textContent = numero1;
    num2.textContent = numero2;
    num3.textContent = numero3;
}

var unidades = document.getElementById('unidades');
unidades.addEventListener('input', function (e) {
    validar(this.value);
    califUnid(this.value);
});
var decenas = document.getElementById('decenas');
decenas.addEventListener('input', function (e) {
    validar(this.value);
    califDec(this.value);
});
var centenas = document.getElementById('centenas');
centenas.addEventListener('input', function (e) {
    validar(this.value);
    califCent(this.value);
});


function validar(a) {
    if (a <= 9 && a >= 0) {
        hecho++;
    }
    if (a > 9 || a < 0) {
        hecho--;
    }
    if (hecho == 3) {
        mostrarContinuar();
    }

}

function califUnid(a) {
    if (a == numero3) {
        correcto();
    }
    else incorrecto();
}
function califDec(a) {
    if (a == numero2) {
        correcto();
    }
    else incorrecto();
}
function califCent(a) {
    if (a == numero1) {
        correcto();
    }
    else incorrecto();
}