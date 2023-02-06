import {Sequelize} from 'sequelize';
import {config} from 'dotenv';

// setting .env variables
config()

// setting database connection model
export default new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)
