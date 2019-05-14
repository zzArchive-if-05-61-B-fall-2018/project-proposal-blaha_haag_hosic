const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = express.Router();

const user = require('./user/index');
const appointment = require('./appointment/index');

app.use(morgan('common', { immediate: true }));
app.use(bodyParser.json());

app.use('/user', user.router);
app.use('/appointment', appointment.router);

router.use('*', function(req, res) {
    res.status(500).json({ error: "Unvalid route" });
});
app.listen(8080,()=> {
    console.log("Server is listening to http://localhost:8080");
})