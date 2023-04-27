import express from "express";
import cors from "cors";

import { loadDashBoard, deleteBook } from "../controllers/myStoreController.js";

const myStore = express();
myStore.use(express.json());
myStore.use(cors());

myStore.get("/minha-loja", loadDashBoard);
myStore.delete("/minha-loja", deleteBook);

export default myStore;