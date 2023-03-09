import type Koa from "koa";
const Router = require("koa-router");
import * as fs from "fs";

// 创建路由
function useRouter(App: Koa) {
  fs.readdir(__dirname, {}, (err, files) => {
    if (err) return console.log("router file read error");

    files.forEach((routePath) => {
      if (routePath === "index.ts") return;
      const createRouter = require(`./${routePath}/index.ts`);
      App.use(createRouter(Router).routes());
      App.use(createRouter(Router).allowedMethods());
    });
  });
}

// 导出路由中间件
module.exports = useRouter;
