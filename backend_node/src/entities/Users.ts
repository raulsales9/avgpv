// Users.ts
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/avgpv');

export interface UserAttributes {
  id: number;
  username: string;
  mail: string;
  roles: string[]; 
  password: string;
  phone: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class Users extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public mail!: string;
  public roles!: string[];
  public password!: string;
  public phone!: string;
}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: DataTypes.STRING(50),
  mail: DataTypes.STRING(50),
  roles: DataTypes.JSONB,
  password: DataTypes.STRING(50),
  phone: DataTypes.STRING(15),
}, {
  timestamps: false,
  sequelize,
  modelName: 'Users',
  tableName: 'users'
});

export default Users;
