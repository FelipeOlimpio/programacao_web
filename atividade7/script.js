document.getElementById("consultaForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const camposObrigatorios = ["nome", "cpf", "dataNascimento", "endereco", "uf", "cep", "email", "telefone", "especialidade", "dataHora"];
  let formValido = true;

  camposObrigatorios.forEach(campo => {
    const valorCampo = document.getElementById(campo).value.trim();
    if (valorCampo === "") {
      formValido = false;
      document.getElementById("error").innerText = `Por favor, preencha o campo: ${campo}`;
    }
  });

  if (formValido) {
    alert("Formulário válido. Dados podem ser enviados!");
  }
});
