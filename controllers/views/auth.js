const router = require("express").Router();

router.get('/login', (req, res) => {
    res.render("login")
})

router.get('/signup', (req, res) => {
    res.render("sign up")
})

module.exports = router