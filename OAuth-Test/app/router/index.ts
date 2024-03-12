import koaRouter from 'koa-router'
import indexController from '../controller/indexController'
import LoginController from '../controller/LoginController'
import AuthMiddleware from '../middleware/AuthMiddleware'
import SigninController from '../controller/SigninController'
import LoginPageController from '../controller/LoginPageController'
const router = new koaRouter({prefix:"/auth"})

router.post('/login',LoginController.index)
.post('/newlogin',LoginController.newlogin)
.get('/login/page',LoginPageController.index)
.use(AuthMiddleware)
.get('/login/cancel',LoginController.cancelLogin)
.post('/signin',SigninController.index)
.get('/',indexController.index)
export default router