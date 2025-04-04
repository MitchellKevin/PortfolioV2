require('dotenv').config();
const express = require('express');
const http = require('http'); // Nodig voor Socket.IO
const { Server } = require('socket.io'); // Importeer Socket.IO
const path = require('path');

const port = 8000;
const app = express();
const server = http.createServer(app); // Maak een HTTP-server
const io = new Server(server); // Koppel Socket.IO aan de server

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index'); // Zorg ervoor dat je een `index.ejs` hebt
});

// Socket.IO logica
io.on('connection', (socket) => {
  console.log('A user connected');

  // Luister naar berichten van de client
  socket.on('chat message', (msg) => {
    console.log('Message: ' + msg);
    io.emit('chat message', msg); // Stuur het bericht naar alle clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start de server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});