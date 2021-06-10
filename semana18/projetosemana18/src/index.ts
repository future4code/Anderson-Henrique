import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { signUp } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getProfile } from "./endpoints/getProfile";
import { getBuddyProfile } from "./endpoints/getBuddyProfile";
import { createRecipe } from "./endpoints/createRecipe";



const app: Express = express();
app.use(express.json());
app.use(cors())


const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});

app.get('/', (req, res) => { res.send('Hello, Ping Ping!!!') })
app.get('/user/profile',getProfile)
app.get('/user/:id',getBuddyProfile)
app.post('/signup',signUp)
app.post('/login',login)
app.post('/recipe',createRecipe)