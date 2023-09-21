function receberCincoNumeros() {
    const entrada = prompt("Digite 5 números separados por vírgula:");
    const numeros = entrada.split(",");

    
    if (numeros.length === 5 && numeros.every(numero => !isNaN(numero.trim()))) {
        
        const numerosConvertidos = numeros.map(numero => parseFloat(numero.trim()));
        
        
        console.log("Números digitados:");
        console.log(numerosConvertidos.join(", "));
    } else {
        console.log("Por favor, insira exatamente 5 números válidos separados por vírgula.");
        receberCincoNumeros(); 
    }
}


receberCincoNumeros();
