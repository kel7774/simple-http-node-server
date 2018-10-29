var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});res.write('Simple Server');
  res.end();  
}).listen(3000);

var fs = require('fs');

fs.appendFile('hello-world.txt', 'Hello to this great world!', function(err) {
    if(err) throw err;
    console.log('Saved!');
});