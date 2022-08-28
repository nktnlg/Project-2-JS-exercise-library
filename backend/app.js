const colors = require('colors')

const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const morgan = require('morgan')
app.use(morgan('dev'));

const pool = require('./db')
// ROUTES
//1) get all exercises
app.get('/exercises', async (req, res)=>{
    try {
        const allExercises = await pool.query("SELECT * FROM exercises")
        res.json(allExercises.rows)
    } catch (error) {
        console.error(error.message);
    }
})

//END ROUTES


module.exports = app;