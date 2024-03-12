import Admin from "../model/Admin";

class AdminService {
  getAdmin(data: any) {
    const { name, password } = data;
    return Admin.findOne({
      where: {
        name,
        password,
      },
    });
  }
  async createAdmin(data: any) {
    const { name, password } = data;
    const ad = await Admin.findOne({
      where: {
        name,
        password,
      },
    });
    if(ad){      
      return false
    }
    return await Admin.create(data);
  }
}

export default new AdminService();
