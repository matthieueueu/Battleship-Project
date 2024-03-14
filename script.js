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
    [0,0,0,0,0,0,0,0],
    //6
    [0,0,0,0,0,0,0,0],
    //7
    [0,0,0,0,0,0,0,0],
    //8
    [0,0,0,0,0,0,0,0],
]
counter = 0;

function checkHit(x,y) {

    // check matrix[x][y] has 1 or 0
    // matrix[0][1] === 1

    
    console.log('hi')
    

    if(battleshipArray[x][y] == 1){
        print("ship hit!")
    }
    else{
        counter+=1
        print("missed")  
    }
    if(counter>=5){
        alert("Too many guesses")
    }
}