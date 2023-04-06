let mysql = require("mysql");
let pool = mysql.createPool({
  connectionLimit: 10,
  host: "127.0.0.1",
  user: "user01",
  password: "1234",
  database: "mydb",
  port: 3306,
});
//디비와 연결
pool.getConnection((err, Connection) => {
  //연결 성공시 con함수 실행
  //연결 실패시 err
  if (err) {
    console.log(err);
    return;
  }
  //con 실행시 연결 객체 전달
  console.log("Connection success");
  sql = `insert into tb_board(title, writer, contents, wdate)
        values(?,?,?,now())`;
  let params = [`제목2`, `임꺽정`, `내용2`];
  Connection.query(sql, params, (err, rows) => {
    if (err) {
      console.log("error");
    } else {
      console.log("insert 성공");
    }
  });

  sql = `select * from tb_board`; //select문 안에서는 ;쓰면 안된다
  Connection.query(sql, params, (err, rows) => {
    if (err) console.log("err");
    console.log(rows);
  });
});
console.log("end");
