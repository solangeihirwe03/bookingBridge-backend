import { QueryInterface, DataTypes } from "sequelize";
import { down } from "../../../dist/src/databases/migrations/20240710201929-create-sessions";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable("sessions", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      device:{
        type: DataTypes.STRING(280),
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING(280)
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
    },

  )},
  down: async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("sessions")
  }
}