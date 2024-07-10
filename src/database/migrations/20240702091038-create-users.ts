import { QueryInterface, DataTypes } from "sequelize"

export default {
  up: async (queryInterface: QueryInterface) => {
    const [result] = await queryInterface.sequelize.query(
      "SELECT 1 FROM pg_type WHERE typename = 'enu,_users_gender';"
    )
    if (!result.length) {
      await queryInterface.sequelize.query(
        "CREATE TYPE \"enum_users_gender\" AS ENUM('male', 'female);"
      )
    }

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
        type: new DataTypes.STRING(129),
        allowNull: false
      },
      password: {
        type: new DataTypes.STRING(128),
        allowNull: false
      },
      contact: {
        type: new DataTypes.BIGINT,
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
        type: new DataTypes.DATE,
        allowNull: true
      },
      language: {
        type: new DataTypes.STRING(50),
        allowNull: false
      },
      role: {
        type: new DataTypes.STRING(128),
        allowNull: true
      },
      isVerified: {
        type: new DataTypes.BOOLEAN(),
        allowNull: false,
        defaultValue: false
      },
      isGoogleaccount: {
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
  down: async(querInterface : QueryInterface)=>{
    await querInterface.dropTable("users");
    await querInterface.sequelize.query(
      "DROP TYPE IF EXISTS \"enum_users_gender\";"
    );
  }
};