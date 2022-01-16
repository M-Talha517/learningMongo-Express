var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var Teacher = require('../models/teachers')
var Student = require('../models/students')
var Class = require('../models/class')


router.get("/teachers", (req, res, next) => {
  console.log(req.url)
  Teacher.find((err, teachers) => {
      if (err) return next(err)
      res.json(teachers)
  })
})

router.delete('/teacher/:id', (req, res, next) => {
  console.log('delete teacher')
  Teacher.findByIdAndRemove(req.params.id, (err, teacher) => {
    if (err) return next(err)
    res.json(teacher)
  })
})


router.post('/addTeacher', (req, res, next) => {
  console.log('/add Teacher')
  var newTeacher = new Teacher(req.body)
  newTeacher.save().then(() => console.log('TEACHER ADDED'))
  res.status(200).send('Teacher Added Successfully')
})


router.post('/addClass', (req, res, next) => {
    console.log('/add Class')
    var newClass = new Class(req.body)
    newClass.save((err, class1) => {
        if (err) return next(err)
        res.json(class1)
    })   
    
})

router.post('/addStudent', (req, res, next) => {
  console.log('/add Student')

  var newStudent = new Student(res.body)
  newStudent.save((err, student) => {
    if (err) return next(err)
    res.json(student)
  })
})

module.exports = router
