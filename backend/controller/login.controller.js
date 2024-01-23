const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginController = {
    post: async (req, res) => {
        const { email, password } = req.body;
        const existedEmail = await UserModel.findOne({ email: email });
        if (!existedEmail) {
            res.send({ auth: false, message: 'email not found!' });
        } else {
            const isValid = await bcrypt.compare(password, existedEmail.password);
            if (!isValid) {
                res.send({ auth: false, message: 'password is incorrect!' });
            } else {
                const id = existedEmail._id;
                const token = jwt.sign({ id }, process.env.SECRET_KEY, {
                    expiresIn: '1d'
                });
                res.send({
                    auth: true,
                    user: {
                        id: existedEmail._id,
                        email: existedEmail.email,
                        isAdmin: existedEmail.isAdmin
                    },
                    token: token,
                    message: 'user logged in successfully!'
                });
            }
        }
    }
};

module.exports = loginController;