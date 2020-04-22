const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const port = 1234 //port to React Webapp
const app = express()
const server = http.createServer(app)
const io = socketIO(server) // Socket IO server
var net = require('net');

var client = new net.Socket(); // Client JS

// Welcome NodeJS Client to Server Main App
client.connect(4567, 'localhost', function() { //port=4567 --> port to Server Main App
	client.write("This is client server")
	})
// ------------------------------------------
// Socket IO connect to Webapp --> send data to Server Main App
io.on('connect', socket => {
  console.log(socket.id+' : User connected')
	socket.emit("Server-greeting","Hello Client, this is Server")
	socket.on('Client-counter', function(data){
		console.log("Client Counter: "+data+'\r\n');


	})
	socket.on('Client-send-data', function(data){
		socket.emit("Update","ok")
		console.log(data);
		// client.write(data+'\r\n');
});

socket.on('disconnect', () => {
    console.log(socket.id + ' : User disconnected')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
