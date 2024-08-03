import Users from "../../../database/model/user";

const findAllUsers = async () => {
    return await Users.findAll()
}

const updateProfile = async (user: any, id: string) => {

    await Users.update({ ...user }, { where: { id }, returning: true })
    const updatedUser = await Users.findOne({ where: { id } })
    return updatedUser
}

export default {
    findAllUsers,
    updateProfile
}