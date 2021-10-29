const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log("request made to /")
    res.send('Request handled successfully')
})

app.listen(8000, function (){
    console.log('server running!')
})