const { userService } = require('../services');

const registerUser = async (req, res, next) => {
    const newUserInfo = req.body;
    try {
        const token = await userService.registerUser(newUserInfo);
        return res.status(201).json({ token });
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        return res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    registerUser,
    getAllUsers,
    getUserById,
};
