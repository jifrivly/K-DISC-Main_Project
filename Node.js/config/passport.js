const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const userModel = require("../models/userModel");

passport.use(new localStrategy({
    usernameField: 'email'
}, function (username, password, done)))