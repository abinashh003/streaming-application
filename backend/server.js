
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req,res)=>res.json({status:'ok'}));

const server = http.createServer(app);
const io = new Server(server,{cors:{origin:'*'}});

io.on('connection', socket=>{
  socket.on('chat-message', msg => io.emit('chat-message', msg));
});

server.listen(5000, ()=>console.log('Backend running on 5000'));
