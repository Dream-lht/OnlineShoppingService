/**
 * 商品路由
 */
import authVerify from "../../middleware/authVerify";
import commodityVerify from "../../middleware/commodityVerify";
import commodityController from "../../controller/commodityController";
// 导入注册控制器
function createShopRouter(wxRouter: any) {
  // 查询所有的商品信息
  wxRouter.get(
    "/commodity",
    authVerify,
    commodityVerify,
    commodityController.getCommodity
  );
  // 返回特定商品信息
  wxRouter.get(
    "/commodity/:id",
    authVerify,
    commodityController.getCommodityById
  );
  // 按照分类获取商品
  wxRouter.get(
    "/commodityType",
    authVerify,
    commodityController.getCommodityByType
  );
  // 删除商品
  wxRouter.delete(
    "/commodity/:id",
    authVerify,
    commodityController.deleteCommodityById
  );

  // 修改商品
  wxRouter.post(
    "/commodity",
    authVerify,
    commodityController.updateCommodityById
  );

  // 添加商品
  wxRouter.post("/addCommodity", authVerify, commodityController.addCommodity);
}

module.exports = createShopRouter;
