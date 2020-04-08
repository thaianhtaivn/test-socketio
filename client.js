var net = require('net');
var client = new net.Socket();
client.connect(1234, 'localhost', function() {
	console.log('Connected');
  // client.write('Client connected');
	client.write('Hello, server! Love, Client.');
});
var i = 0;
client.on('data', function(data) {
	console.log('Received: ' + data);
	i++;
	if(i==2){
    // client.write('Client disconnected');
    client.destroy();

  }
});
client.on('close', function() {
	console.log('Connection closed');
});
