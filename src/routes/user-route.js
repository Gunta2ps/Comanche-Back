const { createUser, updateUser, deleteUser, getAllUsers, getUserById } = require("../controllers");
const authenticate = require("../middlewares/authenticate");
const { express } = require("../models");
const { createUserValidator, editUserValidator } = require("../validator/auth-validator");

const router= express.Router();

router.get('/',getAllUsers)
router.get('/:id',getUserById)

router.post('/',createUserValidator,createUser)
router.patch('/:id',editUserValidator,updateUser)
router.delete('/:id',deleteUser)

module.exports = router