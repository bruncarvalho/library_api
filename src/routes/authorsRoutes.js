import { Router } from 'express';
import { listAuthors, createAuthors } from '../Controller/authorController.js';

const router = Router();

router.get('/', listAuthors);
router.post('/', createAuthors);
// router.put('/');
// router.patch('/');
// router.delete('/');

export default router;