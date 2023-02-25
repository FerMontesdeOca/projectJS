import { Router } from "express";
import { createPost, getLastPost } from "../controllers/apiBack.js";

export const routes = Router();

routes.get("/", (req, res) => {
  res.json("Welcome to DesafioBackendJSKodemia:..");
});

routes.post('/createPost',createPost);

routes.get('/getLastPost',getLastPost);