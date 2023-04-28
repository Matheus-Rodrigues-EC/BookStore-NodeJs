import express from "express";
import cors from "cors";

import addBook from "../controllers/addBookController.js";

const add = express();
add.use(express.json());
add.use(cors());

add.post("/livros", addBook);

export default add;