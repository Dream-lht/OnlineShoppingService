import jwt from "jsonwebtoken";

import type { Algorithm, VerifyOptions } from "jsonwebtoken";
import { TOKEN_ERROR, ICustomError } from "../app/errorConstant";
interface IJwt {}

// 手机号数据接口
interface IOpenid {
  openid: string | undefined;
}

// jwt初始化接口
interface IConfig {
  createTime: number;
  expiration: number;
  algorithm: Algorithm;
  public_key: string;
}

// 校验token返回数据结构
interface IResult {
  isQuery: boolean;
  data: any;
  code: number;
  message: ICustomError | "success";
}

// 处理token返回
function handleResult(
  isQuery: boolean,
  code: number,
  data: any,
  message: ICustomError | "success"
) {
  const result: IResult = {
    isQuery: false,
    data: {},
    code: 0,
    message: TOKEN_ERROR,
  };
  result.isQuery = isQuery;
  result.data = data;
  result.code = code;
  result.message = message;
  return result;
}

/**
 * JWT类，包含生成token和校验token的方法
 */
class JWT {
  _createTime: number;
  _expiration: number;
  _algorithm: Algorithm;
  _public_key: string;
  _data!: IOpenid;

  constructor(config: IConfig) {
    this._createTime = config.createTime;
    this._expiration = config.expiration;
    this._algorithm = config.algorithm;
    this._public_key = config.public_key;
  }

  //   生成token
  generateToken(data: IOpenid) {
    if (!data) {
      console.log("获取用户的openid");
      return;
    }

    // 创建时间
    this._createTime = Math.floor(Date.now() / 1000);

    // 过期时间
    const token = jwt.sign(
      {
        data: this._data,
        iat: this._createTime,
      },
      this._public_key,
      {
        // 过期时间
        expiresIn: this._expiration,
        // 加密算法
        algorithm: this._algorithm,
      }
    );

    return token;
  }

  //   校验token
  verifyToken(token: string) {
    try {
      const algorithm: Algorithm[] | undefined = [this._algorithm];
      const data = jwt.verify(token, this._public_key, {
        algorithms: algorithm,
      });

      return handleResult(true, 200, data, "success");
    } catch (e) {
      return handleResult(false, 400, {}, TOKEN_ERROR);
    }
  }
}

const config: IConfig = {
  createTime: 0,
  expiration: 60 * 30,
  algorithm: "HS256",
  public_key: "shhhhh",
};

export default new JWT(config);
