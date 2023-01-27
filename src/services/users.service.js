const { User } = require('../models');
const { validateByScheema } = require('./Utils/validations');
const { userScheema } = require('./Utils/schemas');
const { generateToken } = require('../auth/token');
const { customError, errorStatus, errorMessages } = require('./Utils/errors');

const registerUser = async (newUserInfo) => {
    validateByScheema(userScheema, newUserInfo);
    const { displayName, email, password, image } = newUserInfo;
  try {
    await User.create({
      displayName,
      email,
      password,
      image,
    });
    return generateToken(email);
  } catch (error) {
    if (error.errors) {
      throw customError(409, 'User already registered');
    }
  }
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  if (!user) throw customError(errorStatus.NOT_FOUND, errorMessages.USER_NOT_EXIST);
  return user;
};

module.exports = {
  registerUser,
  getUserByEmail,
  getAllUsers,
  getUserById,
};