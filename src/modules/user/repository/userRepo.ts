import Users from "../../../database/model/user";

const findAllUsers = async()=>{
    return await Users.findAll()
}

export default {
    findAllUsers
}