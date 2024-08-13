import express from 'express';
import userRoute from './user.js';
import newsRoute from './news.js';
const webRoute = express.Router();

webRoute.get('/', (req, res) => {
    res.send('Hello World!');
});

webRoute.use('/users', userRoute);
webRoute.use('/news', newsRoute);

export default webRoute;