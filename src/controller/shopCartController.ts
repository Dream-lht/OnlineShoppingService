import { Context, Next } from "koa";
import shopCartService from "../../src/service/shopCart.service";
import handleResult from "../../src/utils/handleResult";
/**
 * 购物车模块控制器
 */

class ShopCartController {
  // 获取购物车列表
  async getShopCartListById(ctx: Context, next: Next) {
    const { openid } = ctx.query as any;
    const data = await shopCartService.getShopCartListById(openid);

    console.log(data);

    handleResult(200, "查询成功", data, ctx);
  }
}

export default new ShopCartController();
