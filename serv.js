const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer((req,res) =>{
   if(req.url === '/'){
      sendRes ('index.html', 'text/html', res)
   } else {
      sendRes (req.url, getContentType(req.url), res);
   }
}).listen(process.env.PORT || 5000)

function sendRes(url, contentType, res){
    let file = path.join(__dirname + '/public/', url);
    fs.readFile(file, (err, content) => {
        if(err){
            res.writeHead(404);
            res.write('file not found');
            res.end();
            console.log(`error 404${file}`);
        }else{
            res.writeHead(200, {'Content-Type': contentType});
            res.write(content);
            res.end();
            console.log(`200${file}`);
        }
    })
};

function getContentType(url){
    if(path.extname(url) === '.html'){
        return 'text/html';
    } else if (path.extname(url) === '.css'){
        return 'text/css';
    } else if (path.extname(url) === '.js'){
        return 'text/javascript';
    } else if (path.extname(url) === '.json'){
        return 'application/json';
    } else {
        return 'application/octet - stream';
    }
};