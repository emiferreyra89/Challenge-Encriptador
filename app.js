//Tags
const textoUsuario = document.getElementById("areaTextoUsuario");
const aside = document.querySelector("aside");
const areaMostrarMensaje = document.querySelector("span");
const imgAside = document.getElementById("img_aside");
const divLeyendas = document.getElementById("leyendas");

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
  mostrarMensaje(msjProcesado);
  btnDesencriptar.setAttribute("disabled", "true");
  return msjProcesado;
}

function desencriptar() {
  msjUsuario = textoUsuario.value;
  msjProcesado = msjUsuario;
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

//Evento - Habilitar los botones cuando el textarea recibe el foco
textoUsuario.addEventListener("focus", () => {
  btnEncriptar.removeAttribute("disabled");
  btnDesencriptar.removeAttribute("disabled");
});
