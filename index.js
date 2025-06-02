import http from 'http';
import fs from 'fs';

http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type': 'text/html'});
            if(err) console.log(err);
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/about'){
        fs.readFile('about.html',function(err,data){
            res.writeHead(200,{'Content-Type': 'text/html'});
            if(err) console.log(err);
            res.write(data);
            res.end();
        })
    }
    else if(req.url=='/contact-me'){
        fs.readFile('contact-me.html',function(err,data){
            res.writeHead(200,{'Content-Type': 'text/html'});
            if(err) console.log(err)
            res.write(data);
            res.end();
        })
    }
    else{
        fs.readFile('404.html',function(err,data){
            res.writeHead(404,{'Content-Type': 'text/html'});
            if(err) console.log(err);
            res.write(data);
            res.end();
        });
    }
}).listen(8080);
