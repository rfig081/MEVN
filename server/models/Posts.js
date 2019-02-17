const mongoose = require('mongoose')
const schema = mongoose.Schema



const Post = new schema({
    username: String,
    post: String
})

module.exports = mongoose.model('Post', Post, 'Posts')