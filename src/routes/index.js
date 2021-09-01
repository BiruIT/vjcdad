const signinRouter = require('./signin');
const signupRouter = require('./signup');
const mccRouter = require('./mcc');
const siteRouter = require('./site');
const aircraftRouter = require('./aircraft');

function route(app) {
    app.use('/signin', signinRouter);
    app.use('/signup', signupRouter);
    app.use('/mcc', mccRouter);
    app.use('/aircraft', aircraftRouter);
    app.use('/', siteRouter);
}

module.exports = route;
