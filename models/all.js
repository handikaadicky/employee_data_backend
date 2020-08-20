const User = require('../models/user')

const all = async (req, res) => {
    User.findAll().then(
        (users) => {
            // if((req.xhr)) {
            //     res.send(users)
            // } else {
            //     res.render('user_all', {users})
            // }

            if ((req.headers.accept === 'application/json')) {
                setTimeout(() => res.send(users), 2000)
            } else {
                res.render('user_all', { users })
            }
        }
    )
}

module.exports = all