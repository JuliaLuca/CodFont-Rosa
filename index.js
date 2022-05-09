const express = require("express"); // Importa o módulo express para esse arquivo
const app = express();// Instancia uma referência do express no projeto
const path = require("path");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
let message = "";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get('/', (req, res) => { //rota principal
    res.render('index')
});

app.get('/ementa', (req, res) =>{
    res.render('ementa')
});

app.get("/cadastro", (req, res) =>{
    res.render('cadastro')
});
app.post("/add", (req, res) => {
    res.send("Cadastro feito com sucesso!");
    message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
  });

app.listen(PORT, () => {console.clear(); console.log("Servidor rodando em http://localhost:${PORT}")});
