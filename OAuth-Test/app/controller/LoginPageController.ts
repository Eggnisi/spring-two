import { readFileSync } from "fs"
import { Context } from "koa"
import path from "path";
//对外暴露登录页面
class LoginPageController{
  index(ctx:Context){
    const html = readFileSync(path.join(__dirname,'../..',"static/login.html"),"utf-8")
    ctx.body = html
  }
}
export default new LoginPageController