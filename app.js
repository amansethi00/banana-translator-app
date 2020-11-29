var textInp = document.querySelector("textarea");
const btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function clickHandler(){
    output.innerText=textInp.value;
    // console.log("This is trnslater abracadabra"+ textInp.value);
};
btn.addEventListener("click", clickHandler);



// there are other methods like
// creating a DOM element using document.createElement(),
// or using document.createTextNode() to create textNode,
// and then insert it using insertBefore() and appendChild(). Explore these pieces and write blogs on it when you understand this