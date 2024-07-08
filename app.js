const textoUsuario = document.getElementById("areaTextoUsuario");
const areaMostrarMensaje = document.querySelector("span");
const imgAside = document.getElementById("img_aside");
const divLeyendas = document.getElementById("leyendas");
const botonCopiar = document.getElementById("btnCopiar");
let msj = "";

function encriptar() {
  msj = textoUsuario.value;
  let msjDesncriptado = "";
  for (let x = 0; x < msj.length; x++) {
    switch (msj[x]) {
      case "a":
        msjDesncriptado += "ai";
        break;
      case "e":
        msjDesncriptado += "enter";
        break;
      case "i":
        msjDesncriptado += "imes";
        break;
      case "o":
        msjDesncriptado += "ober";
        break;
      case "u":
        msjDesncriptado += "ufat";
        break;
      default:
        msjDesncriptado += msj[x];
        break;
    }
  }
  areaMostrarMensaje.style.display = "block";
  areaMostrarMensaje.innerHTML = msjDesncriptado;
  botonCopiar.style.display = "block";
  imgAside.style.display = "none";
  divLeyendas.style.display = "none";
  return;
}

function desencriptar() {
  msj = textoUsuario.value;
  let msjDesencriptado = msj;
  const claves = ["ai", "enter", "imes", "ober", "ufat"];
  let contieneClaves = true;
  while (contieneClaves) {
    for (let x = 0; x < claves.length; x++) {
      let condicionOk = msj.includes(claves[x]);
      if (condicionOk == true) {
        switch (x) {
          case 0:
            msjDesencriptado = msjDesencriptado.replace(claves[x], "a");
            break;
          case 1:
            msjDesencriptado = msjDesencriptado.replace(claves[x], "e");
            break;
          case 2:
            msjDesencriptado = msjDesencriptado.replace(claves[x], "i");
            break;
          case 3:
            msjDesencriptado = msjDesencriptado.replace(claves[x], "o");
            break;
          case 4:
            msjDesencriptado = msjDesencriptado.replace(claves[x], "u");
            break;
          default:
            break;
        }
      }
    }
    contieneClaves = claves.some(clave => msjDesencriptado.includes(clave));
  }
  areaMostrarMensaje.style.display = "block";
  areaMostrarMensaje.innerHTML = msjDesencriptado;
  botonCopiar.style.display = "block";
  imgAside.style.display = "none";
  divLeyendas.style.display = "none";
  return;
}
