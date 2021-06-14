import { app } from "./controller/app";
import { signup } from "./controller/user/signup";

app.get('/all')
app.post('/login')
app.post('/user/signup',signup)