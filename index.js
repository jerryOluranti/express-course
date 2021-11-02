const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    console.log(`${req.method} request made to /`)

    if (req.query.privilege === 'admin'){
        res.send(
           `Admin Dashboard: Name: ${req.query.name} --- Id: ${req.query.user_id}`
        );
        res.end();
    }

    if (req.query.privilege === 'user'){
         res.send(
           `Welcome to our website\nUser Dashboard: Name: ${req.query.name} --- Id: ${req.query.user_id}`
         );
         res.end();
    }
})

app.get('/services', (req, res) => {
    console.log(`request made to ${req.url}`)
    res.send('These are our services!')
})

app.get('/about', (req, res) => {
    console.log(`request made to ${req.url}`)
    res.send('Know more about us!')
})

app.get('/videos/:video_id/:video_name', (req, res) => {
    console.log(`request made to ${req.url}`)
    res.send(`Video requested with id: ${req.params.video_id} and name: ${req.params.video_name}`)
})

app.get('/profile/:username/:email/:password', (req, res) => {
    console.log(`request made to ${req.url}`);
    res.send(`Welcome ${req.params.username}, your email is: ${req.params.email} and your password is: ${req.params.password}`)
})

app.post('/signin', (req, res) => {
    console.log(`${req.method} request made to ${req.url}`);

    console.log(req.body.username);

    res.send('Signin successfull!');
    res.end();
})

app.put('/insert-record', (req, res) => {
    console.log(`${req.method} request made to ${req.url}`);

    console.log(req.body)

    res.send("Record Inserted successfully!");
    res.end();
})

app.patch('/update-record', (req, res) => {
    console.log(`${req.method} request made to ${req.url}`);

    console.log(req.body);

    res.send("Record Updated successfully!");
    res.end();
})

app.delete('/delete-record', (req, res) => {
    console.log(`${req.method} request made to ${req.url}`);

    console.log(req.body);

    res.send("Record Deleted successfully!");
    res.end();
})

app.listen(8000, function (){
    console.log('server running!')
})