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

app.listen(PORT, () => console.log(`running on port ${PORT}`))

module.exports = app