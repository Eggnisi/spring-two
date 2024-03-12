import { Context } from "koa";
import AdminService from "../service/AdminService";
import { sign, verify } from "../../utils/auth";
import response from "../../utils/response";
import validate from "../../utils/validate";
import { Rules } from "async-validator";
import config from "../config";
export interface IAdmin {
  name: string;
  password: string;
  redirect_url_code: number;
}
const rules: Rules = {
  name: [
    {
      type: "string",
      required: true,
      message: "用户名不可以为空",
    },
  ],
  password: [
    {
      type: "string",
      required: true,
      message: "密码不可以为空",
    },
    {
      type: "string",
      min: 6,
      message: "密码长度不可低于6位",
    },
  ],
  redirect_url_code: [
    {
      type: "number",
      required: true,
      message: "没有指定重定向url",
    },
  ],
};
class LoginController {
  private static tokenMap:Map<number,string>=new Map()
  private static expireMap:Map<number,number> = new Map()
  public getTokenMap():Map<number,string>{
    return LoginController.tokenMap
  }
  public getExpireMap():Map<number,number>{
    return LoginController.expireMap
  }
  async index(ctx: Context) {
    const { data, error } = await validate<IAdmin>(ctx, rules);
    if (error !== null) {
      return response.error(ctx, error);
    }
    const admin = await AdminService.getAdmin(data);
    if (admin === null) {
      return response.error(ctx, "用户不存在或密码错误");
    }
    //生成token，储存token
    const token = sign(admin);
    const date = new Date().getTime()
    LoginController.tokenMap.set(admin.dataValues.id,token)
    LoginController.expireMap.set(admin.dataValues.id,date+7200*1000)
    response.success(ctx, {
      token,
      url: config.redirect_url.get(data.redirect_url_code),
      expire:7200
    });
  }
  async newlogin(ctx: Context) {
    const { data, error } = await validate<IAdmin>(ctx, rules);
    const admin = await AdminService.createAdmin(data);
    if(!admin){
      return response.error(ctx,'创建失败或重复注册')
    }
    if (error !== null) {
      return response.error(ctx, error);
    }
    const token = sign(admin);
    response.success(
      ctx,
      { token, url: config.redirect_url.get(data.redirect_url_code) },
      "创建用户成功"
    );
  }
  async cancelLogin(ctx:Context){
    const token = ctx.headers["authorization"];
    if(token!==undefined&&token!==""){
      const {error,admin} = verify(token)
      if(error){
        return response.error(ctx,'该用户未登录')
      }else{
        //@ts-ignore
        LoginController.tokenMap.delete(admin.admin.id)
        response.success(ctx,{},'撤销登录成功')
      }
    }else{
      return response.error(ctx,'没有token')
    }
  }
}
export default new LoginController();
