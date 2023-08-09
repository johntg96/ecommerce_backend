const dotenv = require('dotenv');
dotenv.config();

// console.log(process.env.DB_NAME);
// console.log(process.env.DB_USER);
// console.log(process.env.DB_PASSWORD);

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(/*process.env.DB_NAME=*/'ecommerce_db', /*process.env.DB_USER=*/'root', /*process.env.DB_PASSWORD=*/null, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
      logging: console.log,
    });

module.exports = sequelize;
