import dotenv from 'dotenv'
dotenv.config()
import db from './db'
db()
import Koa from 'koa';
import {Server} from 'http'
import router from './router';
import AccessLogMiddleWare from './middleware/AccessLogMiddleware';
import koaBody from "koa-body"
import koaStatic from "koa-static"
import path from 'path';
import ResourceRouter from './router/ResourceRouter';
const app = new Koa;
app
.use(koaBody({
  multipart:true,
  formidable:{
    maxFileSize:200*1024*1024
  }
}))
.use(koaStatic(path.join(__dirname,'..','static')))
.use(AccessLogMiddleWare)
.use(router.routes())
.use(ResourceRouter.routes())
const run = (port:any):Server=>{
  return app.listen(port)
}

export default run