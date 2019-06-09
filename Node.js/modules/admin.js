const express = require("express");

const adminModel = require("../models/adminModel");

const admin = express.Router();

admin.post("/", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let adminData = {
        username: username,
        password: password
    };

    adminModel
        .findOne({
            $and: [adminData]
        })
        .then(data => {
            if (data) {
                res.status(200).json({
                    text: "User found",
                    data: data
                });
            } else {
                res.status(404).json({
                    text: "user not found, Invalid credentials!"
                });
            }
        })
        .catch(err => {
            if (err) {
                res.status(406).json({
                    text: "Error occurred when querying",
                    error: err
                });
            }
        });
});

module.exports = admin;
