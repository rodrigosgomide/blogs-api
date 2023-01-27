const errorStatus = {
    IS_REQUIRED: 400,
    INVALID_FIELDS: 400,
  };
  
  const errorMessages = {
    IS_REQUIRED: 'Some required fields are missing',
    INVALID_FIELDS: 'Invalid fields',
  };

  const customError = (status, message) => ({ status, message });
  
  module.exports = {
    errorStatus,
    errorMessages,
    customError,
  };