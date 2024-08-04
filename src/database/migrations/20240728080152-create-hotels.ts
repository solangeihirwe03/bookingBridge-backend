import { QueryInterface, DataTypes } from "sequelize";
import { down } from "../seeders/20240722214925-users";

export default{
  up: async(queryInterface: QueryInterface)=>{
    
    await queryInterface.createTable("hotels", {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
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
      hotelName: {
        type: DataTypes.STRING(256),
        allowNull: true
      },
      hotelImage:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
      },
      hotelDescription: {
        type: DataTypes.STRING(280),
        allowNull: true
      },
      address: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      contact:{
        type: DataTypes.JSONB,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
      }
    })
  }, 

  down: async(queryInterface: QueryInterface)=>{
    await queryInterface.dropTable("hotels")
  }
}