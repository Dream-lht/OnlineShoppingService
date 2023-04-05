export interface ICustomError {
  name: string;
  message: string | ((key: string) => string);
  code: number;
}

const USER_OR_PASSWORD_NOT_NULL: ICustomError = {
  message: "用户名或者密码不能为空！",
  code: 400,
  name: "USER_OR_PASSWORD_NOT_NULL",
};

const USER_NAME_NOT_EQUAL: ICustomError = {
  message: "用户名不能重复！",
  name: "USER_NAME_NOT_EQUAL",
  code: 400,
};

const PASSWORD_ERROR: ICustomError = {
  message: "密码错误",
  code: 402,
  name: "PASSWORD_ERROR",
};

const TOKEN_ERROR_OTHER: ICustomError = {
  message: "token出现未知错误",
  code: 500,
  name: "TOKEN_ERROR_OTHER",
};

const PERMISSION_ERROR: ICustomError = {
  message: "抱歉，您权限不够",
  code: 500,
  name: "PERMISSION_ERROR",
};

const NOT_FOUND: ICustomError = {
  message: "NOT FOUNT",
  code: 404,
  name: "NOT_FOUND",
};

const CODE_NOT_FOUND: ICustomError = {
  message: "手机号或者登录code不能为空",
  code: 400,
  name: "USER_OR_PASSWORD_NOT_NULL",
};

const CODE_BEEN_USER: ICustomError = {
  message: "用户CODE已经被使用",
  code: 400,
  name: "CODE_BEEN_USER",
};

const TOKEN_ERROR: ICustomError = {
  message: "token出现错误",
  code: 400,
  name: "TOKEN_ERROR",
};

const SESSION_KEY_EXPIRED: ICustomError = {
  message: "session_key已经过期了",
  code: 400,
  name: "SESSION_KEY_EXPIRED",
};

const REGISTE_PARAMS_ERROR: ICustomError = {
  message: "注册参数错误",
  code: 400,
  name: "REGISTE_PARAMS_ERROR",
};

const TOKEN_NOT_CARRY: ICustomError = {
  message: "token没有携带",
  code: 500,
  name: "TOKEN_NOT_CARRY",
};

const PARAMS_ERROR: ICustomError = {
  message: "参数传递错误",
  code: 500,
  name: "PARAMS_ERROR",
};

export {
  USER_OR_PASSWORD_NOT_NULL,
  USER_NAME_NOT_EQUAL,
  PASSWORD_ERROR,
  TOKEN_ERROR_OTHER,
  PERMISSION_ERROR,
  CODE_NOT_FOUND,
  CODE_BEEN_USER,
  TOKEN_ERROR,
  SESSION_KEY_EXPIRED,
  REGISTE_PARAMS_ERROR,
  TOKEN_NOT_CARRY,
  PARAMS_ERROR,
};
