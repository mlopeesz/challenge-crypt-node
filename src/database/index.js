const { Pool } = require('pg');

const ELEPHANTSQL_URL = 'postgres://euncogdf:Vf-YFoFck5otjuNDN5SPzWYoSNLqrNV3@babar.db.elephantsql.com/euncogdf';

const pool = new Pool({
  connectionString: ELEPHANTSQL_URL,
});

module.exports = pool;
