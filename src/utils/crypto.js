const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const key = 'facilefacilefacilefacilefacilefa';
const iv = Buffer.from(crypto.randomBytes(16));

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  const encryptedText = cipher.update(text, 'utf8', 'hex');
  return encryptedText;
};

const decrypt = (text) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  const decryptedText = decipher.update(text, 'hex', 'utf8');
  return decryptedText;
};

module.exports = { encrypt, decrypt };
