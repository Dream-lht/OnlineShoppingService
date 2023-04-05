import multer from "../app/multer";
import type { MulterIncomingMessage, File } from "koa-multer";
import path from "path";

const date = new Date();
date.getDate();

const Storage = multer.diskStorage({
  destination: path.resolve(
    __dirname,
    `../upload/${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
  ),
  filename(ctx, file, cb) {
    console.log(file.originalname);
    cb(null, +Date.now() + file.originalname);
  },
});

// 过滤文本文件
const fileFilter = (
  ctx: MulterIncomingMessage,
  file: File,
  cb: (error: Error | null, acceptFile: boolean) => void
) => {
  if (file.originalname.split(".").splice(-1)[0] === "txt") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};

const upload = multer({ storage: Storage, fileFilter: fileFilter });

export default upload.any();
