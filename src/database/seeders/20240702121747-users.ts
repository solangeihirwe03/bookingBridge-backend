import { QueryInterface } from "sequelize";
import { 
  userOneId,
  userTwoId,
  userThreeId,
  userFourId,
  userFiveId
} from "../../types/uuid";
import { hashPassword } from "../../helpers";



const userOne = {
  id: userOneId,
  firstName: "Admin",
  lastName: "L admin",
  email: "admin@gmail.com",
  password: hashPassword("password"),
  contact: 25078888888,
  profilePicture: "",
  gender: "Female",
  birthDate: "01/01/2001",
  language:  "english",
  role: "admin",
  isVerified: true
}

const userTwo= {
  id: userTwoId,
  firstName: "manager1",
  lastName: "L manager",
  email: "manager1@gmail.com",
  password: hashPassword("password"),
  contact: 25078888888,
  profilePicture: "",
  gender: "Female",
  birthDate: "01/01/2001",
  language:  "english",
  role: "admin",
  isVerified: true
}

const userThree = {
  id: userThreeId,
  firstName: "Manager",
  lastName: "L manager",
  email: "manager@gmail.com",
  password: hashPassword("password"),
  contact: 25078888888,
  profilePicture: "",
  gender: "Female",
  birthDate: "01/01/2001",
  language:  "english",
  role: "admin",
  isVerified: true
}

const userFour = {
  id: userFourId,
  firstName: "customer1",
  lastName: "L customer",
  email: "customer1@gmail.com",
  password: hashPassword("password"),
  contact: 25078888888,
  profilePicture: "",
  gender: "Female",
  birthDate: "01/01/2001",
  language:  "english",
  role: "admin",
  isVerified: true
}

const userFive = {
  id: userFiveId,
  firstName: "customer",
  lastName: "L customer",
  email: "customer@gmail.com",
  password: hashPassword("password"),
  contact: 25078888888,
  profilePicture: "",
  gender: "Female",
  birthDate: "01/01/2001",
  language:  "english",
  role: "customer",
  isVerified: true
}

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

