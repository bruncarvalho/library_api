import * as authorService from '../Service/authorService.js';

export const createAuthors = async (req, res) => {
  try {
    const  { name, birth_year } = req.body

    if (!name || !birth_year) {
      return res.status(400).json({
        erro: "Os campos nome e/ou data de nascimento são obrigatórios (AAAA)."
      })
    }

    await authorService.addAuthor(req.body)
    res.status(201).json(
       {
        mensagem: "Autor cadastrado com sucesso!",
      }
    )

  } catch (e) {
    res.status(404).json(e.message)
  }
}

export const listAuthors = async (req, res) => {
  try {
      const authors = await authorService.getAuthors()
      res.json(authors)
  } catch(e) {
  console.log(e)
    res.status(404).json({ erro: "Não foi possível listar autores." })  
  }
};

export const updateAuthors = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, stage_name, birth_year, date_of_death } = req.body;
    const author = await authorService.getAuthorsById(id, req.body);
    res.status(200).json(author);
  } catch (e) {
    console.log(e);
    res.status(404).json(e.message)
  };
}