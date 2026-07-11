import { Router } from 'express';

const router = Router()

router.post('/', (req, res) => {
  res.send('Ok')
});

export default router