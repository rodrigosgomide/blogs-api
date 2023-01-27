const { Category } = require('../models');
const { validateByScheema } = require('./Utils/validations');
const { categoryScheema } = require('./Utils/schemas');
// const { customError, errorStatus, errorMessages } = require('./Utils/errors');

const registerCategory = async (newCategory) => {
    validateByScheema(categoryScheema, newCategory);
    const { name } = newCategory;
    const category = await Category.create({
      name,
    });

    return category;
};

// const getUserByEmail = async (email) => {
//   const user = await User.findOne({ where: { email } });
//   return user;
// };

// const getAllUsers = async () => {
//   const users = await User.findAll({
//     attributes: { exclude: ['password'] },
//   });
//   return users;
// };

// const getUserById = async (id) => {
//   const user = await User.findByPk(id, {
//     attributes: { exclude: ['password'] },
//   });
//   if (!user) throw customError(errorStatus.NOT_FOUND, errorMessages.USER_NOT_EXIST);
//   return user;
// };

module.exports = {
  registerCategory,
};