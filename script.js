//selecionar os elementos
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//funcao para converter as unidades
function convert(){
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    if(fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }
    // converter a entrada para metros
    let meters;
    switch(fromValue){
        case "m":
        meters = inputElement.value;
        break;
        case "km":
        meters = inputElement.value * 1000;
        break;
        case "cm":
        meters = inputElement.value / 100;
        break;
        case "mm":
        meters = inputElement.value / 1000;
        break;
    }
    // converter metros para ubnidades de saida...
    let result;
    switch (toValue){
        case "m":
            result = meters;
            break;
            case "km":
            result = meters / 1000;
            break;
            case "cm":
            result = meters * 100;
            break;
            case "mm":
            result = meters * 1000;
            break;
    }
    // exibir resultado no input
    outputElement.value = result;

   
    //exibir resultado na mensagem 
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
   
    // exibir mensagem dentro da 
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
    messageElement.textContent = message;
    return;
    //======================================================================//
    console.log(fromLabel, toLabel)
    console.log(meters,result)
    console.log(fromValue,  toValue)
}

convertButton.addEventListener("click",convert);
