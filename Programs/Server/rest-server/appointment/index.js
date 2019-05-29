const express = require('express');
const router = express.Router();
const {createAppointmentAction, deleteAppointmentAction, editAppointmentAction, getAllAppointmentsFromUserAction} = require('./controller');

router.post('/create', createAppointmentAction);
router.post('/delete', deleteAppointmentAction);
router.post('/addMember', editAppointmentAction);
router.post("/getGroup", getAllAppointmentsFromUserAction);

router.use('*', function(req, res) {
    res.status(500).json({ error: "Unvalid route" });
});


module.exports = { router };

