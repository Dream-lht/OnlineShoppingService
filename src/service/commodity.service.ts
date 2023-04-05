import { Next } from "koa";
import { Context } from "koa";
/**
 * 商品服务
 */

import servicePromise from "../utils/servicePromise";

class CommodityService {
  // 根据ID获取商品
  async getCommodityById(id: string) {
    const selectSql = "select * from `commodity` where commodity_id= ?";

    return await servicePromise(selectSql, [id]);
  }

  //   获取商品
  async getCommodityList(pageSize: string, pageNum: string) {
    const selectSql = "select * from `commodity` limit ?,?";

    console.log(pageSize, pageNum);
    return await servicePromise(selectSql, [
      Number(pageNum) * Number(pageSize),
      Number(pageSize),
    ]);
  }

  //   获取表总条数
  async getCommodityTotal() {
    const totalSql = "select count(commodity_id) from `commodity`";

    return await servicePromise(totalSql);
  }

  // 按照分类获取商品信息
  async getCommodityByType(type: string, pageSize: string, pageNum: string) {
    const selectSql =
      "select * from `commodity` where `commodity_type`=? limit ?,?";

    return await servicePromise(selectSql, [
      type,
      Number(pageNum) * Number(pageSize),
      Number(pageSize),
    ]);
  }

  // 根据ID删除商品
  async deleteCommodityById(id: string) {
    const deleteSql = "delete from `commodity` where `commodity_id` = ?";
    return await servicePromise(deleteSql, [id]);
  }

  // 根据ID修改商品
  async updateCommodityById(commodity: any) {
    const updateSql =
      "update `commodity` set `commodity_name`=?,`commodity_price`=?,`commodity_desc`=?,`commodity_image`=?,`commodity_main_image`=?,`commodity_type`=? where `commodity_id`=?";

    return await servicePromise(updateSql, [
      commodity.commodity_name,
      commodity.commodity_price,
      commodity.commodity_desc,
      JSON.stringify(commodity.commodity_image),
      JSON.stringify(commodity.commodity_main_image),
      commodity.commodity_type,
      commodity.commodity_id,
    ]);
  }

  // 添加商品
  async addCommodity(commodity: any) {
    const insertSql =
      "insert into `commodity` (commodity_name,commodity_price,commodity_desc,commodity_image,commodity_main_image,commodity_type) values(?,?,?,?,?,?)";

    return await servicePromise(insertSql, [
      commodity.commodity_name,
      commodity.commodity_price,
      commodity.commodity_desc,
      JSON.stringify(commodity.commodity_image),
      JSON.stringify(commodity.commodity_main_image),
      commodity.commodity_type,
    ]);
  }
}

export default new CommodityService();
