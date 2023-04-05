import { Context, Next } from "koa";
import jwt from "../utils/jwt";
import { TOKEN_ERROR_OTHER, TOKEN_NOT_CARRY } from "../app/errorConstant";
/**
 * 权限校验
 */

async function authVerify(ctx: Context, next: Next) {
  // 获取请求头的token
  const token = ctx.request.header.authorization;
  if (!token) {
    // 没有携带token
    return ctx.app.emit("error", TOKEN_NOT_CARRY, ctx);
  }

  const result = jwt.verifyToken(token as string);
  if (result.code !== 200) {
    // token验证错误
    return ctx.app.emit("error", TOKEN_ERROR_OTHER, ctx);
  }

  await next();
}

export default authVerify;
