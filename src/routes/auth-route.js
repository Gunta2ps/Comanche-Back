const { login } = require("../controllers");
const { express } = require("../models");

const router = express.Router();

router.post("/login",login)

module.exports = router