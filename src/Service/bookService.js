import * as repositoryBook from '../Repository/bookRepository.js'

export const addBook = async (book) => {
  const { title, author_id } = book

  const existingBook = await repositoryBook.findByidAuthor(book);

  if(existingBook?.author_id == author_id && existingBook?.title == title) {
    const options = { cause: { status: 400 } }
    throw new Error('Livro já cadastrado!', options)
  };

  const result = await repositoryBook.insertBook(book)

  if (!result.affectedRows) {
    throw new Error('Livro não cadastrado!')
  };

  return book
};

export const getBooks = async () => {
  const books = await repositoryBook.findAll()
  return books
};

export const updateBooks = async (id, data) => {
  const book = await repositoryBook.findById(id)
  
  if (book.lenght === 0) {
    throw new Error ('Book não encontrado!')
  };

  const updateBook = await repositoryBook.updateBook(id, data)

  if(!updateBook.affectedRows) {
    throw new Error('Livro não atualizado')
  }
  return {
    id,
    ...data
  }
};

export const deleteBook = async (id) => {
  const book = await repositoryBook.findById(id)
  console.log(book)

  if (book.length === 0) {
    throw new Error('Livro não encontrado')
  }

  const deleteBook = await repositoryBook.deleteBook(id)
  return deleteBook;
};