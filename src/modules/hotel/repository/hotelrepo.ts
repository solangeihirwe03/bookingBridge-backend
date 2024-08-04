import Hotels from "../../../database/model/hotels";

const createHotel = async(body: any)=>{
    return await Hotels.create(body)
}

const findHotelByAttribute = async(key: string, value: any)=>{
    return await Hotels.findAll({where: {[key]: value}})
}

export default{
    createHotel,
    findHotelByAttribute
}