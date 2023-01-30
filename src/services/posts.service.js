const { BlogPost, User, Category } = require('../models');
const { validateByScheema } = require('./Utils/validations');
const { postScheema } = require('./Utils/schemas');
const { errorStatus, errorMessages, customError } = require('./Utils/errors');

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

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User,
      as: 'user',
    required: true,
    attributes: { exclude: ['password'] } },
    { model: Category,
      as: 'categories',
      through: {
        attributes: [],
      },
      required: true },
  ] });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [
    { model: User,
      as: 'user',
    required: true,
    attributes: { exclude: ['password'] } },
    { model: Category,
      as: 'categories',
      through: {
        attributes: [],
      },
      required: true },
  ] });
  if (!post) throw customError(errorStatus.NOT_FOUND, errorMessages.POST_NOT_EXIST);
  return post;
};

const updatePost = async (payload) => {
  const { id, title, content, userId } = payload;
  validateByScheema(
    postScheema, { title, content, id }, errorMessages.IS_REQUIRED, errorStatus.IS_REQUIRED,
    );
    
  const [post] = await BlogPost.update({ title, content }, { where: { id, userId } });

  if (post === 0) throw customError(errorStatus.UNAUTHORIZED, errorMessages.UNAUTHORIZED_USER);
  return getPostById(id);
};

module.exports = {
  registerPost,
  getAllPosts,
  getPostById,
  updatePost,
};