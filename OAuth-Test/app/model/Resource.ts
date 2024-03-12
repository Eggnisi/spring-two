import { Table,Model, Column } from "sequelize-typescript";
import { IResource } from "../../models/Models";
//管理员实体映射字段
@Table
export default class Resource extends Model implements IResource{
  @Column
  photoUrl!: string;
}