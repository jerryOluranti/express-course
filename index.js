const express = require('express');

const app = express();

const port = 8000;

app.get('/', function(req, res){
    console.log('Request made to root path');
    res.send('Hello! Welcome to my site! Yay!!!')
})
app.get('/about', function(req, res){
    console.log('Request made to /about');
    res.send('This is an express course');
})
app.get('/contact', function(req, res){
    console.log('Request made to /contact');
    res.send('Subscribe to codemania!')
})

app.listen(port, function(){ 
    console.log(`Server listening on port ${port}`)
});