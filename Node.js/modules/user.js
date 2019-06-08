const express = require("express");

const userModel = require("../models/userModel");

const user = express.Router();


user.get("/", (req, res) => {
    res.status(404).json({
        text:
            "User module working, please use /signup, /login, /delete, /check/email or /check/mobile"
    });
});

// create new user
user.post("/signup", (req, res) => {
    const userData = {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    };
    const newUser = new userModel(userData);
    newUser
        .save()
        .then((data) => {
            res.status(200).json({
                data: data,
                text: "new user added."
            });
        })
        .catch((err) => {
            res.status(404).json({
                error: err,
                text: "error occured, User not added."
            });
        });
});

// user login
user.post("/login", (req, res) => {
    const loginData = {
        email: req.body.email,
        password: req.body.password
    };
    userModel.findOne(
        {
            $and: [loginData]
        },
        (err, data) => {
            if (err) {
                res.status(406).json({
                    text: "Error occurred when querying",
                    error: err
                });
            }
            if (data) {
                res.status(200).json({
                    text: "User found",
                    data: data
                });
            } else {
                res.status(404).json({
                    text: "user not found"
                });
            }
        }
    );
});

// Delete a user details
user.post("/delete", (req, res) => {
    const user_id = req.body.user_id;
    userModel
        .deleteOne({
            _id: user_id
        })
        .then((data) => {
            res.status(200).json({
                text: "user deleted successfully.",
                data: data
            });
        })
        .catch((err) => {
            res.status(404).json({
                text: "error occured",
                error: err
            });
        });
});

// email check
user.post("/check/email", (req, res) => {
    const email = req.body.email;
    userModel.findOne(
        {
            email: email
        },
        (err, data) => {
            if (err) {
                res.status(406).json({
                    text: "Error occurred when querying",
                    error: err
                });
            }
            if (data) {
                res.status(200).json({
                    text: "email found"
                });
            } else {
                res.status(404).json({
                    text: "email not found"
                });
            }
        }
    );
});

// phone check
user.post("/check/mobile", (req, res) => {
    const mobile = req.body.mobile;
    userModel.findOne(
        {
            mobile: mobile
        },
        (err, data) => {
            if (err) {
                res.status(406).json({
                    text: "Error occurred when querying",
                    error: err
                });
            }
            if (data) {
                res.status(200).json({
                    text: "mobile found"
                });
            } else {
                res.status(404).json({
                    text: "mobile not found"
                });
            }
        }
    );
});

module.exports = user;
