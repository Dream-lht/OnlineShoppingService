import fs from "fs";
import { Context, Next } from "koa";
import fileService from "../service/file.service";
import { File } from "koa-multer";
import { APP_SERVER_HOST, APP_SERVER_PORT } from "../app/config";
import handleResult from "../utils/handleResult";
import path from "path";

/**
 * 文件模块
 */

class FileController {
  async uploadFile(ctx: Context, next: Next) {
    const { files, body } = ctx.req as any;
    const { openid } = body as any;

    // 拼接filepath
    const service_host = `${APP_SERVER_HOST}:${APP_SERVER_PORT}`;
    let filepath = ``;
    const date = new Date();
    const filesPath = [];
    // 遍历数组
    for (let fileItem of files) {
      filepath = `${service_host}/${date.getFullYear()}/${
        date.getMonth() + 1
      }/${date.getDate()}/${fileItem.filename}`;
      fileItem.filepath = filepath;
      await fileService.addFile(fileItem, openid);
      filesPath.push(filepath);
    }

    // 返回结果
    // handleResult(200, "上传成功", filesPath, ctx);
    ctx.body = filesPath;
  }
}

export default new FileController();
