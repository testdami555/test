var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hola Mundo MUY Feliz ...");
    res.end();
    console.log("Hola de la consola");
}).listen(80);