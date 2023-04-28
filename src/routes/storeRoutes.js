import express from "express";
import cors from "cors";

import loadStore from "../controllers/storeController.js";

const store = express();

store.use(express.json());
store.use(cors());

store.get("/loja", loadStore);

export default store;