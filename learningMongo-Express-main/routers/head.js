var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Class = require('../models/class')

router.get("/class", async (req, res, next)  => {
    var result = await Class.find().populate("teacherid.tid")
    console.log(result)
    res.send(result)
})

module.exports = router;

