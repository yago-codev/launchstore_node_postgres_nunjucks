// arquivo de conexão com o postgres
const { Pool } = require('pg');

module.exports = new Pool({
  user: '',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'launchstore'
});