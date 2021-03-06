const Pool = require("pg").Pool;
require("dotenv").config();

// const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
// const proConfig = process.env.DATABASE_URL; //heroku addons

// const pool = new Pool({
//   connectionString:
//     process.env.NODE_ENV === "production" ? proConfig : devConfig,
//   ssl: process.env.NODE_ENV === "production",
// });
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = pool;
