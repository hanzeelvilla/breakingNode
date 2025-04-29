const http = require('http'); // bad practice to use require

const server = http.createServer((req, res) => {
    // This is a simple example of a route
    if (req.method == 'GET' && req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('Hello World');
        res.end();
    }
})

server.listen(3000, () => { // PORT
    console.log('Server is running on port 3000');
});