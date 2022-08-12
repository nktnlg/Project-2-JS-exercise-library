const colors = require('colors')

const express = require('express');
const app = express();


const morgan = require('morgan')

app.get('/', (req, res)=>{
    res.status(200).json({message: 'working'})
    })

module.exports = app;