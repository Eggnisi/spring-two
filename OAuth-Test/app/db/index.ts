import { DataType, Sequelize } from "sequelize-typescript";
import config from "../config";
import path from "path";
import  { dbLogger } from "../logger";
//Sequelize配置文件
export const sequelize = new Sequelize(config.db.name as string, config.db.user as string, config.db.psw as string, {
  host: config.db.host,
  port:config.db.port as unknown as number,
  dialect: "mysql",
  define:{
    timestamps:true,
    createdAt:'created_at',
    updatedAt:'updated_at',
    deletedAt:'deleted_at',
  },
  logging:msg=>dbLogger.info(msg),
  //映射的模型来源
  models:[path.join(__dirname,'..','model/**/*.ts'),path.join(__dirname,'..','model/**/*.js')],
  
});

// module.exports={
//   sequelize
// }

// export const admin = sequelize.define("Admin",{
//   name:DataType.STRING,
//   password:DataType.STRING,
// },{
//   timestamps:false
// })

// sequelize.sync({
//   force:true
// }).then(async ()=>{
//   const ad = await admin.create({
//     name:"Eggnisi",
//     password:"654321"
//   })
//   console.log(ad);
// })

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

