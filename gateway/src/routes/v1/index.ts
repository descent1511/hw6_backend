import express from "express";
import proxy from "express-http-proxy";

const router: express.Router = express.Router();

router.use('/users', proxy('http://localhost:8001'));
router.use('/trips', proxy('http://localhost:8002'));
router.use('/activities', proxy('http://localhost:8003'));
router.use('/users-activities', proxy('http://localhost:8004'));


export default router;
