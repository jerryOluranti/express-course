const express = require('express');
const multer =require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'ejs');

//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/upload");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const upload = multer({
  storage: multerStorage,
});

const port = 8000;

app.get('/about/:service/:date', function(req, res){
    console.log('Request made to /about');
    res.render('about', { service: req.params.service, date: req.params.date });
})

app.get('/register', function(req, res){
    console.log('Request made to /register');
    res.render('register');
})

app.get('/contact', function(req, res){
    console.log('Request made to /contact');
    res.send('Subscribe to codemania!')
})

app.get('/', function(req, res){
    console.log('Request made to root path');
    res.render('welcome');
})

// route parameter
// app.get('/:username', function(req, res){
    
//     const route_user = req.params.username;
//     console.log(req.params);

//     console.log(`Request made to root path by ${route_user}`);
//     res.send(`Hello ${route_user}! Welcome to my site! Yay!!!`)
// })

// Post Request
app.post('/signup', function(req, res) {
    console.log('Post request made!');
    console.log(req.body.username);
    res.json({ name: req.body.name })
    res.end();
})

app.post('/register', upload.single('avatar'), function(req, res) {
    console.log(req.file);

    // if (req.body.username === "Jerry"){
    //     res.send("Login Successfull!");
    // }else{
    //     res.send('invalid username!')
    // }

    res.send('Upload successfull!')

})

// Delete request
app.delete('/delete-user', function(req, res) {
    console.log('Delete request made to the server!');
    console.log(req.body);
    res.send('Delete successfull!')
    res.end();
})

// Put request
app.put('/put-user', function(req, res) {
     console.log("Put request made to the server!");
     console.log(req.body);
     res.send("Put successfull!");
     res.end();
})

// Put request
app.patch('/patch-user', function(req, res) {
     console.log("patch request made to the server!");
     console.log(req.body);
     res.send("patch successfull!");
     res.end();
})

app.listen(port, function(){ 
    console.log(`Server listening on port ${port}`)
});
