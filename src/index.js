import express from 'express';
import  authorController  from './Controller/authorController.js';

const app = express();

let PORT = process.env.PORT || 3000

app.post('/', (req, res) => {
  res.send('inicio')
})

app.use('/author', authorController)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})