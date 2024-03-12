import { readFileSync } from "fs";
import { Context } from "koa";
import path from "path";
import { verify } from "../../utils/auth";
import response from "../../utils/response";
import LoginController from "./LoginController";

class ResourceController {
  async index(ctx: Context) {
    const { token } = ctx.query;
    if (token) {
      const data = verify(token as string);
      //@ts-ignore
      let id = data.admin.admin.id;
      const res = LoginController.getTokenMap().get(id);
      if (!res) {
        return response.error(ctx, "用户不存在或未登录");
      } else {
        const photo = readFileSync(
          path.join(__dirname, "../..", "static/images/leimu.jpeg")
        );
        ctx.set("content-type", "image/jpg");
        ctx.body = photo;
      }
    } else {
      return response.error(ctx, "没有token");
    }
  }
}
export default new ResourceController();
