import { DataTypes, Model } from "sequelize";
import Users from "./user";
import sequelizeConnection from "../config/db.config";


export interface HotelAttributes {
    id: string,
    userId: string,
    hotelName: string,
    hotelImage: string,
    address: string,
    contact: string,
    createdAt: Date,
    updatedAt: Date
}

class Hotels extends Model<HotelAttributes> implements HotelAttributes {
    declare id: string;
    declare userId: string;
    declare hotelName: string;
    declare hotelImage: string;
    declare address: string;
    declare contact: string;
    declare createdAt: Date;
    declare updatedAt: Date;

    static associate() {
        Hotels.belongsTo(Users, { foreignKey: "userId", as: "users" });
    }
}

Hotels.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        userId:{
            type: DataTypes.UUID,
            allowNull: false,
            references:{
                model: "users",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
        hotelName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        hotelImage:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        address:{
            type: DataTypes.JSONB,
            allowNull: true
        },
        contact:{
            type: DataTypes.JSONB,
            allowNull: true
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }


    },
    {
        sequelize: sequelizeConnection,
        tableName: "hotels",
        timestamps: true,
        modelName: "Hotel"
    }
)

export default Hotels