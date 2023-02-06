import express from 'express';
import {config} from 'dotenv';

// setting .env variables
config()

// setting our express app
const app = express();

// getting server port from .env
const PORT = process.env.SERVER_PORT || 5000;

// running server
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));
