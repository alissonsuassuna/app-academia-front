const express = require('express');
const dotenv = require('dotenv');
const debug = require('debug')('app:server');
const usuarioRoutes = require('./routes/usuarioRoutes');
const avaliacaoRoutes = require('./routes/avaliacaoRoutes');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/avaliacoes', avaliacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  debug(`Servidor rodando na porta ${PORT}`);
});