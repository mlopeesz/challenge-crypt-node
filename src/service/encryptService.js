const encryptModel = require('../model/encryptModel');
const { encrypt, decrypt } = require('../utils/crypto');

const getAll = async () => {
  const encrypts = await encryptModel.getAll();
  return encrypts.rows;
};

const create = async (name) => {
  const encryptedName = encrypt(name);
  const newEncrypt = await encryptModel.create(encryptedName);
  return newEncrypt.rows;
};

const getById = async (id) => {
  const { rows } = await encryptModel.getById(id);
  const decryptedName = {
    id: rows[0].id,
    decrypted_string: decrypt(rows[0].encrypted_string),
  };
  return decryptedName;
};

module.exports = { getAll, create, getById };
