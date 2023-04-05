import { Context, Next } from "koa";
import commodityService from "../service/commodity.service";
import { PARAMS_ERROR } from "../app/errorConstant";
/**
 * 商品参数校验
 */

async function commodityVerify(ctx: Context, next: Next) {
  // 判断参数传递
  const { pageSize, pageNum } = ctx.query as any;

  if (!pageNum || !pageSize) {
    // 参数传递错误
    return ctx.app.emit("error", PARAMS_ERROR);
  }
  const total: any = (await commodityService.getCommodityTotal())[0];

  if (Math.floor(total["count(commodity_id)"] / pageSize) < pageNum) {
    // 参数传递错误
    return ctx.app.emit("error", PARAMS_ERROR);
  }
  await next();
}

export default commodityVerify;
