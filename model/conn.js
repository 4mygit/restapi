var mysql = require('mysql');

var conn = mysql.createConnection({
    host: this.host,
    user: "root",
    password: "",
    database: "hypersmoc2"
  });

  conn.connect(function(err) {
    if (err) throw err;
});


module.exports = conn;