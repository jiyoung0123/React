let http = require("http");
let fs = require("fs");       //파일읽기
let url = require("url");    //url분석을 위한 라이블러


//http:127.0.0.1:4000/userinfo?userid=test&username=Tom

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

    if(pathname=="/userinfo")ㅇ
    {

    response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    let userid=query.userid;
    let username=query.username;
    response.end(`userid는 ${userid} 이고 username은 ${username} 이라는데 누구냐`);
}
else{
    response.writeHead(404,{'Content-Type':'text/html;charset=utf-8'});
    response.end("<h1>존재하지 않는 url입니다.</h1>");
}
})

server.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000");
});