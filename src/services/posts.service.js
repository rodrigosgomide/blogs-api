const { BlogPost } = require('../models');
const { validateByScheema } = require('./Utils/validations');
const { postScheema } = require('./Utils/schemas');
const { errorStatus, errorMessages } = require('./Utils/errors');

const registerPost = async (newPost) => {
    validateByScheema(
      postScheema, newPost, errorMessages.IS_REQUIRED, errorStatus.IS_REQUIRED,
      );
    const { title, content, id } = newPost;
    const post = await BlogPost.create({
      title,
      content,
      userId: id,
    });

    return post;
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
  registerPost,
};