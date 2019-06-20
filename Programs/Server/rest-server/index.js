const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const user = require('./user/index');
const appointment = require('./appointment/index');
const group = require('./group/index');

app.use(morgan('common', { immediate: true }));
app.use(bodyParser.json());

app.use('/user', user.router);
app.use('/appointment', appointment.router);
app.use('/group', group.router);

app.use('*', function(req, res) {
    res.status(520).json({ error: "Unvalid route" });
});
app.listen(8080,()=> {
    console.log("Server is listening to http://localhost:8080");
})