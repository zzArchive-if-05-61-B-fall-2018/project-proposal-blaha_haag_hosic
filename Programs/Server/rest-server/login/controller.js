const model = require('./model');

function loginAction(request, response) {
    // test if pw and un is correct
    // send token or error code
    // send token if correct
    console.log(request.body);
    response.json(model.token);
    //response.status(500).json(error)
}

module.exports = {
    loginAction,
};