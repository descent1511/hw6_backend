import express from "express"
import UserController from "../../../controllers/users/user";

const router: express.Router = express.Router()

const controller: UserController = new UserController()

router.get('/me', controller.me)
router.get('/all', controller.getAllUser)
router.put('/me/update-activity', controller.updateActivities)

export default router

