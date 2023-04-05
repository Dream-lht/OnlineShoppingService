// 导入注册控制器
import authVerify from "../../middleware/authVerify";
import ShopCartController from "../../controller/shopCartController";
function createShopCartRouter(wxRouter: any) {
  // 获取当前用户所有的购物车商品
  wxRouter.get("/shopCart", authVerify, ShopCartController.getShopCartListById);
}

module.exports = createShopCartRouter;
