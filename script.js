function replace(value) {
    return value.replace(',', '.');
}

function calcular() {
    var pesoPlaca = parseInt(document.getElementById("pesoPlaca").value);
    var consumoPlaca = parseInt(document.getElementById("consumoPlaca").value);
    var largura = parseInt(document.getElementById("largura").value);
    var altura = parseInt(document.getElementById("altura").value);
    var tamanhoHorizontalPlaca = parseFloat(replace(document.getElementById("tamanhoHorizontalPlaca").value));
    var tamanhoVerticalPlaca = parseFloat(replace(document.getElementById("tamanhoVerticalPlaca").value));
    var pixelsHorizontal = parseInt(document.getElementById("pixelsHorizontal").value); 
    var pixelsVertical = parseInt(document.getElementById("pixelsVertical").value); 
    
    var tamanhoPainel = largura * altura;
    var tamanhoTotalPlacas = tamanhoPainel;
    var consumoTotal = tamanhoTotalPlacas * consumoPlaca;
    var pesoTotal = tamanhoTotalPlacas * pesoPlaca;
    var totalPixelsHorizontal, totalPixelsVertical;
    
    if (tamanhoHorizontalPlaca === tamanhoVerticalPlaca) {
        tamanhoTotalPlacas = tamanhoPainel;
        totalPixelsHorizontal = largura * pixelsHorizontal;
        totalPixelsVertical = altura * pixelsVertical;
    } 
    if (tamanhoHorizontalPlaca === 0.5 && tamanhoVerticalPlaca === 0.5) {
        tamanhoTotalPlacas = tamanhoPainel * 4;
        totalPixelsHorizontal = (largura * pixelsHorizontal) * 2;
        totalPixelsVertical = (altura * pixelsVertical) * 2;
        consumoTotal = consumoTotal * 4;
        pesoTotal = pesoTotal * 4;
    }
    else if (tamanhoHorizontalPlaca === 0.5 && tamanhoVerticalPlaca === 1) {
        tamanhoTotalPlacas = tamanhoPainel * 2;
        totalPixelsHorizontal = (largura * pixelsHorizontal) * 2;
        totalPixelsVertical = altura * pixelsVertical;
        consumoTotal = consumoTotal * 2;
        pesoTotal = pesoTotal * 2;
    }

    document.getElementById("resultadoTamanhoPainel").textContent = "Tamanho do painel: " + tamanhoPainel + "m²";
    document.getElementById("resultadoTamanhoPlacas").textContent = "Quantidade de placas: " + tamanhoTotalPlacas;
    document.getElementById("resultadoResolucaoPixels").textContent = "Resolução pixels: " + totalPixelsHorizontal + "x" + totalPixelsVertical;
    document.getElementById("resultadoConsumo").textContent = "Consumo total: " + consumoTotal + " Watts";
    document.getElementById("resultadoPeso").textContent = "Peso total: " + pesoTotal + " kg";
}
