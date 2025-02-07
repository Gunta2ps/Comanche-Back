const { bcrypt, jwt, prisma } = require("../models")
const createError = require("../utils/createError")

exports.login =async (req, res, next) => {
    try {
        const data = req.body

        if(!data.email.trim() || !data.password.trim()){
            return createError(400,"Please fill data")
        }

        const findUser = await prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if(!findUser){
            return createError(400,"User not found")
        }
        if(findUser.role !== "ADMIN"){
            return createError(400,"You are not admin")
        }
        let isMatch = await bcrypt.compare(data.password, findUser.password)
        
        if(!isMatch){
            return createError(400,"Password is incorrect")
        }

        const payload = {
            role: findUser.role,
            email: findUser.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})

        const result = {user: payload, token: token}

        res.status(200).json({result})

    } catch (error) {
        next(error)
    }
}