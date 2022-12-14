const express = require('express');
const encryptRoutes = require('../routes/encryptRoutes');

const app = express();

app.use(express.json());
app.use('/encrypts', encryptRoutes);

module.exports = app;
