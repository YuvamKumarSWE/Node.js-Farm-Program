const http = require('http');
const fs = require('fs');
const url = require('url');

const data = fs.readFileSync('./dev-data/data.json', 'utf-8');
//(err, data) => {
//     if (err) {
//         //res.writeHead(500, { 'Content-Type': 'text/plain' });
//         //res.end('Error reading the file');
//     } else {
//         const productData = JSON.parse(data);
//         //res.writeHead(200, { 'Content-Type': 'application/json' });
//         //res.end(data); // Return JSON data JSON.stringify(productData)
//     }
// }
const dataObj = JSON.parse(data);

// Create server
const server = http.createServer((req, res) => {
    console.log(req.url); // Log the request URL
    const pathName = req.url;

    switch (pathName) {
        case '/':
        case '/overview':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Overview Page');
            break;

        case '/api':
            // Read JSON data file
            res.writeHead(200, { 'Content-Type': 'application/json' });
             res.end(data);
            break;

        default:
            // Handle undefined routes
            res.writeHead(404, {
                'Content-Type': 'text/html',
                'my-own-header': 'hello-world'
            });
            res.end('<h1>404: Page Not Found</h1>');
            break;
    }
});

// Start the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listening on port 8000'); // Confirm server is running
});