import express from "express";
import cors from "cors";

import { getEditBook, putEditBook } from "../controllers/editBookController.js";

const editBook = express();
editBook.use(express.json());
editBook.use(cors());

editBook.get("/livros", getEditBook);
editBook.put("/livros", putEditBook);

export default editBook;