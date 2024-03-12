import { Context, Next } from "koa";
import { accessLogger } from "../logger";
function AccessLogMiddleWare(ctx:Context,next:Next){
  const logStr = `path:${ctx.path} | method:${ctx.method} | userAgent:${ctx.header['user-agent']}`
  accessLogger.info(logStr)
  return next()
}
export default AccessLogMiddleWare