const { prisma } = require("../models")

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await prisma.user.findMany({
            where:{
                role:"USER"
            },select:{
                id: true,
                email: true,
                name: true,
                address: true,
                phone: true,
                birthDate: true
            }
        }
        )
        res.json({users})
    } catch (error) {
        next(error)
    }
}

exports.getUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await prisma.user.findUnique({
            where: {
                id: Number(id)
            },
            select: {
                id: true,
                email: true,
                name: true,
                address: true,
                phone: true,
                birthDate: true
            }
        })
        res.json(user)
    } catch (error) {
        next(error)
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const { name,address,email,phone,bdate} = req.body
        await prisma.user.create({
            data:{
                name:name,
                address:address,
                email:email,
                phone:phone,
                birthDate:new Date(bdate)
            }
        })
        res.json({message: 'Create User'})
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const { name,address,email,phone,bdate} = req.body
        await prisma.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name:name,
                address:address,
                email:email,
                phone:phone,
                birthDate:new Date(bdate)
            }
        })
        res.json({message: 'Update User'})
    } catch (error) {
        next(error)
    }
}   

exports.deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params
        await prisma.user.delete({
            where: {
                id: Number(id)
            }
        })
        res.json({message: 'Delete User'})
    } catch (error) {
        next(error)
    }
}