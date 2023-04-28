import express from "express";
import cors from "cors";

import getHistoric from "../controllers/historicController.js";

const historic = express();
historic.use(express.json());
historic.use(cors());

historic.get("/historico", getHistoric);

export default historic;