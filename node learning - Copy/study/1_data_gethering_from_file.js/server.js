// server.js
const http = require('http');
const data = require('./data.js');

// First server on port 3000
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify({ email: 'anil@123' })); // Static data for this server
    resp.end();
}).listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Second server on port 4000
http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify(data)); // Dynamic data from data.js
    resp.end();
}).listen(4000, () => {
    console.log('Server is running on port 4000');
});
