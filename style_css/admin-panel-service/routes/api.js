const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
const user = require('../models/user');
const db = "mongodb+srv://mbhossain3108:mbhossain3108@cluster0.j255j2s.mongodb.net/admin-panel?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.log('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }

    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }

    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }

    req.userId = payload.subject
    next()
}

router.get('/', (req, res) => {
    res.send('From API route')
});

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }
    })
});

router.post('/login', (req, res) => {
    let userData = req.body
    User.findOne({ email: userData.email }, (err, user) => {
        if (err) {
            console.log(err)
        } else {
            if (!user) {
                res.status(401).send('Invalid Email')
            } else
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid Password')
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token })
                }
        }
    })
});

module.exports = router