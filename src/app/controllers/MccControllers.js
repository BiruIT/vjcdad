class MccControllers {
    // GET / MCC
    mcc(req, res) {
        if (req.isAuthenticated()) {
            res.render('mcc');
        } else {
            res.send('Ban chua log in');
        }
    }
}

module.exports = new MccControllers();
