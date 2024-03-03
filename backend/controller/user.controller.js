const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt")

const userController = {
    getAll: async (req, res) => {
        try {
            const users = await UserModel.find();

            res.json({
                data: users,
                message: 'Data retrieved successfully!'
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error retrieving data!' });
        }
    },
    post: async (req, res) => {
        const { name, password, email } = req.body;
        const existedName = await UserModel.findOne({ name: name });
        const existedEmail = await UserModel.findOne({ email: email });
        if (existedName) {
            res.send({
                auth: false,
                message: 'name already exists!'
            })
            return;
        }
        if (existedEmail) {
            res.send({
                auth: false,
                message: 'email already used!'
            })
            return;
        }
        const salt = await bcrypt.genSalt(10); //500ms
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await UserModel({
            name: name,
            email: email,
            password: hashedPassword,
            isAdmin: false
        })
        await newUser.save();
        res.send({
            auth: true,
            data: newUser,
            message: 'user signed up successfully!',
        })
    },
    delete: async (req, res) => {
        const id = req.params.id
        const users = await UserModel.findByIdAndDelete(id)
        res.status(203).send({
            message: `${users.name} deleted successfully!`
        })
    },
};

module.exports = userController