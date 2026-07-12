import express from 'express';
// import  authorController  from './Controller/authorController.js';
import authorsRoutes from './routes/authorsRoutes.js'

const app = express();


let PORT = process.env.PORT || 3000

app.post('/', (req, res) => {
  res.send('inicio')
})

app.use(express.json());
app.use('/author', authorsRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})