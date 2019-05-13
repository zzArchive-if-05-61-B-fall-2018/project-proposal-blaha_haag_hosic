const express = require('express');
const app = express();
const morgan = require('morgan');
const loginRouter = require('./login/index');
const bodyParser = require('body-parser');


app.use(morgan('common', { immediate: true }));
app.use(bodyParser.json());

app.use('/login', loginRouter);


app.listen(8080,()=> {
    console.log("Server is listening to http://localhost:8080");
})