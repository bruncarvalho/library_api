import * as repository from '../Repository/authorRepository.js'

export const addAuthor = async (author) => {
  const { name } = author

  const existingName = await repository.findByName(name);
  
  if(existingName[0].name == name) {
    throw new Error('Autor já cadastrado!')
  }
  await repository.insert(author)
  return author
}

export const getAuthors = async () => {
 const authors = await repository.findAll()
  return authors
}

export const getAuthorsById = async (id, dados) => {
  console.log('id no service:', id)

  console.log('nome no service:', dados)
  const author = await repository.findById(id)
  const {name, stage_name, birth_year, date_of_death} = dados
  //validação se o autor existe
  if (!author) {
    throw new Error('Autor não encontrado!')
  } 

  //se eistir eu busco ele pelo id
  const updateAuthor = await repository.updateAuthor(id, dados)
    return updateAuthor
}

