const playerRouter = require('express').Router()
const Player = require('../models/Player')
const Team = require('../models/Team')


//GET ALL PLAYERS
playerRouter.get('/', (req, res) => {
    Player.find({})
    .then((data) => res.status(200).send(data))
    .catch((err)=> res.status(500).send("Something went wrong"))

})

//ADD PLAYER
playerRouter.post('/', async (req, res) => {
try{
    const {name, lastName, age, position, team} = req.body

    const teamExists = await Team.find({name: team})
    const teamId = teamExists.length > 0 && teamExists[0]._id


    if(!teamId){
      await Promise.reject("TEAM_NOT_FOUND")
    }

    const newPlayer = await Player.create({
      name,
      lastName,
      age,
      position,
      team:teamId
    })

    const updatedTeam = await Team.findByIdAndUpdate(teamId, { $push : {players: newPlayer._id} }, {new:true})
    console.log(updatedTeam)
    if(!updatedTeam._id){
        await Promise.reject("ERROR_UPDATING_TEAM")
      }

      res.status(200).send(newPlayer)
    }catch(err){
      console.log(err)
      if(err === "TEAM_NOT_FOUND"){
          res.status(404).send("Team not found")
      }else if("ERROR_UPDATING_TEAM"){
        res.status(400).send("Sorry we could't update the team")
      }else{
       res.status(500).send("Something went wrong")   
      }
    }
})

module.exports = playerRouter;