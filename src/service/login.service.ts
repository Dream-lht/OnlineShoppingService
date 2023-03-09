// 登录操作
import servicePromise from "../utils/servicePromise";
import request from "../utils/request";
import { APP_ID, GRANT_TYPE, APP_SECRET } from "../app/config";

interface ISession {
  openid: string;
  session_key: string;
}
interface ILoginService {
  getUserInfoByCode(user: string, password: string): Promise<ISession>;
}

class LoginService implements ILoginService {
  // 根据code来openid和session_key
  async getUserInfoByCode(code: string | undefined) {
    const { data } = await request({
      method: "GET",
      url: "/jscode2session",
      params: {
        appid: APP_ID,
        secret: APP_SECRET,
        js_code: code,
        grant_type: GRANT_TYPE,
      },
    });

    console.log(data);
    return data;
  }

  // 通过用户名查询密码
  async getPasswordByPhone(phone: string): Promise<[unknown]> {
    const selectPassword = "select password from `user` where phone= ? ";
    return await servicePromise(selectPassword, [phone]);
  }
}

export default new LoginService();
