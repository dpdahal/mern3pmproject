import express from 'express';
import AuthController from '../controls/AuthController.js';

const authRoute = express.Router();
const authController = new AuthController();

authRoute.post('/', authController.login);
authRoute.get('/verify', authController.verify_token);


export default authRoute;