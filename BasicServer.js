const http = require('http');
const fs = require('fs');
const url = require('url');

//sync code runs only once at the start
const data = fs.readFileSync('./dev-data/data.json', 'utf8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathname = req.url;

    switch (pathname) {
        case '/':
            res.end('Hello World!');
            break
        case '/overview':
            res.end('Overview');
            break;
        case '/api':
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
            break;
        default:
            res.writeHead(404, {'content-type': 'text/html',
                'my-own-header' : "Hello World!"
            });
            res.end('<h1>Not Found!</h1>');
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server started!');
});
