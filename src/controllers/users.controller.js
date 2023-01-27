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

module.exports = {
    registerUser,
};
