const express = require('express');

const app = express();

const port = 8000;


app.get('/about/:service/:date', function(req, res){

    console.log(req.params);

    console.log('Request made to /about');
    res.send('This is an express course');
})
app.get('/contact', function(req, res){
    console.log('Request made to /contact');
    res.send('Subscribe to codemania!')
})

app.get('/', function(req, res){
    console.log('Request made to root path');
    res.send('Hello! Welcome to my site! Yay!!!')
})

// route parameter
app.get('/:username', function(req, res){

    const route_user = req.params.username;
    console.log(req.params);

    console.log(`Request made to root path by ${route_user}`);
    res.send(`Hello ${route_user}! Welcome to my site! Yay!!!`)
})

app.listen(port, function(){ 
    console.log(`Server listening on port ${port}`)
});
