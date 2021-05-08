//responding with different messages depending on the request

const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') res.end('HomePage');
    else if (req.url === '/contact') res.end('contact page');
    else if (req.url === '/about') res.end('about page');
    else {
        res.writeHead(404);
        res.end('page not found');
    }
});

server.listen(3000);