import Users from "../../../database/models/users";
import Sessions from "../../../database/models/sessions";

const createUser = async(body: any)=>{
    return await Users.create({...body, role: "customer"})
}

const createSession = async (body: any) => {
    return await Sessions.create(body);
  };

export default {createUser, createSession}