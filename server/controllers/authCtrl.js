const userModel = require("../models/auth")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const loginCtrl = async (req, res) => {
    try {
        console.log(req.body)
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
            })
        }

        const user = await userModel.findOne({ email })
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Credentials',
            });
        }

        if (!user) {
            return res.status(401).json({
                success: false,
                message: `User is not Registered with Us Please SignUp to Continue`,
            })
        }


        const token = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h",
            }
        )

        user.token = token
        user.password = undefined
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }
        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: `User Login Success`,
        })


    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: `Login Failure Please Try Again`,
        })
    }
}

const registerCtrl = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.create({ name, email, password });
        res.status(201).send({
            message: "admin crated successfully!",
            user
        })
    } catch (error) {
        res.status(500).send({
            message: "error while creading admin ",
            user
        })
    }
}

module.exports = { loginCtrl, registerCtrl }