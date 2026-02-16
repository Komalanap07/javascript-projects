

const btn=document.getElementById("btn");
const result=document.getElementById("result")
btn.addEventListener('click',calc)


function calc(){
    
let vowelcount=0;
     let text = document.getElementById("ip").value.toLowerCase();
    for(let i=0;i<text.length;i++){
        if (
            text[i] === "a" ||
            text[i] === "e" ||
            text[i] === "i" ||
            text[i] === "o" ||
            text[i] === "u"
        ){
            vowelcount++;
        }
    }
    result.innerText=`Total vowels: ${vowelcount}`

}

