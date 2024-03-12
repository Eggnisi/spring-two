/**
 * sequelize的模型接口
 */
export interface IAdmin{
  name:string
  password:string
}

export interface IUser{
  name:string
  age:number
  status:string
  gender:string
}

export interface IResource{
  photoUrl:string
}