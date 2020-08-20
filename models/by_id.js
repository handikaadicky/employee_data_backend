const User = require('../models/user')

const by_id = (req, res) => {
    User.findByPk(req.params.id).then(
        (user) => {
            res.render('single_page', { user })
        },
        (err) => res.send(err)
    )
}

module.exports = by_id
