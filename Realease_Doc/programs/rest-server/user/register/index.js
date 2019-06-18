const express = require('express');
const router = express.Router();
const { registerAction } = require('./controller');

router.post('/', registerAction);

module.exports = router;
