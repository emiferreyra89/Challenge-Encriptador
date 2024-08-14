# 🔐 ¡Bienvenidas y bienvenidos a nuestro Encriptador!

### Este es el desarrollo de una aplicación capaz de transformar textos segun sus reglas de encriptacion.

<p style="text-align:center">
  <a href="#descripción">Descripción</a> ❖ 
  <a href="#funcionalidades">Funcionalidades</a> ❖ 
  <a href="#uso">Uso</a> ❖ 
  <a href="#instalación">Instalación</a> ❖ 
  <a href="#tecnologías">Tecnologías</a> ❖ 
  <a href="#estructura-del-proyecto">Estructura del Proyecto</a> ❖ 
  <a href="#deploy">Deploy</a> ❖ 
  <a href="#contribuciones">Contribuciones</a>
</p>


## Descripción
Esta aplicación permite encriptar textos para intercambiar mensajes secretos utilizando una serie de reglas específicas de encriptación. También puede desencriptar los mensajes encriptados de vuelta a su texto original.
### **Las "llaves" de encriptación que utilizaremos son las siguientes:**


<table>
  <tr>
    <th style="border: 1px solid white; text-align: center">Letra</th>
    <th style="border: 1px solid white; text-align: center">Conversión</th>
  </tr>
  <tr>
    <td>La letra "e"</td>
    <td>es convertida para "enter"</td>
  </tr>
  <tr>
    <td>La letra "i"</td>
    <td>es convertida para "imes"</td>
  </tr>
  <tr>
    <td>La letra "a"</td>
    <td>es convertida para "ai"</td>
  </tr>
  <tr>
    <td>La letra "o"</td>
    <td>es convertida para "ober"</td>
  </tr>
  <tr>
    <td>La letra "u"</td>
    <td>es convertida para "ufat"</td>
  </tr>
  <td></td>
  <td></td>
</table>


## Funcionalidades
+ Funciona solo con letras minúsculas  
+ No utiliza letras con acentos, números ni caracteres especiales.  
+ Convierte una palabra a su versión encriptada y devuelve una palabra encriptada a su versión original. Por ejemplo:  

    *"gato"* ➡️ *"gaitober"*  
    *"gaitober"* ➡️ *"gato"*

+ La página tiene un campo para la inserción del texto que será encriptado o desencriptado, y el usuario puede escoger entre las dos opciones.  
+ El resultado es mostrado en la pantalla.  
+ Incluye un botón que copia el texto encriptado/desencriptado al portapapeles, similar a la funcionalidad de ctrl+C o la opción "copiar" del menú de las aplicaciones.  
+ Burger-Button ☰  
    Encontrarás un burger-button (icono de tres líneas horizontales).
    Al hacer clic en él, se desplegará un menú con las siguientes opciones:
    + *Ampliar Texto* : permite ampliar el tamaño de la fuente.
    + *Scanear Errores* : scanea el texto y advierte de el o los posibles errores.
    + *Traducir a Portugues* : traduce el texto al Portugues.
    + *Traducir a Español* : traduce el texto al Español.


## Uso
1. Abre la página en tu navegador.
2. Ingresa el texto que deseas encriptar o desencriptar en el campo correspondiente.
3. Selecciona la opción de encriptar o desencriptar.
4. El resultado será mostrado en pantalla.
5. Usa el botón para copiar el resultado al portapapeles.
### **Desencripta nuestro mensaje secreto!**


*¡fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!*


## Instalación
Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Clona el repositorio a tu máquina local:
    ```bash
    git clone https://github.com/emiferreyra89/Challenge-Encriptador.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd encriptador
    ```
3. Abre el proyecto con Visual Studio Code:
    ```bash
    code .
    ```
4. Instala la extensión **Live Server** en Visual Studio Code.
5. Inicia el servidor Live Server:
    - Haz clic derecho en el archivo `index.html` y selecciona **"Open with Live Server"**.


## Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


## Estructura del proyecto
```
📁encriptador
│
├── 📁css
│   └── 📄estilos.css
├── 📁img
│   └── 🖼️(imágenes del proyecto)
├── 📄index.html
├── 📄app.js
└── 📄README.md
```


## Deploy
El proyecto está deployado en GitHub Pages y puedes acceder a él desde [aquí..](https://emiferreyra89.github.io/Challenge-Encriptador/)➡️


## Contribuciones
Este proyecto ha sido desarrollado por *Emiliano G. Ferreyra*

![License](https://img.shields.io/github/license/emiferreyra89/Challenge-Encriptador?style=flat-square)