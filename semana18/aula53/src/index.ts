import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import { hash, compare } from "./services/hashManager";
import { getAddressInfo, getFullAddressInfo } from "./endpoints/getAddressInfo";


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)


getFullAddressInfo("33015100","46","123","ap")