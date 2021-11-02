const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'ejs');

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


app.get('/', (req, res) => {
    console.log(`${req.method} request made to /`)

    res.render('welcome');    

    // if (req.query.privilege === 'admin'){
    //     res.send(
    //        `Admin Dashboard: Name: ${req.query.name} --- Id: ${req.query.user_id}`
    //     );
    //     res.end();
    // }

    // if (req.query.privilege === 'user'){
    //      res.send(
    //        `Welcome to our website\nUser Dashboard: Name: ${req.query.name} --- Id: ${req.query.user_id}`
    //      );
    //      res.end();
    // }
})

app.get('/about/:service/:date', (req, res) => {
    console.log(`request made to ${req.url}`)
    res.render('about', { service: req.params.service, date: req.params.date })
})

app.get('/register', (req, res) => {
     console.log(`request made to ${req.url}`);
     res.render("register");
})

app.post('/register', upload.single('avatar'), (req, res) => {
      console.log(`${req.method} request made to ${req.url}`);
      console.log(req.file);
      res.end();
})

// app.get('/services', (req, res) => {
//     console.log(`request made to ${req.url}`)
//     res.send('These are our services!')
// })


// app.get('/videos/:video_id/:video_name', (req, res) => {
//     console.log(`request made to ${req.url}`)
//     res.send(`Video requested with id: ${req.params.video_id} and name: ${req.params.video_name}`)
// })

// app.get('/profile/:username/:email/:password', (req, res) => {
//     console.log(`request made to ${req.url}`);
//     res.send(`Welcome ${req.params.username}, your email is: ${req.params.email} and your password is: ${req.params.password}`)
// })

// app.post('/signin', (req, res) => {
//     console.log(`${req.method} request made to ${req.url}`);

//     console.log(req.body.username);

//     res.send('Signin successfull!');
//     res.end();
// })

// app.put('/insert-record', (req, res) => {
//     console.log(`${req.method} request made to ${req.url}`);

//     console.log(req.body)

//     res.send("Record Inserted successfully!");
//     res.end();
// })

// app.patch('/update-record', (req, res) => {
//     console.log(`${req.method} request made to ${req.url}`);

//     console.log(req.body);

//     res.send("Record Updated successfully!");
//     res.end();
// })

// app.delete('/delete-record', (req, res) => {
//     console.log(`${req.method} request made to ${req.url}`);

//     console.log(req.body);

//     res.send("Record Deleted successfully!");
//     res.end();
// })

app.listen(8000, function (){
    console.log('server running!')
})