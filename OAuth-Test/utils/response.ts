import { Context } from "koa";
/**
 * 
 * @param ctx 上下文
 * @param data 返回数据
 * @param msg 提示信息
 * @param code 自定义状态码
 */

function success(ctx: Context, data :any=[], msg = "success", code: number = 0) {
  ctx.body = {
    code,
    msg,
    data
  }
}

function error(ctx:Context,msg:string='error',data=[],code:number = 1) {
  ctx.body = {
    code,
    msg,
    data
  }
}

export default{ success, error };
