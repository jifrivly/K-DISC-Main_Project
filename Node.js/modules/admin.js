const express = require("express");
const bodyParser = require("body-parser");

const adminModel = require("../models/adminModel");

const admin = express.Router();

admin.use(bodyParser.urlencoded());

admin.post("/", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (username == "jifrivly" && password == "admin") {
        res.status(200).json({ username: username, password: password });
    } else {
        res.status(404).json({ message: "Invalid credentials!" });
    }
});

module.exports = admin;
