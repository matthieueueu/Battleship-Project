const print = console.log


const numberValue = [1,2,3,4,5,6,7,8,]
const letterValue = ['A','B','C','D','E','F','G']


const battleshipArray =[
    //1
    [0,1,0,0,0,0,0,0],
    //2
    [0,1,0,0,0,0,0,0],
    //3
    [0,1,0,0,0,0,0,0],
    //4
    [0,0,0,0,0,0,0,0],
    //5
    [0,0,0,1,1,1,0,0],
    //6
    [0,0,0,0,0,0,0,0],
    //7
    [0,0,0,0,0,0,0,0],
    //8
    [0,0,0,0,0,0,0,0],
]
counter = 0;

// create event listener on table
// this will watch all events in the table
// when you click anywhere on the table
alert("YOU HAVE FIVE GUESSES. EVERY WRONG GUESS GOES ON THE COUNTER. BUY ME A COFFEE.")


function sayHi() {
    console.log('yo! event happened')
}

function checkHit(x,y) {

    // check matrix[x][y] has 1 or 0
    // matrix[0][1] === 1

    
    console.log('hi')
    console.log()
    

    if(battleshipArray[x][y] == 1){
        print("ship hit!")
        const idName = "matrix" + y + x
        console.log('idName:', idName)
        document.getElementById(idName).innerHTML = `X`

        //how to put X on clicked box?? document.something().innerHTML = `` ig but how to reference form inside function??
        document.getElementById("empty").innerHTML = `Counter = ${counter}`
        // how to get element reference by clicking in HTML and using it in JS
    }
    else{
        counter+=1
        document.getElementById("empty").innerText = `Counter = ${counter}`
        print("missed")  
    }
    if(counter>=5){
        alert("Too many guesses")
    }
}