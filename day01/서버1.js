let http = require("http");

http.createServer( (request,response)=>{
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end("<H1>Hello my first Webserver</H1>")
    //listen(3000 )이 3000이 포트번호,,, 여기의 3000과 http뒤의 3000이 맞아 떨어져야 한다
    //유명한 포트번호들이 있으니 2000번 안으로 쓰면 안된다.
}).listen(3000,()=>{
    console.log("server start http://127.0.0.1:3000");
});