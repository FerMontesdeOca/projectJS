import express  from "express";
import { routes } from "./routes/routes.js";
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use(cors())
app.use(routes);

