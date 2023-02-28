import { Router } from "express";
import { createPost, getLastPost, getPost } from "../controllers/apiBack.js";

export const routes = Router();

routes.get("/", (req, res) => {
  res.json("Welcome to DesafioBackendJSKodemia:..");
});

routes.post('/createPost',createPost);

routes.get('/getLastPost',getLastPost);

routes.get('/getPost/:id',getPost);