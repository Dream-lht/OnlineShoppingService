import servicePromise from "..//utils/servicePromise";

class UserService {
  // 根据openid获取用户信息
  async getUserInfoByOpenId(openid: string) {
    const selectSql = "select * from `user` where `openid` = ?";

    // 查询用户信息
    return await servicePromise(selectSql, [openid]);
  }

  // 添加用户信息
  async addUser(userInfo: any, openid: string, session_key: string) {
    const insertSql =
      "insert into `user`(nickName,gender,language,city,province,country,avatarUrl,openid,session_key,type) values (?,?,?,?,?,?,?,?,?,?)";

    return await servicePromise(insertSql, [
      userInfo.nickName,
      userInfo.gender,
      userInfo.language,
      userInfo.city,
      userInfo.province,
      userInfo.country,
      userInfo.avatarUrl,
      openid,
      session_key,
      0,
    ]);
  }
}

export default new UserService();
