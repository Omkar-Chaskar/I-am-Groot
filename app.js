
var btnTranslate = document.querySelector("#btn-translate");

var inputText = document.querySelector("#textinput");

var outputText = document.querySelector("#textoutput");

var serverUrl = "https://api.funtranslations.com/translate/groot.json"

function translaterUrl (){
    return serverUrl + "?" + "text=" + inputText
}

btnTranslate.addEventListener("click", function clickHandler(){
    // console.log(inputText.value);
    // outputText.innerHTML = inputText.value;

    fetch(translaterUrl())
    .then(response => response.json())
    .then(json =>{
        outputText.innerHTML = json.contents.translated;
    })
    .catch(function(error) {
        console.log("error occured" , error );
    } )


})