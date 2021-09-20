const express = require('express');
const router = express.Router();

const Team = require('../models/Team');

//Create a new team
router.post('/', (req, res) => {
   const{name, city, nameOfCoach, mainColor, secondColor, players} = req.body;

   Team.create({name, city, nameOfCoach, mainColor, secondColor, players})
   .then((data) =>{
      res.status(200).send(data)
   })
   .catch((err)=>{
       console.log(err)
       res.status(500).send("Something went wrong")
   })
})

//Get info of all teams
router.get('/', (req,res) => {
  Team.find({})
    .then((data) => res.status(200).send(data))
    .catch((err)=> res.status(500).send("Something went wrong"))
})


module.exports = router;