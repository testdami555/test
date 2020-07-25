const http = require('http');
const port = 80;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<p>Hello World....</p>');
  res.write('<p>Hello World.</p>');
  res.write('<script>console.log("Soy la consola de Chrome")</script>');
  res.end();
});
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});