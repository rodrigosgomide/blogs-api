const { Category } = require('../models');
const { validateByScheema } = require('./Utils/validations');
const { categoryScheema } = require('./Utils/schemas');
const { customError, errorStatus, errorMessages } = require('./Utils/errors');

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

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) throw customError(errorStatus.INVALID_FIELDS, errorMessages.INVALID_CATEGORY);
  return category;
};

module.exports = {
  registerCategory,
  getAllCategories,
  getCategoryById,
};