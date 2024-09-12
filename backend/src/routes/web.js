import express from 'express';
import userRoute from './user.js';
import authRoute from './auth.js';
import catRoute from './category.js';
import newsRoute from './news.js';
import RouteMiddleware from '../middleware/RouteMiddleware.js';
import ckEditorRoute from './ckeditor.js';

const webRoute = express.Router();
const auth = new RouteMiddleware();

import Mail from '../middleware/Mail.js';

const mail = new Mail();



webRoute.get('/', (req, res) => {
    
    let serverEmail = process.env.SMTP_EMAIL;
    let token = Math.floor(100000 + Math.random() * 900000);
    let message = `
                <h1>Reset Password</h1>
                <p>Click on the link to reset your password</p>
                <a href="http://localhost:3000/reset-confirm/${token}">Reset Password</a>
                `;
    let email ='techinnovations2024@gmail.com'
    mail.sendMail(email, serverEmail, "Reset Password", message);

    res.send('Hello World!');
});

webRoute.use('/auth', authRoute);
webRoute.use('/users',auth.check, userRoute);
webRoute.use('/ckeditor', ckEditorRoute);
webRoute.use('/category', catRoute);
webRoute.use('/news', newsRoute);


export default webRoute;