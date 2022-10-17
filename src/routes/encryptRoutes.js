const Router = require('express');
const { getAll, create, getById } = require('../controller/encryptController');
const { checkIfNameExists } = require('../middlewares/validations');

const route = Router();

route.get('/', getAll);
route.post('/', checkIfNameExists, create);
route.get('/:id', getById);

module.exports = route;
