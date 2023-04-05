// 注册模块别名
require("module-alias/register");
import serve from "koa-static";
import path from "path";

// 导入app
import app from "./app/app";
// 导入配置
import { APP_SERVER_PORT } from "./app/config";

// 开启静态资源的访问
app.use(serve(path.resolve(__dirname, "./upload")));

app.listen(APP_SERVER_PORT, () => {
  console.log("服务启动成功");
});

process.env.APPROOTPATH = __dirname;
