import { Context, Next } from "koa";
import servicePromise from "../../src/utils/servicePromise";
/**
 * 购物车模块服务
 */

class ShopCartService {
  async getShopCartListById(openid: string) {
    const selectSql = "select * from `shop_cart` where openid = ?";

    return await servicePromise(selectSql, [openid]);
  }
}
export default new ShopCartService();
