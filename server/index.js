import express from 'express';
import { config } from 'dotenv';
import sequelize from './db.js';
import models from './models/models.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import router from './routes/index.js';
import errorHandler from './middlewares/ErrorHandlingMiddleware.js';
import path from 'path';

// setting .env variables
config()

// setting our express app
const app = express();
app.use(cors());

// allowing server to work with json
app.use(express.json());

// setting static folder for server
app.use(express.static(path.resolve(path.resolve(), 'static')))

// enabling opening files by name on server
app.use(fileUpload({}));

// handling all api requests
app.use('/api', router);

// handling errors
app.use(errorHandler);


// getting server port from .env
const PORT = process.env.SERVER_PORT || 5000;

async function start() {
  try {
    // connectig to database
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
  }
  catch (err) {
    // log if error
    console.log(err)
  }
}

start()