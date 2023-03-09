import { Next } from "koa";
import { Context } from "koa";
import loginService from "../service/login.service";
import handleResult from "../utils/handleResult";
import { SESSION_KEY_EXPIRED } from "../app/errorConstant";
import type { ILoginParams } from "../middleware/loginVerify";
import userService from "../service/user.service";
import jwt from "../utils/jwt";

interface ILoginController {
  login(ctx: any, next: any): void;
}

interface resultData {
  isRegister: boolean;
  openid: string | undefined;
  session_key: string | undefined;
  token: string | undefined;
}

class LoginController implements ILoginController {
  async login(ctx: Context, next: Next) {
    const data: resultData = {
      isRegister: true,
      openid: "",
      session_key: "",
      token: "",
    };
    console.log("进入");
    const { code } = ctx.request.body as ILoginParams;
    console.log(code);
    // 校验code.获取用户openid和session_key
    const weChatData = await loginService.getUserInfoByCode(code);
    if (weChatData.errcode || weChatData.errmsg) {
      console.log(weChatData);
      return ctx.app.emit("error", SESSION_KEY_EXPIRED, ctx);
    }

    data.openid = weChatData.openid;
    data.session_key = weChatData.session_key;

    // 校验数据库当中是否包含用户信息
    const userInfo = await userService.getUserInfoByOpenId(weChatData.openid);
    if (!userInfo.length) {
      // 用户未注册
      data.isRegister = false;
    }
    // 生成token返回
    data.token = jwt.generateToken({ openid: data.openid });
    handleResult(200, "success", [data], ctx);
  }
}

export default new LoginController();
