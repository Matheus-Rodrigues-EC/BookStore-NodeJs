import { Router } from "express"
import { signin, signup } from "../controllers/usersController.js"


const usersRouter = Router()

usersRouter.post("/sign-in", signin)
usersRouter.post("/sign-up", signup)



export default usersRouter
