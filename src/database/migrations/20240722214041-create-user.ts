import { QueryInterface, DataTypes } from "sequelize"

export default {
  up: async (queryInterface: QueryInterface) => {

    await queryInterface.createTable("users", {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      firstName: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      lastName: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      email: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: false
      },
      phone: {
        type: new DataTypes.BIGINT(),
        allowNull: true
      },
      profilePicture: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      gender:{
        type: new DataTypes.ENUM("male", "female"),
        allowNull: true
      },
      birthDate: {
        type: new DataTypes.DATE(),
        allowNull: true
      },
      language: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      role: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      isVerified: {
        type: new DataTypes.BOOLEAN(),
        allowNull: true,
        defaultValue: false
      },
      isGoogleAccount: {
        type: new DataTypes.BOOLEAN(),
        allowNull: true,
        defaultValue: false
      },
      passwordUpdatedAt: { 
        field: "passwordUpdatedAt",
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

  },
  down: async(queryInterface : QueryInterface)=>{
    await queryInterface.dropTable("users");
  }
};