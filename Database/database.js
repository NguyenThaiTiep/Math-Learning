const sql = require("mysql");

var db = sql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "CNPM",
});
db.connect((err) => {
  if (err) throw err;
  else {
    console.log("Connected database...");
  }
});
module.exports = db;
