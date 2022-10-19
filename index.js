var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');
var tw = fs.readFileSync('tonweb.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/tonweb.js') res.end(tw);
    else res.end(index);
}).listen(9615);