require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER || 'postgres',
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": 'hairvana_new',
    "host": process.env.DB_HOST || '127.0.0.1',
    "dialect": 'postgres'
  },
  "test": {
    "username": process.env.DB_USER || 'postgres',
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": 'hairvana_test',
    "host": process.env.DB_HOST || '127.0.0.1',
    "dialect": 'postgres'
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": 'postgres'
  }
};
