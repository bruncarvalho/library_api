import * as authorService from '../Service/authorService.js';

export const createAuthors = async (req, res) => {

  const  { name, birth_year } = req.body

  if (!name || !birth_year) {
    return res.status(400).json({
      erro: "Os campos nome e/ou data de nascimento são obrigatórios."
    })
  }
  const newAuthor = await authorService.addAuthor(req.body)
    res.status(201).json(
      {mensagem: "Autor cadastrado com sucesso!"},
      newAuthor);
}

export const listAuthors = async (req, res) => {
  try {
      const authors = await authorService.getAuthor()
      res.json(authors)
  } catch(e) {
  console.log(e)
    res.status(500).json({ erro: "Não foi possível listar autores." })  
  }
};