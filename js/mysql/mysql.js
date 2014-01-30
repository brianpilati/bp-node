var dbConfig = require('./mysql_config.js');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : dbConfig.host(),
  user     : dbConfig.user(),
  password : dbConfig.password(),
  database : dbConfig.database()
});

connection.connect();

function DBEngine() {
  init: {

  }
}

DBEngine.prototype = {
  helloWorld: function(callback) {
    connection.query('SELECT * from domosapien ', function(err, rows, fields) {
      if (err) throw err;
      callback(rows);
      /*for(row in rows) {
        console.log('The name is: ', rows[row].name);
      }
      */
    });
  }
}

exports.query = new DBEngine();

/*
exports.query = function() {
  var returnRows = undefined;
  var hello = "world";
  connection.query('SELECT * from domosapien ', function(err, rows, fields) {
    if (err) throw err;
    returnRows = rows;
    console.log("really? : " + hello);
    hello = "changed";
    /*for(row in rows) {
      console.log('The name is: ', rows[row].name);
    }
    * /
  });

  console.log("changed hello: " + hello);
  console.log(returnRows);
  return returnRows;
}
*/

exports.end = function() {
  console.log("Ending the mysql connection");
  connection.end();
}

