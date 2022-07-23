//dependencies
const express = require('express')
require('dotenv').config()

//configuration 
const PORT = process.env.PORT   
    console.log(PORT)

const app = express()

//middleware
app.set('views', __dirname+'/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

//listen


//breads
const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

app.listen(PORT, ()=>{

})