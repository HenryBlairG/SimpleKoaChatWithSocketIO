# Entrega 0: CHEESECORD CHAT

>[https://cheesecord-chat.codes/](https://cheesecord-chat.codes/)
>
>[https://www.cheesecord-chat.codes/](https://www.cheesecord-chat.codes/)

## FrameWork Utilizado

Para esta entrega, se decidió usar NodeJS con Koa

### Librerias utilizadas

* Koa
* Socket.io
* pg
* sequelize

## Proceso Llevado a cabo

- [X] En primer lugar quería hacer funcionar en mi aplicación desde mi propio entorno. En este punto se crearon los dos archivos que conforman la funcionalidad de enviar y transmitir a todos los mensajes enviados. Sin base de datos, sin salas de Chat. No hice caso de no centrarme en que se viera bonito y lo más ironico es que no se ve tan bonito :frowning_face: (Completado el 22/08/2020)

- [X] Incluir Base de datos
- [X] Meter solucion en contenedores para que sea administrado por `docker-compose`
- [X] Deploy en ec2-aws

## Fuentes de Inspiración y Referencias

* [ejemplo socket.io](https://socket.io/get-started/chat/)
* [Koa - TutorialsPoint](https://www.tutorialspoint.com/koajs/index.htm)
* [W3Schools HTML](https://www.w3schools.com/html/default.asp)
* [W3Schools CSS](https://www.w3schools.com/css/default.asp)
* [Tutorial: Crear un chat con NodeJS y Socket.io](https://unipython.com/crear-un-chat-con-nodejs-y-socketio/)
* [How to get Socket.io 2 to work with Koa 2?](https://github.com/koajs/koa/issues/1041)
* [How to Build A Single Page Application](https://clockwise.software/blog/single-page-applications-are-they-a-good-choice-for-your-project/)
* [Using Docker-compose for Node Dev](https://rollout.io/blog/using-docker-compose-for-nodejs-development/)
* [Getting Started with Postresql using Docker-compose](https://medium.com/analytics-vidhya/getting-started-with-postgresql-using-docker-compose-34d6b808c47c)

* [Dockerizing a nodejs webApp](https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application)

## Funcionamiento

Una vez ingresando la url, se puede asignar nickname y crear salas a libre elección. En caso de no escoger nickname se asigna anónimo
