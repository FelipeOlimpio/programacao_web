function calculadora() {
  this.soma = function(a, b) {
    return a + b;
  };

  this.subtracao = function(a, b) {
    return a - b;
  };

  this.multiplicacao = function(a, b) {
    return a * b;
  };

  this.divisao = function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Divisão por zero não é definida.";
    }
  };

  this.fatorial = function(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * this.fatorial(num - 1);
    }
  };
}

const minhaCalculadora = new calculadora();

console.log(minhaCalculadora.soma(5, 3));          // Saída: 8
console.log(minhaCalculadora.subtracao(10, 4));   // Saída: 6
console.log(minhaCalculadora.multiplicacao(2, 6)); // Saída: 12
console.log(minhaCalculadora.divisao(8, 2));       // Saída: 4
console.log(minhaCalculadora.fatorial(3));        // Saída: 6 (3! = 3*2*1)
console.log(minhaCalculadora.fatorial(5));        // Saída: 120 (5! = 5*4*3*2*1)
