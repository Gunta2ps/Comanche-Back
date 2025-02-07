const { login } = require('./auth-controller')
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('./user-controller')

module.exports = {
    login,
    getAllUsers,getUserById,createUser,updateUser,deleteUser
}