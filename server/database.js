const { Pool } = require('pg');

// const pool = new Pool({
//   user: process.env.POSTGRES_USER,
//   host: process.env.POSTGRES_HOST,
//   database: process.env.POSTGRES_DATABASE,
//   password: process.env.POSTGRES_PASSWORD,
//   port: 5432,
// });

const pool = new Pool({
  connectionString: `${process.env.DB_URL}?sslmode=require`,
});

pool.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connect to postreSQL sucsessfuly');
});

module.exports = pool;
