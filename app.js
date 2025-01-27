const express = require('express');
const app = express();
const port = 3000;

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json());

const emailRouter = require('./routes/email.js');
app.use('/email', emailRouter);

app.use(express.static('public'));


// index 페이지 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
