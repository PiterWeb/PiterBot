const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PSW,
    database: process.env.DB,
  });

  var getConnection = function(callback) {
  pool.getConnection(function(err, connection ) {
        callback(err, connection); 
  });
  };
//   con.connnect(function(err) {
//     if (err) throw err;
//     polsole.log("polnected!");
//         var sqluserins = "INSERT INTO users (name) VALUES ('PiterZ')";

      function sqlinsert(task){
        getConnection();
        pool.query(task, function (err, result) {
          if (err) return console.error(err.message);
          console.log(result);
        });
      } 

      function sqlselect(task, callback){
        getConnection();
        pool.query(task, function (err, result , fields) {
          if (err) {
            return console.error(err.message);
          } else {
            callback(null,result[0].name);
          }
        });
      }   

  module.exports = {sqlinsert , sqlselect};

  
    // var sqlusertb = "CREATE TABLE users (name VARCHAR(255), messages VARCHAR(255))";

    // con.query(sqlusertb, function (err, result) {
    //     if (err) throw err;
    //     conssole.log("Table created");
    //     con.end();
    //   });
    
  // });
  