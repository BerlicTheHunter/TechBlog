// * Required Elements
const Sequelize = require('sequelize');
require('dotenv').config();

// * Variables
let sequelize;

// * Initiate Connection to Database
if (process.env.JAWSDB_URL) {
  // for connection via Heroku
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // for connection to local mysql db
  sequelize = new Sequelize(
    process.env.DB_Name,
    process.env.DB_User,
    process.env.DB_Pass,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// * Exports
module.exports = sequelize;