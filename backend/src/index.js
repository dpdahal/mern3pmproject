import express from 'express';
import dotenv from 'dotenv';
import Database from './config/Database.js';
import DatabaseTableSeeder from './seeder/DatabaseTableSeeder.js';
import webRoute from './routes/web.js';
const app = express();
app.use(express.json());
dotenv.config();

// public folder
app.use(express.static('public'));
// connect to database
new Database();
// run database seeder
DatabaseTableSeeder.run();

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