// 对数据库进行链接
import mysql = require("mysql2");
import {
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_PORT,
} from "./config";
// 创建连接池
const connection = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  database: MYSQL_DATABASE,
  password: MYSQL_PASSWORD,
  port: Number(MYSQL_PORT),
});

// 检查数据库是否连接成功

connection.getConnection((err) => {
  if (err) {
    console.log("连接失败" + err);
    return;
  }

  console.log("连接成功");
});

// 导出连接
export default connection;
