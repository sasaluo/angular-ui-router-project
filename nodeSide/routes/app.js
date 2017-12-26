var express = require("express");

var app  = express();  // express 执行方法对象  Router  使用中间件  设置路由

var server = require("http").Server(app);   // http代理注入 app 对象

var host = "192.168.50.111";

var port = 7000;

var url = require("url");

var mysql = require("mysql"); //引入mysql

var cookieParser = require('cookie-parser'); //处理cookie；
var bodyParser = require('body-parser');  //处理请求参数;

// 设值中间键
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//  创建mysql 连接
const conn = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "test",
    user: "root",
    password: "root"
})


//  连接数据库
conn.connect((err) => {
    if(err) throw err
});


// 匹配路由 定义接口

app.post("/users/insert", (req, res) => {
    console.log(req.url);
console.log(req.query);
console.log(req.body);

var insertSql = "insert into person (username,password) values (?,?)" //
var insertParams = ["haha","123456"];
conn.query(insertSql, insertParams, (err, result) => {
    if (err) throw err;
res.send("注册成功");
});

})



// 最后 关闭数据库
conn.end((err) => {
    if (err) throw err;
console.log("数据库已经关闭!");
})
