const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    password: String
});

userSchema.methods.generateJWT = function () {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email,
        mobile: this.mobile,
        exp: parseInt(expiry.getDate() / 1000)
    }, "1234");
};

userSchema.methods.findUser = function (email, password) {
    userSchema.findOne({ email: email }, (err, user) => {
        if (err) { return err };
        if (!user) { return false }
        if (user) {
            if (this.checkPassword(password)) {
                return true;
            }
        };
    });
};

userSchema.methods.checkPassword = function (password) {
    userSchema.findOne({ password: password }, (err, user) => {
        if (err) { return err };
        if (!user) { return false };
        if (user) { return true };
    });
};

module.exports = mongoose.model("user", userSchema);