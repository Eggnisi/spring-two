#### 由于建项目加包的时候手欠，同时使用了npm和yarn两个包管理工具，所以项目根目录下出现了两个锁文件
### 直接npm i 下载依赖即可
+ 项目使用ts开发，使用的技术有mysql，koa。emmm，好像没了
+ 严格采用router-controller-service三层体系开发后端服务
+ 使用sequelize作为ORM框架
+ 使用dotenv加载环境变量，加载完毕的环境变量和别的参数统一放在app/config
+ 体现大量面向对象的编码实现
+ 搭建了简单的日志
+ 搭建了简单的数据模型
+ 编写了简单的单元测试脚本，使用jest+supertest进行网络接口测试（别问我为什么不用postman，因为这样比较装b）
+ 使用jwt进行token的加密与解密，没有使用时间戳或者随机数