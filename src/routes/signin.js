var passport = require('passport');
const { check, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const signIn = require('../app/controllers/SigninControllers');

router.get('/', signIn.signinGet);
router.post(
    '/',
    passport.authenticate('local.signin', {
        successRedirect: '/mcc',
        failureRedirect: '/signin',
        failureFlash: true,
    }),
);

module.exports = router;
