// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "i943okdfa47xqzpy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  username: "x8uxbmjzmhoaum1y",
  password: "edwho1mr34m1tj9z",
  database: "nacbpa1xosp7pzyd"
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;