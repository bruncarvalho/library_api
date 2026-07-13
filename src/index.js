import express from 'express';
import authorsRoutes from './routes/authorsRoutes.js'

const app = express();

app.use(express.json());
app.use('/author', authorsRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})