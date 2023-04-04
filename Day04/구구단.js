var express = require("express")
var app = express();   //서버 만들었음



//http://127.0.0.1:4000/gugu?dan=4

app.get("/gugu",(request,response)=>{
    //구구단인데 parseint 안 씀. 왜? 더하기 연산자가 없으니.. 
    //node.js는 자동형전환. 더하기면 붙여주는 걸로 stirng 연산이 되는데 곱하기면 자동으로 형변환 해준다
   let dan = request.query.dan;
   let result = "";
   for(i=1; i<=9; i++)
   { 
    result += `${dan}*${i} = ${dan*i}<br/>`
   }
   console.log(result);
   response.writeHead(200,{"Content-type": "text/html"});
   response.end(result);
   //response.end("Hello");   //이미 data 보내기 완료 했으니, error가 발생하는 코드. 주의할것
})


//http://127.0.0.1:4000/gugu/4

app.get("/gugu/:dan",(request,response)=>{
    let dan = request.params.dan;   //url에 따라서 :dan
    let result = "";
    for(i=1; i<=9; i++)
    { 
     result += `${dan}*${i} = ${dan*i}<br/>`
    }
    console.log(result);
    response.writeHead(200,{"Content-type": "text/html"});
    response.end(result);
 })

//http://127.0.0.1:4000/add3/45/7
app.get("/add3/:x/:y", (request, response) => {
    console.log(request.params);
    let cal = {
      x: request.params.x,
      y: request.params.y,
      "x+y": parseInt(request.params.x) + parseInt(request.params.y),
    };
    response.send(cal); //send 함수를 이용해 json 송신
  });


app.use((request, response)=>{
    response.writeHead(200,{"Content-type":"text/html"});
    response.end("<H1>Express</H1>");

});


app.listen(4000, ()=>{
    console.log("server start http://127.0.0.1:4000");
})