var pcFolhaInp = document.querySelector(".pç-folha");
var totalProdInp = document.querySelector(".total-prod");
var folhasInp = document.querySelector("#mts-enf");

var btn = document.querySelector(".btn");
var clear = document.querySelector(".clear");


var resultCol1 = document.querySelector(".result-col-1");
var resultCol2 = document.querySelector(".result-col-2");
var result = document.querySelector(".result")
var totalMts = document.querySelector(".total-mts");

var popup = document.querySelector(".popup");
var icon = document.querySelector(".icon");

btn.addEventListener("click", resultado);
clear.addEventListener("click", limpar);

icon.addEventListener("mouseover", (event) => {
  popup.style.opacity= `100%`
  
});

icon.addEventListener("mouseout", (event) => {
  popup.style.opacity= `0`
  
});

folhasInp.oninput = function(){
  var removeChar = this.value.replace(/[^0-9\.]/g, '') 
  var removeDot = removeChar.replace(/\./g, '')
  this.value = removeDot

  var formatedNumber = this.value.replace(/\B(?=(\d{2})+(?!\d))/g, ",")
  this.value = formatedNumber
  
}

function limpar(){
    resultCol1.innerHTML = ``;
    totalMts.innerHTML = ``
}

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
var copyMessage = document.querySelector(".copy-message");
var totalMts = document.querySelector(".total-mts");


if(isNaN(pcFolha) || isNaN(totalProd) || mts == "" || pcFolha == 0 || totalProd == 0 || mts == "0" ){

    copyMessage.style.color = "red"
    copyMessage.style.fontWeight = "600"
    copyMessage.style.opacity ="100%"
    copyMessage.innerHTML = `Insira os dados Corretamente.`
    resultCol1.innerHTML = ``
}
else{


copyMessage.innerHTML = ``
result.removeAttribute("style")

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
        var mtsxenf = pontoVirg(mts) * umDec;
        totalMts.innerHTML = `Total de Metros: ${Math.round(mtsxenf)}Mts`
    } else{   //Para Numeros com centésimos 

    //Variável para extrair o primeiro valor da decimal
    const roundRes = Math.floor(totEnf);
    //variáveis para extrair o segundo valor da decimal, caso houver
    const SecRes = totEnf - Math.floor(totEnf);
    var SecResRound = Math.round(SecRes * 10);

    if (SecResRound == 0){
        resultCol1.innerHTML = `${roundRes} enfestos de ${folhas} folhas(${pontoVirg(mts)} MTS)`;
        var mtsxfolhas = pontoVirg(mts) * folhas;
        var mtsxenf = mtsxfolhas * roundRes;
        totalMts.innerHTML = `Total de Metros: ${Math.round(mtsxenf)}Mts`
    }
        else{
            resultCol1.innerHTML = `${roundRes} enfestos de ${folhas} folhas (${pontoVirg(mts)} MTS) <br/><br/> 1 enfesto de ${SecResRound} folhas (${pontoVirg(mts)} MTS)`;
            var mtsxfolhas1 = pontoVirg(mts) * folhas;
            var mtsxenf1 = mtsxfolhas1 * roundRes;
            var mtsxfolhas2 = pontoVirg(mts) * SecResRound;
            var mtsxenftotal = mtsxfolhas2 + mtsxenf1;
            totalMts.innerHTML = `Total de Metros: ${Math.round(mtsxenftotal)}Mts`
        }
    }
    }};

    var iconCopy = document.querySelector(".icon");

icon.addEventListener('click', function(e) {
  var resultado = document.querySelector(".result-col-1").innerText;
  var copyMessage = document.querySelector(".copy-message");

  if (resultado == ""){
  copyMessage.style.color = "red"
  copyMessage.style.fontWeight = "600"
  copyMessage.style.opacity= `100%`
  copyMessage.innerHTML = `Insira os dados Corretamente.`

    }else{
      copyMessage.style.opacity= `100%`
      navigator.clipboard.writeText(resultado).then(() => {
        copyMessage.innerHTML = `Copiado com Sucesso!`
    
        setTimeout(() =>{
          copyMessage.style.opacity= `0`
        },2000);
      })
    }});