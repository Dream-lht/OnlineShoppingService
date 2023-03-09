// 注册模块别名
require("module-alias/register");

// 导入app
import app from "./app/app";
// 导入配置
import { APP_SERVER_PORT } from "./app/config";

app.listen(APP_SERVER_PORT, () => {
  console.log("服务启动成功");
});

process.env.APPROOTPATH = __dirname;
