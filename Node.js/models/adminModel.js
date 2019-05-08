const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/shopDB")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log("Database connection error : " + err);
    });

const adminSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String
});

module.exports = mongoose.model("admin", adminSchema);
