import { Router } from 'express';
import { createAuthors } from '../Controller/authorController.js';

const router = Router();

router.post('/', createAuthors);

export default router;