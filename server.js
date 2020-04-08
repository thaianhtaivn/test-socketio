// const express = require('express')
// const http = require('http')
// const socketIO = require('socket.io')
//
// // our localhost port
// const port = 9999
//
// const app = express()
//
// // our server instance
// const server = http.createServer(app)
//
// // This creates our socket using the instance of the server
// const io = socketIO(server)
//
// // This is what the socket.io syntax is like, we will work this later
// io.on('connect', socket => {
//   console.log(socket.id+' : User connected')
//   // console.log(socket)
//   socket.on('Client-send-data', function(data){
//     console.log(data);
//     io.sockets.emit("Server-send-data",data+" + Hello")
//   })
//   socket.on('Hello', function(data){
//     console.log(data);
//
//   })
//
//
//   socket.on('disconnect', () => {
//     console.log(socket.id + ' : User disconnected')
//   })
// })
//
// server.listen(port, () => console.log(`Listening on port ${port}`))
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp
server, but for some reason omit a client connecting to it.  I added an
example at the bottom.
Save the following server in example.js:
*/

var net = require('net');
const port=1234
const ip="localhost"
var textChunk = 'Hello';
var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.on('data', function(data){
		// console.log(data);
		textChunk = data.toString('utf8');
		console.log(textChunk);
		socket.write(textChunk);
	});
});
server.listen(port, ip, () => console.log(`Listening on: ${ip} : ${port}`));

/*
And connect with a tcp client from the command line using netcat, the *nix
utility for reading and writing across tcp/udp network connections.  I've only
used it for debugging myself.
$ netcat 127.0.0.1 1337
You should see:
> Echo server
*/

/* Or use this example tcp client written in node.js.  (Originated with
example code from
http://www.hacksparrow.com/tcp-socket-programming-in-node-js.html.) */

// var net = require('net');
//
// var client = new net.Socket();
// client.connect(1337, '127.0.0.1', function() {
// 	console.log('Connected');
// 	client.write('Hello, server! Love, Client.');
// });
//
// client.on('data', function(data) {
// 	console.log('Received: ' + data);
// 	client.destroy(); // kill client after server's response
// });
//
// client.on('close', function() {
// 	console.log('Connection closed');
// });
