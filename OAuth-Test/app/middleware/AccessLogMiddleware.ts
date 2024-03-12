import { Context, Next } from "koa";
import { accessLogger } from "../logger";
//收集访客的日志信息
function AccessLogMiddleWare(ctx:Context,next:Next){
  const logStr = `path:${ctx.path} | method:${ctx.method} | userAgent:${ctx.header['user-agent']}`
  accessLogger.info(logStr)
  return next()
}
export default AccessLogMiddleWare