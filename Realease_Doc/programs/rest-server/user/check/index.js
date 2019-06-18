const express = require('express');
const router = express.Router();
const { checkIfUserExistsAction } = require('./controller');

router.post('/', checkIfUserExistsAction);

module.exports = router;

