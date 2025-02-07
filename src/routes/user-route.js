const { getUser, createUser, updateUser, deleteUser } = require("../controllers");
const authenticate = require("../middlewares/authenticate");
const { express } = require("../models");

const router= express.Router();

router.get('/',getAllUsers)
router.get('/:id',getUserById)

router.post('/',createUser)
router.patch('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router