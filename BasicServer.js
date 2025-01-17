const http = require('http'); //Http module
// Read the content of input.txt
//fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
//   if (err) {
//        console.error('Error reading file:', err.message);
 //       return;
//    }
//    console.log('File Content:', data);
//});
require('url');

/*const server=
    //Create server {Callback function that runs when request hits }
    http.createServer((req, res) => {
    console.log(req.url); //info on request

        const pathName = req.url;
        if(pathName === '/' || pathName === '/overview'){
            res.end('overview');
        }
        else if(pathName === '/product'){
            res.end('product');
        }
        else{
            res.writeHead(404, {
                'Content-Type': 'text/html',
                'my-own-header': 'hello - world'

            });
            res.end('<h1>404</h1>');
        }

    // Response object
    //res.end('Hello World!'); //send back simple response
})

//Listen to requests
server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening on port 8000'); //Callback function when server starts running
});

// event loop keeps running and won't exit program
// Routing to react to different urls (express would simplify)
*/