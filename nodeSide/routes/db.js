//链接myaql数据库
var mysql = require('mysql');
var pool = mysql.createPool({
    host:'loaclhost',
    user:'root',
    password:'123456lw',
    database:'test'
});

    function  query(sql.callback){
        pool.getConnection(function(err,connection){
            connection.query(sql,function(err,rows){

                callback(err,rows);
                connection.release();//释放链接

            })
        })
    }
    exports.query= query;