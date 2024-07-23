import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config/db.config";
import Users from "./user";

export interface SessionAttributes{
    id: string;
    userId: string;
    device: string;
    token: string;
    otp: string;
    otpExpiration: Date;
    createdAt: Date;
    updatedAt: Date
}

class Sessions extends Model<SessionAttributes> implements SessionAttributes {
    declare id: string;
    declare userId: string;
    declare device: string;
    declare token: string;
    declare otp: string;
    declare otpExpiration: Date;
    declare createdAt: Date;
    declare updatedAt: Date;

    static associate() {
        Sessions.belongsTo(Users, { foreignKey: "userId", as: "users" });
    }
}

Sessions.init(
{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    userId:{
        type: DataTypes.UUID,
        allowNull: true,
        references:{
            model: "users",
            key: "id"
        }
    },
    device: {
        type: DataTypes.STRING(128),
        allowNull:false
    },
    token: {
        type: DataTypes.STRING(256),
        allowNull: true
    },
    otp: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    otpExpiration: {
        type: DataTypes.DATE(),
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE(),
        allowNull: true
    },
    updatedAt:{
        type: DataTypes.DATE(),
        allowNull: true
    }

},
{
    sequelize: sequelizeConnection,
      tableName: "sessions",
      timestamps: true,
      modelName: "Session",
})

export default Sessions