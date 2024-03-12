import { configure, getLogger } from "log4js";
import config from "../config";
//将config文件中的日志参数加载到日志体系中
configure(config.log);
//导出日志收集器
export default getLogger()
export const accessLogger=getLogger('access')
export const dbLogger=getLogger('db')