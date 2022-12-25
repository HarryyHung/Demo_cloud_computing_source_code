
class SiteController {

    // [GET] /
    index(req, res) { // method
        res.render('home');
    }

    // [GET] /search
    search(req,res) {
        res.render('search');
    }

}

module.exports = new SiteController;