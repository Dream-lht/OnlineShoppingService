// 导入登录控制器
import loginController from "../../controller/loginController";
import { loginVerify } from "../../middleware/loginVerify";
function createLoginRouter(wxRouter: any) {
  wxRouter.post("/login", loginVerify, loginController.login);
}

module.exports = createLoginRouter;
