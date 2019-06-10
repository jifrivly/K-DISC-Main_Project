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

module.exports = mongoose.model("user", userSchema);