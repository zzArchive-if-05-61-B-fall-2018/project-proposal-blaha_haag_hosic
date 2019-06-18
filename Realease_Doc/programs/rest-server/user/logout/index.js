const express = require('express');
const router = express.Router();
const { logoutAction } = require('./controller');

router.post('/', logoutAction);

module.exports = router;
