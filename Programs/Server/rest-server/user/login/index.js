const express = require('express');
const router = express.Router();
const { loginAction } = require('./controller');

router.post('/', loginAction);

module.exports = router;

