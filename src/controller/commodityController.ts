import { Context, Next } from "koa";
import handleResult from "../utils/handleResult";
/**
 * 商品业务处理
 */
import commodityService from "../service/commodity.service";

class CommodityController {
  // 获取全部的商品列表
  async getCommodity(ctx: Context, next: Next) {
    const { pageSize, pageNum } = ctx.query as any;
    const data = await commodityService.getCommodityList(pageSize, pageNum);
    const total: any = (await commodityService.getCommodityTotal())[0];
    handleResult(
      200,
      "查询成功",
      [data, { total: total["count(commodity_id)"] }],
      ctx
    );
  }
  // 获取分类商品
  async getCommodityByType(ctx: Context, next: Next) {
    const { pageSize, pageNum, type } = ctx.query as any;
    const data = await commodityService.getCommodityByType(
      type,
      pageSize,
      pageNum
    );

    const total: any = (await commodityService.getCommodityTotal())[0];
    handleResult(
      200,
      "查询成功",
      [data, { total: total["count(commodity_id)"] }],
      ctx
    );
  }

  // 根据商品ID来获取商品信息
  async getCommodityById(ctx: Context, next: Next) {
    const { id } = ctx.params as any;
    const data = await commodityService.getCommodityById(id);

    handleResult(200, "查询成功", data, ctx);
  }

  // 删除商品
  async deleteCommodityById(ctx: Context, next: Next) {
    const { id } = ctx.params as any;
    await commodityService.deleteCommodityById(id);
    handleResult(200, "删除成功", [], ctx);
  }

  // 修改商品信息
  async updateCommodityById(ctx: Context, next: Next) {
    const commodity = ctx.request.body;
    await commodityService.updateCommodityById(commodity);
    handleResult(200, "更新成功", [], ctx);
  }
  // 新增商品
  async addCommodity(ctx: Context, next: Next) {
    const commodity = ctx.request.body;
    await commodityService.addCommodity(commodity);
    handleResult(200, "新增成功", [], ctx);
  }
}

export default new CommodityController();
