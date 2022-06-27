const router = require('express').Router();
const passport = require('passport');
const userHttpHandler = require('./users.http')
const config = require('../config');
require('../tools/auth')(passport)


router.route('/')
    .get(
        passport.authenticate('jwt', config.jwtSecret),
        userHttpHandler.getAllUser
    )

router.route('/:uuid')
        .get(
            passport.authenticate('jwt', config.jwtSecret),
            userHttpHandler.getUserByNumber
        )
//         .put()
//         .delete()

// router.route('/me')
//         .get()
//         .put()
//         .delete()


module.exports = {
    router
}