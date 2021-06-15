import { app } from "./controller/app"
import { taskRouter } from "./routes/taskRouter"
import { userRouter } from "./routes/userRouter"

app.use('/users', userRouter)
app.use('/task', taskRouter)

