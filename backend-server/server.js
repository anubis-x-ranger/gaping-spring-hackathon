const express=require("express");
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require("socket.io");
const io =socket(server);


app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
  });
  
  server.listen(5000, () => {
    console.log('listening on *:5000');
  });

  io.on('connection', (socket) => {
    socket.emit("me",socket.id);

    // socket.on('chat message', (msg) => {
    //     console.log('message: ' + msg);
    //   });

    socket.on("disconnect",()=>{
        socket.broadcast.emit("callEnded");
    })

    socket.on("callUser",(data)=>{
        io.to(data.userToCall).emit("callUser",{signal: data.signalData, from:data.from, name:data.name})
    })

    socket.on("answerCall", (data)=> io.to(data.to).emit("callAccepted"),data.signal);

  });