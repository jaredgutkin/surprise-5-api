const express = require('express')
const path = require('path')

const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()


app.use(cors())

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('/api/minibrand', require('./routes/api/minibrand'))

app.use('/api/minibrand/1', require('./routes/api/minibrand1'))
app.use('/api/minibrand/2', require('./routes/api/minibrand2'))
app.use('/api/minibrand/3', require('./routes/api/minibrand3'))
app.use('/api/minibrand/4', require('./routes/api/minibrand4'))

app.listen(PORT, () => console.log(`running on port ${PORT}`))

module.exports = app