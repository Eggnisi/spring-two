/**
 * 这是Sequelize配置文件，
 * 其中sequelize是数据库连接实例
 */
import { DataType, Sequelize } from "sequelize-typescript";
import config from "../config";
import path from "path";
import  { dbLogger } from "../logger";
//
export const sequelize = new Sequelize(config.db.name as string, config.db.user as string, config.db.psw as string, {
  host: config.db.host,
  port:config.db.port as unknown as number,
  dialect: "mysql",
  //自动插入数据生成时间，更新时间等
  define:{
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at',
    deletedAt:'deleted_at',
  },
  //产生日志的回调函数
  logging:msg=>dbLogger.info(msg),
  //映射的模型来源
  models:[path.join(__dirname,'..','model/**/*.ts'),path.join(__dirname,'..','model/**/*.js')],
});
//测试数据库是否正常连接
const db = async ()=>{
  try{
    await sequelize.sync()
    await sequelize.authenticate();
    console.log('database connect successfully');
   }catch(e){
    console.error(e);
   }
}

export default db

