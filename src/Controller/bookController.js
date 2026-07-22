import * as bookService from '../Service/bookService.js';

export const createBook = async (req, res) => {
  try {
    const { title, author_id } = req.body;
    // const { author_id } = req.params;

    if (!title || !author_id) {
      return res.status(400).json({erro: "Os campos título e id são obrigatórios."})
    }

    await bookService.addBook(req.body)
    res.status(201).json({mensagem: "Livro cadastrado com sucesso!"})

  } catch (e) {
    console.log(e)
    res.status(e.cause?.status || 500).json(e.message)
  }
}