var hostname = 'nodetcpserver.local.com';
var port = '1338';
var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(port, hostname);
console.log('Server running at http://' + hostname + ':' + port + '/');
