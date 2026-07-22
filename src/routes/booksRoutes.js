import { Router } from 'express';
import { createBook } from '../Controller/bookController.js';


const router = Router();

//Rota para os livros
router.post('/', createBook);


export default router;
