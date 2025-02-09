const { login, getUser } = require("../controllers");
const authenticate = require("../middlewares/authenticate");
const { express } = require("../models");

const router = express.Router();

router.post("/login",login)

router.get('/',authenticate,getUser)

module.exports = router