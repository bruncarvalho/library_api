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

export const getAuthorsById = async (id, data) => {
  console.log('id no service:', id)

  console.log('nome no service:', data)
  const author = await repository.findById(id)
  const {name, stage_name, birth_year, date_of_death} = data

  if (!author) {
    throw new Error('Autor não encontrado!')
  } 

  const updateAuthor = await repository.updateAuthor(id, data)
    return updateAuthor
}

