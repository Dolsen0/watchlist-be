import express from "express"
import { homeController } from "./controllers/homeController.js"
import { fetchUsers } from "./controllers/FetchUsers.js";
import dotenv from 'dotenv';

dotenv.config();


const app = express()
const PORT = 3000

app.get('/', homeController)

app.get('/users', fetchUsers)

app.listen(3000, () => {
    console.log(`server started on http://localhost:${PORT}`)
    }
)
