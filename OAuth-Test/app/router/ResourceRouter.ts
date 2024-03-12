import koaRouter from 'koa-router'
import ResourceController from '../controller/ResourceController'
import AuthMiddleware from '../middleware/AuthMiddleware'

const ResourceRouter = new koaRouter({prefix:"/resource"})

ResourceRouter
.get('/',ResourceController.index)
export default ResourceRouter