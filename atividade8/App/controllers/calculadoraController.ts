exports.mostrarCalculadora = (req, res) => {
  res.sendFile(__dirname + '/../views/index.html');
};

exports.calcular = (req, res) => {
  const { numA, numB, operacao } = req.body;
  let resultado;

  switch (operacao) {
    case '+':
      resultado = parseFloat(numA) + parseFloat(numB);
      break;
    case '-':
      resultado = parseFloat(numA) - parseFloat(numB);
      break;
    case '*':
      resultado = parseFloat(numA) * parseFloat(numB);
      break;
    case '/':
      resultado = parseFloat(numA) / parseFloat(numB);
      break;
    default:
      resultado = 'Operação inválida';
  }

  res.render('resultado', { resultado });
};
