const express = require('express')
const User = require('../Model/user.model')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET = process.env.SECRET;

const { body, validationResult } = require('express-validator')


//user registration
router.post("/createUser", [
    body('username').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ error: "email already exists." })
            }

            const salt = await bcrypt.genSalt(10)
            const securePass = await bcrypt.hash(req.body.password, salt)
            user = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: securePass,
            })

            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET)
            console.log(authToken)
            res.json({ user, authToken })
        } catch (error) {
            res.status(500).send("Internal server error")
        }
    })




    module.exports = router
