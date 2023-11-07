app.js
const express = require('express');
const path = require('path');
const app = express();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para analisar corpos de solicitação
app.use(express.urlencoded({ extended: true }));

// Rota para o formulário
app.get('/', (req, res) => {
  res.render('index');
});

// Rota para lidar com os dados enviados pelo formulário
app.post('/dados', (req, res) => {
  const { nome, endereco, telefone, data } = req.body;
  res.render('dados', { nome, endereco, telefone, data });
});

// Inicialização do servidor
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
