var passport = require('passport');
const { check, validationResult } = require('express-validator');

class SigninControllers {
    // GET / signin
    signinGet(req, res) {
        var messages = req.flash('error');
        res.render('signin', {
            messages: messages,
            hasErrors: messages.length > 0,
        });
    }
}
module.exports = new SigninControllers();
