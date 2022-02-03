const express = require('express')   //supposed to simplify server creation with node
const cors = require('cors') //Cross-Origin Resource Sharing - to allow front end and back end to share data
const app = express()
const bodyParser =require('body-parser')

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


// app.get('/fruit', (req, res) => {
//     const fruits = ['apple', 'banana', 'pineapple'];
//     const i = Math.floor(Math.random()*3);
//     res.send(fruits[i]);
// });

const scoreBoard = []

app.get('/highscore', (req, res) => {
    res.json(scoreBoard)
})

app.post('/highscore', (req, res) => {
    scoreBoard.push(req.body)
    res.status(200)
    console.log(scoreBoard) 
    res.send(scoreBoard)  
})



app.listen(8080, () => {
    console.log('server started on port 8080');
});

// app.post('/connect4', (req, res) => {
//     scoreBoard.push(req.body)
//     console.log(req)
//     res.status(200)
//     res.send('Cheers')
// })

// app.post('/addnumber', (req, res) =>{
//     const sum = req.body.num1 + req.body.num2
//     res.send(`sum is ${sum}`)
// })

// app.get('/greeting/:foo', (req, res) => {
//     res.send(`hello ${req.params.foo}`);
// });

// app.post('/send-data', (req, res) => {
//     console.log(req.body);
//     res.send(`thanks for the data, ${req.body.name}`);
// });

