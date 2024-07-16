//Tags
const textoUsuario = document.getElementById("areaTextoUsuario");
const aside = document.querySelector("aside");
const areaMostrarMensaje = document.querySelector("span");
const imgAside = document.getElementById("img_aside");
const divLeyendas = document.getElementById("leyendas");
const leyendaSinMsj = document.getElementById("leyendaSinMsj")
const iconoExclamacion = document.getElementById("iconoExclamacion")
const exclamacionAviso = document.getElementById("exclamacionAviso")

//Tags botones
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");

//Declaracion de variables
let msjUsuario = "";
let msjProcesado = "";

//Declaracion de funciones
function encriptar() {
  msjUsuario = textoUsuario.value;
  msjProcesado = "";
  if (msjUsuario && validarTextoUsuario(msjUsuario) === true) {
    for (let x = 0; x < msjUsuario.length; x++) {
      switch (msjUsuario[x]) {
        case "a":
          msjProcesado += "ai";
          break;
        case "e":
          msjProcesado += "enter";
          break;
        case "i":
          msjProcesado += "imes";
          break;
        case "o":
          msjProcesado += "ober";
          break;
        case "u":
          msjProcesado += "ufat";
          break;
        default:
          msjProcesado += msjUsuario[x];
          break;
      }
    }
    limpiarAvisoError()
    mostrarMensaje(msjProcesado);
    btnDesencriptar.setAttribute("disabled", "true");
  } else if (msjUsuario == "") {
    mensajeVacio();
    limpiarAvisoError()
  } else {
    errorTextoUsuario()
    leyendaSinMsj.style.display = "none"
  }
  return
}

function desencriptar() {
  msjUsuario = textoUsuario.value;
  msjProcesado = msjUsuario;
  if (msjUsuario && validarTextoUsuario(msjUsuario) === true) {
    const claves = ["ai", "enter", "imes", "ober", "ufat"];
    let contieneClaves = true;
    while (contieneClaves) {
      for (let x = 0; x < claves.length; x++) {
        let condicionOk = msjUsuario.includes(claves[x]);
        if (condicionOk == true) {
          switch (claves[x]) {
            case claves[0]:
              msjProcesado = msjProcesado.replace(claves[x], "a");
              break;
            case claves[1]:
              msjProcesado = msjProcesado.replace(claves[x], "e");
              break;
            case claves[2]:
              msjProcesado = msjProcesado.replace(claves[x], "i");
              break;
            case claves[3]:
              msjProcesado = msjProcesado.replace(claves[x], "o");
              break;
            case claves[4]:
              msjProcesado = msjProcesado.replace(claves[x], "u");
              break;
            default:
              break;
          }
        }
      }
      contieneClaves = claves.some((clave) => msjProcesado.includes(clave));
    }
    mostrarMensaje(msjProcesado);
    btnEncriptar.setAttribute("disabled", "true");
    return msjProcesado;
  } else if (msjUsuario == "") {
    mensajeVacio();
    limpiarAvisoError()
  } else {
    errorTextoUsuario()
    leyendaSinMsj.style.display = "none"
  }
  return
}

function mostrarMensaje(mensaje) {
  aside.style.justifyContent = "space-between";
  areaMostrarMensaje.style.display = "block";
  areaMostrarMensaje.innerHTML = mensaje;
  btnCopiar.style.display = "block";
  imgAside.style.display = "none";
  divLeyendas.style.display = "none";
}

async function copiarTexto() {
  try {
    await navigator.clipboard.writeText(msjProcesado);
    alert("Texto copiado");
  } catch (error) {
    alert(`Error al copiar el texto (${error})`);
  }
}

function mensajeVacio() {
  aside.style.justifyContent = "center";
  areaMostrarMensaje.style.display = "none";
  btnCopiar.style.display = "none";
  imgAside.style.display = "block";
  imgAside.style.margin = "0px auto";
  divLeyendas.style.display = "block";
  leyendaSinMsj.style.display = "block"
}

function validarTextoUsuario(texto) {
  let textoValido = true;
  for (let y = 0; y < texto.length; y++) {
    let codigoLetra = texto.charCodeAt(y)
    if ((codigoLetra < 97 || codigoLetra > 122) && codigoLetra != 32) {
      textoValido = false;
      y = texto.length;
    }
  }
  return textoValido
}

function errorTextoUsuario() {
  iconoExclamacion.style.color = 'red'
  exclamacionAviso.style.color = 'red'
  exclamacionAviso.style.fontSize = '14px'
}

function limpiarAvisoError() {
  iconoExclamacion.style.color = '#495057'
  exclamacionAviso.style.color = '#495057'
  exclamacionAviso.style.fontSize = '12px'
}

//Evento - Habilitar los botones cuando el textarea recibe el foco
textoUsuario.addEventListener("focus", () => {
  btnEncriptar.removeAttribute("disabled");
  btnDesencriptar.removeAttribute("disabled");
});
