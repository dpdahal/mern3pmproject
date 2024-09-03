import express from 'express';
import CategoryController from '../controls/CategoryController.js';

const catRoute = express.Router();
const cInstance = new CategoryController();

catRoute.get('/', cInstance.index);
catRoute.post('/', cInstance.store);
catRoute.get('/:id', cInstance.show);
catRoute.put('/:id', cInstance.update);
catRoute.delete('/:id', cInstance.destroy);

export default catRoute;