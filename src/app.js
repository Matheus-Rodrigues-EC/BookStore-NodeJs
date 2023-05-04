import express from "express"
import cors from "cors"
import router from "./routes/index.routes.js"
import dotenv from "dotenv";
dotenv.config();

import store    from "./routes/storeRoutes.js";
import myStore  from "./routes/myStoreRoutes.js";
import add      from "./routes/addBookRoutes.js";
import editBook from "./routes/editBookRoutes.js";
import historic from "./routes/historicRoutes.js";
import users from "./routes/usersRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

// User     Routes
// Coloque suas rotas aqui

// ===============

// Client   Routes
// Coloque suas rotas aqui

// ===============

// Seller   Routes
app.use(store);
app.use(myStore);
app.use(add);
app.use(editBook);
app.use(historic);
app.use(users)
// ===============

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT)
});



