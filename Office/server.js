require('dotenv').config();

const express = require('express');
const path = require('path');
const { serialize } = require('v8');
const mysql = express('mysql2');
const sequelize = require('./db');
const models = require('./models/models');
const router = require('./routes/index');
const cors = require('cors');

const port = process.env.Port || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// app.use(express.static('public'));
// app.use(express.static('styles'));
// app.use(express.static('js'));
// app.use(express.static('image'));

const start = async () => {
    try{
        await sequelize.authenticate();
        await sequelize.sync();
        
        app.listen(port, () => {
            console.log(`listening port ${port}`);
        });
    }
    catch(err) {
        console.log(err)
    }
}

start();


