let turn = 0
let player1 = "red"
let winner = false

let grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

function takeTurn(e) {
    const id = e.target.id      // to get rolxcoly

    const ball = e.target.innerText

    const rowNum = id[3]
    const colNum = id[7]

    // console.log checks
   console.log(e)
   console.log(ball)
   


    const bottomRow = lowestRow(colNum, grid)
    console.log(`Lowest available row: ${bottomRow}`)
    console.log(document.getElementById(`row${bottomRow}col${colNum}`).innerHTML)

    if(winner === false){
    if (player1 === "red") {
        grid[bottomRow][colNum] = "red"
        document.getElementById(`row${bottomRow}col${colNum}`).innerHTML = "🔴"
       // document.getElementById(`row${bottomRow}col${colNum}`).style.backgroundColor = "red"
        player1 = "yellow"
    } else {
        grid[bottomRow][colNum] = "yellow"
        document.getElementById(`row${bottomRow}col${colNum}`).innerHTML = "🟡"
        player1 = "red"
    }
}

    //console.log checks
    console.log(`You clicked column ${colNum}`)
    console.log(`You clicked row ${rowNum}`)
    console.log(grid)
    console.log(document.getElementById(`row${bottomRow}col${colNum}.value`))

function lowestRow(columnNumber,myGrid) {
    for(let i=5; i>=0; i--) {
        if (myGrid[i][columnNumber] === null) {
            return i
        }
    }
}

function checkWin() {

console.log("checkWin called")

    for(i=5; i>=0; i--){
        for(j=6; j>=0; j--){

            //ROW WINS
            if(grid[i][j] === "red" && grid[i][j+1] === "red" && grid[i][j+2] === "red" && grid[i][j+3] ==="red"){                  
                console.log('red wins')
                winner = true
                player1 = "red"
            }
            else if(grid[i][j] === "yellow" && grid[i][j+1] === "yellow" && grid[i][j+2] === "yellow" && grid[i][j+3] ==="yellow"){
                console.log('yellow wins')
                winner = true
                player1 = "yellow"
            }

            //COLUMN WINS
            if(grid[i][j] ==="red" && grid[i-1][j] ==="red" && grid[i-2][j] ==="red" && grid[i-3][j] ==="red"){                  
                console.log('red wins')
                winner = true
                player1 = "red"
                
            }
            else if(grid[i][j] ==="yellow" && grid[i-1][j] ==="yellow" && grid[i-2][j] ==="yellow" && grid[i-3][j] ==="yellow"){
                console.log('yellow wins')
                winner = true
                player1 = "yellow"
            }

            //DIAGONAL WINS
            if(grid[i][j] ==="red" && grid[i-1][j+1] ==="red" && grid[i-2][j+2] ==="red" && grid[i-3][j+3] ==="red"){                  
                console.log('red wins')
                winner = true
                player1 = "red"
            }
            else if(grid[i][j] ==="red" && grid[i-1][j-1] ==="red" && grid[i-2][j-2] ==="red" && grid[i-3][j-3] ==="red"){
                console.log('red wins')
                winner = true
                player1 = "red"
            }
            else if(grid[i][j] ==="yellow" && grid[i-1][j+1] ==="yellow" && grid[i-2][j+2] ==="yellow" && grid[i-3][j+3] ==="yellow"){                  
                console.log('yellow wins')
                winner = true
                player1 = "yellow"
            }
            else if(grid[i][j] ==="yellow" && grid[i-1][j-1] ==="yellow" && grid[i-2][j-2] ==="yellow" && grid[i-3][j-3] ==="yellow"){
                console.log('yellow wins')
                winner = true
                player1 = "yellow"
            }
    }
    }
    

    
    }   
checkWin()

if (winner===true && player1==="red"){
const victor = document.getElementById("winning-player")
victor.innerHTML = "VICT🔴RY"
}
else if (winner===true && player1==="yellow"){
    const victor = document.getElementById("winning-player")
    victor.innerHTML = "VICT🟡RY"
    }


    
    
    
    

}

document.getElementById("reset").onclick = () => {
    for(i=5; i>=0; i--){
        for(j=6; j>=0; j--){
            grid[i][j]=null;
            document.getElementById(`row${i}col${j}`).innerHTML = "⚪";
            player1= "red";
            winner= false;
            document.getElementById("winning-player").innerHTML = ""
}   
    }
}




    

