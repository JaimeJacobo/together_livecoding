
//Dotenv config
require('dotenv').config();

// Dependencies
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//Middleware
app.use(express.json())

const port = process.env.PORT || 3000

//Mongoose connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nkkuq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then((result)=>console.log('Connected to MONGO ATLAS'))
.catch((err)=>console.log(err))


// Models
const Team = require('./models/Team');
const Player = require('./models/Player');

// Routes
app.use('/api/team', require('./routes/team.routes'));
app.use('/api/player', require('./routes/player.routes'));
  
//App listener
app.listen(port, () => {
   console.log(`Server listening on port ${port}`)
 })
  



// OUR APP

// You are hired to build a web page that keeps track of a basketball tournament info. You need to keep track of all players and all teams.

//Models:

// Player: (name, lastName, age, position, team (Team ID))
// Team: (name, city, nameOfCoach, mainColor, secondColor, players (array of Player's Ids))


