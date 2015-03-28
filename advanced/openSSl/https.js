var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('private.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);