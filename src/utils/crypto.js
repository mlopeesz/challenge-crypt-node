const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'facilefacilefacilefacilefacilefa'; // Key exposta para fins de avaliação.

const encrypt = (text) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encryptedText = cipher.update(text);
  encryptedText = Buffer.concat([encryptedText, cipher.final()]);
  return `${iv.toString('hex')}:${encryptedText.toString('hex')}`;
};

const decrypt = (text) => {
  const [iv, encryptedText] = text.split(':');
  const ivBuffer = Buffer.from(iv, 'hex');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
  let decryptedText = decipher.update(Buffer.from(encryptedText, 'hex'));
  decryptedText = Buffer.concat([decryptedText, decipher.final()]);
  return decryptedText.toString();
};

module.exports = { encrypt, decrypt };
