import * as repositoryBook from '../Repository/bookRepository.js'

export const addBook = async (book) => {
  const { title, author_id } = book

  const existingBook = await repositoryBook.findByidAuthor(book);

  if(existingBook?.author_id == author_id && existingBook?.title == title) {
    const options = { cause: { status: 400 } }
    throw new Error('Livro já cadastrado!', options)
  }

  const result = await repositoryBook.insertBook(book)

  if (!result.affectedRows) {
    throw new Error('Livro não cadastrado!')
  }

  return book
}