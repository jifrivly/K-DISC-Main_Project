const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const userModel = require("../users/userModel");

passport.use(new localStrategy({
    usernameField: 'email'
}, (username, password, done) => {
    userModel.findUser(username).then((data) => {
        if (!data) {
            return done(null, false, {
                message: 'User not found'
            });
        };
        if (user) {
            if (!userModel.checkPassword(password)) {
                return done(null, false, {
                    message: 'Password is wrong'
                });
            } else {
                return done(null, data)
            }
        };
    });
}));