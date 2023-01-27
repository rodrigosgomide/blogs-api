const { User } = require('../models');
const { customError, errorStatus, errorMessages } = require('./Utils/errors');
const { generateToken } = require('../auth/token');

const login = async (email, password) => {
  if (email.length === 0 || password.length === 0) {
    throw customError(errorStatus.IS_REQUIRED, errorMessages.IS_REQUIRED);
  }

  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });
  
  if (!user) throw customError(errorStatus.INVALID_FIELDS, errorMessages.INVALID_FIELDS);

  return generateToken(email);
};

module.exports = {
  login,
};