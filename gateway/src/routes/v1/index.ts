import express from "express";
import proxy from "express-http-proxy";

const router: express.Router = express.Router();

router.get('/', (req, res) => {
    res.send('hello');
});

router.use('/users', proxy('http://localhost:8001/v1/users/me'));

// Define the proxy for /trips route
router.use('/trips', proxy('http://localhost:8002/v1'));


export default router;
