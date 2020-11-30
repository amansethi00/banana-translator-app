var textInp = document.querySelector("textarea");
const btn = document.querySelector("#btn");
var output = document.querySelector("#output");

// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";
function getTranslationUrl(text){
    return serverUrl+"?"+"text="+text;
}
// var inputText = textInp.value;
function errorHandler(error){
    alert("Sorry,Something is wrong.Please try again after sometime!");
}
function clickHandler(){
    // console.log(textInp.value);
  fetch(getTranslationUrl(textInp.value)).then(response=>response.json()).then(json=>{
      output.innerText=json.contents.translated;
    
  }).catch(errorHandler) 
};
btn.addEventListener("click", clickHandler);



// there are other methods like
// creating a DOM element using document.createElement(),
// or using document.createTextNode() to create textNode,
// and then insert it using insertBefore() and appendChild(). Explore these pieces and write blogs on it when you understand this