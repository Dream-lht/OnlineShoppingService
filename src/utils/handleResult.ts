import { Context } from "koa";
/**
 * 处理返回值
 */

interface IRuselt {
  code: number;
  message: string;
  data: unknown[];
}

function handleResult(
  code: number = 200,
  message: string = "success",
  data: unknown[] = [],
  ctx: Context
) {
  ctx.body = {
    code: code,
    data: data,
    message: message,
  };
}

export default handleResult;
