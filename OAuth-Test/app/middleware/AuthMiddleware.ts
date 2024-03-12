import { Context, Next } from "koa";
import { verify } from "../../utils/auth";
import LoginController from "../controller/LoginController";
import response from "../../utils/response";
//对一些需要验证token的请求进行验证
function AuthMiddleware(ctx: Context, next: Next) {
  const token = ctx.headers["authorization"];
  if (token !== undefined && token !== "") {
    const { error,admin } = verify(token);
    if (error !== null) {
      return response.error(ctx,error.message);
    } else {
      //@ts-ignore
      const id = admin.admin.id
      const date = new Date().getTime()
      if(token===LoginController.getTokenMap().get(id)&&date<(LoginController.getExpireMap().get(id) as number)){
        return next();
      }else if(date>=(LoginController.getExpireMap().get(id) as number)){
        LoginController.getTokenMap().delete(id)
        return response.error(ctx,'登录过期')
      }
    }
  } else {
    return response.error(ctx,'authorization不可以为空')
  }
  // accessLogger.info()
  // return next()
}
export default AuthMiddleware;
