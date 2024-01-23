const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const verifyJWTMiddleware = require('../middleware/users.middleware');

const userController = {
    getAll: async (req, res) => {
        // Middleware ekleme örneği:
        router.get('/users', verifyJWTMiddleware, async (req, res) => {
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
        });
    },
    post: async (req, res) => {
        // Kullanıcı oluşturma işlemi için middleware ekleme
        router.post('/users', async (req, res) => {
            const { name, password, email } = req.body;
            // Eğer gerekiyorsa, diğer işlemler...
        });
    },
    delete: async (req, res) => {
        // Kullanıcı silme işlemi için middleware ekleme
        router.delete('/users/:id', verifyJWTMiddleware, async (req, res) => {
            const id = req.params.id;
            try {
                const user = await UserModel.findByIdAndDelete(id);
                if (!user) {
                    return res.status(404).json({ message: 'User not found' });
                }
                res.status(203).send({ message: `${user.name} deleted successfully!` });
            } catch (error) {
                console.error(error);
                res.status(500).json({ message: 'Error deleting user' });
            }
        });
    },
};

module.exports = userController;
