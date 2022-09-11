var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from app4!\n Port : 6001');
}).listen(6001, "127.0.0.1");
console.log('Server running at http://127.0.0.1:6001/');