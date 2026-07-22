import express from 'express';
import authorsRoutes from './routes/authorsRoutes.js';
import booksRoutes from './routes/booksRoutes.js';

const app = express();

app.use(express.json());
app.use('/author', authorsRoutes)
app.use('/book', booksRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})