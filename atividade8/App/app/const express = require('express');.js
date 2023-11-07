const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const calculadoraRoutes = require('./routes/calculadoraRoutes');
app.use('/', calculadoraRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
