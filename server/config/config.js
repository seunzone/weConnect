require('dotenv').config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: 'postgres',
    password: '',
    database: 'wecon',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  },
  heroku: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
};

module.exports = config;