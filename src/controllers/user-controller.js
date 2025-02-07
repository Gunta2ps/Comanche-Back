exports.getAllUsers = async (req, res, next) => {
    try {
        res.json({message: 'Get All Users'})
    } catch (error) {
        next(error)
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        res.json({message: 'Get User By Id'})
    } catch (error) {
        next(error)
    }
}

exports.createUser = async (req, res, next) => {
    try {
        res.json({message: 'Create User'})
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        res.json({message: 'Update User'})
    } catch (error) {
        next(error)
    }
}   

exports.deleteUser = async (req, res, next) => {
    try {
        res.json({message: 'Delete User'})
    } catch (error) {
        next(error)
    }
}