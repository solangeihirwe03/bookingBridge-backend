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
  hotelImage:[
    "https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-terrace-0021-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIhYSyyYnWhCmbB5XEoXBq--O8uWUSXoJfjlRlZOn1smqkdDvi4hMIgCy_a8Q-zwmhus&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRram_OXJTUPPuf7-3GggamFBY_DrL5Dc9gbAdC-CvtAUyevFEn0a4hsFk-TmB7SbSarks&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTbYSuoh_fQN4oTIftN7Pnbj_LalqelYBWPy5roEIdmbQDQnIPaxm95eWdP2BVNkQG5Y&usqp=CAU"
  ],
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
  hotelImage: [
    "https://image-tc.galaxy.tf/wijpeg-3aaubf2iwiw7oj1xvk1x1439s/serena-kigali-2023-grvw-024-room-04-prime-room.jpg?width=1600&height=1066",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/62/f0/0f/evening-exterior-view.jpg?w=700&h=-1&s=1",
    "https://image-tc.galaxy.tf/wijpeg-8negcq7qypbplf38kcte61txm/hr-dsc-8729.jpg?width=767",
    "https://cdn.audleytravel.com/798/570/79/261974-kigali-serena-hotel-kigali.jpg"
  ],
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
  hotelImage: [
    "https://media.radissonhotels.net/image/radisson-blu-hotel-convention-center-kigali/exterior/16256-116537-f63878464_4k.jpg?impolicy=HomeHero",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aOBiT4XJyVpZ9omAPNcHG4QADtVjSoGMGQ&s",
    "https://images.luxuryescapes.com/q_auto:good/n8tp83quane6kn4g7jiw",
    "https://estateintel.com/assets-ei/2016/07/KGLZH-exterior4-1440.jpg"

  ],
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
  hotelImage:[
    "https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-terrace-0021-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIhYSyyYnWhCmbB5XEoXBq--O8uWUSXoJfjlRlZOn1smqkdDvi4hMIgCy_a8Q-zwmhus&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRram_OXJTUPPuf7-3GggamFBY_DrL5Dc9gbAdC-CvtAUyevFEn0a4hsFk-TmB7SbSarks&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTbYSuoh_fQN4oTIftN7Pnbj_LalqelYBWPy5roEIdmbQDQnIPaxm95eWdP2BVNkQG5Y&usqp=CAU"
  ],
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
  hotelImage: [
    "https://cache.marriott.com/content/dam/marriott-renditions/KGLMC/kglmc-terrace-0021-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=600px:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIhYSyyYnWhCmbB5XEoXBq--O8uWUSXoJfjlRlZOn1smqkdDvi4hMIgCy_a8Q-zwmhus&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRram_OXJTUPPuf7-3GggamFBY_DrL5Dc9gbAdC-CvtAUyevFEn0a4hsFk-TmB7SbSarks&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTbYSuoh_fQN4oTIftN7Pnbj_LalqelYBWPy5roEIdmbQDQnIPaxm95eWdP2BVNkQG5Y&usqp=CAU"
  ],
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

