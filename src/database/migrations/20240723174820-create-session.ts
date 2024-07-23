import { QueryInterface, DataTypes } from "sequelize";

export default {
  up: async (queryinterface: QueryInterface)=>{
    await queryinterface.createTable("sessions", {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: true,
        references:{
          model: "users",
          key :"id"
        }
      },
      device:{
        type: DataTypes.STRING(256),
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING(256),
        allowNull: false
      },
      otp: {
        type: new DataTypes.STRING(280),
        allowNull: true
      },
      otpExpiration: {
        type: DataTypes.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    })
  }
}