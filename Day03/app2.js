var express = require("express")
var app = express();   //서버 만들었음

//http://127.0.0.1:4000/add?x=45&y=7
app.get("/add",(req,res)=>{
    let x = parseInt(req.query.x);
    let y = parseInt(req.query.y);
    res.send((x+y).toString());
})


app.get("/add/:x/:y", (req,res)=>{
   
        x= req.params.x;
        y= req.params.y;
        z= parseInt(x)+parseInt(y);
        res.send({x:x, y:y,z:z});
    }
 
)


//http://127.0.0.1:4000/add/45/7
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