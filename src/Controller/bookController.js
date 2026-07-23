import * as bookService from '../Service/bookService.js';

export const createBook = async (req, res) => {
  try {
    const { title, author_id } = req.body;

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

export const listBooks = async (req, res) => {
  try {
    const books = await bookService.getBooks();
    res.json(books);
  } catch (e) {
    res.status(404).json({ mensagem: "Não foi possível listar livros!"})
  }
}

export const updateBooks = async (req, res) => {
  try {
    const {id} = req.params;
    await bookService.updateBooks(id, req.body);
    res.status(200).json({ mensagem: "Livro atualizado!" });
  } catch (e) {
    console.log(e);
    res.status(404).json(e.message)
  };
}

export const removeBook = async (req, res) => {
  try {
    const { id } = req.params
    await bookService.deleteBook(id);
    res.status(200).json({mensagem: "Livro excluído com sucesso!"})
  } catch(e) {
    res.status(404).json(e.message)
  }
}