var passport = require('passport');
const { check, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
// const signUp = require('../app/controllers/SigninControllers');

// router.get('/', signIn.signinGet);

/* GET sign-up page. */
router.get('/', function (req, res, next) {
    var messages = req.flash('error');
    res.render('signup', {
        messages: messages,
        hasErrors: messages.length > 0,
    });
});

/* Post sign-up page. */
// Xử lý thông tin khi có người đăng ký
router.post(
    '/',
    [
        check('email', 'Your email is not valid').isEmail(),
        check(
            'password',
            'Your password must be at least 5 characters',
        ).isLength({ min: 5 }),
    ],
    function (req, res, next) {
        var messages = req.flash('error');
        const result = validationResult(req);
        var errors = result.errors;
        if (!result.isEmpty()) {
            var messages = [];
            errors.forEach(function (error) {
                messages.push(error.msg);
            });
            res.render('signup', {
                messages: messages,
                hasErrors: messages.length > 0,
            });
        } else {
            next();
        }
    },
    passport.authenticate('local.signup', {
        successRedirect: '/signin',
        failureRedirect: '/signup',
        failureFlash: true,
    }),
);

module.exports = router;
