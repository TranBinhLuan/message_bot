var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'calm-dawn-19611.herokuapp.com');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');
