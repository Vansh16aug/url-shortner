const express = require("express");
const { handleUserSignup , handleUserSignIn} = require("../controllers/user");

const router = express.Router();

router.post('/', handleUserSignup)

router.post('/signin', handleUserSignIn);

module.exports = router;