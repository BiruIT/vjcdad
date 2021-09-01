class SiteControllers {
    // GET / HOME
    home(req, res) {
        res.render('home');
    }

    //GET / GALLERY
    gallery(req, res) {
        res.render('gallery');
    }
}

module.exports = new SiteControllers();
