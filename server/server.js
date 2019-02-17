const express = require ('express')
const bodyParser = require ('body-parser')
const routes = require('./routes.js')
const app = express()
const config = require ('./server-config')
const mongoose = require ('mongoose')

mongoose.connect(config.DB_URL, {
    dbName: 'Training'
}).catch(err=>{
    console.log('Cannot connect to db')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

routes(app)
var server = app.listen(3000, () => {
    console.log('Connected to: ', server.address().port)
})
