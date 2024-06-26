const express = require('express');
const bodyParser = require('body-parser');

const {router} = require('./routes/index');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api', router)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});