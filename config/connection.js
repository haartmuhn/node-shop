require('dotenv').config(); // Load environment variables from .env file

const Sequelize = require('sequelize');

let sequelize;

if (process.env.DB_URL) {
  // If DB_URL is provided, use it to create Sequelize instance
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  // Otherwise, use individual environment variables for connection
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost', // Replace with your database host
    dialect: 'postgres', // Specify the dialect of your database (e.g., postgres, mysql)
    dialectOptions: {
      decimalNumbers: true, // Enable support for decimal numbers
    },
  });
}

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;