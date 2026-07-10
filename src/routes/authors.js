import { Router } from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  res.send('Criou o livro')
})
