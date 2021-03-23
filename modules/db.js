const mysql = require('mysql');

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
  });

  con.connect(function(err) {
    if (err) return console.error(err.message);
    console.log("Connected!");
    
      });
//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//         var sqluserins = "INSERT INTO users (name) VALUES ('PiterZ')";

      function sqlinsert(task){
        con.query(task, function (err, result) {
          if (err) return console.error(err.message);
          console.log(result);
          con.end();
        });
      } 

      function sqlselect(task){
        con.query(task, function (err, result , fields) {
          if (err) return console.error(err.message);
          return result[0].name;
          con.end();
        });
      }   

  module.exports = {sqlinsert , sqlselect};

       

//       }
    // var sqlusertb = "CREATE TABLE users (name VARCHAR(255), messages VARCHAR(255))";

    // con.query(sqlusertb, function (err, result) {
    //     if (err) throw err;
    //     console.log("Table created");
    //     con.end();
    //   });
    
  // });