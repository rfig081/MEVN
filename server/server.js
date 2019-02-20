const express = require ('express')
const app = express()

const config = require ('./server-config')
const routes = require('./routes/routes')

const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')



mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    dbName: 'Training'
}).catch(err=>{
    console.log('Cannot connect to db')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})


routes(app)


const server = app.listen(3000, () => {
    console.log('Connected to:', server.address().port)
})
