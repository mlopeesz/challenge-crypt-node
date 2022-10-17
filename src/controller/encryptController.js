const encryptService = require('../service/encryptService');

const getAll = async (_req, res) => {
  try {
    const encrypts = await encryptService.getAll();
    return res.status(200).json(encrypts);
  } catch (error) {
    return res.status(400).send('Server error');
  }
};

const create = async (req, res) => {
  try {
    const newEncrypt = await encryptService.create(req.body.name);
    return res.status(201).json(newEncrypt);
  } catch (error) {
    return res.status(400).send('Server error.');
  }
};

const getById = async (req, res) => {
  try {
    const encryptedName = await encryptService.getById(req.params.id);
    return res.status(200).json(encryptedName);
  } catch (error) {
    return res.status(400).send('Server error.');
  }
};

module.exports = { getAll, create, getById };
