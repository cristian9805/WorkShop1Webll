const express = require('express');
const userSchema = require("../models/user");
const user = require('../models/user');

const router = express.Router();

//create user
router.post('/users', (req, res) =>{
    const user = userSchema(req.body);
    console.log(req.body)
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports= router;