const { categoryService } = require('../services');

const registerCategory = async (req, res, next) => {
    const newCategory = req.body;
    try {
        const category = await categoryService.registerCategory(newCategory);
        return res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await userService.getAllUsers();
//         return res.status(200).json(users);
//     } catch (error) {
//         next(error);
//     }
// };

// const getUserById = async (req, res, next) => {
//     const { id } = req.params;
//     try {
//         const user = await userService.getUserById(id);
//         return res.status(200).json(user);
//     } catch (error) {
//         next(error);
//     }
// };

module.exports = {
    registerCategory,
};
