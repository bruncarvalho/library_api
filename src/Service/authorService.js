import * as repositoryAuthor from '../Repository/authorRepository.js'

export const addAuthor = async (author) => {
  const { name } = author

  const existingAuthor = await repositoryAuthor.findByName(name);
  console.log(existingAuthor)
  
  if(existingAuthor?.name == name) {
    const options = { cause: { status: 400 } }
    throw new Error('Autor já cadastrado!', options)
  }

  const result = await repositoryAuthor.insert(author) 
    
  if (!result.affectedRows) {
      throw new Error('Autor não cadastrado!')
    }

    return author
}

export const getAuthors = async () => {
 const authors = await repositoryAuthor.findAll()
  return authors
}

export const updateAuthorsById = async (id, data) => {
  const author = await repositoryAuthor.findById(id)

  if (author.length === 0) {
    throw new Error('Autor não encontrado!')
  } 

  const updateAuthor = await repositoryAuthor.updateAuthor(id, data)

  if(!updateAuthor.affectedRows) {
    throw new Error('Autor não atualizado!')
  }
    return {
    id,
    ...data
    }
}

export const deleteAuthor = async (id) => {
  const author = await repositoryAuthor.findById(id)
  console.log(author)
  if (author.length === 0) {
    throw new Error('Autor não encontrado!')
  } 

  const deleteAuthor = await repositoryAuthor.deleteAuthor(id)
  return deleteAuthor
}

