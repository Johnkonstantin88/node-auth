const handleMongooseError = (error, __, next) => {
  error.status = 400;
  next();
};

module.exports = handleMongooseError;
