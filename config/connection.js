// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config()

var connection = mysql.createConnection({
  port: 3306,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;