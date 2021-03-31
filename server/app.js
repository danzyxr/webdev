import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
});

console.log(server);

server.listen(process.env.PORT || 3000);

console.log(process.env);

// TODO:
// Does not work unless I cd ./server
// Is there an npm script I can automate?
// Error: ENOENT: no such file or directory, open 'index.html'
