/**
 * 处理路径
 */

import * as path from "path";

function handlePath(filePath: string): string {
  // 获取根路径
  const rootPath = process.env.APPROOTPATH;

  if (!rootPath) return "";

  return path.resolve(rootPath, filePath);
}

// 挂载到进程的全局变量上

export default handlePath;
