var dbConnection = require('../mysql/mysql.js');

var hostname = 'nodeserver.local.com';
var port = '1337';
var http = require('http');
var httpServer = http.createServer(function (req, res) {
  console.log(req);
  console.log(res);
  try {
    dbConnection.query.helloWorld(function(data) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write("Request: " + req + '\n');
      res.write("Res: " + res + '\n');
      res.write(dbConnection + '\n');
      res.write("data\n");
      res.write("data: " + data + '\n');
      res.end('Hello World\n');
    });
  } catch (err) {
    console.log(err);
  }
}).listen(port, hostname);
console.log('Server running at http://' + hostname + ':' + port + '/');

function terminateServer() {
  console.log("terminating the server");
  httpServer.close();
  dbConnection.end();
}

process.on( 'SIGINT', function() {
  terminateServer();
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  process.exit( );
})

process.on('SIGTERM', function () {
  terminateServer();
  console.log("Closing");
});
