const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    position: { type: String, enum: ['PG', 'SG', 'SF', 'PF', 'C'], required: true },
    team: { type: Schema.Types.ObjectId, ref: 'Team', required: true }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
