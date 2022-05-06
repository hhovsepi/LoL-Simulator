// write hello world to localhost:3000/

let express = require('express');
let fetch = require('node-fetch');
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Hello World! It is me! Hello! Hi!')
    res.render('index', { text: 'League of Legends Simulator' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const championRouter = require('./routes/champions');

app.use('/champions', championRouter);

