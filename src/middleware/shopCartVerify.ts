import { Context, Next } from "koa";
import { PARAMS_ERROR } from "../app/errorConstant";

async function shopCartVerify(ctx: Context, next: Next) {
  const { openid } = ctx.query as any;

  //   参数错误
  if (!openid) {
    return ctx.app.emit("error", PARAMS_ERROR);
  }

  await next();
}
