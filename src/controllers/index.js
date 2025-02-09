const { login, getUser } = require('./auth-controller')
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./user-controller')

module.exports = {
    login,getUser,
    getAllUsers,getUserById,createUser,updateUser,deleteUser
}