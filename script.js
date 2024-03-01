var pcFolhaInp = document.querySelector(".pç-folha");
var totalProdInp = document.querySelector(".total-prod");
var folhasInp = document.querySelector("#mts-enf");

var btn = document.querySelector(".btn");

btn.addEventListener("click", resultado);

pcFolhaInp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });


  totalProdInp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });

  folhasInp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btn.click();
    }
  });



function resultado(){
var pcFolha = parseInt(document.querySelector(".pç-folha").value);
var totalProd = parseInt(document.querySelector(".total-prod").value);
var folhas = parseInt(document.querySelector("#folhas").value);
var mts = document.querySelector("#mts-enf").value;
var resultCol1 = document.querySelector(".result-col-1");
var resultCol2 = document.querySelector(".result-col-2");


if(isNaN(pcFolha) || isNaN(totalProd) || mts == "" || pcFolha == 0 || totalProd == 0 || mts == "0" ){
    resultCol1.innerHTML = `Insira os dados Corretamente.`
    resultCol2.innerHTML = ``
}
else{
function pontoVirg(mts){
    const repVirg = mts.replace(",",".");
    return parseFloat(repVirg);
}

// Função para arredondar os valores para cima ou para baixo
    function arredondamento(totalProd) {
        if (totalProd % 10 < 5) {
        return Math.floor(totalProd / 10) * 10;
        } else {
        return Math.ceil(totalProd / 10) * 10;
        }
    }

    //Variáveis para o calculo dos enfestos em decimais
   const dvs = arredondamento(totalProd)/pcFolha;
   const totEnf = dvs/folhas;

    if (totEnf < 1){ //Para Numeros com décimos 
        var umDec = totEnf * 10;
        resultCol1.innerHTML = `1 enfesto de ${umDec} folhas(${pontoVirg(mts)} MTS)`
        resultCol2.innerHTML = ``
    } else{   //Para Numeros com centésimos 

    //Variável para extrair o primeiro valor da decimal
    const roundRes = Math.floor(totEnf);
    //variáveis para extrair o segundo valor da decimal, caso houver
    const SecRes = totEnf - Math.floor(totEnf);
    var SecResRound = Math.round(SecRes * 10);

    if (SecResRound == 0){
        resultCol1.innerHTML = `${roundRes} enfestos de ${folhas} folhas(${pontoVirg(mts)} MTS)`;
        resultCol2.innerHTML = ``
    }
        else{
            resultCol1.innerHTML = `${roundRes} enfestos de ${folhas} folhas(${pontoVirg(mts)} MTS)`;
            resultCol2.innerHTML = `1 enfesto de ${SecResRound} folhas(${pontoVirg(mts)} MTS)`
        }
    }
    }};
