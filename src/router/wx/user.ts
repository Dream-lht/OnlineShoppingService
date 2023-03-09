// 导入注册控制器
import authVerify from "../../middleware/authVerify";
function createLoginRouter(wxRouter: any) {
  // 查询所有的用户信息
  wxRouter.get("/user", authVerify);
  // 返回特定用户信息
  wxRouter.get("/user/:id", authVerify);
}

module.exports = createLoginRouter;
