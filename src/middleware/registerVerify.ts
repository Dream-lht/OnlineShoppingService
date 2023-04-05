import { Context, Next } from "koa";
import { REGISTE_PARAMS_ERROR } from "../app/errorConstant";

/**
 * 注册校验
 */

interface IRequestData {
  encryptedData: string | undefined;
  iv: string | undefined;
  rawData: string | undefined;
  signature: string | undefined;
  openid: string | undefined;
  session_key: string | undefined;
}

async function registerVerify(ctx: Context, next: Next) {
  // 校验传递过来的参数
  const registerData = ctx.request.body as IRequestData;

  if (
    !registerData.encryptedData &&
    !registerData.iv &&
    !registerData.rawData &&
    !registerData.session_key &&
    !registerData.session_key &&
    !registerData.openid
  ) {
    return ctx.app.emit("error", REGISTE_PARAMS_ERROR, ctx);
  }
  await next();
}

export default registerVerify;
