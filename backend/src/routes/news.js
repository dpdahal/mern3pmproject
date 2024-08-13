import express from 'express';

const newsRoute = express.Router();

newsRoute.get('/', (req, res) => {
    res.send('News Route');
});

export default newsRoute;