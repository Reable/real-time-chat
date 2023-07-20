require('dotenv').config();

const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = require('socket.io')(server, {
	cors: {
		origin: "*"
	},
});


app.use(express.json());
app.use(cors());

io.on('connection', async (socket) => {
	const userId = await fetchUserId(socket);
  
	socket.join(userId);
  
	// and then later
	io.to(userId).emit("hi");
})

server.listen(PORT, () => {
	console.log('server is running')
})