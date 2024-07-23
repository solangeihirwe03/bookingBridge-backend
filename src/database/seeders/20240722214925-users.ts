/* eslint-disable comma-dangle */
import { QueryInterface } from "sequelize";
import { hashPassword } from "../../helpers";
import {
  userOneId,
  userTwoId,
  userThreeId,
  userFourId,
  userFiveId
} from "../../types/uuid";

const userOne = {
  id: userOneId,
  firstName: "Admin",
  lastName: "Admin",
  email: "admin@gmail.com",
  password: hashPassword("Password@123"),
  phone: 25089767899,
  profilePicture: "",
  gender: "female",
  birthDate: "2-2-2014",
  language: "english",
  role: "admin",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  passwordUpdatedAt: new Date(),
};
const userTwo = {
  id: userTwoId,
  firstName: "client",
  lastName: "client",
  email: "client@gmail.com",
  password: hashPassword("Password@123"),
  phone: 1234567890,
  profilePicture: "",
  gender: "male",
  birthDate: "1990-01-01",
  language: "English",
  role: "buyer",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  passwordUpdatedAt: new Date(),
};

const userThree = {
  id: userThreeId,
  firstName: "client1",
  lastName: "client1",
  email: "client1@gmail.com",
  password: hashPassword("Password@123"),
  phone: 25089767899,
  profilePicture: "",
  gender: "female",
  birthDate: "2-2-2014",
  language: "english",
  role: "buyer",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  passwordUpdatedAt: new Date(),
};

const userFour = {
  id: userFourId,
  firstName: "manager",
  lastName: "manager",
  email: "manager@gmail.com",
  password: hashPassword("Password@123"),
  phone: 25089767099,
  profilePicture: "",
  gender: "male",
  birthDate: "2-2-2014",
  language: "english",
  role: "seller",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  passwordUpdatedAt: new Date(),
};

const userFive = {
  id: userFiveId,
  firstName: "dj5090",
  lastName: "dj2090",
  email: "dj@gmail.com",
  password: hashPassword("Password@123"),
  phone: 25089767899,
  profilePicture: "",
  gender: "female",
  birthDate: "2014-02-02",
  language: "english",
  role: "seller",
  isVerified: true,
  createdAt: new Date(),
  updatedAt: new Date(),
  passwordUpdatedAt: new Date(),
};

export const up = (queryInterface: QueryInterface) =>
  queryInterface.bulkInsert("users", [
    userOne,
    userTwo,
    userThree,
    userFour,
    userFive
  ]);

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkDelete("users", {});
};


