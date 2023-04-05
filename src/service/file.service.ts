/**
 * 文件服务
 */
import servicePromise from "../utils/servicePromise";
import { File } from "koa-multer";

interface FileCustom extends File {
  filepath: string;
}
class FileService {
  async addFile(files: FileCustom, openid: string) {
    const insertSql =
      "insert `file`(filepath,filename,size,openid,originalname,encoding,mimetype,destination) values (?,?,?,?,?,?,?,?)";

    return await servicePromise(insertSql, [
      files.filepath,
      files.filename,
      files.size,
      openid,
      files.originalname,
      files.encoding,
      files.mimetype,
      files.destination,
    ]);
  }
}

export default new FileService();
