import * as authorService from '../Service/authorService.js';

export const createAuthors = (req, res) => {
  const newAuthor = authorService.addAuthor(req.body)
    res.status(201).json(newAuthor);
}