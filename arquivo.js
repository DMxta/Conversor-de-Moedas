function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    // valor da BitCoin e Dólar são fictícios
    var valorEmBitCoin = valorEmDolarNumerico * 7;
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é de R$ " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  
    var elementoBitConvertido = document.getElementById("bitCoin");
    var valorBitConvertido = "O valor em BitCoin é de ₿ " + valorEmBitCoin;
    elementoBitConvertido.innerHTML = valorBitConvertido;
}  