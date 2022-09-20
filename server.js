//? Import Modules

import express from 'express'
import { estudiantes } from './data/students-data-2.js'


//? Create Express app

const app = express()


//? Configure the App

app.set('view engine', 'ejs')


//? Mount Routes

app.get('/', function(req, res) {
  res.send('<h1>hello, friend</h1>')
})

// now add another route responsible for displaying the students data

app.get('/estudiantes', function(req, res) {
  res.render('estudiantes/index', {
    estudiantes: estudiantes
  })
})


//* Tell App to Listen on Port 3000

app.listen(3000, function() {
  console.log('listening on port 3000')
})