/**
 * 登录校验
 */
import type { Context, Next } from "koa";
import { CODE_NOT_FOUND } from "../app/errorConstant";

export interface ILoginParams {
  code: string | undefined;
}

async function loginVerify(ctx: Context, next: Next) {
  // 获取前端的登录code和身份信息
  const body: ILoginParams = ctx.request.body as ILoginParams;
  const { code } = body;

  console.log(code);
  // 手机号或者登录code未输入
  if (!code) {
    return ctx.app.emit("error", CODE_NOT_FOUND, ctx);
  }

  await next();
}

export { loginVerify };
