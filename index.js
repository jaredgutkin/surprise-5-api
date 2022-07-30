const express = require('express')
const path = require('path')
const helmet = require('helmet')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()

app.use(helmet())
app.use(cors())

//static folder
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use('api/mbs3', require('./routes/api/mbs3'))

app.listen(PORT, () => console.log(`running on port ${PORT}`))

module.exports = app