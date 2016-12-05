const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
/*const static = require('node-static');
const file = new static.Server('.');*/
const PORT = 7000;

const mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"};

let server = http.createServer(handleRequest);

server.listen(PORT, ()=> console.log("Server listening on: http://localhost:%s", PORT));

function handleRequest(req, res) {
    let uri = url.parse(req.url).pathname;
    // res.end('It Works!! Path Hit: ' + req.url);

    switch (uri) {
        case "/":
            uri += "index.html";
            break;
    }

    let filename = path.join(__dirname, '/src/client/', uri);

    fs.access(filename, fs.F_OK, function(err) {
        if(err) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            return res.end();
        }

        let mimeType = mimeTypes[path.extname(filename).split(".")[1]];
        res.writeHead(200, {'Content-Type':mimeType});
        let fileStream = fs.createReadStream(filename);
        fileStream.pipe(res);
    });
}