const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/shopDB")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log("Database connection error : " + err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    password: String
});

module.exports = mongoose.model("user", userSchema);
