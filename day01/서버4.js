let http = require("http");
let fs = require("fs");       //파일읽기
let url = require("url");    //url분석을 위한 라이블러

//http:127.0.0.1:4000/add?x=4&y=5

let server = http.createServer( (request,response)=>{
    //console.log( request);
    //console.log(request.url);        //전송url
    console.log(request.method);    //전송방식: GET

    let rurl = request.url;
    let pathname = url.parse(rurl,true).pathname;   //   /add
    let query = url.parse(rurl,true).query;    //{x:4, y:5}
    //string분석 -> json객체로 전환
    //파싱한다
    
   
    console.log(query);
    console.log(pathname);
    //console.log(type(query));

    if(pathname=="/add")
    {

    response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    let x=parseInt(query.x);
    let y=parseInt(query.y);
    let z= x+y;
    response.end(`${x} + ${y} = ${z}`);
}
else{
    response.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
    response.end("<h1>존재하지 않는 url입니다.</h1>");
}
})

server.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000");
});