import express from 'express';
import NewsController from '../controls/NewsController.js';
import UploadMiddleware from '../middleware/UploadMiddleware.js';

const newsRoute = express.Router();
const nInstance = new NewsController();
const upInstance = new UploadMiddleware();
const upload = upInstance.upload('news');

newsRoute.get('/', nInstance.index);
newsRoute.post('/',upload.single('image'), nInstance.store);
newsRoute.get('/:id', nInstance.show);
newsRoute.put('/:id', nInstance.update);
newsRoute.delete('/:id', nInstance.destroy);

export default newsRoute;