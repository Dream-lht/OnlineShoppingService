// 导入注册控制器
import authVerify from "../../middleware/authVerify";
import upload from "../../middleware/fileVerify";
import fileController from "../../controller/fileController";
function createUploadRouter(wxRouter: any) {
  // 查询所有的用户信息
  wxRouter.post("/upload", authVerify, upload, fileController.uploadFile);
}

module.exports = createUploadRouter;
