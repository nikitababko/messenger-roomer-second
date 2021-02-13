const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('We have a new connection!');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('User had left!');
  });
});

app.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log(`Server has started on port ${PORT}`);
});
