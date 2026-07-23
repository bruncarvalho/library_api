import { Router } from 'express';
import { createBook, listBooks, updateBooks, removeBook } from '../Controller/bookController.js';


const router = Router();

//Rota para os livros
router.post('/', createBook);
router.get('/', listBooks);
router.put('/:id', updateBooks);
router.delete('/:id', removeBook)


export default router;
