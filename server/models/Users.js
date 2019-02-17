const mongoose = require('mongoose')
const schema = mongoose.Schema



const User = new schema({
    name: String,
    apellido: String
})

module.exports = mongoose.model('User', User, 'Users')