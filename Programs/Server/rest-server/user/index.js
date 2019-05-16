const loginRouter = require('./login/index');
const registerRouter = require('./register/index');
const logoutRouter = require('./logout/index');
const checkRouter = require('./check/index');
const express = require('express');
const router = express.Router();

router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.use("/logout", logoutRouter);
router.use("/check", checkRouter);

router.use('*', function(req, res) {
    res.status(500).json({ error: "Unvalid route" });
});

module.exports = {
    router
}; 
