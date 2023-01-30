const { PostCategory } = require('../models');
const categoryService = require('./categories.service');
// const { validateByScheema } = require('./Utils/validations');
// const { postScheema } = require('./Utils/schemas');
// const { errorStatus, errorMessages } = require('./Utils/errors');

const registerPostCategories = async (postId, categoriesIds) => {
  console.log(postId);
  await Promise.all(
    categoriesIds.map((categoryId) => categoryService.getCategoryById(categoryId)),
    );
  const categories = categoriesIds.map((categoryId) => ({ postId, categoryId }));
  await PostCategory.bulkCreate(categories);
};

// const getUserByEmail = async (email) => {
//   const user = await User.findOne({ where: { email } });
//   return user;
// };

// const getUserById = async (id) => {
//   const user = await User.findByPk(id, {
//     attributes: { exclude: ['password'] },
//   });
//   if (!user) throw customError(errorStatus.NOT_FOUND, errorMessages.USER_NOT_EXIST);
//   return user;
// };

module.exports = {
  registerPostCategories,
};