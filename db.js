require('dotenv').config();
const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

// Create a new Pool instance using the connection string
const pool = new Pool({
  connectionString: connectionString,
});


// Export the pool so that other parts of your application can use it
module.exports = pool;