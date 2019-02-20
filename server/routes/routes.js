const Posts = require('../models/Posts')


var appRouter = app => {
    app.get("/", (req, res) => {
        Posts.find({}, (err, posts) => {
            res.send(posts)
        })
    })

    app.post("/new_post/", (req, res) => {
        let data = req.body
        let newPost = new Posts(data)

        newPost.save(err => {
            if (err) {
                res.send(err)
            }
            res.send({
                result: 'success'
            })
        })
    })
}

module.exports = appRouter