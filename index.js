// responding with HTML webpages

const http = require('http');
const fs = require('fs');

const homepage = fs.readFileSync('index.html');