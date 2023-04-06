//board.js에서 디비접근,member.js 디비접근 --디비에 데이터 일곡 쓰고 전문 코드

var mysql = require("mysql");
//상수로 만든 이유는 내부 정보를 바꿀 게 아니라서...
const DBInfo = {
  connectionLimit: 10,
  host: "localhost",
  user: "user01",
  password: "1234",
  database: "mydb",
  port: 3306,
};

let readPool = mysql.createPool(DBInfo);
async function mysqlRead(sql, params) {
  let promise = new Promise((resolve, reject) => {
    readPool.getConnection((err, conn) => {
      if (err) {
        console.log(err);
        reject(err);
      }

      conn.query(sql, params, (err, rows) => {
        console.log(sql);
        console.log(rows);
        if (err) reject(err);
        else resolve(rows);
        conn.release();
      });
    });
  });
  await promise;
  return promise;
}

exports.mysqlRead = mysqlRead;
