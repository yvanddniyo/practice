const express = require('express')
const app = express()

//routes
app.get('/', (req, res) => {
    res.send('My Node website')
})

app.listen(3000, () => {
    console.log('Node API is running at port of 3000');
})