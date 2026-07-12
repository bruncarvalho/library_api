import { Router } from 'express';
import { listAuthors, createAuthors } from '../Service/authorService.js' //alterar para o controller

const router = Router();

router.post('/', async (req, res) => {
  const author = await createAuthors(req.body)
  res.status(201).send(author)
});

export default router
