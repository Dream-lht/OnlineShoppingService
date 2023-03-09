// 登录接口
function createCommonRouter(Router: any) {
  const wxRouter = new Router();
  wxRouter.post("/");
  return wxRouter;
}

module.exports = createCommonRouter;
