const { prisma, jwt } = require("../models");
const createError = require("../utils/createError");

const authenticate = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization || !authorization.startsWith("Bearer ")) {
            return createError(401, "Unauthorized")
        }

        const token = authorization.split(" ")[1];

        if (!token) {
            return createError(401, "Unauthorized")
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
                return createError(401, "Unauthorized")
            }
            req.user = payload;
        })

        const user = await prisma.user.findUnique({
            where:{
                email:req.user.email
            }
        })

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authenticate