const connection = require('../database/index');

const getAll = async () => {
  const encrypts = await connection.query('SELECT * FROM encrypts');
  return encrypts;
};

const create = async (name) => {
  const newEncrypt = await connection.query('INSERT INTO encrypts(encrypted_string) VALUES ($1) RETURNING *', [name]);
  return newEncrypt;
};

const getById = async (id) => {
  const encrypt = await connection.query('SELECT * FROM encrypts WHERE id = ($1)', [id]);
  return encrypt;
};

module.exports = { getAll, create, getById };
