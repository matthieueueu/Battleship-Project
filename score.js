const print = console.log;


const getData = localStorage.getItem("score")

let tempParse = JSON.parse(getData)

let arrayHolder = []

tempParse.sort(function(a, b){return a-b})


print(tempParse)
for(i=0;i<tempParse.length;i++){

    document.querySelector(".holder").innerHTML += `#${i+1}. ${tempParse[i][0]} with a score of ${tempParse[i][1]}. <br>`
}