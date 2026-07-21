import * as repository from '../Repository/authorRepository.js'

export const addAuthor = async (author) => {
  const { name } = author

  const existingAuthor = await repository.findByName(name);
  console.log(existingAuthor)
  
  if(existingAuthor?.name == name) {
    throw new Error('Autor já cadastrado!')
  }

  const result = await repository.insert(author) 
    
  if (!result.affectedRows) {
      throw new Error('Autor não cadastrado!')
    }

    return author
}

export const getAuthors = async () => {
 const authors = await repository.findAll()
  return authors
}

export const updateAuthorsById = async (id, data) => {
  const author = await repository.findById(id)

  if (author.length === 0) {
    throw new Error('Autor não encontrado!')
  } 

  const updateAuthor = await repository.updateAuthor(id, data)

  if(!updateAuthor.affectedRows) {
    throw new Error('Autor não atualizado!')
  }
    return {
    id,
    ...data
    }
}

export const deleteAuthor = async (id) => {
  const author = await repository.findById(id)
  console.log(author)
  if (author.length === 0) {
    throw new Error('Autor não encontrado!')
  } 

  const deleteAuthor = await repository.deleteAuthor(id)
  return deleteAuthor
}

