const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
  });

  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
    var sqluser = "CREATE TABLE users (name VARCHAR(255), messages VARCHAR(255))";

    con.query(sqluser, function (err, result) {
        if (err) throw err;
        console.log("Table created");
        con.end();
      });
  });