const express = require("express");

const userModel = require("../models/userModel");

const user = express.Router();

user.get("/", (req, res) => {
    res.json({ status: 100, text: "User module working" });
});

user.post("/login", (req, res) => {

});

user.post("/signup", (req, res) => {

});

user.get("/delete", (req, res) => {

});

module.exports = user;