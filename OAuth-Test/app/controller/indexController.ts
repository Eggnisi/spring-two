import { Context } from "koa";
import config from "../config";

class IndexController{
  async index(ctx:Context){
    // const admin = await AdminService.getAdmin()
    // ctx.body = admin
    // const users = await UserSerivice.getUser()
    // ctx.body= users
    let code = 2
    if(config.redirect_url.has(code))
    ctx.redirect(config.redirect_url.get(code) as string)
  }
}
export default new IndexController()