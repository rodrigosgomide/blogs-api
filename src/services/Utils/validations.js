const { errorStatus } = require('./errors');

const errorHandler = (message, status) => ({ message, status });

const validateByScheema = (scheema, value, message, status) => {
  const { error } = scheema.validate(value);
  console.log(error);
  if (error) {
    if (message && status) {
      throw errorHandler(message, status);
    }
    throw errorHandler(error.message, errorStatus.INVALID_FIELDS);
  }
};

const validateById = async (model, id, errorMessage) => {
  const result = await model.findById(id);

  if (!result || result.length === 0) throw errorHandler(errorMessage, errorStatus.NOT_FOUND);
  return result;
};

module.exports = {
  validateByScheema,
  errorHandler,
  validateById,
};