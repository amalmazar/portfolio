const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/food', (req, res) => res.send('Did you say food?'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

