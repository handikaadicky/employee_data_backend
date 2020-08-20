const express = require('express')
const app = express()
const port = 4500
const user = require('../routes/user')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())

app.set('view engine', 'twig')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('server')
})


app.get('/user/new', user.form_create)
app.post('/user/new', user.post_data)

app.get('/user/:id/delete', user.delete_id)
app.get('/user/:id/update', user.form_update)
app.post('/user/:id', user.update_by_id)

app.get('/user/:id', user.by_id)
app.get('/user/:name', user.by_name)
app.get('/user', user.all)








app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

