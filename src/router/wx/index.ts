import * as fs from "fs";

// 登录接口
function createWxRouter(Router: any) {
  const wxRouter = new Router();
  fs.readdir(__dirname, {}, (err, filePaths) => {
    if (err) {
      console.log("file err" + err);
      return;
    }

    filePaths.forEach((path) => {
      if ("index.ts" === path) return;

      const createRoute = require(`./${path}`);
      createRoute(wxRouter);
    });
  });

  return wxRouter;
}

module.exports = createWxRouter;
