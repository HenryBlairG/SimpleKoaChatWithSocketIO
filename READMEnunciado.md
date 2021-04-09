# IIC2173 - Entrega 0

Esta primera parte del proyecto sirve para que se familiaricen con la nube donde montarán sus proyectos y creen la aplicación que servirá de base para las entregas siguientes.

## Objetivo

La entrega tiene por objetivo ser una introducción al trabajo con servicios en la nube. Para ésto, deberán configurar un servidor básico en la nube y *deployear* una pequeña aplicación.

## Fecha límite

Debe ser entregada a más tardar a las 23:59 del domingo 6 de Septiembre. Las condiciones de entrega están explicadas más abajo.

### Método de entrega

Deben subir el código de su solución junto al archivo de configuracion de Nginx (o Traefik) en el repositorio que se les asignará vía github classroom. 

Deben inscribirse en AWS via el link que se les enviará el lunes 17. Recibirán créditos por esta inscripción.

También deben entregar el archivo .pem asociado al servidor EC2 para revisarla.
Además, para poder facilitar la corrección deben realizar un README.md que señale:

- Consideraciones generales
- Nombre del dominio
- Método de acceso al servidor con archivo .pem y _ssh_ (no pubicar estas credenciales en el repositorio). 
- Logrado o no logrado y comentarios si son necesarios para cada aspecto a evaluar en la Parte mínima y en la Parte variable.
- De realizar un tercer requisito variable también explicitar en el readme.

Pueden sobreescribir este README sin problemas o cambiarle el nombre

## Requisitos
Esta entrega consiste en dos partes, la parte mínima (que todos deben lograr) que vale **50%** de la nota final y una parte variable que también vale **50%**. Sobre la parte variable, tendrán 3 opciones para trabajar, de las que deberán escoger 2. Cada una de las que escojan para evaluar vale **25%** de la nota final, y realizar una tercera parte puede dar hasta 3 décimas.

---

## Parte mínima

Deberán crear y configurar un servicio web que implemente un chat anónimo, donde los usuarios puedan hablar con un alias temporal. 

El servicio de chat pueden desarrollarlo con el framework que deseen de esta lista

* Go
* Rust
* Haskell
* Ruby
    * Rails *
* Flask
* C/C++ :ok_hand:
* ASP.NET
* Python
    * FastAPI H *
    * Django *
    * TurboGears
* Javascript
    * Koa/express H *
    * Hapi
    * Express
    * Restify
    * Meteor
* Java
* Kotlin
* Prolog?
* Brainfuck 

Nótese que PHP está ausente, es intencional.
Los frameworks o lenguajes marcados con H son los que los ayudantes podrían responder dudas puntuales u orientarlos. Marcados con \*, son los recomendados para proseguir con las otras entregas

Cada servidor tendrá que tener un dominio asignado. Los dominios TK, ML o GA son gratuitos, y pueden conseguirlos fácilmente en _Freenom_ o en el github student pack

Finalmente, en el servidor deberán configurar un servicio *proxy* inverso con NGINX que esté escuchando en el puerto 80.

👀: **Cabe recalcar que lo más importante no es que el chat esté funcionando al 100%, sino que el servidor exista y se pueda acceder a él correctamente. El servidor es prioridad pero no tener el chat funcional lleva descuento**

Les sugerimos fuertemente invertir el minimo de tiempo en la interfaz visual: haremos un cambio en entregas futuras porque sinceramente no queremos más apps web.
¯\\_(ツ)_/¯
Si hacen algo como un 4chan y funciona, bien.

El chat debe poder enviar mensajes y que se registre su timestamp. Además, se debe tener la posibilidad de crear salas de chat. También, se debe utilizar un nickname para cada usuario, puede ser aleatorio o definido antes de entrar al chat. Opcionalmente pueden capturar el *user_agent* con el que está ingresando el usuario. 

---

### Seccion mínima (50%) (30p)


* **RF1: (5p)** Se debe poder enviar mensajes y se debe registrar su timestamp. Estos mensajes deben aparecer en otro usuario, ya sea en tiempo real o refrescando la página. **El no cumplir este requisito completamente limita la nota a 3.9**
* **RF2: (3p)** Se puede crear salas de chat.
* **RF3: (2p)** Se debe utilizar un nickname para cada usuario, libremente.
* **RNF1: (4p)** Debe haber un proxy inverso (como Nginx y Traefik) configurado.
* **RNF2: (3p)** El servidor debe tener un nombre de dominio de primer nivel (tech, me, tk, ml, ga, com, cl, etc)
* **RNF3: (5p)** El servidor debe estar corriendo en EC2.
* **RNF4: (3p)** Debe haber una base de datos externa asociada a la aplicación para guardar mensajes y consultarlos. Debe estar hosteada en otro servidor o container.
* **RNF5: (5p)** El servicio debe estar dentro de un container Docker.

---

## Seccion variable

Deben completar al menos 2 de los 3 requisitos

### Docker-compose (25%) (15p)

Componer servicios es esencial para obtener entornos de prueba confiables, especialmente en las maquinas de los desarrolladores. Arriesguense con este fascinante desafio

* **RNF1: (5p)** Lanzar su app desde docker-compose
* **RNF2: (5p)** Integrar db desde docker-compose
* **RNF3: (5p)** Configurar su proxy inverso desde docker-compose

### HTTPS (25%) (15p)

La seguridad es esencial para sus usuarios. Perfectmente podrian falsear el contenido del *buscacursos* y ustedes no se darian cuenta. Deben 

* **RNF1: (7p)** El dominio debe estar asegurado por SSL con Let's Encrypt.
* **RNF2: (3p)** Debe poder redireccionar HTTP a HTTPS.
* **RNF3: (5p)** Se debe ejecutar el chequeo de expiracion del certificado SSL de forma automática 2 veces al día (_solo se actualiza realmente si está llegando a la fecha de expiración_).


### Comandos in-chat (25%) (15p)

Los comandos in chat son muy populares en plataformas de chat mas avanzadas que WhatsApp o Facebook messenger. Usualmente siguen la fórmula */asl* o */ban*

* **RF1: (9p)** Implementacion de al menos un comando in-chat
* **RF2: (4p)** Implementar 2 comandos 
* **RF3: (2p)** Implementar 3 comandos

---

## Enlaces relevantes
 * https://education.github.com/pack
 * https://www.tutorialspoint.com/docker/docker_compose.htm
 * https://phoenixnap.com/kb/ssh-to-connect-to-remote-server-linux-or-windows
 * https://www.digitalocean.com/community/tags/deployment?type=tutorials
 * https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04-quickstart
 * https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/
 * https://www.freenom.com/es/index.html?lang=es
 * https://www.youtube.com/watch?v=XvyjIG2F-cs
 * https://www.nginx.com/blog/using-free-ssltls-certificates-from-lets-encrypt-with-nginx/

---

## Criterios de evaluación

La nota se calculará como:

$E_0 = 6 *(0.5 * ParteMinima + 0.25 * ReqVar_1 + 0.25 * ReqVar_2) + 1$

Además considere el bonus de 0.3 si logra hacer otro requisito variable.
Ej. Si tengo la mitad del puntaje en la parte mínima y el puntaje completo en los requisitos variables:

$E_0 = 6 *(0.5 * 0.5 + 0.25 * 1 + 0.25 * 1) + 1 = 5.5$

*Cualquier error en el enunciado por favor reportenlo para analizarlo, via correo o slack*
