import { Context } from "koa"
import AdminService from "../service/AdminService"
import { sign } from "../../utils/auth"
import response from "../../utils/response"
import validate from "../../utils/validate"
import { Rules } from "async-validator"
export interface IAdmin{
  name:string,
  password:string
}
//之后可能会把参数校验的规则分到另一个文件中
const rules:Rules = {
  name:[
    {
      type:'string',
      required:true,
      message:"用户名不可以为空"
    }
  ],
  password:[{
    type:'string',
    required:true,
    message:"密码不可以为空"
  },{
    type:"string",
    min:6,
    message:'密码长度太短'
  }]
}

class SigninController{
  async index(ctx:Context){
    const {data,error} =await validate<IAdmin>(ctx,rules)
    const admin = await AdminService.createAdmin(data)
    if(error!==null){
      return response.error(ctx,error)
    }
    if(admin===null){
      return response.error(ctx,"创建失败")
    }
    const token = sign(admin)
    response.success(ctx,{token})
  }
}
export default new SigninController