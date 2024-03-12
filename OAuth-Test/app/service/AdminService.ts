import Admin from "../model/Admin";

class AdminService {
  getAdmin(data: any) {
    const { name, password } = data;
    // console.log(data);
    
    return Admin.findOne({
      where: {
        name,
        password,
      },
    });
    // return admin.findByPk(5)
  }
  async createAdmin(data: any) {
    const { name, password } = data;
    // console.log(data);
    
    const ad = await Admin.findOne({
      where: {
        name,
        password,
      },
    });
    if(ad){      
      return false
    }
    return await Admin.create(data);;
  }
}

export default new AdminService();
