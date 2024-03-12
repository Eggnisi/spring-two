const config = {
  server:{
    port:process.env.SERVER_PORT
  },
  db:{
    host:process.env.DB_HOST,
    name:process.env.DB_NAME,
    user:process.env.DB_USER,
    port:process.env.DB_PORT,
    psw:process.env.DB_PASSWORD
  },
  jwt:{
    secret:process.env.JWT_SECRET,
    expire:process.env.JWT_EXPIRE
  },
  log:{
    appenders: {
      cheese: {
        type: "file",
        filename: "logs/cheese.log",
      },
      access: {
        type: "file",
        filename: "logs/access.log",
      },
      db: {
        type: "file",
        filename: "logs/sql.log",
      },
    },
    categories: { default: { appenders: ["cheese"], level: "info" }, 
    access: { appenders: ["access"], level: "info" },
    db: { appenders: ["db"], level: "info" } },
  },
  redirect_url:new Map<number,string>()
}
config.redirect_url.set(1,'http://www.baidu.com')
config.redirect_url.set(2,`http://localhost:${process.env.SERVER_PORT}/index.html`)

export default config
