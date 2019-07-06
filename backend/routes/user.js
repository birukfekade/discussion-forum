const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 10, null).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        console.log(user);
        user
            .save()
            .then(result => {
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: "Invalid authentication credentials!"
                });
            });
    });
});

router.post('/login', (res, req, next) => {

});

module.exports = router;
