import Koa from "koa";
const serve = require("koa-static");
const bodyParser = require("koa-bodyparser");
const useRouter = require("../router/index");
const path = require("path");
import handleError from "./handleError";

// 创建Koa的实例化
const App = new Koa();

// 开启静态资源的访问
App.use(serve(path.resolve(__dirname, "../upload")));

// 注册路由中间件
useRouter(App);

// 进行参数解析
App.use(bodyParser());

// 对错误进行处理
App.on("error", handleError);
// 导出app
export default App;
