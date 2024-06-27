require('dotenv').config();
const express = require('express');
const {readFileSync} = require('fs');
const bodyParser = require('body-parser');

const {router} = require('./routes/index');

const app = express();
const port = process.env.PORT;

// console.log(port);

app.use(bodyParser.json());

app.use('/api', router);
app.all('*', (req, res) => {
    // res.status(404).sendFile(__dirname + '/public/_404.html');
    res.status(404).send({message: '404 Not Found'});
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});