//Tags
const iconoLista = document.getElementById("iconoLista");
const listIconBurger = document.getElementById("list_icon_burger");
const p_Tt = document.getElementById("p_Tt");
const p_head = document.getElementById("p_head");
const p_PT = document.getElementById("p_PT");
const p_ES = document.getElementById("p_ES");
const textoUsuario = document.getElementById("areaTextoUsuario");
const divValidaciones = document.querySelector(".div_validaciones");
const divError = document.querySelector(".msjValidacion");
const aside = document.querySelector("aside");
const textoAside = document.getElementById("texto_aside");
const areaTextoFinal = document.getElementById("areaTextoFinal");
const imgAside = document.getElementById("img_aside");
const divLeyendas = document.getElementById("leyendas");
const leyendaSinMsj = document.getElementById("leyendaSinMsj");
const iconoExclamacion = document.getElementById("iconoExclamacion");
const exclamacionAviso = document.getElementById("exclamacionAviso");
const alertCopied = document.getElementById("alertCopied");

//Tags botones
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const botonClose = document.querySelector(".boton_close");
const buttonTt = document.getElementById("button_Tt");
const buttonHead = document.getElementById("button_head");
const buttonPT = document.getElementById("button_PT");
const buttonES = document.getElementById("button_ES");

//Declaracion de variables
let texto = "";
let textoTraducido = "";
const tildes = "áéíóúÁÉÍÓÚñÑ";
const numeros = "0123456789";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const es = "es";
const pt = "pt";
let msjUsuario = "";
let msjProcesado = "";
let cont = 0;
let contErrores = 0;
let contCheck = false;
let flagCheck = false;
let arrayFlags = [contErrores, flagCheck, contCheck];

//Configuración de Toastr
toastr.options = {
  "newestOnTop": true,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "showDuration": "300",
   "timeOut": "2000"
};

//Creacion de elementos HTML
// Mensaje de texto valido
const div_Ok = document.createElement("div");
const iCheck = document.createElement("i");
const pOk = document.createElement("p");
div_Ok.classList.add("okAlert");
iCheck.classList.add("fa-sharp");
iCheck.classList.add("fa-solid");
iCheck.classList.add("fa-circle-check");

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
    textoAside.style.order = "initial";
    if (contCheck === true) {
      cleanMsjValido();
    }
    cleanMsjError();
    limpiarAvisoError();
    mostrarMensaje(msjProcesado);
    btnDesencriptar.setAttribute("disabled", "true");
  } else if (msjUsuario == "") {
    mensajeVacio();
    limpiarAvisoError();
  } else {
    if (contCheck === true) {
      cleanMsjValido();
    }
    errorTextoUsuario();
    cleanMsjError();
    leyendaSinMsj.style.display = "none";
  }
  return;
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
    textoAside.style.order = "initial";
    if (contCheck === true) {
      cleanMsjValido();
    }
    cleanMsjError();
    limpiarAvisoError();
    mostrarMensaje(msjProcesado);
    btnEncriptar.setAttribute("disabled", "true");
    return msjProcesado;
  } else if (msjUsuario == "") {
    mensajeVacio();
    limpiarAvisoError();
  } else {
    if (contCheck === true) {
      cleanMsjValido();
    }
    errorTextoUsuario();
    cleanMsjError();
    leyendaSinMsj.style.display = "none";
  }
  return msjProcesado;
}

function mostrarMensaje(mensaje) {
  aside.style.justifyContent = "space-between";
  textoAside.style.height = "100%"
  areaTextoFinal.style.display = "block";
  areaTextoFinal.value = mensaje;
  btnCopiar.style.display = "block";
  imgAside.style.display = "none";
  divLeyendas.style.display = "none";
}

async function copiarTexto() {
  try {
    await navigator.clipboard.writeText(msjProcesado);
    alertCopied.style.display = "block";
    alertCopied.classList.add("show");
    setTimeout(() => {
      alertCopied.classList.remove("show");
      alertCopied.style.display = "none";
    }, 2000);
  } catch (error) {
    alert(`Error al copiar el texto (${error})`);
  }
}

function mensajeVacio() {
  aside.style.justifyContent = "center";
  areaTextoFinal.style.display = "none";
  btnCopiar.style.display = "none";
  imgAside.style.display = "block";
  imgAside.style.margin = "0px auto";
  divLeyendas.style.display = "block";
  leyendaSinMsj.style.display = "block";
  textoAside.style.order = "1";
}

function validarTextoUsuario(texto) {
  let textoValido = true;
  for (let y = 0; y < texto.length; y++) {
    let codigoLetra = texto.charCodeAt(y);
    if ((codigoLetra < 97 || codigoLetra > 122) && codigoLetra != 32) {
      textoValido = false;
      y = texto.length;
    }
  }
  return textoValido;
}

function errorTextoUsuario() {
  iconoExclamacion.style.color = "red";
  exclamacionAviso.style.color = "red";
  exclamacionAviso.style.fontSize = "14px";
}

function limpiarAvisoError() {
  iconoExclamacion.style.color = "#495057";
  exclamacionAviso.style.color = "#495057";
  exclamacionAviso.style.fontSize = "12px";
  contCheck = false;
  return contCheck;
}

function printMsjValido() {
  pOk.textContent = "Texto valido";
  div_Ok.appendChild(iCheck);
  div_Ok.appendChild(pOk);
  divValidaciones.appendChild(div_Ok);
  divError.remove();
  contCheck = true;
  return contCheck;
}

function cleanMsjValido() {
  divValidaciones.removeChild(div_Ok);
  divValidaciones.appendChild(divError);
}

async function traducirTexto(a, b) {
  texto = textoUsuario.value;
  const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      texto
    )}&langpair=${a}|${b}`
  );
  const data = await response.json();
  if (data.matches.length>0) {
    textoTraducido = data.matches[0].translation.toLowerCase();
    textoUsuario.value = textoTraducido;
  } else {
    textoTraducido = data.responseDetails;
    toastr.error("HAS EXCEDIDO EL LIMITE. CONSULTA MÁXIMA PERMITIDA: 500 CARACTERES")
  }
  return textoTraducido;
}

function ampliarFuente() {
  if (cont == 0) {
    textoUsuario.style.fontSize = "28px";
    areaTextoFinal.style.fontSize = "28px";
    cont = 1;
  } else if (cont == 1) {
    textoUsuario.style.fontSize = "38px";
    areaTextoFinal.style.fontSize = "38px";
    cont = 2;
  } else {
    textoUsuario.style.fontSize = "18px";
    areaTextoFinal.style.fontSize = "18px";
    cont = 0;
  }
  return cont;
}

function printMsjError(msj) {
  const div = document.createElement("div");
  const i = document.createElement("i");
  const p = document.createElement("p");

  div.classList.add("errorAlert");
  i.classList.add("fa-solid");
  i.classList.add("fa-circle-exclamation");
  p.textContent = msj;
  div.appendChild(i);
  div.appendChild(p);
  divValidaciones.appendChild(div);
}

function cleanMsjError() {
  let divErrorAlert = document.querySelectorAll(".errorAlert");
  for (let x = 0; x < divErrorAlert.length; x++) {
    divErrorAlert[x].remove();
  }
}

function scanearErrores(texto) {
  let contA = 0;
  let contB = 0;
  let contC = 0;
  texto = textoUsuario.value;

  let letra;
  let msj;
  if (validarTextoUsuario(texto) === false) {
    if (contCheck === true) {
      cleanMsjValido();
    }
    errorTextoUsuario();
    if (contErrores >= 1) {
      cleanMsjError();
    }
    for (let y = 0; y < texto.length; y++) {
      letra = texto[y];
      if (numeros.includes(letra)) {
        contA++;
      } else if (mayusculas.includes(letra)) {
        contB++;
      } else if (tildes.includes(letra)) {
        contC++;
      }
    }
    if (contA > 0) {
      msj = "El texto posee numeros";
      printMsjError(msj);
    }
    if (contB > 0) {
      msj = "El texto posee mayusculas";
      printMsjError(msj);
    }
    if (contC > 0) {
      msj = "El texto posee tildes";
      printMsjError(msj);
    }
    contErrores++;
    contCheck = false;
  } else {
    contErrores = 0;
    flagCheck = true;
    contCheck = true;
    cleanMsjError();
    limpiarAvisoError();
    printMsjValido();
  }
  arrayFlags = [contErrores, flagCheck, contCheck];
  return arrayFlags;
}

//Evento - Habilitar los botones cuando el textarea recibe el foco
textoUsuario.addEventListener("focus", () => {
  btnEncriptar.removeAttribute("disabled");
  btnDesencriptar.removeAttribute("disabled");
});

//Eventos del burger-buttom

//Desplegar y cerrar botonera de funcionalidades
iconoLista.addEventListener("click", (event) => {
  event.preventDefault();
  listIconBurger.style.display = "inline-flex";
  listIconBurger.classList.add("box_list");
  iconoLista.style.display = "none";
});

botonClose.addEventListener("click", (event) => {
  event.preventDefault();
  listIconBurger.style.display = "none";
  iconoLista.style.display = "inline-flex";
});

//Eventos para el boton de traduccion al Portugues
buttonPT.addEventListener("mouseover", (event) => {
  p_PT.style.display = "block";
});

buttonPT.addEventListener("mouseout", (event) => {
  p_PT.style.display = "none";
});

buttonPT.addEventListener("click", (event) => {
  event.preventDefault();
  if (textoUsuario.value == "") {
    toastr.error("Ingresa un texto por favor...","TEXTO VACIO..!!!");
  } else {
    traducirTexto(es, pt);
  }
});

//Eventos para el boton de traduccion al Espanol
buttonES.addEventListener("mouseover", (event) => {
  p_ES.style.display = "block";
});

buttonES.addEventListener("mouseout", (event) => {
  p_ES.style.display = "none";
});

buttonES.addEventListener("click", (event) => {
  event.preventDefault();
  if (textoUsuario.value == "") {
    toastr.error("Ingresa un texto por favor...","TEXTO VACIO..!!!");
  } else {
    traducirTexto(pt, es);
  }
});

//Eventos para el boton de Ampliar fuente
buttonTt.addEventListener("mouseover", (event) => {
  p_Tt.style.display = "block";
});

buttonTt.addEventListener("mouseout", (event) => {
  p_Tt.style.display = "none";
});

buttonTt.addEventListener("click", (event) => {
  event.preventDefault();
  if (textoUsuario.value == "") {
    toastr.error("Ingresa un texto por favor...","TEXTO VACIO..!!!");
  } else {
    ampliarFuente();
  }
});

//Eventos para el boton de Scanear Errores
buttonHead.addEventListener("mouseover", (event) => {
  p_head.style.display = "block";
});

buttonHead.addEventListener("mouseout", (event) => {
  p_head.style.display = "none";
});

buttonHead.addEventListener("click", (event) => {
  event.preventDefault();
  if (textoUsuario.value == "") {
    toastr.error("Ingresa un texto por favor...","TEXTO VACIO..!!!");
  } else {
    scanearErrores(texto);
  }
});

