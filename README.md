# 🔐 ¡Bienvenidas y bienvenidos a nuestro Encriptador!

### Este es el desarrollo de una aplicación capaz de transformar textos segun sus reglas de encriptacion.

## Descripción
Esta aplicación permite encriptar textos para intercambiar mensajes secretos utilizando una serie de reglas específicas de encriptación. También puede desencriptar los mensajes encriptados de vuelta a su texto original.
### **Las "llaves" de encriptación que utilizaremos son las siguientes:**

*La letra "e" es convertida para "enter"*  
*La letra "i" es convertida para "imes"*  
*La letra "a" es convertida para "ai"*  
*La letra "o" es convertida para "ober"*  
*La letra "u" es convertida para "ufat"*  

## Funcionalidades:
+ Funciona solo con letras minúsculas  
+ No utiliza letras con acentos, números ni caracteres especiales.  
+ Convierte una palabra a su versión encriptada y devuelve una palabra encriptada a su versión original. Por ejemplo:  

    *"gato" => "gaitober"*  
    *"gaitober" => "gato"*

+ La página tiene un campo para la inserción del texto que será encriptado o desencriptado, y el usuario puede escoger entre las dos opciones.  
+ El resultado es mostrado en la pantalla.  
+ Incluye un botón que copia el texto encriptado/desencriptado al portapapeles, similar a la funcionalidad de ctrl+C o la opción "copiar" del menú de las aplicaciones.  



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
- **HTML**
- **CSS**
- **JavaScript**


## Estructura del proyecto
```
encriptador/
│
├── css/
│ └── estilos.css
├── img/
│ └── (imágenes del proyecto)
├── index.html
├── app.js
└── README.md
```


## Deploy
El proyecto está deployado en GitHub Pages y puedes acceder a él [aquí](https://emiferreyra89.github.io/Challenge-Encriptador/)


## Contribuciones
Este proyecto ha sido desarrollado por *Emiliano G. Ferreyra*. No se aceptan contribuciones externas por el momento.
