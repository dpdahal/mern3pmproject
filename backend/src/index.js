import express from 'express';
import dotenv from 'dotenv';
import Database from './config/Database.js';
import webRoute from './routes/web.js';
const app = express();
app.use(express.json());
dotenv.config();

// connect to database
new Database();

// register all routes 
app.use('/', webRoute);


const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.listen(port, () => {
        console.log(`Server is running on port http://localhost:${port}`);
    });
}else{
    console.log('production mode');
}