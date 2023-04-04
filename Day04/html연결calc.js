var express = require("express")
var fs = require("fs");
var ejs = require("ejs");

var app = express();   //서버 만들었음


//bodyParse--install bodyParser를 하고 해야 한다.
//새버전에서는 express가 갖고 있다.
//post로 전송할때 request.body에 보낸 정보를 추가해서 사용이 간편하도록 도와주는 미들웨어이다
app.use(express.urlencoded({extended:false}));


app.get("/input", (request, response)=>{
     fs.readFile("./html/guguform.html", "utf-8", (err,data)=>{
        response.writeHead(200,{"Content-type":"text/html"});
        response.end(ejs.render(data));
    })    
});


app.get("/gugu",(request, response)=>{
   let x = parseInt(request.query.x);   //input 태그의 name 속성
   let gugu=0;
   for(i=1; i<=9; i++)
   {
    gugu=x*1;
   }


   //elseif 보다 if 쓰고 return 이 성능이 더 좋다!!!
   if(operator=="1"){
        response.send(`${x}+${y}=${x+y}`);
        return;}
   if(operator=="2"){
        response.send(`${x}-${y}=${x-y}`);
        return;}
   if(operator=="3"){
         response.send(`${x}*${y}=${x*y}`);
        return;}
   if (operator=="4"){
         response.send(`${x}/${y}=${x/y}`);
        return;}
});

app.use((request, response)=>{
    response.writeHead(200,{"Content-type":"text/html"});
    response.end("<H1>Express</H1>");

});

app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000");
})