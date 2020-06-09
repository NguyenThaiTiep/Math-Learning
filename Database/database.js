const mysql = require('mysql');
var pool = mysql.createPool({
    host: 'remotemysql.com',
    user: "StdK55tiWs",
    password: 'Tg5Ot2WVbn',
    database: 'StdK55tiWs'
});

pool.getConnection(function(err, connection) {
    console.log(err);
    connection.destroy();
});
//sao day
module.exports = pool;
