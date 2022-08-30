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
//2) create exercise
app.post('/exercises', async (req, res)=>{
    try {
        const {title, 
            explanation, 
            examples, 
            source_short, 
            source_url, 
            input_example, 
            arg, 
            code} = req.body
        const newEx =  await pool
            .query("INSERT INTO exercises (title, explanation, examples, source_short, source_url, input_example, arg, code) VALUES($1, $2, $3, $4, $5, $6, $7, $8,)",
            [title, 
            explanation, 
            examples, 
            source_short, 
            source_url, 
            input_example, 
            arg, 
            code])
            res.json(newEx.rows[0])
    } catch (error) {
        console.error(error.message);
    }
})

//END ROUTES


module.exports = app;