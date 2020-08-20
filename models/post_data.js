const User = require('../models/user')

const post_data = async (req, res) => {
    User.create(req.body)
        .then(
            (user) => res.redirect(`/user`),
            (user) => res.send(user),
            (err) => res.send(err),
        )
}

module.exports = post_data