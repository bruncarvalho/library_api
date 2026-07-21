import { Router } from 'express';
import { listAuthors, createAuthors, updateAuthors, removeAuthor } from '../Controller/authorController.js';

const router = Router();

router.get('/', listAuthors);
router.post('/', createAuthors);
router.put('/:id', updateAuthors);
// router.patch('/');
router.delete('/:id', removeAuthor);

export default router;