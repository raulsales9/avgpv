import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import Users from './Users';

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/avgpv');

export interface PostAttributes {
  id: number;
  title: string;
  body: string;
  created_at: Date;
  likes: number;
  is_submitted: boolean;
  image: Buffer;
  id_user: number;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

class Posts extends Model<PostAttributes, PostCreationAttributes> implements PostAttributes {
  public id!: number;
  public title!: string;
  public body!: string;
  public created_at!: Date;
  public likes!: number;
  public is_submitted!: boolean;
  public image!: Buffer;
  public id_user!: number;
}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: DataTypes.STRING(50),
    body: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    likes: DataTypes.INTEGER,
    is_submitted: DataTypes.BOOLEAN,
    image: DataTypes.BLOB,
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'Posts',
    tableName: 'posts',
    timestamps: false 
  }
);
Posts.belongsTo(Users, { foreignKey: 'id_user' });

export default Posts;
