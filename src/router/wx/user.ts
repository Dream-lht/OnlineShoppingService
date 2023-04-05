// 导入注册控制器
import authVerify from "../../middleware/authVerify";
import userController from "../../controller/userController";
function createUserRouter(wxRouter: any) {
  // 查询所有的用户信息
  wxRouter.get("/user", authVerify);
  // 返回特定用户信息
  wxRouter.get("/user/:id", authVerify, userController.getUser);
  wxRouter.post("/user/:id", authVerify, userController.reviseUser);
}

module.exports = createUserRouter;
