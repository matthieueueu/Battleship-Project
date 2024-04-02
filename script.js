const print = console.log


const numberValue = [1,2,3,4,5,6,7,8,]
const letterValue = ['A','B','C','D','E','F','G']


const battleshipArray =[
    //1
    [0,1,0,0,0,0,0],
    //2
    [0,1,0,0,0,0,0],
    //3
    [0,1,0,0,0,0,0],
    //4
    [0,1,0,0,0,0,0],
    //5
    [1,0,1,1,1,1,0],
    //6
    [1,0,0,0,0,0,0],
    //7
    [1,0,0,0,0,0,0],
    //8
    [1,0,0,0,0,0,0],
]
let counter = 0;
let hitCounter = 0;

// create event listener on table
// this will watch all events in the table
// when you click anywhere on the table
if(window.location.href == "file:///C:/Users/matth/Documents/G11/Battleships%20Project/index.html"){

    alert("YOU HAVE FIVE GUESSES. EVERY WRONG GUESS GOES ON THE COUNTER.")
    alert("SHIPS ARE FOUR SQUARES LONG. THERE ARE THREE SHIPS. BUY ME A COFFEE")
}

const soundEffect = new Audio("dark-future-logo-196217.mp3")

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
        document.getElementById(idName).innerHTML = `HIT`
        document.getElementById(idName).style.backgroundColor = `red`
        soundEffect.play()
        //how to put X on clicked box?? document.something().innerHTML = `` ig but how to reference form inside function??
        document.getElementById("empty").innerHTML = `Counter = ${counter}`
        // how to get element reference by clicking in HTML and using it in JS
        hitCounter+=1

    }
    else{
        counter+=1
        document.getElementById("empty").innerText = `Counter = ${counter}`
        print("missed") 
        const idName = "matrix" + y + x
        document.getElementById(idName).style.backgroundColor =`grey`
        document.getElementById(idName).innerHTML =`MISS`

    }
    if(counter>=5){
        alert("Too many guesses. YOU LOSE.")
    }
    if(hitCounter==12){
        alert("YOU WIN")
        // 1. create leaderboard variable
        // 2. load data from localstorage
        // 3. parse it so JS can read it
        // 4. set that data equal to leaderboard

        const getData = localStorage.getItem("score")

        let tempParse = JSON.parse(getData)


        let leaderboard = tempParse
    

        if (tempParse == null){
            leaderboard = []
        }

        print('leaderboard before adding stuff', leaderboard)

        let name = prompt("Input your name: ")

        print('pushing to leaderboard...',[name,counter])

        leaderboard.push([name, counter])
        print('leaderboard:', leaderboard)

        let tempString = JSON.stringify(leaderboard)
        print('leaderboard as string:', tempString)
        localStorage.setItem("score",tempString)




        // redirect user to score page
        window.location.href = "file:///C:/Users/matth/Documents/G11/Battleships%20Project/restartPage.html"
    }
}