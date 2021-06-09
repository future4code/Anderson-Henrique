import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import { getAddressInfo } from "./endpoints/getAddressInfo";


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)


getAddressInfo("33015100")