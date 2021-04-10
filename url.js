const http=require("http");
var  url=require("url");
const { error, Console } = require("console");


http.createServer(function (req,res) {
    const urlObj = url.parse(req.url,true);
    console.log(urlObj);
    let tamil=urlObj.pathname;
    let tam =urlObj.path;
    
    console.log(tamil);
    console.log(tam);

}).listen(8000);