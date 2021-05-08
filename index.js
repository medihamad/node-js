// responding with HTML webpages

const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const noPageFound = fs.readFileSync('notfound.html');

const server = http.createServer((req, res) => {
    if(req.url === '/about') res.end(about);
    else if (req.url === '/contact') res.end(contact);
    else if (req.url === '/') res.end(homePage);
    else {
        res.writeHead(404);
        res.end(noPageFound);
    }
});

server.listen(3000);