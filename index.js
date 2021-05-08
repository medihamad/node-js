//creating first server in node

const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Welcome to Node js');
})

server.listen(3000);