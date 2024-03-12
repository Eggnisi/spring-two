import { Table,Model, Column } from "sequelize-typescript";
import { IUser } from "../../models/Models";
//用户实体映射字段
@Table
export default class User extends Model implements IUser{
  @Column
  name!:string
  @Column
  age!:number
  @Column
  status!:string
  @Column
  gender!:string
}