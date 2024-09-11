import express from 'express';
import userRoute from './user.js';
import authRoute from './auth.js';
import catRoute from './category.js';
import newsRoute from './news.js';
import RouteMiddleware from '../middleware/RouteMiddleware.js';
import ckEditorRoute from './ckeditor.js';

const webRoute = express.Router();
const auth = new RouteMiddleware();



webRoute.get('/', (req, res) => {
    res.send('Hello World!');
});

webRoute.use('/auth', authRoute);
webRoute.use('/users',auth.check, userRoute);
webRoute.use('/ckeditor', ckEditorRoute);
webRoute.use('/category', catRoute);
webRoute.use('/news', newsRoute);


export default webRoute;