// 登录接口
function createWebRouter(Router: any) {
  const wxRouter = new Router({ prefix: "/web" });
  wxRouter.post("/");
  return wxRouter;
}

module.exports = createWebRouter;
