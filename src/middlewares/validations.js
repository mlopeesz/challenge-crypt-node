const E_VALIDATION_FAILURE = {
  code: 'E_VALIDATION_FAILURE',
  message: 'O campo "name" é obrigatório.',
};

const checkIfNameExists = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json(E_VALIDATION_FAILURE);
  }
  return next();
};

module.exports = { checkIfNameExists };
