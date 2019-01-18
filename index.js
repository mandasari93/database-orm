const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manda1007",
  database: "todo_app"
});

connection.query("SELECT * FROM `todos`", (error, results) => {
  if (error) {
    console.log(error);
  }

  console.log(results);
});
