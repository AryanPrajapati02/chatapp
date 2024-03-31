
// const http =require("http");
// const express = require('express');
// const path =require("path");
// const {Server} = require('socket.io');

// const app = express()


// const server = http.createServer(app);





// // app.use(express.static.join(__dirname, 'public'));

// const io = new Server(server); 
// io.on('connection', socket=>{
//     console.log('a user connected');
//     socket.on('chat message', message=>{
//       io.emit('chat message', message);
// })})
// app.use(express.static(path.join(__dirname, 'public')));


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// }
// )

// server.listen(9000, ()=>{
//     console.log('Server is running on port 9000')
// })
const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

// app.use(express.static(path.resolve("./public")));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.send("send");
});

server.listen(9000, () => console.log(`Server Started at PORT:9000`));