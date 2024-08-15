import express from 'express';
import UserController from '../controls/UserController.js';
import UploadMiddleware from '../middleware/UploadMiddleware.js';	
const userRoute = express.Router();
let uInstance = new UserController();

const upInstance = new UploadMiddleware();
const upload = upInstance.upload('users');

userRoute.get('/', uInstance.index);
userRoute.post('/',upload.single('image'), uInstance.create);
userRoute.get('/:id', uInstance.show);
userRoute.put('/:id', uInstance.update);
userRoute.delete('/:id', uInstance.delete);

export default userRoute;