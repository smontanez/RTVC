RTVC
====

Proyecto Node.js
-------------

EEEste proyecto permite cambiar el contenido de una pagina html por el contenido de un archivo xml. 
Para esto se tiene un servicio web que usa node.js. Este escucha por el puerto 8000, y el cliente crea un websocket y cada vez que recibe un mensaje de respuesta se imprimen los datos en el browser.

Para ejecutar el proyecto se requieren 3 archivos:

1. **server.js** : servicio web que se debe ejecutar en la linea de comandos asi: node server.js

2. **client.html**: cliente que se debe cargar en el browser una vez el server.js se este ejecutando (http://localhost:8000)

3. **example.xml**: es el archico xml que se debe cambiar para que el contenido de client.html cambie al cargar en el browser


