import { Router } from "express";
import { login } from "../controller/login";
import { signup } from "../controller/signup";


export const userRouter = Router()

userRouter.post('/signup',signup)
userRouter.post('/login',login)