import * as repository from '../Repository/authorRepository.js'

export const addAuthor = (author) => {
  repository.insert(author)
  return author
}