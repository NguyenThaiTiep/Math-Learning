const sql = require('mysql');

var db = sql.createConnection({
    host: 'remotemysql.com',
    user: "StdK55tiWs",
    password: 'Tg5Ot2WVbn',
    database: 'StdK55tiWs'
})
db.connect((err) => {
    if (err) throw err;
    else {
        console.log("Connected database...")
    }
})
module.exports = db;
