import { app } from "./controller/app";
import { signup } from "./controller/user/signup";


app.post('/user/signup',signup)