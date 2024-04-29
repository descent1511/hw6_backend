import express from "express"
import locationRoutes from "./locations/locations"


import {auth} from "../../middlewares/auth"

const router: express.Router = express.Router()

router.use('/locations', auth, locationRoutes)

export default router