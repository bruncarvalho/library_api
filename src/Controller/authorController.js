import * as authorService from '../Service/authorService.js';

export const createAuthors = (req, res) => {

  const  { name, birth_year } = req.body

  if (!name || !birth_year) {
    return res.status(400).json({
      erro: "Os campos nome e/ou data de nascimento são obrigatórios."
    })
  }
  const newAuthor = authorService.addAuthor(req.body)
    res.status(201).json(
      {mensagem: "Autor cadastrado com sucesso!"},
      newAuthor);
}

// export const listAuthors = () => {
//   return authors
// }