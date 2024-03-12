import run from "../app";
import { Server } from "http";
import AdminService from "../app/service/AdminService";
import Admin from "../app/model/Admin";
describe("sql", () => {
  //@ts-ignore
  let server: Server = null;
  beforeAll(() => {
    server = run(3003);
  });
  it("find admin", async () => {
    const admin = await AdminService.getAdmin({
      name: "Eggnisi",
      password: 654321,
    });
    const { id, name, password } = admin?.dataValues;
    expect(id).toBe(1)
    expect(name).toBe("Eggnisi")
    expect(password).toBe("654321")
  });

  it("create admin", async () => {
    const admin = await AdminService.createAdmin({
      name: "Eggnisi",
      password: 654321,
    });
    expect(admin).toBe(false)
    const newadmin = await AdminService.createAdmin({
      name: "Test",
      password: 123456,
    });
    const {id,name,password} = (newadmin as Admin)?.dataValues
    
  });

  afterAll(() => {
    server.close();
  });
});
