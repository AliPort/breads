const express =require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')
const mongoose = require('mongoose')


//index
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
      .then(foundBread => {
          res.render('show', {
              bread: foundBread
          })
      })


  // )
          console.log(foundBreads)
      })
  // res.render('index',
  //   {
  //     breads: Bread,
  //     title: 'Index Page'
  //   }
  // )
//


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.render('404')
    }
  })
//NEW

//Edit
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})


   
module.exports = breads

module.exports = Bread
