
let gameState = {
    player1 : "red",
    winner : false,
    grid : [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]

}

// function takeTurn(bottomRow, colNum) {
//     const rowNum = id[3]
//     const colNum = id[7]

//     const bottomRow = lowestRow(colNum, grid)
    
//     if(bottomRow !== null && winner===false){        
//     if (player1 === "red") {
//         grid[bottomRow][colNum] = "red"
//         return gameState = {
//             player1: "yellow",
//             winner: false,
//             grid: grid
//         }
//     } else if (player1 ==="yellow") {
//         grid[bottomRow][colNum] = "yellow"
//         return gameState = {
//             player1: "red",
//             winner: false,
//             grid: grid
//         }
//     }
// }
// }

function checkWin(grid) {

    // console.log("checkWin called")   
            // ROW WINS
        for(i=5; i>=0; i--){
            for(j=0; j<=6; j++){
                if(grid[i][j] === "red" && grid[i][j+1] === "red" && grid[i][j+2] === "red" && grid[i][j+3] ==="red"){                  
                    // console.log('red wins')
                    // winner = true
                    // player1 = "red"
                    
                    return gameState = {
                        player1: "red",
                        winner: true,
                        grid : grid
                    }
                }
                
                else if(grid[i][j] === "yellow" && grid[i][j+1] === "yellow" && grid[i][j+2] === "yellow" && grid[i][j+3] ==="yellow"){
                    // console.log('yellow wins')
                    // winner = true
                    return gameState = {
                        player1: "yellow",
                        winner: true,
                        grid : grid
                    }}          
            }
            }
    
            //  COLUMN WINS
        for(i=0; i<=2; i++){
            for(j=0; j<=6; j++){
                if(grid[i][j] ==="red" && grid[i+1][j] ==="red" && grid[i+2][j] ==="red" && grid[i+3][j] ==="red"){                  
                    // console.log('red wins')
                    // winner = true
                    return gameState = {
                        player1: "red",
                        winner: true,
                        grid : grid
                    }
                    
                }
                else if(grid[i][j] ==="yellow" && grid[i+1][j] ==="yellow" && grid[i+2][j] ==="yellow" && grid[i+3][j] ==="yellow"){
                    // console.log('yellow wins')
                    // winner = true
                    return gameState = {
                        player1: "yellow",
                        winner: true,
                        grid : grid
                    }
                }
            }
            }
    
    
            // DIAGONAL WINS
        for(i=5; i>=3; i--){
            for(j=0; j<=3; j++){
                // 7-to-2 DIAGONAL WINS
                if(grid[i][j] ==="red" && grid[i-1][j+1] ==="red" && grid[i-2][j+2] ==="red" && grid[i-3][j+3] ==="red"){                  
                    // console.log('red wins')
                    // winner = true
                    return gameState = {
                        player1: "red",
                        winner: true,
                        grid : grid
                    }
                }
                else if(grid[i][j] ==="yellow" && grid[i-1][j+1] ==="yellow" && grid[i-2][j+2] ==="yellow" && grid[i-3][j+3] ==="yellow"){                  
                    // console.log('yellow wins')
                    // winner = true
                    return gameState = {
                        player1: "yellow",
                        winner: true,
                        grid : grid
                    }
                }   
            }
        }
    
        for(i=5;i>=3;i--){
            for(j=6;j>=3;j--){
                 // 11-to-5 DIAGONAL WINS
                 if(grid[i][j] ==="red" && grid[i-1][j-1] ==="red" && grid[i-2][j-2] ==="red" && grid[i-3][j-3] ==="red"){                  
                    // console.log('red wins')
                    // winner = true
                    return gameState = {
                        player1: "red",
                        winner: true,
                        grid : grid
                    }
                }
                else if(grid[i][j] ==="yellow" && grid[i-1][j-1] ==="yellow" && grid[i-2][j-2] ==="yellow" && grid[i-3][j-3] ==="yellow"){                  
                    // console.log('yellow wins')
                    // winner = true
                    return gameState = {
                        player1: "yellow",
                        winner: true,
                        grid : grid
                    }
                }
            }
        }
    }

function lowestRow(columnNumber,myGrid) {
        for(let i=5; i>=0; i--) {
            if (myGrid[i][columnNumber] === null) {
                return i
            }
        }
    }

    module.exports = {checkWin, lowestRow}