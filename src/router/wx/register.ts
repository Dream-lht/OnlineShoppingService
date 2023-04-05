// 导入注册控制器
import registerVerify from "../../middleware//registerVerify";
import registerController from "../../controller/registerController";
import authVerify from "../../middleware/authVerify";
function createRegisterRouter(wxRouter: any) {
  wxRouter.post(
    "/register",
    authVerify,
    registerVerify,
    registerController.register
  );
}

module.exports = createRegisterRouter;
