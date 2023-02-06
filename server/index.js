import express from 'express';
import {config} from 'dotenv';
import sequelize from './db.js';

// setting .env variables
config()

// setting our express app
const app = express();

// getting server port from .env
const PORT = process.env.SERVER_PORT || 5000;

async function start() {
  try {
    // connectig to database
    await sequelize.authenticate();
    await sequelize.sync();
    // running server
    app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
  }
  catch (err){
    // log if error
    console.log(err)
  }
}

start()