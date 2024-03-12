import { Table,Model, Column, Sequelize } from "sequelize-typescript";
import { IAdmin } from "../../models/Models";
import { DataTypes } from "sequelize";
const sequelize = require('../db')
//管理员实体映射字段
@Table
export default class Admin extends Model implements IAdmin{
  @Column
  name!:string
  @Column
  password!:string
}

