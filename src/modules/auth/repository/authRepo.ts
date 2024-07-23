import Sessions from "../../../database/model/sessions";
import Users from "../../../database/model/user";

const createUser = async (body: any)=>{
    return await Users.create(body)
}

const createSession = async(body: any)=>{
    return await Sessions.create(body)
}
export default {createUser, createSession}