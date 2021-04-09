let io = require('socket.io');
let http = require('http');
let path = require('path');
let Koa = require('koa');
let fs = require('fs');
let db = require('./db/database.js');


let app = new Koa();
app.use(
    async (ctx) => {
        ctx.type = 'html';
        ctx.body = fs.readFileSync(
            path.resolve(
                __dirname,
                './views/main.html'
            )
        )
    }
);


let srv = http.createServer(app.callback());


let skt = io(srv);
skt.on(
    'connection',
    async (socket) => {
        console.log('New User Connected, Lets show all rooms available!!');
        db.Message.findAll({
            attributes: [
                'roomName'
            ],
            where: {
                msgContent: '!!!!!!!!!!', 
                userName: '!!!!!!!!!!'
            }
        }).then(rooms => {
            skt.to(socket.id).emit(
                'rooms_available',
                rooms
            );
        }).catch(err => console.log('Error with query', err));

        socket.on(
            'new room',
            async (r_name) => {
                db.Message.create({
                    roomName: r_name, 
                    msgContent: '!!!!!!!!!!', 
                    userName: '!!!!!!!!!!'
                }).then(new_room => {
                    console.log('user create new room',new_room.roomName);
                    skt.emit('new room', r_name);
                }).catch(err => console.log('Error with query', err));
            }
        );

        socket.on( // TODO: Falta aprender a desempaquetar los mensajes!!!!
            'get room',
            async (room) => {
                db.Message.findAll({
                    attributes: [
                        'createdAt', 
                        'userName', 
                        'msgContent'
                    ],
                    where: {
                        roomName: room
                    }
                }).then(
                    resp => {
                        console.log('user retrieve room', room);
                        skt.to(socket.id).emit('get room', resp);

                    }
                ).catch(err => console.log('Error with query', err));
            }
        );

        socket.on(
            'chat message',
            async (msg) => {
                console.log('user send msg', msg);
                // Insertar y mensaje a bd y envia a todos
                db.Message.create(
                    {
                        msgContent: msg.cont,
                        roomName: msg.room,
                        userName: msg.name
                    }
                ).then(
                    msg_created => {
                        let msg_bd = {};
                        msg_bd.room = msg.room;
                        msg_bd.timestamp = msg_created.createdAt;
                        msg_bd.name = msg.name;
                        msg_bd.cont = msg.cont;
                        skt.emit(
                            'chat message',
                            msg_bd
                        );
                    }
                ).catch(err => console.log('Error with query', err));
            }
        )

        socket.on(
            'disconnect',
            async () => {
                console.log('User Disconnected :C');
            }
        )
    }
);


// srv.listen(3000, console.log('Listening on Port 3000'));
srv.listen(8080, console.log('Listening on Port 8080'));