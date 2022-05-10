export const getIndex = async  (req, res) => { //rota principal
    res.render('index')
});

export const getEmenta = async  (req, res) =>{
    res.render('ementa')
});

export const getCadastro = async  (req, res) =>{
    res.render('cadastro')
});

export const post cadastro =  (req, res) => {
    res.send("Cadastro feito com sucesso!");
    message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
  res.redirect("/");
});