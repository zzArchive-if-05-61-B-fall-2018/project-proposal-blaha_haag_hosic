const express = require('express');
const router = express.Router();
const {createGroupAction, deleteGroupAction, addMemberAction, getGroupAction} = require('./controller');

router.post('/create', createGroupAction);
router.post('/delete', deleteGroupAction);
router.post("/get", getGroupAction);

router.use('*', function(req, res) {
    res.status(520).json({ error: "Unvalid route" });
});


module.exports = { router };

