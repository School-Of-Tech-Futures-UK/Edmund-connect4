const placeModule = require('./game')

let grid=[]
describe('Testing checkWin function',()=> {
    beforeEach(() =>{       
        grid = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]
    })
        
       
    it('If red wins, player1 should be "red" ', () => {
        
        //ARRANGE
    const scenario1 = [       
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["red", "red", "red", "red", null, null, null]
        ]

        //ACT
    const actual = placeModule.checkWin(scenario1)
        console.log(actual)

        //ASSERT
        expect(actual.player1).toBe("red")
    })
    

   
    
    }
)

it('should return lowest available row number for selected column',()=>{

    //ARRANGE
    const scenario = [       
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        ["red", "red", "red", "red", null, null, null]
        ]

    const col = 2
    const expectedOutput = 4

    
    //ACT
    const actual = placeModule.lowestRow(col, scenario)

    //ASSERT
    expect(actual).toBe(expectedOutput)


})

describe('Testing ROW wins of first four columns (col 0 to 3) for red', () =>{

    
        //ARRANGE
    let scenarios = []

    //example scenario should look like this

    // grid = [                                                                
    //     ["red", "red", "red", "red", null, null, null],             
    //     [null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null],
    //     [null, null, null, null, null, null, null]
    //         ]

    //Testing first four columns (col 0 to 3)
    //Instead of initializing with beforeEach(), grid can be initialized in the for loop
    for(i=0; i<6; i++){
        grid = [                                                                
            [null, null, null, null, null, null, null],             
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]
        for(let j=0; j<=3; j++){
            grid[i][j] = "red"
        }
       scenarios.push([grid]) //Must include [] to segment each grid 
    }

    it.each(scenarios)("should return red for row wins in first four columns",(grid)=>{
        
        const actual = placeModule.checkWin(grid)
        console.log(actual)
        expect(actual.player1).toBe("red")

    })


})

describe('Testing COLUMN wins of first four rows (rows 0 to 3) for yellow', () =>{

    
    //ARRANGE
let scenarios = []

//example scenario should look like this

// grid = [                                                                
//     ["red", "red", "red", "red", null, null, null],             
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null],
//     [null, null, null, null, null, null, null]
//         ]

//Testing first four columns (col 0 to 3)
//Instead of initializing with beforeEach(), grid can be initialized in the for loop
for(i=0; i<=6; i++){
    grid = [                                                                
        [null, null, null, null, null, null, null],             
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
    ]
    for(let j=0; j<=3; j++){
        grid[j][i] = "yellow"
    }
   scenarios.push([grid]) //Must include [] to segment each grid 
}

it.each(scenarios)("should return yellow for column wins in first four rows",(grid)=>{
    
    const actual = placeModule.checkWin(grid)
    console.log(actual)
    expect(actual.player1).toBe("yellow")

})


})

describe('Testing \ DIAGONAL wins for red',() => {
   
    for(let i=5;i>=3; i--) {
        for(let j=6; j>=3; j--){
    it('should return winner as red if red balls are diagonally consecutive in fours',() => {
        
                let grid = [
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null]
                  ]
            
                  grid[i][j] = "red"
                  grid[i - 1][j - 1] = "red"
                  grid[i - 2][j - 2] = "red"
                  grid[i - 3][j - 3] = "red"

                  const actual = placeModule.checkWin(grid)
                  expect(actual.player1).toBe("red")
        })
    }
        }
})

