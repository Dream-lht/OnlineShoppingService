import { Context, Next } from "koa";
import cryptoJS from "../utils/cryptoJS ";
import { APP_ID } from "../app/config";
import { REGISTE_PARAMS_ERROR } from "../app/errorConstant";
import userService from "../service/user.service";
import handleResult from "../utils/handleResult";
/**
 * 注册控制器
 */

interface IRegisterParams {
  encryptedData: string;
  iv: string;
  rawData: string;
  signature: string;
  openid: string;
  session_key: string;
}

class RegisterController {
  async register(ctx: Context, next: Next) {
    // 对参数进行解密
    const registerData = ctx.request.body as IRegisterParams;
    const decodeData: any = cryptoJS.WXDecrypt(
      registerData.session_key,
      registerData.encryptedData,
      registerData.iv
    );

    if (decodeData.watermark !== APP_ID) {
      // 解析错误
      ctx.app.emit("error", REGISTE_PARAMS_ERROR, ctx);
    }
    // 将用户信息填入数据库当中
    const result = await userService.addUser(
      decodeData,
      registerData.openid,
      registerData.session_key
    );

    // 返回结果
    handleResult(200, "注册成功", [], ctx);
  }
}

export default new RegisterController();
