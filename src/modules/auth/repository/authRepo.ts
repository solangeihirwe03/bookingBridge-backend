import Sessions from "../../../database/model/sessions";
import Users from "../../../database/model/user";

const createUser = async (body: any)=>{
    return await Users.create(body)
}

const createSession = async(body: any)=>{
    return await Sessions.create(body)
}

const destroySession = async(destroyKey: string, destroyValue: any, key: string, value: string)=>{
    return await Sessions.findAll({where:{ [destroyKey]: destroyValue, [key]: value}})
}

const findUserByAttributes = async(key: string, value: string)=>{
    return await Users.findOne({where: {[key]: value}})
}

const updateUserByAttributes = async (updatedKey: string, updatedValue: any, key: string, value: any)=>{
   await Users.update(
    {[updatedKey]: updatedValue},
    {where:{[key]: value}}, 
)
 return findUserByAttributes(key, value)
}

export default {
    createUser,
    createSession, 
    findUserByAttributes, 
    destroySession,
    updateUserByAttributes
}