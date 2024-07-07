const textoUsuario = document.getElementById("areaTextoUsuario");
const areaMostrarMensaje = document.querySelector("span");
const imgAside = document.getElementById("img_aside");
const divLeyendas = document.getElementById("leyendas");
const botonCopiar = document.getElementById("btnCopiar");
let msj = '';

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
  let msjDesencriptado = "";
  const claves = {
    'ai':'a',
    'enter':'e',
    'imes':'i',
    'ober':'o',
    'ufat':'u'
  }
  for (let clave in claves) {
    while (msj.includes(clave)) {
      msjDesencriptado = msj.replace(clave,claves[clave])
    }
    //return msjDesencriptado
    console.log(msjDesencriptado);
  }
  //console.log(msjDesencriptado);
  //alert(msjDesencriptado)
  // areaMostrarMensaje.style.display = "block";
  // areaMostrarMensaje.innerHTML = msjDesencriptado;
  // botonCopiar.style.display = "block";
  // imgAside.style.display = "none";
  // divLeyendas.style.display = "none";
  // return;
}