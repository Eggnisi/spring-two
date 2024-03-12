import User from "../model/User"
class UserService{
  getUser(){
    return User.findByPk(6)
  }
 
}

export default new UserService