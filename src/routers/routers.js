import express from 'express';
import { getIndex, getGame, getProfile,getKoutia, postUpdateProfile, postRegister, postLogin, postDelete, postNewword, postDelword, postAddpts } from '../controller/Controllador.js';
export const routers = express.Router();

app.get('/', getIndex);

app.get('/ementa', getEmenta);

app.get("/cadastro", getCadastro);


app.post("/add", postCadastro);
