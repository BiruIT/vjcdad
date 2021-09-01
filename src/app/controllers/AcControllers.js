const aircraft = require('../models/Aircraft');
const { multipleMongooseToObject } = require('../../util/mongoose');
class AcControllers {
    // GET / Aircraft
    ac(req, res, next) {
        aircraft
            .find({})
            .then((aircrafts) => {
                // aircrafts = aircrafts.map(aircraft => aircraft.toObject())
                res.render('aircraft', {
                    aircrafts: multipleMongooseToObject(aircrafts),
                });
            })
            .catch(next);

        // res.render('aircraft');
    }
}

module.exports = new AcControllers();
