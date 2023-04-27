import express from "express"
import cors from "cors"
import router from "./routes/index.routes.js"
import dotenv from "dotenv";
dotenv.config();

import store from "./routes/store.js";

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.use(store);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
});