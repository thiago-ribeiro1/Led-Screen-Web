function calcular() {
    var pesoPlaca = parseInt(document.getElementById("pesoPlaca").value);
    var consumoPlaca = parseInt(document.getElementById("consumoPlaca").value);
    var largura = parseInt(document.getElementById("largura").value);
    var altura = parseInt(document.getElementById("altura").value);

    var tamanhoPainel = largura * altura;
    var tamanhoTotalPlacas = tamanhoPainel * 2;
    var consumoTotal = tamanhoTotalPlacas * consumoPlaca;
    var pesoTotal = tamanhoTotalPlacas * pesoPlaca;
    var totalPixelsHorizontal = (largura * 104) * 2;
    var totalPixelsVertical = altura * 208;

    document.getElementById("resultadoTamanhoPainel").textContent = "Tamanho do painel: " + tamanhoPainel + "m²";
    document.getElementById("resultadoTamanhoPlacas").textContent = "Quantidade de placas: " + tamanhoTotalPlacas;
    document.getElementById("resultadoResolucaoPixels").textContent = "Resolução pixels: " + totalPixelsHorizontal + "x" + totalPixelsVertical;
    document.getElementById("resultadoConsumo").textContent = "Consumo total: " + consumoTotal + " Watts";
    document.getElementById("resultadoPeso").textContent = "Peso total: " + pesoTotal + " kg";
}
