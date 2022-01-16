var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')

router.get('/viewattquiz', async (req, res, next) => {
  const classes = await Class.find()
  console.log(classes)
  var returnArray = await classes.map((element) => {
    return {
      name: element.name,
      quizes: element.quizes.filter((quiz) => quiz.answers.length > 0),
    }
  })
  console.log("returnArray",returnArray)
  res.status(200)
  res.json(returnArray)
})

module.exports = router
