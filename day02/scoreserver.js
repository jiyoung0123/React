let http=require("http");
let fs = require("fs");
let ejs = require("ejs");       //npm install ejs   --cmd창 관리자권한으로 실행해서 ejs 파일 설치함


let scoreData =[
    {name : "홍길동", kor:90, eng:90, mat:100},
    {name : "임꺽정", kor:80, eng:60, mat:60},
    {name : "장길산", kor:70, eng:70, mat:80},
    {name : "강감찬", kor:80, eng:90, mat:90},
    {name : "이순신", kor:100, eng:100, mat:100}
];
let server = http.createServer( (request, response) => {
  
  fs.readFile("./html/scoreData.html", "utf-8",(error, data) => {
    if(error) {
      response.writeHead(500, {'Content-Type':'text/html;charset=utf-8'});
      response.end("error"); // 오류상황임
      return;
    }
    response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    response.end(ejs.render(data, {
        scoreData:scoreData
    })); // 파일 내용을 브라우저로 보낸다.  ejs를 render를 해서 보낸다
   
    //ejs 템플릿 엔진을 통해서 html과 nodejs의 데이터를 결합한다
  });
})

server.listen(3000, () => {
    console.log("server start http://127.0.0.1:3000");
});

//