const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))
app.get('/api/hello', (req, res) => res.json({message : 'Hello World!'}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))