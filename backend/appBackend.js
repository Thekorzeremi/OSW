/* 
appBackend.js by Thekorzeremi - 2025/05/27
Only made for personal usage
Not responsible of data lose
*/

const express = require('express');
// const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();
app.use(cors());
app.use(bodyParser.json());

const apiPort = process.env.API_PORT || 3000;
const apiURI = process.env.API_URI || 'http://localhost';
// const secretKey = process.env.API_SECRET_KEY;

app.get('/', (req, res) => {
    return res.json("Hello world ! OSW API is listening you ! Please authentificate with /authentification. You need help ? Just get /help.")
});

app.get('/help', (req, res) => {
    return res
        .type('html')
        .json(`
            <h1>API HELP</h1>
            <h3>Version 1.0.0</h3><p>Here are the current supported API endpoint</p>
            <h3>Authentification</h3>
            <ul>
                <li><b>/authentification</b> : Main endpoint for backend authentification</li>
                <li><b>/authentification/register</b> : Endpoint for register with Firstname, Lastname, Birthdate, Email and Password parameters</li>
                <li><b>/authentification/login</b> Endpoint for login with Email and password parameters. It returns a token and a refresh token.</li>
                <li><b>/authentification/reset-password</b> Endpoint to reset password link to an account. Email in parameter.</li>
            </ul>
            <h3>Status</h3>
            <ul>
                <li><b>/status</b> : Main endpoint to get general basic status.</li>
                <li><b>/status/all</b> : Main endpoint to get all status. Need a valid token.</li>
                <li><b>/status/:app</b> : Get all information status of an app thanks to a parameter in the query. Need a valid token.</li>
            </ul>
    `);
});

app.listen(apiPort, () => {
    console.log(`OSW API listening on ${apiURI}:${apiPort}`);
});