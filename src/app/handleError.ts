/**
 * 错误处理
 */
import { Context } from "koa";
import { ICustomError } from "./errorConstant";
const errorConstant = require("./errorConstant");
function handleError(error: ICustomError, ctx: Context) {
  const body = {
    code: error.code,
    data: [],
    message: error.message,
  };
  ctx.body = body;
}

export default handleError;
