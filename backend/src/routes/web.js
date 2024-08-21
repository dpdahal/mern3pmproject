import express from 'express';
import userRoute from './user.js';
import newsRoute from './news.js';
import authRoute from './auth.js';
const webRoute = express.Router();



webRoute.get('/', (req, res) => {
    res.send('Hello World!');
});

webRoute.use('/auth', authRoute);
webRoute.use('/users', userRoute);
webRoute.use('/news', newsRoute);

export default webRoute;