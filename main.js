var  http=require('http');
var URL=require('url');

var server=http.createServer(function(req,res){

    var myURL="http://rabbil.com/blog.html?year=2020&month=july";

    var myURLobj=URL.parse(myURL,true);

    var myHostName=myURLobj.host;
    var myPathName=myURLobj.pathname;
    var mySearchName=myURLobj.search;

    res.writeHead(200,{'Content-Type':'Text/html'})

    res.write(myPathName);

    res.end();

  



    

});


server.listen(5050);
console.log("Server run successfully!");