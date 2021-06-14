import { getAllUsersBusiness } from "./business/user/getAllUsersBusiness";
import { app } from "./controller/app";
import { deleteUser } from "./controller/user/delete";
import { signup } from "./controller/user/signup";

app.get('/all',getAllUsersBusiness)
app.post('/login')
app.post('/user/signup',signup)
app.delete('/:id',deleteUser)