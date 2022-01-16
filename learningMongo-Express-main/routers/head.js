var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Class = require('../models/class')

router.get("/class", (req, res, next) => {
    Class.find((err, classes) => {
        if (err) return next(err)
        res.json(classes)
    })
})

module.exports = router;

