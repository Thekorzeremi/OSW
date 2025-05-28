/* 
    appBackend.js by Thekorzeremi 
    Created_on 2025/05/27 - 11:00pm
    Updated_on 2025/05/28 - 9:02am
    Only made for personal usage
    Not responsible of data lose
*/

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

require('dotenv').config({ path: '.env.local' });

const app = express();
app.use(cors());
app.use(bodyParser.json());

require('./controllers/helperController')(app);

const apiPort = process.env.API_PORT;
const apiURI = process.env.API_URI;
// const dbURI = process.env.DB_URI;
// const secretKey = process.env.API_SECRET_KEY;

// const mClient = new MongoClient(dbURI);

app.listen(apiPort, () => {
    console.log(`OSW API listening on ${apiURI}:${apiPort}`);
});