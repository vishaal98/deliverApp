// const pg = require("pg");
// const Pool = pg.Pool;

// require("dotenv").config();

// const pool = new Pool({
//   connectionString: process.env.DB_URL,
// });

// const client = pool
//   .connect()
//   .then(() => console.log("Connected to the DB"))
//   .catch((err) => console.log("Error connecting to the DB: ", err));

// const executeQuery = async (text, params) => {
//   try {
//     const result = await client.query(text, params);
//     return result;
//   } catch (error) {
//     console.error("Error executing SQL query:", error);
//     throw new Error("Database query failed");
//   } finally {
//     if (client) {
//       client.release();
//     }
//   }
// };

// module.exports = {
//   executeQuery,
// };

// config/db.js
const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  connectionString: process.env.DB_URL,
});

module.exports = pool;
