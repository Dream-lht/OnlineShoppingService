import { Context, Next } from "koa";
import handleResult from "../utils/handleResult";
import userService from "../service/user.service";
/**
 * 用户控制
 */

class UserController {
  async getUser(ctx: Context, next: Next) {
    let userInfo: [unknown] = [{}];
    // 判断当前请求是获取单个用户信息还是全部用户信息
    if (ctx.params.id) {
      // 请求某个用户信息
      userInfo = await userService.getUserInfoByOpenId(ctx.params.id);
    }
    userInfo = await userService.getUserInfo();
    // 返回结果
    handleResult(200, "查询成功", userInfo, ctx);
  }

  async reviseUser(ctx: Context, next: Next) {
    const id = ctx.params.id;
    const userInfo = ctx.request.body;
    console.log(userInfo);
    await userService.upDateUserInfo(id, userInfo);
    handleResult(200, "修改成功", [], ctx);
  }
}

export default new UserController();
