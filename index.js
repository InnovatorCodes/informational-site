const http = require("http");
const url = require("url");
const fs = require("fs");

const page404 = fs.readFileSync("404.html", "utf-8", (err, data) => {
  if (err) throw err;
  return data;
});

http.createServer(function(req,res){
    const address=url.parse(req.url,true);
    let filename;
    if(address.pathname=='/') filename='./index.html';
    else filename='.'+address.pathname+'.html';
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            res.write(page404);
            res.end();
        }
        else{
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        }
    })
}).listen(8080);
