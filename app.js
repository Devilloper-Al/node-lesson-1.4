const axios = require('axios');
require('dotenv').config();

const express = require('express');
const app = express();

const {getUsers, getUser} = require('./controllers/UserControllers');

const { PORT, HOST } = require('./constants');

app.get('/users', getUsers)
app.get('/users/:id', getUser)

app.listen(PORT, ()=>{
    console.log(`Example app listening on port http://${HOST}:${ PORT}`)
})