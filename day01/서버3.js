let http = require("http");
let fs = require("fs");       //파일읽기
let url = require("url");    //url분석을 위한 라이블러

//http:127.0.0.1:4000?name=Tom&age=17

let server = http.createServer( (request,response)=>{
    //console.log( request);
    console.log(request.url);        //전송url
    console.log(request.method);    //전송방식

    let rurl = request.url;
    let query = url.parse(rurl,true).query;
    //string분석 -> json객체로 전환
    //파싱한다
    
    if(query.name!="")
    {
    console.log(query);

    response.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'});
    response.end(`이름:${query.name}  나이:${query.age}`);
}
})

server.listen(4000,()=>{
    console.log("server start http://127.0.0.1:4000");
});