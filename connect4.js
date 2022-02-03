
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

var turns = 42

    //SHOWS WHOSE TURN IT IS
function playerColour(playa) {
const displayCurrentPlayer = document.getElementById('colour-turn')
if(playa==="red"){
    displayCurrentPlayer.style.color='red'
    displayCurrentPlayer.innerHTML="Red's Turn"
} else if(playa==="yellow"){
    displayCurrentPlayer.style.color='orange'
    displayCurrentPlayer.innerHTML="Yellow's Turn"
}
}

    //TAKE TURN FUNCTION
function takeTurn(row, column){   
    const gameOver = winner
    if(!grid[row][column] && !gameOver){
        grid[row][column] = player1
            if(player1 === "red"){               
                player1 = "yellow"
            } else if (player1 ==="yellow"){                
                player1 = "red"
            }
    }
    
}

    //DIRTY CODE FOR ONCLICK
function positionClick(e){
    
    console.log("positionClick Called")
    const id = e.target.id
    const rowNum = id[3]
    const colNum = id[7]
    const bottomRow = lowestRow(colNum, grid)
    
    
    if(bottomRow !== null && winner===false){                
    if (player1 === "red"){
        playAudio('drop.mp3')
        turns--
        // grid[bottomRow][colNum] = "red"
        document.getElementById("turns-left").innerHTML = turns
        document.getElementById(`row${bottomRow}col${colNum}`).classList.add('fall') //newline
        document.getElementById(`row${bottomRow}col${colNum}`).innerHTML = "🔴"
        

    } else if (player1 === "yellow") {
        playAudio('drop.mp3')
        turns--
        // grid[bottomRow][colNum] = "yellow"
        document.getElementById("turns-left").innerHTML = turns
        document.getElementById(`row${bottomRow}col${colNum}`).classList.add('fall')
        document.getElementById(`row${bottomRow}col${colNum}`).innerHTML = "🟡"
        
    }
    takeTurn(bottomRow, colNum)
    playerColour(player1)
}
    
    checkWin()

}

    //GETTING LOWEST ROW
function lowestRow(columnNumber,myGrid) {
    for(let i=5; i>=0; i--) {
        if (myGrid[i][columnNumber] === null) {
            return i
        }
    }
    return null
}


    //CHECKING WINNER
function checkWin() {

    // console.log("checkWin called")   
            // ROW WINS
        for(i=5; i>=0; i--){
            for(j=0; j<=6; j++){
                if(grid[i][j] === "red" && grid[i][j+1] === "red" && grid[i][j+2] === "red" && grid[i][j+3] ==="red"){                  
                    console.log('red wins')
                    winner = true
                    player1 = "red"}
                
                else if(grid[i][j] === "yellow" && grid[i][j+1] === "yellow" && grid[i][j+2] === "yellow" && grid[i][j+3] ==="yellow"){
                    console.log('yellow wins')
                    winner = true
                    player1 = "yellow"}          
            }
            }
    
            //  COLUMN WINS
        for(i=0; i<=2; i++){
            for(j=0; j<=6; j++){
                if(grid[i][j] ==="red" && grid[i+1][j] ==="red" && grid[i+2][j] ==="red" && grid[i+3][j] ==="red"){                  
                    console.log('red wins')
                    winner = true
                    player1 = "red"
                    
                }
                else if(grid[i][j] ==="yellow" && grid[i+1][j] ==="yellow" && grid[i+2][j] ==="yellow" && grid[i+3][j] ==="yellow"){
                    console.log('yellow wins')
                    winner = true
                    player1 = "yellow"
                }
            }
            }
    
    
            // DIAGONAL WINS
        for(i=5; i>=3; i--){
            for(j=0; j<=3; j++){
                // 7-to-2 DIAGONAL WINS
                if(grid[i][j] ==="red" && grid[i-1][j+1] ==="red" && grid[i-2][j+2] ==="red" && grid[i-3][j+3] ==="red"){                  
                    console.log('red wins')
                    winner = true
                    player1 = "red"
                }
                else if(grid[i][j] ==="yellow" && grid[i-1][j+1] ==="yellow" && grid[i-2][j+2] ==="yellow" && grid[i-3][j+3] ==="yellow"){                  
                    console.log('yellow wins')
                    winner = true
                    player1 = "yellow"
                }   
            }
        }
    
        for(i=5;i>=3;i--){
            for(j=6;j>=3;j--){
                 // 11-to-5 DIAGONAL WINS
                 if(grid[i][j] ==="red" && grid[i-1][j-1] ==="red" && grid[i-2][j-2] ==="red" && grid[i-3][j-3] ==="red"){                  
                    console.log('red wins')
                    winner = true
                    player1 = "red"
                }
                else if(grid[i][j] ==="yellow" && grid[i-1][j-1] ==="yellow" && grid[i-2][j-2] ==="yellow" && grid[i-3][j-3] ==="yellow"){                  
                    console.log('yellow wins')
                    winner = true
                    player1 = "yellow"
                }
            }
        }

displayWinner()
    }
       
    
    //WINNER DISPLAY  
function displayWinner(){ 
    if (winner===true && player1==="red"){
        document.getElementById("redName").disabled = false
        document.getElementById("submit-button").disabled = false
        const victor = document.getElementById("colour-turn")
        victor.innerHTML = "VICT🔴RY"
        victor.style.color = 'white'
        victor.style.fontSize = "30px"
        victor.style.webkitTextStroke = "2px black"
        playAudio('edm.mp3')
    }
    else if (winner===true && player1==="yellow"){
        document.getElementById("yellowName").disabled = false
        document.getElementById("submit-button").disabled = false
        const victor = document.getElementById("colour-turn")
        victor.innerHTML = "VICT🟡RY"
        victor.style.color = 'white'
        victor.style.fontSize = "30px"
        victor.style.webkitTextStroke = "2px black"
        playAudio('edm.mp3')
        }
    }


    //RESET GAME BUTTON
function resetButton(){
    for(i=5; i>=0; i--){
        for(j=6; j>=0; j--){
            turns = 42;
            document.getElementById("redName").disabled = true;
            document.getElementById("yellowName").disabled = true;
            document.getElementById("submit-button").disabled = true;
            document.getElementById("redName").value = '';
            document.getElementById("yellowName").value = '';
            document.getElementById("turns-left").innerHTML = turns;
            grid[i][j]=null;
            document.getElementById(`row${i}col${j}`).innerHTML = "⚪";
            document.getElementById(`row${i}col${j}`).classList.remove('fall') //newline
            player1= "red";
            winner= false;
            document.getElementById("winning-player").innerHTML = ""
            document.getElementById('colour-turn').innerHTML = "Red starts first"
            document.getElementById('colour-turn').style.color = 'red'
            document.getElementById('colour-turn').style.webkitTextStroke = "0px black"
}   
    }
}


//Pop Out Button
// function clearBall(e){
//     const id = e.target.id
//     const rowNum = id[3]
//     const colNum = id[7]
//     const bottomRow = lowestRow(colNum, grid)

//     if(bottomRow !== null && winner===false){
//         document.getElementById(`row5col${colNum}`).innerHTML = 
//         document.getElementById(`row4col${colNum}`).innerHTML 
//         document.getElementById(`row4col${colNum}`).innerHTML = 
//         document.getElementById(`row3col${colNum}`).innerHTML 
//         document.getElementById(`row3col${colNum}`).innerHTML = 
//         document.getElementById(`row2col${colNum}`).innerHTML 
//         document.getElementById(`row2col${colNum}`).innerHTML = 
//         document.getElementById(`row1col${colNum}`).innerHTML 
//         document.getElementById(`row1col${colNum}`).innerHTML = 
//         document.getElementById(`row0col${colNum}`).innerHTML 
//         document.getElementById(`row0col${colNum}`).innerHTML = "⚪"
//     }
//     checkWin() //not updating grid, got to make changes to this
//     document.getElementById(`row6col${colNum}`).disabled = true
    
//     console.log(`row${bottomRow}col${colNum}`)
// }


    //AUDIO FUNCTION
function playAudio(x){
    new Audio(x).play()
}

//Test Board please work
scoreBoard = {}

//BACK END SERVER INTERACTIONS
async function getHighScore () {
    const resp = await fetch('http://localhost:8080/highscore')
    const json = await resp.json()
    const sortScores = (json.sort((a,b) => b.Score - a.Score))
    
    console.log(sortScores)
    return sortScores
 
}


const addHighScore = async (e) => {
    const redPlayer = document.getElementById("redName").value
    const yellowPlayer = document.getElementById("yellowName").value
    const turnScore = document.getElementById("turns-left").innerHTML
    
    if (winner===true && player1==="red"){
        winningPlayer = redPlayer

       
    } else if (winner===true && player1==="yellow"){
        winningPlayer = yellowPlayer
    }

    
    const scoreBoard = JSON.stringify(
        {   
            Winner: winningPlayer,
            Score: Number(turnScore)
        }
    )

    await fetch('http://localhost:8080/highscore', {
        headers:{ 'Content-Type': 'application/json'},
        method: 'POST',
        body: scoreBoard
    })

   
    //     result => { 
    //         console.log(result)
    //         const listWinners = document.createElement('li')
    //         listWinners.innerHTML = `${scoreBoard}`
    //         document.getElementById('highScoreBoard').appendChild(listWinners)
    //         }
            
    // )
    let highScoreTable = getHighScore()
        .then(values => {
            console.log(values)
            const boardScore = document.getElementById('topScores') 
            boardScore.innerHTML=''
            for(let i=0; i<values.length; i++){
                if(i<10){
                    if(winner===true && player1==="red"){
                    boardScore.innerHTML += `<p> <b>Winner:</b> <span style='color:red'>${values[i].Winner}</span> <b>Score:</b> <span style='color:red'>${values[i].Score}</span></p>`
                }
                
                else if(winner===true && player1==="yellow"){
                    boardScore.innerHTML += `<p> <b>Winner:</b> <span style='color:yellow'>${values[i].Winner}</span> <b>Score:</b> <span style='color:yellow'>${values[i].Score}</span></p>`
                }}
            }
                    

            
        })
    
        console.log(highScoreTable)
    

    // getHighScore().then(
    //     json => json.forEach(scoreBoard =>{


                                                                    //THIS CODE MUST BE KEPT
            // const listWinners = document.createElement('li')
            // listWinners.innerHTML = `${scoreBoard}`
            // document.getElementById('highScoreBoard').appendChild(listWinners)


    //     })
    // )
    }

    

    





    

