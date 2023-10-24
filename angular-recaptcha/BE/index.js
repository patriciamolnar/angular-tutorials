const express = require('express');
const cors = require('cors'); //to avoid cors errors locally
const parser = require('body-parser'); //request body barsing middleware
const axios = require('axios'); //to make API requests (could also use fetch if you're using newer version of Node)
require('dotenv').config(); //to access the .env file

const SECRET_KEY = process.env.SECRET_KEY;

const app = express();
const port = 3000;

app.use(cors());

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.post('/verify', (req, res) => {
    axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&remoteip=${req.ip}&response=${req.body.token}&action=${req.body.action}`
    ).then(response => {
        const { data } = response
        res.json(data);
    });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});