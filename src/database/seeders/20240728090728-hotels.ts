import { QueryInterface } from "sequelize";
import {
  hotelOneId,
  hotelTwoId,
  hotelThreeId,
  hotelFourId,
  hotelFiveId,
  userFourId,
  userFiveId
} from "../../types/uuid";


const hotelOne = {
  id: hotelOneId,
  userId: userFiveId,
  hotelName: "Mariot hotel",
  hotelImage: "https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-terrace-0021-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
  address: JSON.stringify({
    street: "123 Main St",
    city: "Kigali",
    state: "Kigali",
    postalCode: "12345",
    country: "Rwanda"
  }),
  contact: JSON.stringify({
    phone: "+250 123 456 789",
    email: "contact@mariothotel.com"
  }),
  createdAt: new Date(),
  updatedAt: new Date()
}

const hotelTwo = {
  id: hotelTwoId,
  userId: userFourId,
  hotelName: "Serena hotel",
  hotelImage: "https://image-tc.galaxy.tf/wijpeg-3aaubf2iwiw7oj1xvk1x1439s/serena-kigali-2023-grvw-024-room-04-prime-room.jpg?width=1600&height=1066",
  address: JSON.stringify({
    street: "456 Another St",
    city: "Kigali",
    state: "Kigali",
    postalCode: "67890",
    country: "Rwanda"
  }),
  contact: JSON.stringify({
    phone: "+250 987 654 321",
    email: "contact@serenahotel.com"
  }),
  createdAt: new Date(),
  updatedAt: new Date()
  
}

const hotelThree = {
  id: hotelThreeId,
  userId: userFourId,
  hotelName: "Radison blu",
  hotelImage: "https://media.radissonhotels.net/image/radisson-blu-hotel-convention-center-kigali/exterior/16256-116537-f63878464_4k.jpg?impolicy=HomeHero",
  address: JSON.stringify({
    street: "789 Main Blvd",
    city: "Kigali",
    state: "Kigali",
    postalCode: "11223",
    country: "Rwanda"
  }),
  contact: JSON.stringify({
    phone: "+250 555 555 555",
    email: "contact@radisonblu.com"
  }),
  createdAt: new Date(),
  updatedAt: new Date()
}

const hotelFour = {
  id: hotelFourId,
  userId: userFiveId,
  hotelName: "Mariot",
  hotelImage: "https://cache.marriott.com/is/image/marriotts7prod/fp-kglfp-outdoor-pool-34495-23706:Wide-Hor?wid=1318&fit=constrain",
  address: JSON.stringify({
    street: "321 Different St",
    city: "Kigali",
    state: "Kigali",
    postalCode: "44556",
    country: "Rwanda"
  }),
  contact: JSON.stringify({
    phone: "+250 123 123 123",
    email: "info@mariothotel.com"
  }),
  createdAt: new Date(),
  updatedAt: new Date()
  
}

const hotelFive = {
  id: hotelFiveId,
  userId: userFiveId,
  hotelName: "Mariot",
  hotelImage: "https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-terrace-0021-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
  address: JSON.stringify({
    street: "111 Some St",
    city: "Kigali",
    state: "Kigali",
    postalCode: "77889",
    country: "Rwanda"
  }),
  contact: JSON.stringify({
    phone: "+250 789 789 789",
    email: "support@mariothotel.com"
  }),
  createdAt: new Date(),
  updatedAt: new Date()
}

export const up = (queryInterface: QueryInterface) => {
  return queryInterface.bulkInsert("hotels", [
    hotelOne,
    hotelTwo,
    hotelThree,
    hotelFour,
    hotelFive
  ])
  
}
export const down =(queryinterface: QueryInterface)=>{
  return queryinterface.bulkDelete("hotels", {})
}

