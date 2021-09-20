const mongoose  = require('mongoose')

const Schema = mongoose.Schema

const teamSchema = new Schema ({
    name: {type: String, required: true },
    city: {type: String, required: true },
    nameOfCoach: {type: String, required: true },
    mainColor: { type: String, enum: ['red', 'black', 'blue', 'yellow', 'green','pink', 'white'], required: true },
    secondColor: {type: String, enum: ['red', 'black', 'blue', 'yellow', 'green','pink', 'white'], required: true }, 
    players: [{type: Schema.Types.ObjectId, ref: 'Player' },]
}) 

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
